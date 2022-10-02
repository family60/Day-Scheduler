function time(){
    var displayCurrentTime = document.querySelector("#currentDay");
    var currentTime = moment();
    //console.log(currentTime);
    displayCurrentTime.textContent = currentTime.format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(time, 1000);
