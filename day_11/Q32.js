var current_users = ["Saim", "Faiz", "Talha", "junaid", "Faisal", "Faheem", "Tabish"];
var new_users = ["Saim", "Zia", "Jahanzeb", "Qasim", "Fareed", "Faisal", "Saqib"];
var _loop_1 = function (new_username) {
    if (current_users.some(function (username) { return username === new_username; })) {
        console.log("Sorry, the username " + new_username + " is already taken. Please enter a new username.");
    }
    else {
        console.log("Great! The username " + new_username + " is available.");
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_username = new_users_1[_i];
    _loop_1(new_username);
}
