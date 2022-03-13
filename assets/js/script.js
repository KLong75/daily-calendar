// use moment js to get current date and append to top of page
var currentDate = moment().format("dddd, MMMM Do YYYY");
document.getElementById("currentDay").append(currentDate);

// color code time blocks past, present, or future    
timeCheck = function() {
    const currentHour = moment().hours()
    $('.time-block').each(function () {
        const eventHour = parseInt($(this).attr('id').split('-')[1])
        if (eventHour < currentHour) {
            $(this).addClass('past')
        } else if (eventHour === currentHour) {
            $(this).addClass('present')
            $(this).removeClass('past')
        } else {
            $(this).removeClass('present')
            $(this).removeClass('past')
            $(this).addClass('future')
        }
    })   
}

// load saved events from local storage
loadEvents = function() {
    $('#hour-7 .description').val(localStorage.getItem('#event-text-7am'))
    $('#hour-8 .description').val(localStorage.getItem('#event-text-8am'))
    $('#hour-9 .description').val(localStorage.getItem('#event-text-9am'))
    $('#hour-10 .description').val(localStorage.getItem('#event-text-10am'))
    $('#hour-11 .description').val(localStorage.getItem('#event-text-11am'))
    $('#hour-12 .description').val(localStorage.getItem('#event-text-12pm'))
    $('#hour-13 .description').val(localStorage.getItem('#event-text-1pm'))
    $('#hour-14 .description').val(localStorage.getItem('#event-text-2pm'))    
    $('#hour-15 .description').val(localStorage.getItem('#event-text-3pm'))
    $('#hour-16 .description').val(localStorage.getItem('#event-text-4pm'))
    $('#hour-17 .description').val(localStorage.getItem('#event-text-5pm'))
    $('#hour-18 .description').val(localStorage.getItem('#event-text-6pm')) 
    $('#hour-19 .description').val(localStorage.getItem('#event-text-7pm'))     
}

$(document).ready(function () {
    timeCheck()
    loadEvents()
    $("#save-event-7am").click(function() {
        var eventText7am = $("#event-text-7am").val();
        $("#event-text-7am").text(eventText7am);
        localStorage.setItem("#event-text-7am", eventText7am)
    })
    $("#save-event-8am").click(function() {
        var eventText8am = $("#event-text-8am").val();
        $("#event-text-8am").text(eventText8am);
        localStorage.setItem("#event-text-8am", eventText8am)
    })
    $("#save-event-9am").click(function() {
        var eventText9am = $("#event-text-9am").val();
        $("#event-text-9am").text(eventText9am);
        localStorage.setItem("#event-text-9am", eventText9am)
    })
    $("#save-event-10am").click(function() {
        var eventText10am = $("#event-text-10am").val();
        $("#event-text-10am").text(eventText10am);
        localStorage.setItem("#event-text-10am", eventText10am)
    })
    $("#save-event-11am").click(function() {
        var eventText11am = $("#event-text-11am").val();
        $("#event-text-11am").text(eventText11am);
        localStorage.setItem("#event-text-11am", eventText11am)
    })
    $("#save-event-12pm").click(function() {
        var eventText12pm = $("#event-text-12pm").val();
        $("#event-text-12pm").text(eventText12pm);
        localStorage.setItem("#event-text-12pm", eventText12pm)
    })
    $("#save-event-1pm").click(function() {
        var eventText1pm = $("#event-text-1pm").val();
        $("#event-text-1pm").text(eventText1pm);
        localStorage.setItem("#event-text-1pm", eventText1pm)
    })
    $("#save-event-2pm").click(function() {
        var eventText2pm = $("#event-text-2pm").val();
        $("#event-text-2pm").text(eventText2pm);
        localStorage.setItem("#event-text-2pm", eventText2pm)
    })
    $("#save-event-3pm").click(function() {
        var eventText3pm = $("#event-text-3pm").val();
        $("#event-text-3pm").text(eventText3pm);
        localStorage.setItem("#event-text-3pm", eventText3pm)
    })
    $("#save-event-4pm").click(function() {
        var eventText4pm = $("#event-text-4pm").val();
        $("#event-text-4pm").text(eventText4pm);
        localStorage.setItem("#event-text-4pm", eventText4pm)
    })
    $("#save-event-5pm").click(function() {
        var eventText5pm = $("#event-text-5pm").val();
        $("#event-text-5pm").text(eventText5pm);
        localStorage.setItem("#event-text-5pm", eventText5pm)
    })
    $("#save-event-6pm").click(function() {
        var eventText6pm = $("#event-text-6pm").val();
        $("#event-text-6pm").text(eventText6pm);
        localStorage.setItem("#event-text-6pm", eventText6pm)
    })
    $("#save-event-7pm").click(function() {
        var eventText7pm = $("#event-text-7pm").val();
        $("#event-text-7pm").text(eventText7pm);
        localStorage.setItem("#event-text-7pm", eventText7pm)
    })
})

















