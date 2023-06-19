import AbstractView from "./tmp.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Not Found");
  }

  async getHtml() {
    return `
		<h1>Welcome!</h1>
		<p>This is NotFound page.</p>
		<a href="/posts" data-link>
			View recent posts
		</a>
	`;
  }
}
