import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { AngularSwitcheryModule } from '../index';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        BrowserModule,
        AngularSwitcheryModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [ExampleComponent]
})
export class ExampleModule { }
