import "./style.css";

export default class InputSearch {
  constructo() {}

  render(parentNode) {
    const $inputSearch = document.createElement("input");
    $inputSearch.setAttribute("name", "search");
    $inputSearch.placeholder = "Search...";
    $inputSearch.classList.add("inputSearch");

    parentNode.appendChild($inputSearch);
  }
}
