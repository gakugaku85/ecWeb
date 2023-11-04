<template>
  <div>
    <h1>
      ページ１の回答
    </h1>
    <circuit></circuit>
    <router-link to="/kairo2">次のページ</router-link>
  </div>
</template>

<script>
import circuit from "@/components/Circuit";
export default {
  components: {
    circuit
  },
  data: function() {
    return {
      profileId: this.$route.query.id
    };
  }
};
</script>
