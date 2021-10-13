import React from 'react';
import img from '../../img/lidemy_logo.png';

export default function Home() {
  return (
    <div
      className="site-layout-background"
      style={{ padding: 24, minHeight: 859, margin: '16px 0' }}
    >
      <h2 style={{ textAlign: 'center', width: '70vw', margin: '16px auto' }}>
        這是一個模仿 Lidemy 程式導師計畫學習系統的部落格
      </h2>
      <div style={{ textAlign: 'center', margin: '70px auto' }}>
        <img
          style={{width: '30vw' }}
          alt="Background"
          src={img}
        />
      </div>
    </div>
  );
}
