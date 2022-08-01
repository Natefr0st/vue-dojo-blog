<template>
  <div class="home">
    <h1>home</h1>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
    <button @click="handleClick">stop watching</button>
  </div>
</template>

<script>
import {computed, ref, watch, watchEffect} from "vue";

export default {
  name: 'HomeView',
  // Runs before any other lifecycle methods
  setup() {
    const search = ref("")
    const names = ref(["mario", "luigi", "toad", "bowser", "koopa", "peach", "yoshi"])

    const stopWatch = watch(search, () => {
      console.log("Watch function ran!")
    })

    const stopEffect = watchEffect(() => {
      console.log("watchEffect function ran!", search.value)
    })

    const matchingNames = computed(() => names.value.filter(name => name.includes(search.value)))

    const handleClick = () => {
      stopWatch();
      stopEffect();
    }

    return {names, search, matchingNames, handleClick}
  }
}
</script>
