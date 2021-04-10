import { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <nav class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <h4>自製遊戲Only</h4>
        </a>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="/index.html">
              首頁
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/activities.html">
              現場交流活動
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/products.html">
              參展作品介紹
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/interview.html">
              團隊焦點訪談
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/partners.html">
              合作單位介紹
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/entry.html">
              來去報名
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
