import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useFetchURL } from "../utils";
import { API_DOMAIN } from "../env";

const PER_PAGE = 5;
const ENDPOINT = `${API_DOMAIN}/items`;

export function ProductList(props) {
  const [loadPage, setLoadPage] = useState(false);
  const itemData = useFetchURL(ENDPOINT)?.data || [];
  const maxPage = Math.ceil(itemData.length / PER_PAGE);
  const page = Math.min(props.page, maxPage);
  const pagedItemData = itemData.slice(0, PER_PAGE * page);

  useEffect(function addScrollListener() {
    const listener = () => {
      if (
        !loadPage &&
        page < maxPage &&
        window.pageYOffset + window.innerHeight ===
          document.documentElement.scrollHeight
      ) {
        setLoadPage(true);
      }
    };
    document.addEventListener("scroll", listener);
    return () => document.removeEventListener("scroll", listener);
  });

  useEffect(
    function resetPageLoading() {
      setLoadPage(false);
    },
    [loadPage]
  );

  return (
    <article className="row row-cols-1">
      <ProductListTable productList={pagedItemData} />
      {loadPage ? <Redirect to={"/products/" + (page + 1)} /> : null}
    </article>
  );
}

function ProductListTable(props) {
  const { productList } = props;
  if (!productList) {
    return null;
  }
  return productList.map((item) => (
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
  ));
}
