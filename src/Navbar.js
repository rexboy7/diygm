import { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <nav>
        <a href="/index.html">首頁</a>
        <a href="/activities.html">現場交流活動</a>
        <a href="/products.html">參展作品介紹</a>
        <a href="/interview.html">團隊焦點訪談</a>
        <a href="/partners.html">合作單位介紹</a>
        <a href="/entry.html">來去報名</a>
      </nav>
    );
  }
}
