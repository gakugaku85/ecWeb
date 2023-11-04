<template>
  <div>
    <h1>{{ age }}</h1>
    ここはヘッダーです。 どうもこんにちは
  </div>
</template>
<script>
export default {
  name: "age",
  props: {
    age: String
  }
};
</script>
