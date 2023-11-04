<template>
  <div>
    <p>単元ページ</p>
    <div v-for="(tangen, i) in tangens" :key="i">
      <button v-on:click="openCircuits(tangen)">
        {{ i + 1 }}.{{ tangen.name }}
      </button>
    </div>
    <div class="circuit">
      <circuit ref="circuit"></circuit>
    </div>
  </div>
</template>

<script>
import { Tangen } from "../models/tangen";
import circuit from "./Circuit";
export default {
  components: {
    circuit
  },
  data() {
    return {
      tangens: []
    };
  },
  created() {
    this.getTangen();
  },
  methods: {
    async getTangen() {
      this.tangens = await Tangen.tangenAll();
    },
    openCircuits(tangen) {
      this.$refs.circuit.openCircuits(tangen);
    }
  }
};
</script>

<style scoped>
.circuit {
  background: wheat;
  width: 15vw;
  height: 40vh;
  position: fixed;
  top: 17vw;
  left: 20vw;
}
</style>
