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
function Ticket(typeMovie, timeOfDay, guestAge, price) {
  this.typeMovie = typeMovie,
  this.timeOfDay = timeOfDay,
  this.guestAge = guestAge,
  this.price = price
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

function TypeOfMovie(value) {
  if (value === "1") {
    this.value = "new Movie"
  }
  else if (value === "2") {
    this.value = "rerun"
  }
}

function TimeOfDay(time) {
  if (time >= 1000 && time < 1800) {
    this.time = "matinee"
  }
  else if (time >= 1800 && time <=2400) {
    this.time = "primetime"
  }
}

function GuestAge(age) {
  if (age > 1 && age < 15) {
    this.age = "child"
  }
  else if (age >= 15 && age < 65) {
    this.age = "regular"
  }
  else if (age >= 65) {
    this.age = "senior"}
}

Ticket.typeMovie = TypeOfMovie();
Ticket.timeOfDay = TimeOfDay();
Ticket.guestAge = GuestAge();

///UI Logic ///
var guestTickets = new Tickets();

// function showTicket(ticketId) {
//   var ticketItem = tickets.findTicket(ticketId);
//   $("#show-tickets").show();
//   $(".type-movie").html(ticket.typeMovie);
//   $(".time-day").html(ticket.timeOfDay);
//   $(".guest-age").html(ticket.guestAge);
// }

function displayTickets(ticketsToDisplay) {
  var ticketsList = $("ul#outputTix");
  var htmlForTicketInfo = "";
  ticketsToDisplay.tickets.forEach(function(ticket) {
    htmlForTicketInfo += "<li id=" + ticket.id + ">" + ticket.typeMovie.value + " " + ticket.timeOfDay.time + " " + ticket.guestAge.age + "</li>";
  });
  ticketsList.html(htmlForTicketInfo);
};

function displayTickets2(ticketsToDisplay) {
  var ticketsList = $("div#output2");
  var htmlForTicketInfo = "";
  ticketsToDisplay.tickets.forEach(function(ticket) {
    htmlForTicketInfo += "<div class='p-2 bd-highlight' id=" + ticket.id + ">" + ticket.typeMovie.value + " " + ticket.timeOfDay.time + " " + ticket.guestAge.age + "</div>";
  });
  ticketsList.html(htmlForTicketInfo);
};



$(document).ready(function() {
  $("form#formSubmit").submit(function(event) {
    event.preventDefault();

    var moviePick = $("#movieOption").val();
    var ticketTime = $("input#time-of-day").val();
    var ageOfGuest = $("input#age-of-guest").val();

    var movieKind = new TypeOfMovie(moviePick);
    var showTime = new TimeOfDay(ticketTime);
    var howOld = new GuestAge(ageOfGuest);

    var newTicket = new Ticket(movieKind, showTime, howOld);

    guestTickets.addTicket(newTicket);
    displayTickets(guestTickets);
    displayTickets2(guestTickets);
  })
})
