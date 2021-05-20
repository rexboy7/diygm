import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  useParams,
} from "react-router-dom";
import { EditProductList } from "./EditProductList";
import { PageCreateProduct } from "./PageCreateProduct";
import { AdminNavbar } from "./AdminNavbar";

export function AdminRoute() {
  const match = useRouteMatch();
  return (
    <article>
      <AdminNavbar />
      <Switch>
        <Route path={`${match.path}/EditProductList/:page`}>
          <EditProductListWrapper />
        </Route>
        <Route path={`${match.path}/EditProductList`}>
          <Redirect to={`${match.path}/EditProductList/1`} />
        </Route>
        <Route path={`${match.path}/PageCreateProduct`}>
          <PageCreateProduct />
        </Route>
        <Route path={match.path}>管理員介面。請小心使用。</Route>
      </Switch>
    </article>
  );
}

function EditProductListWrapper() {
  const params = useParams();
  const page = parseInt(params.page, 10) || 1;
  return <EditProductList page={page} />;
}
