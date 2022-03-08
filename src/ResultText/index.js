import "./style.css";

export default class ResultText {
  constructo() {}

  render(parentNode) {
    const $resultText = document.createElement("p");
    $resultText.classList.add("resultText");
    $resultText.textContent = "7 résultats (4 films, 3 acteurs)";

    parentNode.appendChild($resultText);
  }
}
