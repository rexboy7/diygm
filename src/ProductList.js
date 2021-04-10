import { Component } from "react";

export class ProductList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <article className="row row-cols-1">
        {this.props.items.map((item) => (
          <section key={item.id} className="col border-bottom p-4">
            <div className="text-success">{item.author}</div>
            <div className="display-3">{item.title}</div>
            <h6 className="text-muted">{item.enTitle}</h6>
            <p className="text-secondary">{item.tags.join(" / ")}</p>
            <p>{item.description}</p>
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
