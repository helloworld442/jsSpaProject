import AbstractView from "./tmp.js";
import MainPageForm from "../components/Main.js";
export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Main");
  }

  async getHtml() {
    return MainPageForm;
  }
}
