<template>
  <div class="about">
    <!-- 各値を入力してもらう。 -->
    <p>{{ startTime }}~{{ stopTime }}</p>
    <button v-on:click="start">スタート時間</button>
    <button v-on:click="stop">ストップ時間</button><br /><br />
    タイトル:<input v-model="title" placeholder="タイトル" /><br /><br />
    内容:<br />
    <textarea v-model="content" placeholder="内容"></textarea><br /><br />
    <button v-on:click="dataPost()">送る</button><br /><br /><br />
    <input v-model="mm" placeholder="0" />月:<input
      v-model="dd"
      placeholder="0"
    />日<br /><br />

    <!-- もらう -->
    <button v-on:click="dataGet()">もらう</button><br />
    <!-- もらってきた各値の表示 -->
    {{ startTime2 }}<br />
    {{ stopTime2 }}<br />
    {{ title2 }}<br />
    {{ content2 }}<br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      startTime: "00:00",
      stopTime: "00:00",
      title: "",
      content: "",
      JsonData: "",
      startTime2: "00:00",
      stopTime2: "00:00",
      title2: "",
      content2: "",
      mm: "",
      dd: ""
    };
  },
  methods: {
    //ボタンが押された時の時間の取得と記録
    start() {
      let date = new Date();
      this.startTime = date.getHours() + ":" + date.getMinutes();
    },
    stop() {
      let date = new Date();
      this.stopTime = date.getHours() + ":" + date.getMinutes();
    },

    //データを送信
    dataPost() {
      //webアプリとして導入した時のURL
      let URL =
        "https://script.google.com/macros/s/AKfycbxInX_yUl9noiPAADXfzSalAc02KS8AZ93V_qv3q4V1yJFKoSe-/exec";

      //入力された各値をSendDATAに入れる。
      let SendDATA = {
        startTime: this.startTime,
        stopTime: this.stopTime,
        title: this.title,
        content: this.content
      };

      //POSTする。詳細→[https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch]
      fetch(URL, {
        //muteHttpExceptions: true,
        method: "POST",
        body: JSON.stringify(SendDATA), //SendDATAをjsonに変換
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => console.log("Success:", response))
        .catch(error => console.error("Error:", error));
    },

    //dataの取得
    dataGet() {
      //webアプリとして導入した時のURL
      let URL =
        "https://script.google.com/a/g.metro-cit.ac.jp/macros/s/AKfycbxInX_yUl9noiPAADXfzSalAc02KS8AZ93V_qv3q4V1yJFKoSe-/exec?data=" +
        this.mm +
        "_" +
        this.dd;
      //URLの最後を?data=8_7のようにしていて、data=8_7を送れる。

      //GETする。詳細→[https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch]
      fetch(URL)
        .then(response => {
          return response.json();
        })
        .then(json => {
          console.log(json);
          this.JsonData = json; //
          //var data = JSON.parse(this.JsonData);
          //返ってきたJsonファイルの各値を、表示するために代入。
          this.startTime2 = this.JsonData.startTime;
          this.stopTime2 = this.JsonData.stopTime;
          this.title2 = this.JsonData.title;
          this.content2 = this.JsonData.content;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
