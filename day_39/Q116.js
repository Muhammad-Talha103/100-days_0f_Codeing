// Question 116: Create a switch case that matches several cases to the same code block, representing seasons.
function createSwitchCase(season) {
    switch (season) {
        case "spring":
            console.log("It's spring!");
            break;
        case "summer":
            console.log("It's summer!");
            break;
        case "fall":
            console.log("It's fall!");
            break;
        case "winter":
            console.log("It's winter!");
            break;
        default:
            console.log("It's not a season!");
            break;
    }
}
createSwitchCase("spring");
createSwitchCase("summer");
