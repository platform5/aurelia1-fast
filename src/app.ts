import { inject, BindingEngine, bindable} from 'aurelia-framework'

@inject(Element, BindingEngine)
export class App {
  public message: string = 'Hello World!';

  public emailPlaceholder: string = 'yourmail@domain.com';
  public email: string = undefined;

  constructor(private element: Element, private bindingEngine: BindingEngine) {

  }

  onClick() {
    console.log('fast-text-field', this.email);
    this.email = 'Super !';
  }

  emailChanged() {
    console.log('fast-text-field : changing', this.email);
  }
}
