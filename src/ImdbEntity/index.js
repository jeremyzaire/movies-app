import "./style.css";

export default class ImdbEntity {
  constructor({ id, title }) {
    this.id = id;
    this.title = title;
  }

  render(parentNode) {
    this.$imdbEntity = document.createElement("div");
    this.$imdbEntity.setAttribute("id", `entity-${this.id}`);
    this.$imdbEntity.classList.add("imdbEntities");

    this.renderImage();

    this.renderTitle();

    parentNode.appendChild(this.$imdbEntity);
  }

  renderTitle() {
    const $imdbEntityTitle = document.createElement("h3");
    $imdbEntityTitle.textContent = this.title;
    this.$imdbEntity.appendChild($imdbEntityTitle);
  }

  renderImage() {
    const imdbEntityImg = new Image();
    imdbEntityImg.src = `https://picsum.photos/200/300?ramdom=${this.id}`;
    this.$imdbEntity.appendChild(imdbEntityImg);
  }
}
