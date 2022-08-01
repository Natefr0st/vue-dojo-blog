<template>
  <div class="home">
    home
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  // Runs before any other lifecycle methods
  setup() {
    let name = "Mario"
    let age = 30

    const handleClick = () => {
      console.log("you clicked me!")
    }

    return {name, age, handleClick}
  }
}
</script>
