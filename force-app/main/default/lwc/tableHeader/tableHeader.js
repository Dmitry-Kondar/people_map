import { LightningElement } from 'lwc';
import LightningPrompt from "lightning/prompt";

export default class TableHearder extends LightningElement {
  handlePrompt() {
    LightningPrompt.open({
      theme: "inverse",
      label: "Type Header text",
      defaultValue: "Test"
    }).then((result) => {
      console.log("🚀 ~ result", result);
    });
  }
}