import { useFetchURL } from "../utils";
import { useRouteMatch } from "react-router-dom";
import { API_DOMAIN } from "../env";
import { Link } from "react-router-dom";

const PER_PAGE = 5;
const ENDPOINT = `${API_DOMAIN}/items`;

export function EditProductList(props) {
  const itemData = useFetchURL(ENDPOINT)?.data || [];
  const maxPage = Math.ceil(itemData.length / PER_PAGE);
  const page = Math.min(props.page, maxPage);
  const itemFrom = PER_PAGE * (page - 1);
  const itemTo = itemFrom + PER_PAGE;
  const pagedItemData = itemData.slice(itemFrom, itemTo);
  const match = useRouteMatch();

  return (
    <article>
      <h3>編輯</h3>
      <Pager page={page} maxPage={maxPage} baseUrl={`${match.path}`} />
      <section>
        {pagedItemData.map((item) => (
          <EditProduct product={item} key={item.id} />
        ))}
      </section>
      <Pager page={page} maxPage={maxPage} baseUrl={`${match.path}`} />
    </article>
  );
}

function EditProduct(props) {
  const { id, author, title, enTitle, tags, description, place, facebook } =
    props.product;
  console.log(id);
  return (
    <section className="my-4">
      <div className="row">
        <div className="col-2 text-end">ID:</div>
        <div className="col-2">{id}</div>
      </div>

      <div className="row">
        <span className="col-2 text-end">作者</span>
        <input className="col col-md-4" type="text" value={author} />
      </div>
      <div className="row">
        <span className="col-2 text-end">標題</span>
        <input className="col col-md-4" type="text" value={title} />
      </div>
      <div className="row">
        <span className="col-2 text-end">英文標題</span>
        <input className="col col-md-4" type="text" value={enTitle} />
      </div>
      <div className="row">
        <span className="col-2 text-end">標籤</span>
        <input className="col col-md-4" type="text" value={tags?.join(",")} />
      </div>
      <div className="row">
        <span className="col-2 text-end">描述</span>
        <br />
        <textarea
          className="col col-md-4"
          rows="10"
          cols="40"
          value={description}
        />
      </div>
      <div className="row">
        <span className="col-2 text-end">攤位號碼</span>
        <input className="col col-md-4" type="textarea" value={place} />
      </div>
      <div className="row">
        <span className="col-2 text-end">臉書連結</span>
        <input className="col col-md-4" type="textarea" value={facebook} />
      </div>
      <div className="row">
        <button className="col col-md-4 offset-2">送出修改</button>
      </div>
    </section>
  );
}

const PAGING_COUNT = 5;

function Pager(props) {
  const { page, baseUrl, maxPage } = props;
  //const min = Math.min(page - (PAGING_COUNT >> 1), 1);
  //const max = Math.max(min + PAGING_COUNT, props.maxPage);
  const prevPage = page > 1 ? page - 1 : null;
  const nextPage = page < maxPage ? page + 1 : null;

  return (
    <section>
      <PageLink page={prevPage} baseUrl={baseUrl}>
        {" "}
        &lt;{" "}
      </PageLink>
      <PageLink baseUrl={baseUrl}>{page}</PageLink>
      <PageLink page={nextPage} baseUrl={baseUrl}>
        {" "}
        &gt;{" "}
      </PageLink>
    </section>
  );
}

function PageLink(props) {
  const { page, baseUrl } = props;

  const url = baseUrl.replace(":page", page);
  return page ? (
    <Link to={url} className="btn btn-primary mx-2">
      {props.children}
    </Link>
  ) : (
    <button className="btn btn-secondary mx-2" disabled>
      {props.children}
    </button>
  );
}
