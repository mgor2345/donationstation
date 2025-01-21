<template>
  <div>
    <div class="square-details-header">
      <h1>Details for Square {{ id }}</h1>
      <img :src="image" alt="Square Image" />
    </div>
    <div class="credit-card-form">
      <h2>Enter Your Credit Card Information</h2>
      <form>
        <label for="card-number">Card Number</label>
        <input id="card-number" type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SquareDetails',
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    image() {
      return `./assets/images/square${this.id}.png` // Example logic
    },
  },
})
</script>
