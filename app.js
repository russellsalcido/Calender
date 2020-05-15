var time = moment();
var currentHour = time.format("H");

const date = moment().format("dddd, MMMM Do");
$("#currentDay").text(date);

$(".time-block").each(function () {
    const currentHour = parseInt(moment().format("H"));
    
    const hour = parseInt($(this).attr("data-hour"));
    
    if (hour < currentHour) {
        //past time block
        $(this).find("textarea").addClass("past");
    } else if (hour > currentHour) {
        
        $(this).find("textarea").addClass("past");
    } else {
        
        $(this).find("textarea").addClass("persent");
    }
    console.log(hour, currentHour);
});

var outer = document.querySelector(".outer-div")
var inner = document.querySelector(".inner-div")
var button = document.querySelector(".button")
  
  //save button - local storage
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
  //eventlistener
  $("#button").on("click", function () {
    let time = $(this).siblings(`textarea`).attr(`id`);
    let text = $(this).siblings(`textarea`).val();
    localStorage.setItem(time, text);
    $(this).css('color','red')
    $(this).siblings(1).css(`blue`)
    $(this).siblings(0).css(`purple`)
    
});
