import { Component } from "react";
import { itemData } from "./data/itemData";
import { useParam } from "react-router-dom";

export class ProductList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <article className="row row-cols-1">
        {itemData.map((item) => (
          <section
            key={item.id}
            className="col col-lg-8 offset-lg-2 border-bottom p-4"
          >
            <div className="text-success">{item.author}</div>
            <div className="display-3">{item.title}</div>
            <h6 className="text-muted">{item.enTitle}</h6>
            <p className="text-secondary">{item.tags.join(" / ")}</p>
            <p className="keep-wrap">{item.description}</p>
            <div className="text-success fw-bold">
              攤位號碼：<span>{item.place}</span>
            </div>

            <p>
              <a href={item.facebook}>Facebook</a>
            </p>
          </section>
        ))}
      </article>
    );
  }
}
