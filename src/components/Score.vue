<template>
  <div>
    <p>あなたの予想スコア</p>
    <h1>
      {{ msg }}
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "80点"
    };
  }
};
</script>
