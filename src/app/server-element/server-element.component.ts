import {Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy } from "@angular/core"; 


@Component({
    // the selector is the html element that will allow you to use the componet later elsewhere in the application

    selector:'app-server-element', 
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css'],
    encapsulation: ViewEncapsulation.Emulated // None, Native
})
export  class serverElementComponent implements 
    OnInit, 
    OnChanges, 
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewChecked,
    OnDestroy
     {
    // @Input('assign alias') 
   @Input('srvElement') element: {type: string, name: string, content: string };
   @Input() name: string; 
// by default a  prop of components are only accesable form within the component 
// add decerator to make properties avaible to parent components
    constructor(){
        console.log("Constructor called!!");
    }
    ngOnChanges(changes: SimpleChanges){
        console.log('ngOnChanges called!');
        console.log(changes);
    }

    ngOnInit(){
        console.log('ngOnInit called');
    }

    ngDoCheck() {
        // get called whenever angular checks for any changes
        console.log('ngDoCheck called!');
    }

    ngAfterContentInit(){
        console.log('ngAfterContentInit called!!');
        
    }

    ngAfterContentChecked(){
        console.log('ngAfterContentChecked called!!');
        
    }

    ngAfterViewInit(){
        console.log('ngAfterViewInit called!');
    }

    ngAfterViewChecked(){
        console.log('ngAfterViewChecked callled!');
        
    }

    ngOnDestroy(){
        console.log('ngOnDestroy called!');
        
    }


    
}
