<template>
  <div>
    <h1>
      ページ２
    </h1>
    <circuit></circuit>
    <router-link to="/myhome">Go to home</router-link>
  </div>
</template>

<script>
import circuit from "@/components/Circuit";
export default {
  components: {
    circuit
  }
};
</script>
