<!-- src/components/WelcomeSection.vue -->
<template>
  <section class="welcome-section">
    <h1>Welcome to MyApp</h1>
    <div class="grid-container">
      <div v-for="(item, index) in gridItems" :key="index" class="grid-item">
        <img :src="item.image" :alt="item.title" />
        <h2>{{ item.title }}</h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WelcomeSection',
  data() {
    return {
      gridItems: [
        { image: 'https://via.placeholder.com/150', title: 'Item 1' },
        { image: 'https://via.placeholder.com/150', title: 'Item 2' },
        { image: 'https://via.placeholder.com/150', title: 'Item 3' },
        { image: 'https://via.placeholder.com/150', title: 'Item 4' },
        { image: 'https://via.placeholder.com/150', title: 'Item 5' },
        { image: 'https://via.placeholder.com/150', title: 'Item 6' },
        { image: 'https://via.placeholder.com/150', title: 'Item 7' },
        { image: 'https://via.placeholder.com/150', title: 'Item 8' },
        { image: 'https://via.placeholder.com/150', title: 'Item 9' },
        { image: 'https://via.placeholder.com/150', title: 'Item 10' },
        { image: 'https://via.placeholder.com/150', title: 'Item 11' },
        { image: 'https://via.placeholder.com/150', title: 'Item 12' },
        { image: 'https://via.placeholder.com/150', title: 'Item 13' },
        { image: 'https://via.placeholder.com/150', title: 'Item 14' },
        { image: 'https://via.placeholder.com/150', title: 'Item 15' },
        { image: 'https://via.placeholder.com/150', title: 'Item 16' },
        { image: 'https://via.placeholder.com/150', title: 'Item 17' },
        { image: 'https://via.placeholder.com/150', title: 'Item 18' },
        { image: 'https://via.placeholder.com/150', title: 'Item 19' },
        { image: 'https://via.placeholder.com/150', title: 'Item 20' },
      ],
    }
  },
}
</script>

<style scoped>
.welcome-section {
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns for large screens */
  gap: 1rem;
  width: 100%;
  box-sizing: border-box;
}

.grid-item {
  text-align: center;
  background: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  /* Make each item square */
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.grid-item img {
  max-width: 80%; /* Adjust the image size inside the square */
  height: auto;
  border-radius: 4px;
}

.grid-item h2 {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #333;
}

@media (max-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr); /* 3 columns for medium screens */
  }
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
  }
}

@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: repeat(1, 1fr); /* 1 column for small screens */
  }
}
</style>
<!--
<style>
.welcome-section {
  padding: 2rem;
  text-align: center;
  width: 100%; /* Ensures full width */
  box-sizing: border-box; /* Include padding in the total width calculation */
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 columns by default */
  /*gap: 1rem;*/
  justify-items: center;
  width: 100%; /* Full width */
  max-width: 100%; /* Prevent grid from shrinking */
  box-sizing: border-box; /* Include padding/borders in width calculation */
}

.grid-item {
  text-align: center;
  background: #f4f4f4;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  max-width: 100%; /* Ensure items stretch */
}

.grid-item:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.grid-item img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.grid-item h2 {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #333;
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
  }
}

@media (max-width: 480px) {
  .grid-container {
    grid-template-columns: repeat(1, 1fr); /* 1 column for small screens */
  }
}
</style>

-->
