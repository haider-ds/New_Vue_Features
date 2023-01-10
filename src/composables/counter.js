import { ref } from "vue";

export default function useCounter(incrementBy = 1) {
  const count = ref(0);

  function increment() {
    count.value += incrementBy;
  }

  return { count, increment };
}
