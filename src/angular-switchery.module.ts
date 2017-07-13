import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularSwitcheryComponent } from './angular-switchery/angular-switchery.component';

@NgModule({
    declarations: [
        AngularSwitcheryComponent
    ],
    exports: [
        AngularSwitcheryComponent
    ],
    imports: [
        CommonModule
    ]
})
export class AngularSwitcheryModule {
    static forRoot() {
        return {
            ngModule: AngularSwitcheryModule,
            providers: []
        };
    }
}
