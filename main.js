// ドキュメントが読みこまれたら実行する関数を定義
window.onload = () => {
  const up5game = games.filter((game) => game.rank <= 5);
  games.forEach((game) => {
    addChart(game);
  });
};
const addChart = (game) => {
  const parent = $("#chartTable");
  console.log(game.name);
};
