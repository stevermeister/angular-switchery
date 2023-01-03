# Angular Switchery

![angular-switchery](https://user-images.githubusercontent.com/1526680/28157705-9b59934c-67b7-11e7-95f7-6d655ae5d714.png)

Angular (2+) Implementation of [switchery](https://github.com/abpetkov/switchery) form control
Works with Angular 15

[Demo](https://stackblitz.com/edit/angular-switchery-sandbox)

## Description

Angular-Switchery is a simple component that helps you turn your default HTML checkbox inputs into beautiful iOS 7 style switches in just few simple steps. You can easily customize switches, so that they match your design perfectly.

Supported by all modern browsers: Chrome, Firefox, Opera, Safari, IE9+

![screen shot 2017-08-25 at 15 15 15](https://user-images.githubusercontent.com/1526680/29715591-4ed60646-89a8-11e7-8d6b-2712e6dd4e85.png)

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