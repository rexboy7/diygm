import { Component } from "react";
import { NavLink } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <h4>自製遊戲Only</h4>
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              首頁
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/activities"
              className="nav-link"
              activeClassName="active"
            >
              現場交流活動
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/products"
              className="nav-link"
              activeClassName="active"
            >
              參展作品介紹
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/interview"
              className="nav-link"
              activeClassName="active"
            >
              團隊焦點訪談
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/partners"
              className="nav-link"
              activeClassName="active"
            >
              合作單位介紹
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/entry" className="nav-link" activeClassName="active">
              來去報名
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
