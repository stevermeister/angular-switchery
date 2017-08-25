# Angular Switchery

![angular-switchery](https://user-images.githubusercontent.com/1526680/28157705-9b59934c-67b7-11e7-95f7-6d655ae5d714.png)

Angular (2+) Implementation of [switchery](https://github.com/abpetkov/switchery) form control

[Demo](https://stackblitz.com/edit/angular-fcr9gv)

## Description

Angular-Switchery is a simple component that helps you turn your default HTML checkbox inputs into beautiful iOS 7 style switches in just few simple steps. You can easily customize switches, so that they match your design perfectly.

Supported by all modern browsers: Chrome, Firefox, Opera, Safari, IE9+

![Preview](http://i.imgur.com/0PcuTbO.jpg)

## Installation

##### Npm:

```shell
$ npm install angular-switchery
```


## Usage

```js
import {AngularSwitcheryModule} from 'angular-switchery'
```

## Import module dependency:

```js
   ...
   imports: [
   ...
    AngularSwitcheryModule
   ...
   ]
   ```
```

## Examples

##### Checked

Only thing you need is to add a `checked` attribute to your checkbox input. Simple as that.

```html
<angular-switchery></angular-switchery>
```

##### Disabled

```html
<angular-switchery disabled="disabled"></angular-switchery>
```

##### NgModel

```html
 <angular-switchery [(ngModel)]="swticherModel"></angular-switchery>
 <angular-switchery [(ngModel)]="swticherModel"></angular-switchery>
 Switcher: {{swticherModel? 'ON' : 'OFF'}}
```

##### Reactive approach

```html
<angular-switchery #f="ngForm" [formControl]="switcheryControl"></angular-switchery>
switcheryControl.value : {{f.value}}
```

You can play with all the examples [here](https://stackblitz.com/edit/angular-fcr9gv)
