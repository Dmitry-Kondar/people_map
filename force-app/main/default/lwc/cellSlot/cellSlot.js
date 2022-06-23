import { LightningElement } from 'lwc';
import LightningPrompt from "lightning/prompt";

export default class CellSlot extends LightningElement {
  contact = ""
  handlePrompt() {
    LightningPrompt.open({
      theme: "inverse",
      label: "Type Header text",
      defaultValue: ""
    }).then((result) => {
      result === null ? this.contact = this.contact : this.contact = result;
    });
  }
}