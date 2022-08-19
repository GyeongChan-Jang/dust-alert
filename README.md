# <img width="24" alt="logo" src="https://user-images.githubusercontent.com/90392240/185337126-a27ff4eb-f459-4f37-bea2-2d09cc479ddc.png" /> dust-alert(먼지 이놈!)

## 미세먼지 알림 서비스입니다.

<p align="center">
<img src="https://user-images.githubusercontent.com/90392240/185575676-40ce0553-64a7-4bfe-b28a-feb75e28ea3b.png" />
</p>

`모바일 디스플레이 사이즈 기준으로 제작했습니다.`

## ✍️ 사용 기술
<img src="https://img.shields.io/badge/JAVASCRIPT-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/REDUX TOOLKIT-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/> <img src="https://img.shields.io/badge/REDUX THUNK-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/> <img src="https://img.shields.io/badge/TAILWIND CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white"/> <img src="https://img.shields.io/badge/HEADLESS UI-66E3FF?style=for-the-badge&logo=Headless UI&logoColor=white"/> <img src="https://img.shields.io/badge/VERCEL-000000?style=for-the-badge&logo=Vercel&logoColor=white"/>

## 🕹 기능

### **1. 시도 구군명 검색**

- 구군명 단위까지 세부 지역 미세먼지 정보를 제공합니다.

<p align="center">
<img src="https://user-images.githubusercontent.com/90392240/185578782-1b650d16-fa0a-4406-827c-75d9b57b0bd7.gif" />
</p>

### **2. 시도 전체보기**

- 시도 전체 미세먼지 정보를 제공합니다

<p align="center">
<img src="https://user-images.githubusercontent.com/90392240/185578850-5723ccb7-c110-4565-a440-d5ae995d536a.gif" />
</p>

### **3. 미세먼지 수치에 따른 색상 지정**

- 미세먼지(PM10) 24시간 등급 따라 5단계의 색상을 동적으로 반영했습니다.
- 미세먼지 정보가 없는 것은 알수 없음으로 나타냈습니다.

<p align="center">
<img src="https://user-images.githubusercontent.com/90392240/185578885-6ceab86e-0943-48f3-bbb8-ce83b6f2f5ae.gif" />
</p>

### **4. 즐겨찾기 기능**

- 즐겨찾기 해놓은 지역들의 미세먼지 정보만 제공합니다.

<p align="center">
<img src="https://user-images.githubusercontent.com/90392240/185578950-2c878eec-d4b1-4b58-94fb-9e923ee675fe.gif" />
</p>

## 📚 구조 

```
📦 
├─ .gitignore
├─ README.md
├─ index.html
├─ netlify.toml
├─ package-lock.json
├─ package.json
├─ postcss.config.cjs
├─ public
│  ├─ dust.png
│  └─ loading.gif
├─ src
│  ├─ App.tsx
│  ├─ assets
│  │  └─ fonts
│  │     ├─ SCDream1.otf
│  │     ├─ SCDream2.otf
│  │     ├─ SCDream3.otf
│  │     ├─ SCDream4.otf
│  │     ├─ SCDream5.otf
│  │     ├─ SCDream6.otf
│  │     ├─ SCDream7.otf
│  │     ├─ SCDream8.otf
│  │     └─ SCDream9.otf
│  ├─ components
│  │  ├─ Card.tsx
│  │  ├─ Favorite.tsx
│  │  ├─ Home.tsx
│  │  ├─ MyPlace.tsx
│  │  ├─ NavBar.tsx
│  │  ├─ SelectBox.tsx
│  │  └─ TotalSido.tsx
│  ├─ index.css
│  ├─ main.tsx
│  ├─ store
│  │  ├─ dustSlice.tsx
│  │  └─ store.ts
│  └─ vite-env.d.ts
├─ tailwind.config.cjs
├─ tsconfig.json
├─ tsconfig.node.json
├─ vercel.json
└─ vite.config.ts
