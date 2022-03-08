import Filter from "../Filter";
import InputSearch from "../InputSearch";
import ResultText from "../ResultText";
import Movie from "../Movie";
import "./style.css";
import Actor from "../Actor";
import { moviesFetch, responseToJson } from "../lib";

export default class App {
  constructor() {
    this.entities = [
      //   { id: 1, title: "The Ring", resultType: "Name" },
      //   { id: 2, title: "The Ring 2", resultType: "Title" },
      //   { id: 3, title: "Matrix", resultType: "Name" },
      //   { id: 4, title: "The Ginr", resultType: "Title" },
      //   { id: 5, title: "The Ring 3", resultType: "Name" },
      //   { id: 6, title: "The Ring Final cut", resultType: "Title" },
      //   { id: 7, title: "Russie vs The World", resultType: "Name" },
      //   { id: 8, title: "JAVA > JS", resultType: "Title" },
      //   { id: 9, title: "Satan 2", resultType: "Name" },
      //   { id: 10, title: "End of the world", resultType: "Title" },
    ];
  }

  render() {
    this.$app = document.createElement("div");
    this.$app.setAttribute("id", "app");

    document.body.appendChild(this.$app);

    const $appTitle = document.createElement("h1");
    $appTitle.textContent = "Movies App";
    $appTitle.classList.add("appTitle");
    this.$app.appendChild($appTitle);

    new InputSearch().render(this.$app);
    new Filter().render(this.$app);
    new ResultText().render(this.$app);

    this.$entityList = document.createElement("ul");
    this.$entityList.classList.add("entityList");

    moviesFetch("/entities")
      .then(responseToJson)
      .then((entities) => (this.entities = entities))
      .then(this.renderEntitiesMessage)
      .then(this.renderEntities);

    this.$app.appendChild(this.$entityList);
  }

  renderEntitiesMessage = () => {
    if (this.entities.length === 0) {
      const $resultEntities = document.createElement("p");
      $resultEntities.textContent = "No entity to display";
      this.$app.appendChild($resultEntities);
    }
  };

  renderEntities = () => {
    this.entities.map((entity) => {
      const imdbEntity =
        entity.resultType === "Title" ? new Movie(entity) : new Actor(entity);
      imdbEntity.render(this.$entityList);
    });
  };
}
