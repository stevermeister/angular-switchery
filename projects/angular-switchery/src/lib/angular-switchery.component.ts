import { Component, forwardRef, EventEmitter, Output, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'angular-switchery',
  template: `<span (keydown)="onKeyDown($event)" tabindex="0" [class]="className" (click)="onClick()" [class.disabled]="isDisabled()">
            <small [ngClass]="{'checked': checked}"></small></span>`,
  styleUrls: ['./angular-switchery.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AngularSwitcheryComponent),
    multi: true
  }]
})
export class AngularSwitcheryComponent implements ControlValueAccessor {
  private _disabled: boolean = false;
  public checked = false;

  @Input() public className = 'switchery';

  @Input() set disabled(value: boolean | 'disabled') {
    this._disabled = value !== false;
  };

  @Output() change = new EventEmitter<boolean>();

  constructor() { }

  onKeyDown(event: KeyboardEvent) {
    if (event.code === 'ArrowRight') {
      this.checked = true;
    }
    if (event.code === 'ArrowLeft') {
      this.checked = false;
    }
    if (event.code === 'Space') {
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

  public onClick () {
    if (this.isDisabled()) {
      return;
    }
    this.checked = !this.checked;
    this.change.emit(this.checked);
    this.onChangeCallback(this.checked);
    this.onTouchedCallback(this.checked);
  }
}