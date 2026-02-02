function sayMyName(name) {
    const name = "Miller";
    console.log("My name is " + name);
}
 function sayMyAge(age) {
    const age = "35";
    console.log("My age is " + age);
 }

function loginUser(username, password) {
    const username = "Ricky";
    const password = "999";
    console.log("User " + username + " logged in");
}
loginUser("David", "123456");

function settings() {
    const user = "Ricky"
    console.log("Welcome to the settings, " + user);
}
settings();

function dashboard(user) {
    const user = "Miller";
    console.log("Welcome to the dashboard, " + user);
}
dashboard("David");

sayMyName("David");
sayMyAge(25);