export class TermFragment {
    fragment: String;
    name: String;
    initialFragment: String;
    variables: Array<String> = [];
    variablesAsString: String = '';
    values: Array<String> = [];
    valuesAsString: String = '';
    operation: String;
    wasSimplified: Boolean = false;
}