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

  handleShowModal() {
    const modal = this.template.querySelector("c-custom-cell-slots-prompt");
    modal.show();
  }
}