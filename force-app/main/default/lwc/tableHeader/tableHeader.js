import { LightningElement } from 'lwc';
import LightningPrompt from "lightning/prompt";

export default class TableHearder extends LightningElement {
  header = "HEADER"
  handlePrompt() {
    LightningPrompt.open({
      theme: "inverse",
      label: "Type Header text",
      defaultValue: "HEADER"
    }).then((result) => {
      console.log("🚀 ~ result", result);
      this.header = result;
    });
  }
}