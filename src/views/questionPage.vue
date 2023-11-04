<template>
  <div>
    <p>問題ページですです</p>
    <br />
    {{ nowQuestion }}<br />
    問題のパラメータ
    {{ qPara }}<br />
    答えのパラメータ
    {{ aPara }}<br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowQuestion: this.$route.query,
      qPara: this.$route.query.question,
      aPara: this.$route.query.ans
    };
  },
  methods: {}
};
</script>
