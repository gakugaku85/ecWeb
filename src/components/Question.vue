<template>
  <div class="question">
    <p>問題ページ</p>
    <div v-for="(question, i) in questions" :key="i">
      <!-- <router-link to="{path: /questionPage, query:{nowQuestion: {question}}}"
        >・回路2{{ i + 1 }}問目</router-link
      > -->
      <button v-on:click="jumpQuestionPage(question)">
        回路{{ i + 1 }}問目
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: ""
    };
  },
  methods: {
    async openQuestions(circuit) {
      this.questions = await circuit.findQuestions();
    },
    jumpQuestionPage(question) {
      this.$router.push({ path: "questionPage", query: question });
    }
  }
};
</script>
