import { Link } from "react-router-dom";

export function Pager(props) {
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
