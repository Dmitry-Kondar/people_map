import { LightningElement, api } from 'lwc';

export default class CustomCellSlotsPrompt extends LightningElement {
  showModal = false;

  @api show() {
    this.showModal = true;
  }
  handleDialogClose() {
    console.log("CLICK!!!");
    this.showModal = false;
    console.log(this.showModal)
  }
}