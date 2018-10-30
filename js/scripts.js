////biz logic.......
function Tickets() {
  this.tickets = [],
  this.currentId = 0
}

Tickets.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
  this.tickets.push(ticket);
}

Tickets.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Tickets.prototype.findTicket = function(id) {
  for (var i=0; i< this.tickets.length; i++) {
    if (this.tickets[i]) {
      if (this.tickets[i].id == id) {
        return this.tickets[i];
      }
    }
  };
  return false;
}




// Business Logic for Contacts ---------
function Ticket(typeMovie, timeOfDay, guestAge) {
  this.typeMovie = typeMovie,
  this.timeOfDay = timeOfDay,
  this.guestAge = guestAge,
  this.price = 0

}

// function TypeOfMovie(nu, rerun) {
//   this.nuMovie = nu,
//   this.rerunMovie = rerun
// }
//
// function TimeOfDay(matinee, primeTime) {
//   this.matinee = matinee,
//   this.primeTime = primeTime
// }
//
// function GuestAge(child, regular, senior) {
//   this.child = child,
//   this.regular = regular,
//   this.senior = senior
// }

Ticket.prototype.TypeOfMovie = function() {
  if (this.typeMovie === "1") {
    //this.value = "new Movie"
    this.price += 7
    console.log("New Movie: " + this.price);
  }
  else if (this.typeMovie === "2") {
    //this.value = "rerun"
    this.price += 5
    console.log("Rerun: " + this.price);
  }
}

function TimeOfDay(time) {
  if (time >= 1000 && time < 1800) {
    this.time = "matinee"
    this.price = 5
  }
  else if (time >= 1800 && time <=2400) {
    this.time = "primetime"
    this.price = 7
  }
}

function GuestAge(age) {
  if (age > 1 && age < 15) {
    this.age = "child"
    this.price = 0
  }
  else if (age >= 15 && age < 65) {
    this.age = "regular"
    this.price = 2
  }
  else if (age >= 65) {
    this.age = "senior"
    this.price = 1
  }
}

//Ticket.typeMovie = TypeOfMovie();
Ticket.timeOfDay = TimeOfDay();
Ticket.guestAge = GuestAge();

// Ticket.typeMovie.price + Ticket.timeOfDay.price + Ticket.guestAge.price;



///UI Logic ///
var guestTickets = new Tickets();

// function showTicket(ticketId) {
//   var ticketItem = tickets.findTicket(ticketId);
//   $("#show-tickets").show();
//   $(".type-movie").html(ticket.typeMovie);
//   $(".time-day").html(ticket.timeOfDay);
//   $(".guest-age").html(ticket.guestAge);
// }
function displayTickets2(ticketsToDisplay) {
  var ticketsList = $("div#output2");
  var htmlForTicketInfo = "";
  ticketsToDisplay.tickets.forEach(function(ticket) {
    htmlForTicketInfo += "<div class='p-2 bd-highlight' id=" + ticket.id + ">" + ticket.typeMovie.value + " " + ticket.typeMovie.price + " " + ticket.timeOfDay.time + " " + ticket.guestAge.age + "</div>";
  });
  ticketsList.html(htmlForTicketInfo);
};



$(document).ready(function() {
  $("form#formSubmit").submit(function(event) {
    event.preventDefault();

    var moviePick = $("#movieOption").val();
    var ticketTime = $("input#time-of-day").val();
    var ageOfGuest = $("input#age-of-guest").val();

    //var movieKind = new TypeOfMovie(moviePick);
    var showTime = new TimeOfDay(ticketTime);
    var howOld = new GuestAge(ageOfGuest);


    var newTicket = new Ticket(moviePick, showTime, howOld);
    newTicket.TypeOfMovie();
    console.log("User sees: " + newTicket.price);

    guestTickets.addTicket(newTicket);

    displayTickets2(guestTickets);
  })
})
