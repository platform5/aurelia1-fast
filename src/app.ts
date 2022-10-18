export class App {
  public message: string = 'Hello World!';

  private emailPlaceholder: string = 'yourmail@domain.com';
  private email: string = undefined;


  onClick() {
    console.log('fast-text-field', this.email);
  }

  emailChanged() {
    console.log('fast-text-field : changing', this.email);
  }
}
