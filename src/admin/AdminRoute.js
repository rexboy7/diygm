import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  useParams,
} from "react-router-dom";
import { PageEditActivities } from "./PageEditActivities";
import { PageEditProducts } from "./PageEditProducts";
import { PageCreateProduct } from "./PageCreateProduct";
import { PageCreateActivity } from "./PageCreateActivity";
import { AdminNavbar } from "./AdminNavbar";

export function AdminRoute() {
  const match = useRouteMatch();
  return (
    <article>
      <AdminNavbar />
      <Switch>
        <Route path={`${match.path}/PageEditProducts/:page`}>
          <PageEditProductsWrapper />
        </Route>
        <Route path={`${match.path}/PageEditProducts`}>
          <Redirect to={`${match.path}/PageEditProducts/1`} />
        </Route>
        <Route path={`${match.path}/PageEditActivities/:page`}>
          <PageEditActivitiesWrapper />
        </Route>
        <Route path={`${match.path}/PageEditActivities`}>
          <Redirect to={`${match.path}/PageEditActivities/1`} />
        </Route>
        <Route path={`${match.path}/PageCreateProduct`}>
          <PageCreateProduct />
        </Route>
        <Route path={`${match.path}/PageCreateActivity`}>
          <PageCreateActivity />
        </Route>
        <Route path={match.path}>管理員介面。請小心使用。</Route>
      </Switch>
    </article>
  );
}

function PageEditProductsWrapper() {
  const params = useParams();
  const page = parseInt(params.page, 10) || 1;
  return <PageEditProducts page={page} />;
}

function PageEditActivitiesWrapper() {
  const params = useParams();
  const page = parseInt(params.page, 10) || 1;
  return <PageEditActivities page={page} />;
}
