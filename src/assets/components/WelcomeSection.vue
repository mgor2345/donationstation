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
        @click="navigateToDetails(item)"
      >
        <img :src="item.image" alt="charity-image" />
        <h2>{{ item.name }}</h2>
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
        { id: 1, image: '/public/SalvationArmy.png', name: 'Salvation Army' },
        { id: 2, image: '/public/SpecialOlympics.jpg', name: 'Special Olympics' },
        {
          id: 3,
          image: '/public/RonaldMcDonald.jpg',
          name: 'Ronald McDonald Charitable Foundation',
        },
        { id: 4, image: '/public/Paws.jpg', name: 'Paws' },
        {
          id: 5,
          image: '/public/GreaterChicagoFoodDepository.png',
          name: 'Greater Chicago Food Depository',
        },
        {
          id: 6,
          image: '/public/HumaneSocietyOfFultonCounty.png',
          name: 'Humane Society of Fulton County',
        },
        { id: 7, image: '/public/RedCross.png', name: 'American Red Cross' },
        { id: 8, image: '/public/DoctorsWithoutBorders.png', name: 'Doctors Without Borders' },
        { id: 9, image: '/public/StJude.jpg', name: 'St. Jude' },
        { id: 10, image: '/public/SaveTheChildren.png', name: 'Save The Children' },
        {
          id: 11,
          image: '/public/AmericanHeartAssociation.png',
          name: 'American Heart Association',
        },
        { id: 12, image: '/public/AlzheimersAssociation2.jpg', name: 'Alzheimers Association' },
        { id: 13, image: '/public/HabitatForHumanity.png', name: 'Habitat for Humanity' },
        { id: 14, image: '/public/ChicagoLegalClinic.jpg', name: 'Chicago Legal Clinic' },
        { id: 15, image: '/public/MidwestFoodBank.png', name: 'Midwest Food Bank' },
        { id: 16, image: '/public/AlsAssociation.jpeg', name: 'ALS Association' },
      ],
    }
  },
  methods: {
    navigateToDetails(item) {
      this.$router.push({
        name: 'SquareDetails',
        params: { id: item.id }, // Pass the id as a parameter
        query: {
          name: item.name,
          image: item.image,
        },
      })
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
