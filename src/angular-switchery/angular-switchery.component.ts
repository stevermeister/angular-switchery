import { Component, forwardRef, EventEmitter, Output, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'angular-switchery',
  styleUrls: ['./angular-switchery.component.scss'],
  template: `<span (keydown)="onKeyDown($event)" tabindex="0" [class]="className" (click)="onClick()" [class.disabled]="isDisabled()">
  <small [ngClass]="{'checked': checked}"></small></span>`,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AngularSwitcheryComponent),
    multi: true
  }]
})
export class AngularSwitcheryComponent implements ControlValueAccessor {
  private _disabled: boolean;
  public checked = false;

  @Input() public className = 'switchery';

  @Input() set disabled(value: boolean) {
    this._disabled = value !== false;
  };

  @Output() change = new EventEmitter<boolean>();

  constructor() { }

  onKeyDown(event: KeyboardEvent) {
    //"ArrowRight"
    if (event.keyCode === 39) {
      this.checked = true;
    }
    //"ArrowLeft"
    if (event.keyCode === 37) {
      this.checked = false;
    }
    //"space"
    if (event.keyCode === 32) {
      this.checked = !this.checked;
    }
    this.onChangeCallback(this.checked);
    this.onTouchedCallback(this.checked);
  }

  private onTouchedCallback = (checked: boolean) => {}
  private onChangeCallback = (checked: boolean) => {}

  public isDisabled() {
    return this._disabled;
  }

  public writeValue(checked: boolean): void {
    this.checked = !!checked;
    this.onChangeCallback(this.checked);
    this.onTouchedCallback(this.checked);
  }

  public registerOnChange(fn: () => void) {
    this.onChangeCallback = fn;
  }


  public registerOnTouched(fn: () => void) {
    this.onTouchedCallback = fn;
  }

  public onClick = function () {
    if (this.isDisabled()) {
      return;
    }
    this.checked = !this.checked;
    this.change.emit(this.checked);
    this.onChangeCallback(this.checked);
    this.onTouchedCallback(this.checked);
  }
}
