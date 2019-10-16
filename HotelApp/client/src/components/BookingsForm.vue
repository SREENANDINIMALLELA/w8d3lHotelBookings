<template lang="html">
  <form id="booking-form" v-on:submit="handleSubmit" v-on:action="handleSubmit" method="post">
    <div class="bookingForm"id = "booking-form">
      <label for="name">Name</label>
      <input type="text" id="name"  v-model="name" required/>

      <label for="email">Email</label>
      <input type="text" id="email"  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" v-model="email" required/>

      <label for="check_status">Check-Status</label>
      <input type="checkbox"  id="check_status" v-model="check_status">
      <input type="submit" >
    </div>
  </form>

</template>

<script>
import {eventBus} from '../main';
import BookingService from "../services/BookingService.js";
export default {
  name: "booking-form",
  data(){
    return {
      name: "",
      email: "",
      check_status:false
    }
  },

  methods: {
    handleSubmit(event){
      console.log(event);
      console.log(event.target);
      console.log(event.target.email.value);
      event.preventDefault();
      const payload = {
        name: this.name,
        email: this.email,
        check_status: this.check_status
      }
      BookingService.postBooking(payload).then(booking =>{eventBus.$emit('guest-added',booking)})
      event.target.reset();

    }

  }
};

</script>

<style lang="css" scoped>
input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=submit], select{
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
