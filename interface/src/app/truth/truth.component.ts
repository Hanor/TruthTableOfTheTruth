import { Component, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { TemplateDirective } from '../shared/template.directive';
import { Subscription } from 'rxjs';
import { TruthService } from './truth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TruthExpressionComponent } from './truth.expression/truth.expression.component';
import { TruthTableComponent } from './truth.table/truth.table.component';
import { TruthHomeComponent } from './truth.home/truth.home.component';

@Component({
  selector: 'app-truth',
  templateUrl: './truth.component.html',
  styleUrls: ['./truth.component.scss']
})
export class TruthComponent implements OnInit, OnDestroy {
  subscription: Subscription[] = new Array< Subscription >();
  fragments = { "table": TruthTableComponent, "expression": TruthExpressionComponent }
  @ViewChild(TemplateDirective) templateRef: TemplateDirective;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private truthService: TruthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.selecionado( null );
    this.inicializaFragmentos();
  }

  ngOnDestroy() {
    for ( let subscribe of this.subscription ) {
      subscribe.unsubscribe();
    }
  }

  inicializaFragmentos() {
    this.subscription.push( this.truthService.inputType$.subscribe(( inputType ) => {
      const fragment = ( inputType ) ? inputType : "";
      this.router.navigate([], {fragment: inputType});
    }))
    this.subscription.push( this.activatedRoute.fragment.subscribe(( fragment: string ) => {
      let component = this.fragments[ fragment ];
      if ( !component )  {
        component = TruthHomeComponent;
      }
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory( component );
      let viewContainerRef = this.templateRef.viewContainerRef;
      viewContainerRef.clear();
      let componentRef = viewContainerRef.createComponent( componentFactory );
    }))
  }
  
  selecionado( inputType ) {
    this.truthService.inputType$.next( inputType );
  }
}
