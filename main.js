// ドキュメントが読みこまれたら実行する関数を定義
window.onload = () => {
  const up5game = games.filter((game) => game.rank <= 5);
  up5game.forEach((game) => {
    // console.log(game);
    addChart(game, 1);
  });
  const up6_10game = games.filter((game) => game.rank <= 10 && game.rank >= 6);
  up6_10game.forEach((game) => {
    // console.log(game);
    addChart(game, 2);
  });
  addAllGames();

  updateMaingame(games[0]);
};
const updateMaingame = () => {
  const target = $("#exportrank");
  const rank = $("<p>", { text: game.rank });

  target.append = $(rank);
  console.log(rank);
};

//プレイしたことあるゲーム一覧のプログラム」エリアにすべてゲーム名を追加する
const addAllGames = () => {
  const target = $("#explanation2list");
  games.forEach((game) => {
    const li = $("<li>", { text: game.name });
    target.append(li);
  });
};

const addChart = (game, no) => {
  console.log(no);

  if (no == 1) {
    const parent = $("#chartTable1");
    const ranks = $("<li>", { text: game.rank + "位：" + game.name });
    parent.append(ranks);
    console.log(ranks.show());
  } else {
    const parent = $("#chartTable2");
    const ranks = $("<li>", { text: game.rank + "位：" + game.name });
    parent.append(ranks);
    // parent.append(li);
  }

  // $("#station-info-title").text(station.name);

  // const addallgames = game.name;
  // addallgames.forEach();

  // const p = $("<p>", { text: game.name });
};
