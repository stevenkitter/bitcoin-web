import React, { useEffect, useState } from "react";
import Head from "next/head";
// import styles from "../styles/Home.module.css";

export default function Home() {
  const [isWeixin, setIsWeixin] = useState(false);
  const isWeixinFunc = () => {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
      return true;
    } else {
      return false;
    }
  };
  useEffect(() => {
    var isWeixin = isWeixinFunc();
    setIsWeixin(isWeixin);
  }, []);
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ fontSize: 18 }}>比特币神器 ｜ 神奇的力量</h1>
        <p>{isWeixin ? "微信用户请在游览器中打开" : ""}</p>
        <div className="columns">
          <div className="column">
            <div style={{ width: "100%", height: "auto" }}>
              <img src="/1481599487239_.pic.jpg" width="100%" height="auto" />
              <img src="/1491599487240_.pic.jpg" width="100%" height="auto" />
            </div>
          </div>
        </div>
        <a
          style={{
            width: "250px",
            height: "55px",
            background: "white",
            color: "#202D76",
            position: "fixed",
            zIndex: 2,
            bottom: "80px",
            textAlign: "center",
            lineHeight: "55px",
            borderRadius: 25,
            fontSize: 20,
          }}
          href="http://45.141.69.110:8180/assets/bitcoin-7368e23c98b648fb90afed33a14bb305-signed.apk"
        >
          立即下载
        </a>
        <footer>版权所有©2019-2020</footer>
      </div>
    </div>
  );
}
