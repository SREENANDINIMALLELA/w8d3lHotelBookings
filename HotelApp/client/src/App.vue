<template lang="html">
  <div id ="app">
  <booking-form/>

    <div v-for ="booking in bookings">
      <br>
      <p>{{booking.name}}</p>
      <p>{{booking.email}}</p>
      <hr>
    </div>

  </div>
</template>

<script>
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
  },
  methods:{
    fetchdata(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings)
    }

  },
  components: {
    'booking-form': BookingsForm

  }
}
</script>

<style lang="css" scoped>
</style>
