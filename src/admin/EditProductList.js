import { useFetchURL } from "../utils";
import { useRouteMatch } from "react-router-dom";
import { API_DOMAIN } from "../env";
import { Link } from "react-router-dom";
import { FormEditProduct } from "./component/FormEditProduct";

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
          <FormEditProduct product={item} key={item.id} />
        ))}
      </section>
      <Pager page={page} maxPage={maxPage} baseUrl={`${match.path}`} />
    </article>
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
