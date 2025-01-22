<template>
  <div class="details-container">
    <h1>Pay for Item {{ id }}</h1>
    <img :src="`./assets/images/Item${id}.png`" :alt="`Item ${id}`" class="item-image" />

    <form class="payment-form" @submit.prevent="handlePayment">
      <div class="form-group">
        <label for="cardholder-name">Cardholder Name</label>
        <input type="text" id="cardholder-name" v-model="cardholderName" required />
      </div>

      <div class="form-group">
        <label for="card-number">Card Number</label>
        <input type="text" id="card-number" v-model="cardNumber" maxlength="16" required />
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="expiry-date">Expiry Date</label>
          <input type="month" id="expiry-date" v-model="expiryDate" required />
        </div>

        <div class="form-group">
          <label for="cvv">CVV</label>
          <input type="text" id="cvv" v-model="cvv" maxlength="3" required />
        </div>
      </div>

      <div class="form-group">
        <label for="amount">Amount</label>
        <input type="number" id="amount" v-model="amount" required />
      </div>

      <button type="submit" class="submit-button">Pay Now</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'SquareDetails',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const cardholderName = ref('')
    const cardNumber = ref('')
    const expiryDate = ref('')
    const cvv = ref('')
    const amount = ref('')

    const handlePayment = () => {
      alert('Payment processed successfully!')
      console.log({
        cardholderName: cardholderName.value,
        cardNumber: cardNumber.value,
        expiryDate: expiryDate.value,
        cvv: cvv.value,
        amount: amount.value,
      })
    }

    return {
      cardholderName,
      cardNumber,
      expiryDate,
      cvv,
      amount,
      handlePayment,
    }
  },
})
</script>

<style scoped>
.details-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.item-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 1px solid #ddd;
}

.payment-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

label {
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
}

input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.form-row .form-group {
  flex: 1;
}

.submit-button {
  padding: 12px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
