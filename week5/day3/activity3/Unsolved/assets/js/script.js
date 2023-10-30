// Use Day.js to format the date and assign to the declared variable.

// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?

var today = dayjs();
$('#1a').text(today.format('MMM D, YYYY'));

// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)

var whatDay = dayjs('2027-1-1');
$('#2a').text(dayjs('2027-1-1').format('dddd'))

// TODO: 3. What is the current time in the format: hours:minutes:seconds

$('#3a').text(dayjs().format('H:m:s'))

// TODO: 4. What is the current Unix timestamp?

$('#4a').text(dayjs().unix())

// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.

$('#5a').text(dayjs(1318781876).format('H:mm'))

// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)

var nextMonth=dayjs("2023-11-01");
var difference=nextMonth.diff(today,"days");
$("#6a").text(difference);