<template>
  <div class="app-container">
    <Navbar />
    <WelcomeSection />
  </div>
</template>

<script lang="ts">
import Navbar from './Navbar.vue'
import WelcomeSection from './WelcomeSection.vue'

export default {
  components: {
    Navbar,
    WelcomeSection,
  },
}
</script>

<style>
.app-container {
  width: 100%; /* Full width of the page */
  height: auto;
  margin: 0; /* Remove default margins */
  padding: 0; /* Remove default padding */
  box-sizing: border-box; /* Include padding and borders in width/height calculations */
}
</style>
