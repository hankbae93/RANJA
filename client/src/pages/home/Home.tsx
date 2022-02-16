import React from 'react';

const Home = () => {
  const txt = 'WashingTon, DC';
  return (
    <div style={{ border: '1px solid #ccc', height: '100%', flex: '1' }}>
      <div>
        <h2>Search Results &apos;{txt}&apos;</h2>
        <span>17 recent found</span>
      </div>

      <div>
        <div style={{ display: 'flex' }}>
          <img alt="" src="http://placehold.it/320x100" />
          <div>
            <p>10th aaaaa</p>
            <h3>김창남</h3>
            <ul>
              <li>친구추가</li>
              <li>채팅</li>
              <li>친구네 집</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
