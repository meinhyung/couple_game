// ============================================================
//  미니게임 허브 - 정적 랜딩 페이지만 서빙
// ============================================================
const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3005;
server.listen(PORT, () => {
  console.log(`서버 실행 중 → http://localhost:${PORT}`);
});
