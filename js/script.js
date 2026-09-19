// Select the text and get the visitor's current hour.
let greeting = document.getElementById("greeting");
let currentHour = new Date().getHours();

// Change the greeting according to the current time.
if (currentHour < 12) {
    greeting.textContent = "Good morning, I am";
}
else if (currentHour < 18) {
    greeting.textContent = "Good afternoon, I am";
}
else {
    greeting.textContent = "Good evening, I am";
}