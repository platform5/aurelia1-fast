export class App {
  public message: string = 'Hello World!';

  private emailPlaceholder: string = "youmail@domain.com";
  private email: string = "no value updated";


  onClick() {
    console.log('clicked!');
  }

  emailChanged() {
    console.log('fast-text-field : changing', this.email);
    this.message = this.email;
  }
}
