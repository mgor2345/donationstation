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
    },
  },
}
</script>

<style>
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
}

/* Navbar styling */
/*
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #005f69;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
*/
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
  display: none;
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
    display: block;
  }

  .navbar-menu {
    display: none; /* Hidden by default */
    flex-direction: column;
    gap: 0.5rem;
    background-color: #42b983;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 1rem;
  }

  .navbar-menu.is-active {
    display: flex; /* Visible when active */
  }
}
</style>

<!--

<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a href="#" class="navbar-logo">MyApp</a>
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
      isMenuActive: false,
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
      this.isMenuActive = !this.isMenuActive
      console.log('Menu Active:', this.isMenuActive)
    },
  },
}
</script>

<style>
/* Navbar styles */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #42b983;
  color: white;
  display: flex;
  justify-content: space-between; /* Push elements to edges */
  align-items: center;
  padding: 1rem;
  z-index: 1000; /* Ensure it's above other content */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
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
  display: none;
  align-self: center; /* Align it vertically */
}

/* Show toggle button on smaller screens */
@media (max-width: 768px) {
  .navbar-toggle {
    display: block;
  }

  .navbar-menu {
    display: none;
    flex-direction: column;
    gap: 0.5rem;
    background-color: #42b983;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 1rem;
  }

  .navbar-menu.is-active {
    display: flex;
  }
}

/* Navbar menu styles */
.navbar-menu {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.navbar-menu li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
}

/* Add padding to main content to prevent overlap */
body {
  margin: 0;
  padding-top: 4rem; /* Adjust this based on navbar height */
}
</style>
-->
<!--
<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a href="#" class="navbar-logo">MyApp</a>
      <button class="navbar-toggle" @click="toggleMenu">☰</button>
    </div>
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
      isMenuActive: false,
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
      this.isMenuActive = !this.isMenuActive
    },
  },
}
</script>

<style>
/* Navbar styles */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #42b983;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  z-index: 1000; /* Ensure it's above other content */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
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
  display: none;
}

.navbar-menu {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.navbar-menu li a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
}

/* Responsive styles */
@media (max-width: 768px) {
  .navbar-toggle {
    display: block;
  }

  .navbar-menu {
    display: none;
    flex-direction: column;
    gap: 0.5rem;
    background-color: #42b983;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 1rem;
  }

  .navbar-menu.is-active {
    display: flex;
  }
}

/* Add padding to main content to prevent overlap */
body {
  margin: 0;
  padding-top: 4rem; /* Adjust this based on navbar height */
}
</style>


-->
