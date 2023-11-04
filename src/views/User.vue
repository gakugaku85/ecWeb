<template>
  <div>
    <p>ログイン画面です</p>
    <input v-model="gakuseiNum" placeholder="学生番号" /><br /><br />
    <input
      type="password"
      v-model="pass"
      placeholder="パスワード"
      v-if="t == 'password'"
    />
    <input
      type="text"
      v-model="pass"
      placeholder="パスワード"
      v-if="t == 'text'"
    /><br /><br />
    <label class="checkbox-inline">
      <input
        type="checkbox"
        v-model="t"
        true-value="text"
        false-value="password"
      />パスワード表示</label
    ><br />
    <button v-on:click="callFindByNum()">ログイン</button><br /><br /><br />
    {{ msg }}<br />
    <input v-model="sha256" placeholder="ハッシュにする文字" /><br /><br />
    {{ makeSha256(sha256) }}
  </div>
</template>

<script>
import { User } from "../models/user";
import { sha256 } from "js-sha256";

export default {
  name: "user_login",
  data() {
    return {
      gakuseiNum: "",
      pass: "",
      user: "",
      gakuseiName: "",
      msg: "",
      sha256: "",
      t: "password",
      p: ""
    };
  },
  methods: {
    async callFindByNum() {
      if (this.gakuseiNum != "" || this.pass != "") {
        this.user = await User.findByNum(this.gakuseiNum, this.pass);
        if (this.user != null) {
          localStorage.setItem("gakuseiName", this.user.gakuseiName);
          localStorage.setItem("gakuseiNum", this.user.gakuseiNum);
          this.$router.push({
            path: "indivPage"
          });
        } else {
          this.msg = "ログインできません";
        }
      } else {
        this.msg = "入力してください";
      }
    },
    makeSha256(string) {
      return sha256(string);
    }
  }
};
</script>
