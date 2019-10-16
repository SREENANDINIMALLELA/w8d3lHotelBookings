<template lang="html">
  <div id ="app">
    <booking-form/>

    <!-- <div v-for ="booking in bookings"> -->

    <table id = "booking-table" >

      <tr>
        <th id="name">Name</th>
        <th id="email">Email</th>
        <th id="status">Status</th>
        <th>  </th>
      </tr>
      <div v-for ="booking in bookings" >
        <tr>

          <td id="name">{{booking.name}}</td>
          <td id="email">{{booking.email}}</td>
          <td id= "status">{{booking.check_status}}</td>
          <td><button v-on:click="handleDelete(booking._id)">Delete Booking</button></td>
        </tr>
      </div>
    </table>

    <!-- </div> -->

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
    },


  },
  components: {
    'booking-form': BookingsForm

  }
}
</script>

<style lang="css" scoped>

table {
  /* border-collapse: collapse; */
  margin: 0 auto;
  width: 100%;
}
td{
  text-align: center;
}
th, td {
  text-align: left;
  padding: 8px;
  text-align: center;
}

tr:nth-child(even){background-color: #DCDCDC}
/* #C3BABA */

th {
  background-color: #736F72;
  color: white;
}
/* #booking-table {
font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
border-collapse: collapse;
width: 60%;
}

#booking-table td, #booking-table th {
border: 1px solid #ddd;
padding: 8px;
}

#booking-table tr:nth-child(even){background-color: #f2f2f2;}

#booking-table th {
padding-top: 12px;
padding-bottom: 12px;
text-align: left;
background-color: #4CAF50;
color: white;
}
#name{
width: 30%
}
#email{
width: 60%
}
#status{
width: 10%
} */
</style>
