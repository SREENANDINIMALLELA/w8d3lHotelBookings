<template lang="html">
  <div id ="app">
  <booking-form/>

    <div v-for ="booking in bookings">
      <br>
      <p>{{booking.name}}</p>
      <p>{{booking.email}}</p>
      <button v-on:click="handleDelete(booking._id)">Delete Booking</button>
      <hr>
    </div>

  </div>
</template>

<script>
import {eventBus} from './main';
import BookingsForm from "./components/BookingsForm.vue"
import BookingService from "./services/BookingService.js"
export default {
  name: "app",
  data(){
    return{
      bookings: []
    }
  },
  mounted(){
    this.fetchdata();
    eventBus.$on('guest-added' ,booking => this.bookings.push(booking));

    eventBus.$on('booking-deleted',id => {
      const index = this.bookings.findIndex(booking => booking._id == id);
    this.bookings.splice(index,1);
  })
  },
  methods:{
    fetchdata(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings)
    },
    handleDelete(id){
      BookingService.deleteBooking()
      .then(booking => eventBus.$emit('booking-deleted',id))

    }


  },
  components: {
    'booking-form': BookingsForm

  }
}
</script>

<style lang="css" scoped>
</style>
