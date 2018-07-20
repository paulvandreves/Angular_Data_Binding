import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from "@angular/core";

@Component({
    // the selector is the html element that will allow you to use the componet later elsewhere in the application

    selector:'app-cockpit', 
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export  class cockpitComponent implements OnInit {
   @Output()  serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
   @Output('bpCreated')  blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    //newServerName = '';
    //newServerContent = '';
    @ViewChild('serverContentInput') serverContentInput: ElementRef; 

    constructor() {}

    ngOnInit(){}
    // Called once the component is initialzied 

    onAddServer(nameInput: HTMLInputElement) { 
       this.serverCreated.emit({
        serverName: nameInput.value,
        serverContent: this.serverContentInput.nativeElement.value
      }); 
    }

    onAddBlueprint(nameInput: HTMLInputElement) {
      this.blueprintCreated.emit({
        serverName: nameInput.value,
        serverContent: this.serverContentInput.nativeElement.value
     }); 
    }
}