/*
This JS script formats the date to be displayed in the format: "{Day of the Week}, {Month} {Day}, {Year}"
Example: Saturday, January 01, 2024
This format is human-readable and commonly used in written English.
*/

// Get current date
var currentDate = new Date();

// Define days and months
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Format date
var formattedDate = days[currentDate.getDay()] + ', ' + months[currentDate.getMonth()] + ' ' + currentDate.getDate() + ', ' + currentDate.getFullYear();

// Return formatted date
formattedDate;
