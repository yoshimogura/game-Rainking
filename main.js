// ドキュメントが読みこまれたら実行する関数を定義
window.onload = () => {
  games.forEach((game) => {
    addMarker(game);
  });
};
