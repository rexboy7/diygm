import { Component } from "react";
import { itemData } from "./data/itemData";
import { Redirect } from "react-router-dom";

const PER_PAGE = 5;
let myThis;
export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadPage: false,
    }
    myThis = this;
    //this.handleScroll = ;
    this.handleScroll = this.handleScroll.bind(this);

  }
  get page() {
    const hashPage = parseInt(this.props.match.params.page, 10) || 1;
    return Math.min(hashPage, this.maxPage);
  }
  get maxPage() {
    return Math.ceil(itemData.length / PER_PAGE);
  }
  get pagedItemData() {
    const to = PER_PAGE * this.page;
    return itemData.slice(0, to);
  }
  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }
  componentDidUpdate() {
    if(this.state.loadPage) {
      this.setState({ loadPage: false });
    }
  }
  handleScroll(e) {
    if(!this.state.loading &&
        this.page < this.maxPage &&
        window.pageYOffset + window.innerHeight ===
        document.documentElement.scrollHeight
    ) {

      this.setState({
          loadPage: true,
        }
      );
    }
  }
  render() {
    return (
      <article className="row row-cols-1" >
        {this.pagedItemData.map((item) => (
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
            {item.facebook && (
              <p>
                <a href={item.facebook}>Facebook</a>
              </p>
            )}
          </section>
        ))}
        {this.state.loadPage ? <Redirect to={'/products/' + (this.page + 1)} /> : null}
      </article>
    );
  }
}
