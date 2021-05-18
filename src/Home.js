import { Component } from "react";
import mainArt from "./assets/mainart.jpg";

export function Home() {
  return (
    <article className="container-lg">
      <center>
        <img src={mainArt} className="img-fluid" />
      </center>
      <div className="row">
        <h1 className="col-md display-1 text-center">自製遊戲交流only</h1>
      </div>
      <div className="row justify-content-center">
        <h2 className="col-6 text-center">這是什麼活動？</h2>
      </div>
      <div className="row justify-content-center">
        <p className="col-8">
          這是台灣獨立遊戲的實體展示交流活動。
          <br />
          繼首次舉辦，收到了許多玩家與團隊的支持與回饋後，經過了一番討論，我們決定再度舉辦「自製遊戲交流Only」。
          <br />
          期待藉此活動，幫助團隊進行作品的宣傳與回饋收集，並拉近玩家與開發者的距離，
          <br />
          增加產業交流的可能，鼓勵玩家參與到遊戲製作的一環。
          <br />
          同時，公會也將於活動舉辦期間，與各大單位合作上架活動資訊網頁，供無法到場的玩家同好一同參與。
          <br />
          活動採事前登記入場，即日起開放玩家免費報名索票，歡迎各位玩家來與獨立遊戲開發者們交流，
          <br />
          感受遊戲社群的熱情，體驗精彩豐富的遊戲作品！
          <br />
        </p>
      </div>
      <div class="row justify-content-center">
        <div className="col-2">圖片</div>
        <div className="col-6">
          <h3>活動中有什麼？</h3>
          <ul>
            <li>
              <big>3場</big> 遊戲團隊開發歷程訪談
            </li>
            <li>
              <big>20組</big> 歷屆作品預告短片輪播
            </li>
            <li>
              <big>25款</big> 獨立遊戲作品試玩交流
            </li>
            <li>
              <big>47項</big> 活動獎品集章抽選活動
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
