import { TermFragment } from '../dto/term.fragment.mjs';
import { McCluskeyResolver, McCluskeyResolved } from '../dto/mc.cluskey.mjs';

export class CompilerService {
    constructor() {
        this.status = '';
    }
    buildExpression( termFragments ) {
        let final = '';
        for( let fragment of termFragments ) {
            if ( fragment.variablesAsString != '' && !fragment.wasSimplified) {
                final += fragment.variablesAsString + ' + '
            }
        }
        final = final.replace(/ \+ $/g, '')
        return (final !== '') ? final : '1';
    }
    buildMinTermsExpression( expression ) {
        let expressionFragment = expression.split(' + ');
        this.status = 'building min terms expression object...'
        const fragments = [];
        let indice = 0;
        for( let fragment of expressionFragment ) {
            const termFragment = new TermFragment();
            termFragment.variablesAsString = fragment;
            fragment = fragment.replace(/\(|\)/g, '');
            for( let term of fragment.split('.') ) {
                if ( term[0] === '!' ) {
                    termFragment.values.push( '0' );
                    termFragment.valuesAsString += ' 0 ';
                    termFragment.variablesAsModule += term[1];
                } else {
                    termFragment.values.push( '1' );
                    termFragment.valuesAsString += ' 1 ';
                    termFragment.variablesAsModule += term[0];
                }
                termFragment.variables.push( term );
            }
            termFragment.name = '[' + indice + ']';
            termFragment.fragment = fragment;
            termFragment.initialFragment = fragment;
            termFragment.operation = '.'
            fragments.push( termFragment );
            indice++;
        }
        return fragments;
    }
    filterFragmentsWithoutXorAndXnor( fragments ) {
        return fragments.filter((termFragment) => !termFragment.fragment.includes('XOR') && !termFragment.fragment.includes('XNOR'));
    }
    fragmentsPassablesToSimplify( fragments ) {
        let passablesToSimplify = [];
        for ( let fragment of fragments ) {
            if  ( !fragment.wasSimplified ) {
                passablesToSimplify.push( fragment );
            }
        }
        return passablesToSimplify;
    }
    fragmentsPassibleToXnor( fragments ) {
        let fragmentsPassables = [];

        for ( let i = 0; i < fragments.length; i++) {
            let termFragment = fragments[i];
            let isOne = this.isFragmentPassibleToXnor( termFragment.fragment.split(/\./g) );
            
            if ( isOne != -2 ) {
                if ( isOne == 1 ) {
                    fragmentsPassables.push({ variablesAsModule: termFragment.variablesAsModule, indice: i, termFragment: termFragment, xnor: 1 })
                } else {
                    fragmentsPassables.push({ variablesAsModule: termFragment.variablesAsModule, indice: i, termFragment: termFragment, xnor: 0 })
                }
            }
        }
        return fragmentsPassables;
    }
    fragmentsPassibleToXor( fragments ) {
        let fragmentsPassables = [];    

        for ( let i = 0; i < fragments.length; i++ ) {
            let termFragment = fragments[i];
            let variable = this.isFragmentPassibleToXor( termFragment.fragment.split(/\./g) );

            if ( variable ) {
                fragmentsPassables.push({ variablesAsModule: termFragment.variablesAsModule, indice: i, termFragment: termFragment, negatedVariable: variable }) 
            }
        }

        return fragmentsPassables
    }
    isFragmentPassibleToXnor( variables ) {
        let isOne = -1;
        for ( let variable of variables ) {
            if ( variable[0] != '!' ) {
                if ( isOne == -1 || isOne == 0 ) {
                    isOne = 0;
                } else {
                    return isOne = -2;
                }
            } else {
                if ( isOne == -1 || isOne == 1 ) {
                    isOne = 1;
                } else {
                    return isOne = -2;
                }
            }
        }
        return isOne;
    }
    isFragmentPassibleToXor( variables ) {
        let passibleVariable;

        if ( variables.length <= 1 )  {
            return null;
        }

        for ( let variable of variables ) {
            if ( variable[0] == '!' ) {
                if ( !passibleVariable ) {
                    passibleVariable = variable[1];
                } else {
                    return null;
                }
            }
        }
        return passibleVariable;
    }
    mcCluskey( expression ) {
        const expressionFragments = this.buildMinTermsExpression( expression );
        this.status = 'executing mccluskey...'
        const resolver = this.mcCluskeyLeveled( expressionFragments, 0 );
        let father = resolver;
        let solution = [];
        while( father != null ) {
            solution.push( father );
            father = father.child;
        }
        const resolved = new McCluskeyResolved();
        resolved.solution = solution;
        this.status = 'done';
        return this.mcCluskeySolution( resolved, resolver );
    }
    mcCluskeySolution( resolved, resolver ) {
        let father = resolver;
        let termFragments = [];
        do {
            for( let fragment of father.fragments ) {
                if ( !fragment.wasSimplified ) {
                    termFragments.push( fragment );
                }
            }
            father = father.child;
        } while ( father )
        
        resolved.expression = this.buildExpression( termFragments );
        if ( resolved.expression !== '1' ) {
            termFragments = this.simplifyMinTermsExpression( termFragments );
            resolved.simplified = this.buildExpression( termFragments );
        } else {
            resolved.simplified = '1';
        }
        return resolved;
    }
    mcCluskeyLeveled( fragments, level) {
        const mcCluskeyResolver = new McCluskeyResolver();
        const newFragments = [];
        const operation = '.';

        mcCluskeyResolver.level = level;
        mcCluskeyResolver.fragments = fragments;

        for ( let i = 0; i < fragments.length; i++ ) {
            const fragmentOne = fragments[i];
            for ( let j = (i+1); j < fragments.length; j++ ) {
                const fragmentTwo = fragments[j];
                const indice = this.mcCluskeySimplify( fragmentOne, fragmentTwo );
                if ( indice >= 0) {
                    const termFragment = new TermFragment();
                    termFragment.name = fragmentOne.name +''+ fragmentTwo.name;
                    termFragment.operation = operation;
                    for ( let k = 0; k < fragmentOne.values.length; k++ ) {
                        let value = ( k !== indice ) ? fragmentOne.values[k] : '-';
                        termFragment.values.push( value )
                        termFragment.valuesAsString += ' '+ value +' ';
                    }
                    for ( let k = 0; k < fragmentOne.variables.length; k++ ) {
                        let value = ( k !== indice ) ? fragmentOne.variables[k] : '-';
                        termFragment.variables.push( value )
                        if ( value != '-' ) {
                            termFragment.fragment += value +'' + termFragment.operation + '';
                            termFragment.variablesAsModule += ( value[0] === '!') ? value[1] : value[0];
                        }
                    }
                    if ( termFragment.fragment != '' ) {
                        termFragment.fragment = termFragment.fragment.replace(/\.$/g, '');
                        termFragment.variablesAsString = '(' + termFragment.fragment + ')';
                    }
                    fragmentOne.wasSimplified = true;
                    fragmentTwo.wasSimplified = true;
                    newFragments.push( termFragment );
                }
            }
        }
        if ( newFragments.length >= 1) {
            mcCluskeyResolver.child = this.mcCluskeyLeveled( newFragments, level + 1 );
        }

        return mcCluskeyResolver;
    }
    mcCluskeySimplify( fragmentOne, fragmentTwo ) {
        let indice = -1;
        for (let i = 0; i < fragmentOne.values.length; i++ ) {
            let valueOne = fragmentOne.values[i];
            let valueTwo = fragmentTwo.values[i];
            if ( valueOne !== valueTwo) {
                if ( indice == -1 ) {
                    indice = i;
                } else {
                    return -1;
                }
            }
        }
        return indice;
    }
    simplifyMinTermsExpression( fragments ) {
        let simplified;
        let i = 0;
        do {
            let passablesToSimplify = this.fragmentsPassablesToSimplify( fragments );
            
            simplified = 0;
            simplified += this.simplifyMinTermsExpressionClone( passablesToSimplify, fragments );

            passablesToSimplify = this.filterFragmentsWithoutXorAndXnor( passablesToSimplify );

            simplified += this.simplifyMinTermsExpressionXor( passablesToSimplify, fragments );
            simplified += this.simplifyMinTermsExpressionXnor( passablesToSimplify, fragments );
            i++;
        } while ( simplified )
        return fragments;
    }
    simplifyMinTermsExpressionClone( fragmentsToSimplify, fragments ) {
        let simplified = 0;
        
        for ( let i = 0; i < fragmentsToSimplify.length; i++ ) {
            let fragmentOne = fragmentsToSimplify[i];
            for ( let j = (i + 1); j < fragmentsToSimplify.length; j++ ) {
                let fragmentTwo = fragmentsToSimplify[j];
            if (  fragmentOne.variablesAsString === fragmentTwo.variablesAsString ) {
                    fragments.splice(j, 1);
                    fragmentsToSimplify.splice(j, 1);
                    j--;
                    simplified++;
                }
            }
        }

        return simplified;
    }
    simplifyMinTermsExpressionXnor( fragmentsToSimplify, fragments ) {
        let simplified = 0;
        let fragmentsPassables = this.fragmentsPassibleToXnor( fragmentsToSimplify );
        for ( let i = 0; i < fragmentsPassables.length; i++ ) {
            let passableOne = fragmentsPassables[i];
            for ( let j = ( i+1 ); j < fragmentsPassables.length; j++ ) {
                let passableTwo = fragmentsPassables[j];
                if ( passableOne.variablesAsModule === passableTwo.variablesAsModule &&  passableOne.xnor !== passableTwo.xnor ) {
                    
                    passableOne.termFragment.wasSimplified = true;
                    passableTwo.termFragment.wasSimplified = true;

                    const xnorFragment = new TermFragment();
                    xnorFragment.fragment = passableOne.termFragment.fragment.replace(/\!|/g, '').replace(/\./g, ' XNOR ');
                    xnorFragment.variablesAsString = '(' + xnorFragment.fragment + ')';
                    fragments.push( xnorFragment );
                    simplified ++;
                }
            }
        }
        return simplified;
    }
    simplifyMinTermsExpressionXor( fragmentsToSimplify, fragments ) {
        let simplified = 0;
        let fragmentsPassables = this.fragmentsPassibleToXor( fragmentsToSimplify );
        for ( let i = 0; i < fragmentsPassables.length; i++ ) {
            let passableOne = fragmentsPassables[i];
            let negatedVariables = passableOne.negatedVariable +'-';
            let passables = [ passableOne ];
            let variables = passableOne.termFragment.fragment.split(/\./g);
            for ( let j = ( i + 1 ); j < fragmentsPassables.length; j++ ) {
                let passableTwo = fragmentsPassables[j];
                if ( passableOne.variablesAsModule === passableTwo.variablesAsModule && !( negatedVariables.includes( passableTwo.negatedVariable ))) {
                    passables.push( passableTwo );
                    negatedVariables += passableTwo.negatedVariable + '-';
                }
            }
            negatedVariables = negatedVariables.replace(/-$/g, '')

            if ( variables.length === passables.length ) {
                for ( let passable of passables ) {
                    passable.termFragment.wasSimplified = true;
                }

                const xnorFragment = new TermFragment();
                xnorFragment.fragment = passableOne.termFragment.fragment.replace(/\!|/g, '').replace(/\./g, ' XOR ');
                xnorFragment.variablesAsString = '(' + xnorFragment.fragment + ')';
                fragments.push( xnorFragment );
                simplified ++;
            }
        }
        return simplified;
    }
}