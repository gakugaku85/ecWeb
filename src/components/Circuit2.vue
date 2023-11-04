<template>
  <div class="circuit">
    <p v-if="msg.length > 0">
      {{ msg }}
    </p>
    <input type="number" v-model="msg" />
    <!--<button @click="clear()">clear</button>-->
    <div class="contents">
      <canvas id="board"></canvas>
    </div>
  </div>
</template>

<script>
export default {
  props: ["msg1"],
  data() {
    return {
      msg: "入力されてませんよ"
    };
  },
  methods: {
    draw(id) {
      console.log(id);
      //window.onload = () => {
      // canvas準備
      const board = document.getElementById("board"); //getElementById()等でも可。オブジェクトが取れれば良い。
      const ctx = board.getContext("2d");
      var width = window.innerWidth;
      var height = window.innerHeight;
      console.log(window.innerWidth);
      console.log(window.innerHeight);
      var a = (width / height) * 20;
      const scale = 5; // 画像の大きさの設定
      const chara = new Image();
      // 画像読み込み
      if (id == 1) {
        chara.src = "/images/test2.png"; // 画像のURLを指定

        let text1 = 5;
        let text2 = 10;

        chara.onload = () => {
          let dstWidth = chara.width * scale;
          let dstHeight = chara.height * scale;
          board.width = width;
          board.height = height;
          ctx.font = a + "px sans-serif"; //文字の大きさ
          ctx.drawImage(chara, width / 10, height / 10, dstWidth, dstHeight);
          ctx.fillText(text1, width / 4, height / 2.5);
          ctx.fillText(text2, width / 17, height / 2.5);
        };
      } else {
        chara.src = "/images/test3.png"; // 画像のURLを指定

        let text3 = 5;
        let text4 = 10;

        chara.onload = () => {
          let dstWidth = chara.width * scale;
          let dstHeight = chara.height * scale;
          board.width = width;
          board.height = height;

          ctx.font = a + "px sans-serif"; //文字の大きさ
          ctx.drawImage(chara, width / 10, height / 10, dstWidth, dstHeight);
          ctx.fillText(text3, width / 4, height / 2.5);
          ctx.fillText(text4, width / 17, height / 2.5);
        };
      }
      //};
    }
  }
};
</script>
