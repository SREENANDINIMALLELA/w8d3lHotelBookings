<template lang="html">
  <form id="booking-form" v-on:submit= "handleSubmit" method="post">
    <div id = "booking-form">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name">

      <label for="email">Email</label>
      <input type="text" id="email" v-model="email">

      <input type="submit" >
    </div>
  </form>

</template>

<script>
export default {
  name: "booking-form"
  // props:[]
}
</script>

<style lang="css" scoped>
</style>
