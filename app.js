// Constants
const TODAY = new Date();
const MS_IN_A_DAY = 1000 * 60 * 60 * 24;

// Parallel Arrays
const courseNames = [
    "HTML & CSS",
    "Bootstrap",
    "JavaScript",
    "React"
];
const courseStatuses = [
    "Open Now",
    "Coming Soon",
    "Open Now",
    "Closed"
];
const courseLaunchDates = [
    "2026-07-20",
    "2026-08-05",
    "2026-07-17",
    "2026-06-20"
];

// daysLeft()
function daysLeft(date) {
    const launchDate = new Date(date);
    const difference = launchDate - TODAY;
    return Math.ceil(difference / MS_IN_A_DAY);
}

// daysLabel()
function daysLabel(days) {
    if (days > 0) {
        return `${days} days left`;
    }
    if (days === 0) {
        return "Launching today";
    }
    return `Already launched ${Math.abs(days)} days ago`;
}

// filterByStatus()
function filterByStatus(status) {
    const result = [];
    for (let i = 0; i < courseStatuses.length; i++) {
        if (courseStatuses[i] === status) {
            result.push(courseNames[i]);
        }
    }
    return result;
}

// All Courses
console.log("========== ALL COURSES ===========");
for (let i = 0; i < courseNames.length; i++) {
    const days = daysLeft(courseLaunchDates[i]);
    console.log(`Course : ${courseNames[i]}`);
    console.log(`Status : ${courseStatuses[i]}`);
    console.log(`Launch Date : ${courseLaunchDates[i]}`);
    console.log(`Days : ${daysLabel(days)}`);
    console.log("-----------------------------");
}

// Open Courses
console.log("============ OPEN COURSES ==========");
console.log(filterByStatus("Open Now"));

// Upcoming Courses
console.log("========== UPCOMING COURSES ===========");
for (let i = 0; i < courseNames.length; i++) {
    const days = daysLeft(courseLaunchDates[i]);
    if (days > 0) {
        console.log(`${courseNames[i]} : ${days} days remaining`);
    }
}