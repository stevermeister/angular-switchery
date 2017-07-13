import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example.component';
import { AngularSwitcheryModule } from '../index';

@NgModule({
    declarations: [
        ExampleComponent
    ],
    imports: [
        BrowserModule,
        AngularSwitcheryModule
    ],
    providers: [],
    bootstrap: [ExampleComponent]
})
export class ExampleModule { }
