import StudyPageForm from "../components/Study.js";
import AbstractView from "./tmp.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Posts");
  }

  async getHtml() {
    return StudyPageForm;
  }
}
