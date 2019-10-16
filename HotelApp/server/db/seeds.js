use hotels;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "sree",
    email: "sree@gmail.com",
    check_status: false
  },
  {
    name: "nanan",
    email: "mnbdhas@gmail.com",
    check_status: false
  }
]);
