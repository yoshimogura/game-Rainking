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

  updateMainGame(games[0]);
  updatedescription(games[0]);
};
const updateMainGame = (game) => {
  const target = $("#exportrank");
  const rank = $("<p>", { text: game.rank });
  target.append = $(rank);
  console.log(rank);
  // if (game.rank <= 3) {
  //   if ((game.rank = 3)) {
  //     game.style.color = "#8c4841";
  //   }
  //   if ((game.rank = 2)) {
  //     game.style.color = "#808080";
  //   }
  //   if ((game.rank = 1)) {
  //     game.style.color = "#e6b422";
  //   }
  // } else game.style.color = "#000000";
};
const updatedescription = (game) => {
  const target = $("#overview");
  const description = $("<p>", { text: game.description });
  target.append = $(description);
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
