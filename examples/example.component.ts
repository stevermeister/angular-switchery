import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
    selector: 'example-root',
    templateUrl: './example.component.html',
    styleUrls: []
})
export class ExampleComponent implements OnInit {
    public swticherModel: boolean = false;
    public switcheryControl: FormControl = new FormControl(false);

    ngOnInit() {
       this.switcheryControl.valueChanges.subscribe(console.log);
    }
}
