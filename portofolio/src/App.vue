<template>
  <div class="flex flex-col">
    <Home />
    <Profile />
    <Skills />
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Profile from './components/Profile.vue'
import Skills from './components/Skills.vue'

export default {
  components: { 
    Home, 
    Profile,
    Skills
  }
}
</script>