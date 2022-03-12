# RANJA

<a href="http://www.ranja.o-r.kr">http://www.ranja.o-r.kr</a>

    구글 맵 기반 채팅 메신저 플랫폼

<p>
client repository: 
<a href="https://github.com/ranjafunc/ranja-frontend">https://github.com/ranjafunc/ranja-frontend</a>
</p>
<p>
api repository: 
<a href="https://github.com/ranjafunc/ranja-backend">https://github.com/ranjafunc/ranja-backend</a>
</p>
<br />

# 📝 Summary

“Zenly” 앱에 영감을 받아 구글 맵 채팅 플랫폼을 기획하였습니다. 기본 Zenly 앱에서 구현한 채팅 기능에 더해서 사용자가 자신이 공유하고 싶은 맛집, 피시방, 술집 등을 구글 맵을 활용하여 마킹하고 다른 사용자가 구경할 수 있다면 재밌지 않을까 싶어서 개발하게 되었습니다. 현재 원하는 사용자의 위치를 저장하고 근처 유저들과 실시간 채팅, 친구 요청, 좌표 이동 등의 상호작용을 할 수 있으며 현재 공유 기능을 개발 중이고 꾸준히 업데이트 중입니다.

<br />

# ⭐️ Key Function

- **지도 현재 위치 중심 좌표 기준으로 근처 유저 조회**
- **사용자간 실시간 채팅 기능 제공**
  - 친구 관계인 유저 간에만 허용
- **사용자 친구 위치 확인 가능**

<br />

# 🛠 Tech Stack

### Frontend

`Typescript` `React.js` `Styled-components` `axios` `Redux-saga` `Socket.io` `ESLint` `GoogleMap`

### **Backend**

`Node.js` `Express.js` `Passport.js` `Socket.io` `MongoDB` `Mongoose`

### Deploy

`Heroku` `MongoDB atlas` `IMGbb(이미지 서버 및 업로드 API 제공)`

<br />

# 🤔 Learned

- `Typescript` `EsLint`를 활용하면서 왜 체계적이고 클린한 개발을 추구하게 되는지 이해하게 되었습니다.
- `Redux-Saga`를 통해 비동기적인 상태관리를 컨트롤하고 작성하는 법을 배웠습니다.
- `Styled-Components Theme`를 통하여 스타일을 좀 더 체계적이고 글로벌하게 관리하는 법을 배웠습니다.
- `MongoDB`와 `Mongoose`를 통하여 NoSQL에서 데이터를 조회하고 조합하며 프론트에서 처리하는 방식에 대하여 좀 더 익숙해졌습니다.
- 같은 도메인이 아닌 서버끼리 쿠키 공유를 할 수 없다거나 CORS 문제, API Server와 Client Server를 분리하지 않으면서 SOEP 문제로 이미지를 불러올 수 없는 등 많은 경험을 하면서 웹 전반적인 정책에 대해서도 익숙해졌습니다.

<br />

# 📷 Screenshot

<p>
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b2c22a58-0185-4505-9cf6-37dd86df258d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-03-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.34.13.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220312T045036Z&X-Amz-Expires=86400&X-Amz-Signature=da8e3e3cc7c2ac10ca1a93862e9e06b794b7db19f6deb5eb54a5e75548e13467&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-03-11%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%25201.34.13.png%22&x-id=GetObject">
</p>

<p>
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3059c3ac-a01a-4bc8-a1b0-1c5f1dd5fe31/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-03-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.35.03.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220312T045218Z&X-Amz-Expires=86400&X-Amz-Signature=f7bdc6dde28916c8272a3f3883c2386ee76fb08b784c5193168f34847ec617c2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-03-11%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%25201.35.03.png%22&x-id=GetObject">
</p>
<p>
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dfac20c3-a2f6-4707-bbe5-31f7021b7bb6/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-03-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.36.05.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220312T045223Z&X-Amz-Expires=86400&X-Amz-Signature=234e0370ab97abca0c6626ea97315c256d674c2be92195fddb0e01ebbe241e52&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-03-11%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%25201.36.05.png%22&x-id=GetObject">
</p>
<p>
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/dfac20c3-a2f6-4707-bbe5-31f7021b7bb6/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-03-11_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_1.36.05.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220311T044112Z&X-Amz-Expires=86400&X-Amz-Signature=745cb07c13663ad2097537be889af28da8eec5a86179b058f7bf2b2496fa6c80&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-03-11%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%25201.36.05.png%22&x-id=GetObject">
</p>
<p>
<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/541f7a10-9cf1-489c-a863-9a883e4220da/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2022-03-10_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_3.58.21.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220312T045227Z&X-Amz-Expires=86400&X-Amz-Signature=35ed928cb8016494ac67bee6d8d00bc36541c13894bf33ca112f1f78c4e02c88&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA%25202022-03-10%2520%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE%25203.58.21.png%22&x-id=GetObject">
</p>
