<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post"/>
    </div>
  </div>
</template>

<script>
import SinglePost from "@/components/SinglePost";
import {onMounted, onUnmounted, onUpdated} from "vue";

export default {
  name: "PostList",
  components: {SinglePost},
  props: ["posts"],
  setup(props) {
    onMounted(() => {
      console.log("Component mounted!")
    })
    onUnmounted(() => console.log("Component Unmounted!"))
    onUpdated(() => console.log("Component updated"))
  }
}
</script>

<style scoped>

</style>