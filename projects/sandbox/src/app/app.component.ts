import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public swticherModel: boolean = false;
  public switcheryControl: FormControl = new FormControl(false);

  ngOnInit() {
     this.switcheryControl.valueChanges.subscribe(console.log);
  }
}
