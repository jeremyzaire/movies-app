import ImdbEntity from "../ImdbEntity";
import "./style.css";

export default class App {
  constructor() {
    this.entities = [
      { id: 1, title: "The Ring" },
      { id: 2, title: "The Ring 2" },
      { id: 3, title: "Matrix" },
      { id: 4, title: "The Ginr" },
      { id: 5, title: "The Ring 3" },
      { id: 6, title: "The Ring Final cut" },
      { id: 7, title: "Russie vs The World" },
      { id: 8, title: "JAVA > JS" },
      { id: 9, title: "Satan 2" },
      { id: 10, title: "End of the world" },
    ];
  }

  render() {
    const $app = document.createElement("div");
    $app.setAttribute("id", "app");

    document.body.appendChild($app);

    this.entities.map((entity) => {
      new ImdbEntity(entity).render($app);
    });
  }
}
