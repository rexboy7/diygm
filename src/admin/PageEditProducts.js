import { useFetchFunction } from "../utils";
import { useRouteMatch } from "react-router-dom";
import { API_DOMAIN } from "../env";

import { Pager } from "./component/Pager";
import { FormEditProduct } from "./component/FormEditProduct";
import { fetchList } from "../fetcher";

const PER_PAGE = 5;

const fetchItemList = () => fetchList("items");

export function PageEditProducts(props) {
  const itemData = useFetchFunction(fetchItemList) || [];
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
