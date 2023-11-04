<template>
  <div>
    <p>gasのテストです</p>
    <input v-model="gakuseiNum" placeholder="学生番号" /><br /><br />
    <!-- <input v-model="tangen" placeholder="単元名" /><br /><br /> -->
    <input v-model="pNum" placeholder="入力する数字" /><br /><br /><br />
    <button v-on:click="dataPost()">送る</button><br /><br /><br />
    <input v-model="gSheetName" placeholder="もらうシート名" />
    <input v-model="gColName" placeholder="もらう列の名前" />
    <input v-model="getId" placeholder="もらうid" />
    <button v-on:click="dataGet()">もらう</button><br /><br /><br />
    {{ gSheetName }}<br />
    {{ gColName }}<br />
    {{ getId }}<br />
  </div>
</template>

<script>
export default {
  name: "gasTest",
  data() {
    return {
      gakuseiNum: "",
      pNum: "",
      tangen: "tangen2",
      JsonData: "",
      pSheetName: "UserTangen",
      gSheetName: "",
      getId: "",
      gColName: "",
      PColName: ""
    };
  },

  methods: {
    dataPost() {
      let URL =
        "https://script.google.com/macros/s/AKfycbygnn-ZFpdiah0zoCKVG2ah45oFSgWz5VNF5SS_MCuMD8_oPE95/exec";

      let sendData = {
        sheetName: this.pSheetName,
        rowNum: this.gakuseiNum,
        colName: this.tangen,
        num: this.pNum
      };

      fetch(URL, {
        method: "POST",
        body: JSON.stringify(sendData),
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          console.log("Success:", response);
        })
        .then(json => {
          console.log(json);
          this.JsonData = json; //
          //返ってきたJsonファイルの各値を、表示するために代入。
        })
        .catch(error => console.error("Error:", error));
    },

    dataGet() {
      let URL =
        "https://script.google.com/macros/s/AKfycbygnn-ZFpdiah0zoCKVG2ah45oFSgWz5VNF5SS_MCuMD8_oPE95/exec?gSheetName=" +
        this.gSheetName +
        "&gColName=" +
        this.gColName +
        "&getId=" +
        this.getId;

      fetch(URL)
        .then(response => {
          return response.json();
        })
        .then(json => {
          console.log(json);
          this.JsonData = json; //
          //返ってきたJsonファイルの各値を、表示するために代入。
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
