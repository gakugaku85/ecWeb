<template>
  <div>
    <h1>
      ページ１
    </h1>
    <circuit ref="circuit"></circuit>
    <router-link to="/ans">回答する</router-link>|
    <router-link to="/kairo2">次のページ</router-link>
  </div>
</template>

<script>
import circuit from "@/components/Circuit";
export default {
  name: "Kairo1",
  data: function() {
    return {
      profileId: this.$route.query.id
    };
  },
  components: {
    circuit
  },
  mounted() {
    this.$refs.circuit.draw(this.profileId);
  }
};
</script>
