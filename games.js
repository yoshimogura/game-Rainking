const games = [
  {
    name: "ゼルダの伝説ティアーズオブザキングダム",
    rank: 1,
    description:
      "このゲームは2017年に発売された「ゼルダの伝説ブレスオブザワイルド」の続編です。このゲームの最大の魅力は物を作ったりできる「クラフト要素」です。例えばタイヤと板で車を作ったりブキに大砲を付けたりできます。これによってゲームの攻略の幅が広がってとても面白くなっています。ほかに魅力を上げるとするとやり込み要素の多さや自由度が高いなどあげきれないほどの魅力があります。値段は8000円と少し高い気もしますが8000円以上の面白さがあるので買うべきです",
    price: "7920",
    companyName: "任天堂",
    imase:
      "https://m.media-amazon.com/images/I/61uY-USWknL._AC_UF1000,1000_QL80_.jpg",
    playMember: "1",
  },
  {
    name: "星のカービィディスカバリー",
    rank: 2,
    description:
      "このゲームは星のカービィシリーズ初となる3Dゲームです。3Dになったことにより2Dにはなかったゲーム性も追加されました。このゲームの最大の魅力はステージ上にある特定のものを吸い込むことでできる「ほおばりへんけい」です。例えば車をほおばったら車を運転出来たり電球をほおばったら周りをてらすことができます。またやり込み要素もステージ上にいるワドルディを見つけたり毎ステージにあるタスクをこなすというものがあったりととても豊富です。",
    price: "6500",
    companyName: "ハル研究所、任天堂",
    imase:
      "https://m.media-amazon.com/images/I/61-H-fONluL.__AC_SX300_SY300_QL70_ML2_.jpg",
  },
  {
    name: "あつまれどうぶつの森",
    rank: 3,
    description:
      "このゲームは無人島で自由に暮らしができるゲームです。町を作ってみてもいいし、釣りや虫取りを楽しんでもいいし、畑を作ったり、旅行にいったりなどととてもやり込み要素満載のゲームです。島には人が引っ越してきたりしていろいろなコミュニケーションも取れます。またオンラインで友達の島などに遊びにいったりすることもできて子供から大人まで性別問わずおすすめできるゲームとなります",
    price: "6578",
    companyName: "任天堂",
    imase:
      "https://m.media-amazon.com/images/I/71lpG-B9oDL._AC_UF894,1000_QL80_.jpg",
    playMember: "1",
  },
  {
    name: "スーパーマリオブラザーズワンダー",
    rank: 4,
    description:
      "このゲームは約11年ぶりの2Dマリオの新作です。今作ではファイヤーマリオやアイスマリオなどに加えてアワマリオやゾウマリオ、ドリルマリオの3種類の新アイテムが登場し遊びの幅が広がっています。また初心者に優しいモードもあって誰でも楽しめるゲームとなっています。",
    price: "6578",
    companyName: "任天堂",
    imase:
      "https://m.media-amazon.com/images/I/61FkASsd1zL._AC_UF894,1000_QL80_.jpg",
    playMember: "1~4",
  },

  {
    name: "スーパーマリオオデッセイ",
    rank: 5,
    description:
      "このゲームはマリオの3Dアクションゲームでいたるところにあるパワームーンを集めながらクッパにさらわれたピーチを助けにいくといくゲームです。このゲームの特徴はそこらへんにいるキャラクターに帽子を投げるとキャプチャーといってそのキャラクターを操作できるようになります。その時キャプチャーしたキャラクターの能力も使うことができ例えばカエルにキャプチャーしたら高く飛び跳ねたり泳げるようになったり、電線にキャプチャーしたら電線を移動できます。このゲームには初心者に優しいお助けモードがあり誰でも気軽に楽しむことができます。",
    price: "6578",
    companyName: "任天堂",
    imase:
      "https://m.media-amazon.com/images/I/71ax+LpI8cL._AC_UF894,1000_QL80_.jpg",
    playMember: "1~2",
  },
  {
    name: "ゼルダの伝説ブレスオブザワイルド",
    rank: 6,
    description:
      "このゲームはゼルダの伝説シリーズの新作で主人公リンクが広いオープンワールドで自由に冒険しながらハイラル城にいるゼルダを助けに行く物語です。このゲームの特徴はスーカーストーンというものの能力です。この能力を使って謎を解いたりしていきます",
    price: "7678",
    companyName: "任天堂",
    imase:
      "https://m.media-amazon.com/images/I/81iU0U8VZML._AC_UF894,1000_QL80_.jpg",
    playMember: "1",
  },
  {
    name: "スプラトゥーン３",
    rank: 7,
    description:
      "このゲームは任天堂が開発してるＦＰＳゲームでインクで自分のチームの陣地を広げて最終的にどちらのチームが多く塗りを広げたのかを競うゲームです。このゲームの特徴は弾がインクなので小さい子供でも安全にプレイできます。また自分の好みのロッカーを作ったりバイトをしてみたりファッションを楽しんだりとバトル以外の要素も充実していてやりがいがあります",
    price: "6578",
    companyName: "任天堂",
    imase:
      "https://www.nintendo.co.jp/switch/av5ja/assets/images/index/pc/product/img_package.png",
    playMember: "1",
  },

  {
    name: "スイカゲーム",
    rank: 8,
    description:
      "このゲームは同じフルーツ同士を合わせてスコアを稼いでいくゲームです。このゲームの魅力はこんなに面白くて中毒性があるのに240円という安価で買うことができることです。",
    price: "240",
    companyName: "Aladdin X",
    imase:
      "https://store-jp.nintendo.com/dw/image/v2/BFGJ_PRD/on/demandware.static/-/Sites-all-master-catalog/ja_JP/dw9b05e50e/products/D70010000043363/heroBanner/d5f672aaf8d60243399b854ffcb11671121f560715505cec327509d6144958cc.jpg?sw=1368&strip=false",
  },
  {
    name: "ルイージマンション３",
    rank: 9,
    description:
      "このゲームはマリオのキャラクタールイージがホテルのお化けを退治するゲームです。お化けをライトで光らせてオバキュームという掃除機で吸ってお化けを退治します。そしてお化けにとられたエレベーターのボタンを各階で集めながら最上階にいるマリオを助けにいきます。やり込み要素や仕掛けもたくさんあって長く楽しく遊べるゲームです。",

    price: "6578",
    companyName: "任天堂",
    imase:
      "https://m.media-amazon.com/images/I/61dqmAbKfUL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "星のカービィスターアライツ",
    rank: 10,
    description:
      "このゲームは平和なプププランドに異変が起き始めてその異変の根源を倒しにいくゲームです。このゲーム最大の特徴は敵を仲間にできることです。普段敵だったキャラもフレンズハートを投げることで味方にでき一緒に冒険できて新鮮観を味わえます",
    price: "5209",
    companyName: "任天堂、ハル研究所",
    imase:
      "https://m.media-amazon.com/images/I/81ozmsxQUTL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "ポケットモンスターソード",
    description: "このゲームは主人公が",
    price: "6578",
    companyName: "任天堂、ハル研究所",
    imase:
      "https://m.media-amazon.com/images/I/61TWx6p47ML._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "スプラトゥーン２",
    description:
      "このゲームはスプラトゥーンシリーズの２作目でインクを塗りあって最終的に塗った面積を競うゲームです。前作に比べてブキやステージ、ギアなどやりサーモンランという襲い掛かってくるシャケを倒して金イクラを集めるミニゲームも追加されています。またストーリーも充実していてとても楽しめるゲームです。",
    price: "6578",
    companyName: "任天堂",
    imase: "https://m.media-amazon.com/images/I/71yVtBkLYtL._AC_SY879_.jpg",
  },
  {
    name: "ポケモン不思議のダンジョン救助隊DX",
    description: "",
    price: "6578",
    companyName: "株式会社ポケモン／株式会社スパイク・チュンソフト",
    imase: "https://m.media-amazon.com/images/I/71nLktTp4SL._AC_SY879_.jpg",
  },
  {
    name: "スーパーマリオRPGリメイク",
    description: "",
    price: "6578",
    companyName: "任天堂",
    imase: "https://m.media-amazon.com/images/I/61f5Pn8zU3L.jpg",
  },
  {
    name: "スーパーマリオ 3Dコレクション",
    description: "",
    price: "6480",
    companyName: "任天堂",
    imase:
      "https://m.media-amazon.com/images/I/813hPibYGbL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "スーパーマリオブラザーズUデラックス",
    description: "",
    price: "6578",
    companyName: "任天堂",
    imase:
      "https://m.media-amazon.com/images/I/81ulZIEBiIL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "マリオテニス エース",
    description: "",
    price: "6578",
    companyName: "キャメロット",
    imase:
      "https://m.media-amazon.com/images/I/81odbkBkJvL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "人生ゲーム for Nintendo Switch",
    description: "",
    price: "6600",
    companyName: "タカラトミー",
    imase: "https://www.toysrus.co.jp/i/7/7/1/771279000AML.jpg",
  },
  {
    name: "MINECRAFT",
    description: "",
    price: "3960    ",
    companyName: "Mojang",
    imase:
      "https://m.media-amazon.com/images/I/71vtquB4LXL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "ふたりで！にゃんこ大戦争",
    description: "",
    price: "999",
    companyName: "ポノス",
    imase: "https://m.media-amazon.com/images/I/91B4c0ugUdL.jpg",
  },
  {
    name: "ぷよぷよテトリスS",
    description: "",
    price: "3839",
    companyName: "SEGA",
    imase:
      "https://m.media-amazon.com/images/I/619RQ9pJ6eL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "スーパーボンバーマン R",
    description: "",
    price: "3036",
    companyName: "コナミ",
    imase:
      "https://m.media-amazon.com/images/I/91Lmv1fEsuL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "大乱闘スマッシュブラザーズＳＰＥＣＩＡＬ",
    description: "",
    price: "7920",
    companyName: "任天堂、バンダイナムコ",
    imase:
      "https://m.media-amazon.com/images/I/71utlQnFxOL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "UNDERTALE",
    description: "",
    price: "1620",
    companyName: "Toby Fox",
    imase: "https://m.media-amazon.com/images/I/61Rbg4J7UJL.jpg",
  },
  {
    name: "Nintendo Switch Sports",
    description: "",
    price: "4300",
    companyName: "任天堂",
    imase:
      "https://m.media-amazon.com/images/I/51TYlp-VMpL._AC_UF894,1000_QL80_.jpg",
  },
  {
    name: "ナビつき！ つくってわかる はじめてゲームプログラミング",
    description: "",
    price: "3480",
    companyName: "任天堂",
    imase:
      "https://m.media-amazon.com/images/I/51cuXr7EFoS._AC_UF1000,1000_QL80_.jpg",
  },
  {
    name: "スナックワールド トレジャラーズ ゴールド",
    description: "",
    price: "6578",
    companyName: "レベルファイブ",
    imase:
      "https://www.famitsu.com/img/catalog/item/0000/0000/0010/7753/large/B079Q33DVM.jpg",
  },
  {
    name: "ファミリーコンピュータ Nintendo Switch Online",
    description: "",
    price: "0",
    companyName: "任天堂",
    imase:
      "https://www.nintendo.co.jp/hardware/switch/onlineservice/fc/img/img-icon_fc.png",
  },
  {
    name: "スーパーファミコン Nintendo Switch Online",
    description: "",
    price: "0",
    companyName: "任天堂",
    imase:
      "https://www.nintendo.co.jp/hardware/switch/onlineservice/fc/img/img-icon_sfc.png",
  },
];
