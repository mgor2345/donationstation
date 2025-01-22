<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a href="#" class="navbar-logo">Donation Station</a>
    </div>
    <button class="navbar-toggle" @click="toggleMenu">☰</button>
    <ul class="navbar-menu" :class="{ 'is-active': isMenuActive }">
      <li v-for="item in menuItems" :key="item.text">
        <a :href="item.link">{{ item.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuActive: false, // Default: menu is hidden
      menuItems: [
        { text: 'Home', link: '#' },
        { text: 'About', link: '#about' },
        { text: 'Services', link: '#services' },
        { text: 'Contact', link: '#contact' },
      ],
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive // Toggle visibility
      console.log('Menu toggled:', this.isMenuActive) // Debugging log
    },
  },
}
</script>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.navbar {
  width: 100%; /* Ensure navbar spans the entire width */
  background: #005f69;
  color: white;
  padding: 15px 20px; /* Padding inside the navbar */
  display: flex;
  justify-content: space-between; /* Space out items */
  align-items: center; /* Center items vertically */
  box-sizing: border-box; /* Account for padding */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: fixed; /* Fix the navbar to the top of the screen */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000; /* Make sure navbar is above other content */
  padding-top: 20px; /* Ensure there’s space from the top */
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.navbar-toggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  display: none; /* Hidden by default, shows on small screens */
}

.navbar-menu {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.navbar-menu li a {
  text-decoration: none;
  color: white;
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar-toggle {
    display: block; /* Show hamburger menu on small screens */
  }

  .navbar-menu {
    display: none; /* Hidden by default */
    flex-direction: column;
    gap: 0.5rem;
    background-color: #42b983;
    position: absolute;
    top: 100%; /* Position it below the navbar */
    left: 0;
    right: 0;
    padding: 1rem;
    z-index: 999; /* Ensure menu is below the navbar */
  }

  /* Show menu when active */
  .navbar-menu.is-active {
    display: flex; /* Visible when active */
  }
}
</style>
