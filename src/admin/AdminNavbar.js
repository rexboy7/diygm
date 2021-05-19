import { NavLink, useRouteMatch } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

export function AdminNavbar() {
  const match = useRouteMatch();
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <NavLink
          to={`${match.url}/EditProductList`}
          className="nav-link"
          activeClassName="active"
        >
          編輯遊戲列表
        </NavLink>
      </li>
    </ul>
  );
}
