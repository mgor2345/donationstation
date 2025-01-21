<template>
  <div>
    <div class="square-details-header">
      <img :src="square.image" alt="Square" class="square-image" />
      <h1>{{ square.title }}</h1>
    </div>
    <form class="payment-form">
      <h2>Enter Payment Information</h2>
      <div>
        <label for="cardNumber">Card Number</label>
        <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" />
      </div>
      <div>
        <label for="expiryDate">Expiry Date</label>
        <input type="text" id="expiryDate" placeholder="MM/YY" />
      </div>
      <div>
        <label for="cvv">CVV</label>
        <input type="text" id="cvv" placeholder="123" />
      </div>
      <button type="submit">Submit Payment</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'SquareDetails',
  data() {
    return {
      square: {
        image: '',
        title: '',
      },
    }
  },
  mounted() {
    const route = useRoute()
    this.square = route.params.square // Retrieve square data passed via the router
  },
})
</script>

<style>
.square-details-header {
  text-align: center;
  margin-bottom: 20px;
}

.square-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
}

.payment-form {
  max-width: 400px;
  margin: 0 auto;
}

.payment-form label {
  display: block;
  margin-bottom: 5px;
}

.payment-form input {
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.payment-form button {
  padding: 10px 20px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.payment-form button:hover {
  background-color: #1e3a8a;
}
</style>
