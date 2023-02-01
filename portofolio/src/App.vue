<template>
  <div class="flex flex-col">
    <Home />
    <Profile />
    <Skills />
    <Experience />
    <Work />
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Profile from './components/Profile.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Work from './components/Work.vue'

export default {
  components: { 
    Home, 
    Profile,
    Skills,
    Experience,
    Work,
  }
}
</script>