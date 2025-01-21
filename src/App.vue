<template>
  <div class="app-container">
    <Navbar />
    <div class="welcome-container">
      <WelcomeSection />
    </div>
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

<style scoped>
.welcome-container {
  width: 100%; /* Full width */
  max-width: 1200px; /* Optional: Limit max width for large screens */
  margin: 50px auto; /* Center horizontally and add vertical spacing */
  padding: 3px 0; /* Add internal vertical spacing */
  text-align: center; /* Center content inside */
}

.app-container {
  width: 100%; /* Full width of the page */
  height: auto;
  margin: 0; /* Remove default margins */
  padding: 0; /* Remove default padding */
  box-sizing: border-box; /* Include padding and borders in width/height calculations */
}
</style>
