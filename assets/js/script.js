var currentDate = moment().format("dddd, MMMM Do YYYY");
document.getElementById("currentDay").append(currentDate);

/*function loadEvents() {
    eventText7am = localStorage.getItem("#event-Text-7am"); 
}
loadEvents()*/

$(document).ready(function () {

    $("#save-event-7am").click(function() {
        var eventText7am = $("#event-text-7am").val();
        $("#event-text-7am").text(eventText7am);
        localStorage.setItem("#event-text-7am", eventText7am)
        console.log(eventText7am);
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
        $("#event-text-3pm").text(eventText7am);
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
        localStorage.setItem("#event-text-7pm", eventText7am)
    })
})
    

