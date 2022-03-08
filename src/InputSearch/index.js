import "./style.css";

export default class InputSearch {
  constructor() {}

  render(parentNode) {
    this.$inputSearch = document.createElement("input");
    this.$inputSearch.setAttribute("name", "search");
    this.$inputSearch.placeholder = "Search...";
    this.$inputSearch.setAttribute("autocomplete", "off");
    this.$inputSearch.classList.add("this.$inputSearch");

    parentNode.appendChild(this.$inputSearch);
  }

  getInputNode() {
    return this.$inputSearch;
  }
}
