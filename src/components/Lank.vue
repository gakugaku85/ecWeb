<template>
  <div>
    <p>あなたの順位</p>
    <h1>
      {{ msg }}
    </h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "4位"
    };
  }
};
</script>
