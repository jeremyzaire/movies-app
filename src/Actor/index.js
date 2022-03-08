import ImdbEntity from "../ImdbEntity";

export default class Actor extends ImdbEntity {
  constructor(entity) {
    super(entity);

    this.type = "actor";
  }

  renderTitle() {
    const $imdbEntityTitle = document.createElement("h3");
    $imdbEntityTitle.textContent = `👨‍🎤 ${this.title}`;
    this.$imdbEntity.appendChild($imdbEntityTitle);
  }
}
