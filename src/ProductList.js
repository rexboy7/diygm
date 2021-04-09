import { Component } from "react";

export class ProductList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <article>
        {this.props.items.map((item) => (
          <section key={item.id}>
            <p>{item.author}</p>
            <h3>{item.enTitle}</h3>
            <h5>{item.enTitle}</h5>
            <p>{item.tags.join(" / ")}</p>
            <p>{item.description}</p>
            <p>
              攤位號碼：
              <span>{item.place}</span>
            </p>
            <a href={item.facebook}>Facebook</a>
          </section>
        ))}
      </article>
    );
  }
}
