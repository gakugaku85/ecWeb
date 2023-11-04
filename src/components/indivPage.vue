<template>
  <div>
    <p>個人ページです</p>
    {{ gakuseiNum }}<br />
    {{ gakuseiName }}<br />
    <button v-on:click="logout()">ログアウト</button><br /><br /><br />
    <div class="tangen">
      <tangen></tangen>
    </div>
  </div>
</template>

<script>
import tangen from "../components/Tangen";
export default {
  data() {
    return {
      gakuseiName: localStorage.getItem("gakuseiName"),
      gakuseiNum: localStorage.getItem("gakuseiNum")
    };
  },
  components: {
    tangen
  },
  methods: {
    logout() {
      localStorage.removeItem("gakuseiName");
      localStorage.removeItem("gakuseiNum");
      this.$router.push({
        path: "userLogin"
      });
    }
  }
};
</script>

<style scoped>
.tangen {
  background: wheat;
  width: 15vw;
  height: 40vh;
  position: fixed;
  top: 17vw;
  left: 2vw;
}
</style>
