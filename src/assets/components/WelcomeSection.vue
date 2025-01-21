<!-- src/components/WelcomeSection.vue -->
<template>
  <div class="welcome-section">
    <h1>Welcome to the Donation Station!</h1>
    <p>Choose a charity to donate to:</p>
    <p>
      Note: This is just a proof of concept and donation functionality is disabled at this time.
    </p>
    <div class="grid-container">
      <div
        v-for="(item, index) in gridItems"
        :key="index"
        class="grid-item"
        @click="navigateToDetails(item.id)"
      >
        <img :src="item.image" />
        <h2>{{ item.title }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeSection',
  data() {
    return {
      gridItems: [
        { id: 1, image: '/public/SalvationArmy.png', title: 'Salvation Army' },
        { id: 2, image: '/public/SpecialOlympics.jpg', title: 'Special Olympics' },
        {
          id: 3,
          image: '/public/RonaldMcDonald.jpg',
          title: 'Ronald McDonald Charitable Foundation',
        },
        { id: 4, image: '/public/Paws.jpg', title: 'Paws' },
        {
          id: 5,
          image: '/public/GreaterChicagoFoodDepository.png',
          title: 'Greater Chicago Food Depository',
        },
        {
          id: 6,
          image: '/public/HumaneSocietyOfFultonCounty.png',
          title: 'Humane Society of Fulton County',
        },
        { id: 7, image: '/public/RedCross.png', title: 'American Red Cross' },
        { id: 8, image: '/public/DoctorsWithoutBorders.png', title: 'Doctors Without Borders' },
        { id: 9, image: '/public/StJude.jpg', title: 'St. Jude' },
        { id: 10, image: '/public/SaveTheChildren.png', title: 'Save The Children' },
        {
          id: 11,
          image: '/public/AmericanHeartAssociation.png',
          title: 'American Heart Association',
        },
        { id: 12, image: '/public/AlzheimersAssociation2.jpg', title: 'Alzheimers Association' },
        { id: 13, image: '/public/HabitatForHumanity.png', title: 'Habitat for Humanity' },
        { id: 14, image: '/public/ChicagoLegalClinic.jpg', title: 'Chicago Legal Clinic' },
        { id: 15, image: '/public/MidwestFoodBank.png', title: 'Midwest Food Bank' },
        { id: 16, image: '/public/AlsAssociation.jpeg', title: 'ALS Association' },
      ],
    }
  },
  methods: {
    navigateToDetails(id) {
      this.$router.push({ name: 'SquareDetails', params: { id } })
    },
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

.grid-item:hover {
  background-color: #a9a9a9;
}

.grid-item img {
  max-width: 80%; /* Adjust the image size inside the square */
  height: 8rem;
  width: 8rem;
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
