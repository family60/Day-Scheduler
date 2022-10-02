//function that uses moment.js to set the current date in the html  
function time(){
    var displayCurrentTime = document.querySelector("#currentDay");
    var currentTime = moment();
    //console.log(currentTime);
    displayCurrentTime.textContent = currentTime.format('MMMM Do YYYY, h:mm:ss a');
}
//set interval so that every second, the time will update (live clock effect)
setInterval(time, 1000);


/*
sets onclick function to every element with the class of "saveBtn"

funtion that finds the row id (time) and the description in text areas
with class .description (description of event) and adds it to local
storage with the key of each entry being the parent id of the row (time as a string)
and the value being the text in the text area (description of event)
*/
$(".saveBtn").on("click", function(){
    var time = $(this).parent().attr("id");
    console.log(time);
    var desc = $(this).siblings(".description").val();
    console.log(desc);
    localStorage.setItem(time, desc);
});

//variable that holds the current hour of the day
var hour = moment().format('H');
console.log(hour);

//Allocates classes based on if each row's hour has been passed, is coming up, or is currently
if(hour < 9){
    $("#9am-description").addClass("future");
} else if(hour == 9){
    $("#9am-description").addClass("present");
} else if(hour > 9){
    $("#9am-description").addClass("past");
}

if(hour < 10){
    $("#10am-description").addClass("future");
} else if(hour == 10){
    $("#10am-description").addClass("present");
} else if(hour > 10){
    $("#10am-description").addClass("past");
}

if(hour < 11){
    $("#11am-description").addClass("future");
} else if(hour == 11){
    $("#11am-description").addClass("present");
} else if(hour > 11){
    $("#11am-description").addClass("past");
}

if(hour < 12){
    $("#12pm-description").addClass("future");
} else if(hour == 12){
    $("#12pm-description").addClass("present");
} else if(hour > 12){
    $("#12pm-description").addClass("past");
}

//moment.js's format('H') returns the time in 24 hour clock, therefore 1pm = 13, 2pm = 14, etc etc...
if(hour < 13){
    $("#1pm-description").addClass("future");
} else if(hour == 13){
    $("#1pm-description").addClass("present");
} else if(hour > 13){
    $("#1pm-description").addClass("past");
}

if(hour < 14){
    $("#2pm-description").addClass("future");
} else if(hour == 14){
    $("#2pm-description").addClass("present");
} else if(hour > 14){
    $("#2pm-description").addClass("past");
}

if(hour < 15){
    $("#3pm-description").addClass("future");
} else if(hour == 15){
    $("#3pm-description").addClass("present");
} else if(hour > 15){
    $("#3pm-description").addClass("past");
}

if(hour < 16){
    $("#4pm-description").addClass("future");
} else if(hour == 16){
    $("#4pm-description").addClass("present");
} else if(hour > 16){
    $("#4pm-description").addClass("past");
}

if(hour < 17){
    $("#5pm-description").addClass("future");
} else if(hour == 17){
    $("#5pm-description").addClass("present");
} else if(hour > 17){
    $("#5pm-description").addClass("past");
}