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
  // updatedescription(games[0]);
};
const updateMainGame = (game) => {
  const target = $("#exportrank");
  $("#rank").text(`${game.rank}位`);

  const rank = $("<p>", { text: game.rank });
  // target.append = $(rank);
  console.log(rank);
  // const target = $("#setumei");
  $("#description").text(`${game.description}`);
  $("#imase").text(`${game.imase}`);
  $("#price").text(`${game.price}円(税込み)`);
  $("#company").text(`${game.companyName}`);
  $("#imase").attr("src", game.imase);
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
    const gameinfo = $("<li>", { text: `${game.rank}位：${game.name}` });
    gameinfo.on("click", () => {
      // console.log(game.rank);
      updateMainGame(game);
    });

    parent.append(gameinfo);
    console.log(gameinfo.show());
  } else {
    const parent = $("#chartTable2");
    const gameinfo = $("<li>", { text: `${game.rank}位：${game.name}` });
    gameinfo.on("click", () => {
      // console.log(game.rank);
      updateMainGame(game);
    });
    parent.append(gameinfo);
    // parent.append(li);
  }

  // $("#station-info-title").text(station.name);

  // const addallgames = game.name;
  // addallgames.forEach();

  // const p = $("<p>", { text: game.name });
};
