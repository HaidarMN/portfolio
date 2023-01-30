<template>
  <div class="flex flex-col">
    <Home />
    <Profile />
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Profile from './components/Profile.vue'

export default {
  components: { Home, Profile }
}
</script>