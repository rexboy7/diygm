import { NavLink, useRouteMatch } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

export function AdminNavbar() {
  const match = useRouteMatch();
  return (
    <ul className="nav nav-pills">
      <LinkItem to={`${match.url}/PageCreateProduct`} title="新增遊戲項目" />
      <LinkItem to={`${match.url}/PageEditProducts`} title="編輯遊戲項目" />
      <LinkItem to={`${match.url}/PageCreateActivity`} title="新增活動項目" />
      <LinkItem to={`${match.url}/PageEditActivities`} title="編輯活動項目" />
    </ul>
  );
}

function LinkItem(props) {
  const { to, title } = props;
  return (
    <li className="nav-item">
      <NavLink to={to} className="nav-link" activeClassName="active">
        {title}
      </NavLink>
    </li>
  );
}
