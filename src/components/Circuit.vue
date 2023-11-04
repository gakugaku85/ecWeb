<template>
  <div class="circuit">
    <p>回路ページ</p>
    <div v-for="(circuit, i) in circuits" :key="i">
      <button v-on:click="openQuestions(circuit)">
        {{ circuit.name }}
      </button>
    </div>
    <div class="question">
      <question ref="question"></question>
    </div>
  </div>
</template>

<script>
import question from "./Question";
export default {
  data() {
    return {
      circuits: ""
    };
  },
  components: {
    question
  },
  methods: {
    async openCircuits(tangen) {
      this.circuits = await tangen.circuits();
    },
    openQuestions(circuit) {
      this.$refs.question.openQuestions(circuit);
    }
  }
};
</script>

<style scoped>
.question {
  background: wheat;
  width: 15vw;
  height: 40vh;
  position: fixed;
  top: 17vw;
  left: 38vw;
}
</style>
