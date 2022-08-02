<template>
  <div class="home">
    <h1>home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts"/>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import {ref} from "vue";
import PostList from "@/components/PostList";
import {getPosts} from "@/composables/getPosts";

export default {
  name: 'HomeView',
  components: {PostList},
  // Runs before any other lifecycle methods
  setup() {
    const {posts, error, load} = getPosts()

    load()

    return {posts, error}
  }
}
</script>
