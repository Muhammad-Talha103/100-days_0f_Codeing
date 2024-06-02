

let current_users = [ "Saim", "Faiz", "Talha", "junaid","Faisal","Faheem","Tabish"];

let new_users = ["Saim","Zia","Jahanzeb","Qasim","Fareed","Faisal","Saqib"];

for (let new_username of new_users) {
    if (current_users.some(username => username === new_username)) {
        console.log("Sorry, the username "  + new_username + " is already taken. Please enter a new username.");
    } else {
        console.log("Great! The username "  + new_username + " is available.");
    }
}