import { inject, BindingEngine, bindable } from 'aurelia-framework'
import { PDF } from "swissqrbill/lib/node/esm/node/pdf.js"; // ESM. Tree-shakeable
import { SVG } from "swissqrbill/lib/node/esm/node/svg.js"; // ESM. Tree-shakeable
import { SVGOptions } from 'swissqrbill/lib/node/esm/shared/types';
import { mm2pt } from "swissqrbill/lib/node/esm/shared/utils.js"; // ESM. Tree-shakeable

@inject(Element, BindingEngine)
export class App {
  public message: string = 'Hello World!';

  public emailPlaceholder: string = 'yourmail@domain.com';
  public email: string = undefined;


  constructor(private element: Element, private bindingEngine: BindingEngine) {

  }

  public activate(params: { urlId: string }) {
    setTimeout(() => {
      this.onClick();
    }, 500);
  }


  onClick() {
    console.log('fast-text-field', this.email);
    this.email = 'Super !';


    // https://github.com/schoero/SwissQRBill
    let qrData = {
      language: "FR",
      currency: "CHF",
      amount: 174.45,
      // reference: "",
      message: "Facture 570",
      creditor: {
        name: "Platform5 R&D Sàrl",
        address: "Rue de la paix",
        buildingNumber: "8",
        zip: 1196,
        city: "Gland",
        account: "CH8880808005344886021",
        country: "CH"
      },
      debtor: {
        name: "Test",
        address: "Test",
        buildingNumber: "00",
        zip: 1260,
        city: "Test",
        country: "CH"
      }
    };

    const svg: SVG = new SVG(qrData as any, { language: "FR" });


    let qrCodeCanvasElement = document.getElementById("qrcode-invoice") as HTMLCanvasElement;
    qrCodeCanvasElement.outerHTML = svg.outerHTML;

  }



  emailChanged() {
    console.log('fast-text-field : changing', this.email);
  }
}
