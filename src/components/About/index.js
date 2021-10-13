import React from 'react';

export default function About() {
  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 859, margin: '16px 0' }}
    >
      <div style={{ padding: 24, margin: '16px auto' }}>
        <h2>
          嗨嗨，我是
          Jason，因緣際會下踏入程式的領域，喜歡學習新技術，目前剛從Lidemy
          程式導師實驗計畫第五期結業，希望未來能 Web
          的領域持續鑽研、練習，開發出自己、使用者都喜愛的網頁。 這是一個是用
          Ant Design 為 UI Library 配合 React 開發的部落格網頁配合後段使用 JWT
          完成登入驗證機制的簡易部落格~~
        </h2>
      </div>
    </div>
  );
}
