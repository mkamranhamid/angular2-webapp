import { Component } from '@angular/core';

@Component({
  selector: 'page1',
  template: `<h1>Page 1 of Angular 2 App</h1>
  <button class="btn btn-block btn-primary"> Click me</button>
  <a class="btn btn-default" href="#" role="button">Link</a>
<button class="btn btn-default" type="submit">Button</button>
<input class="btn btn-default" type="button" value="Input">
<input class="btn btn-default" type="submit" value="Submit">`
})
export class Page1Component { }