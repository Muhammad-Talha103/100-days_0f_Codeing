// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

let map = new Map();
map.set("Canada", "Ottawa");
map.set("France", "Paris");
map.set("United States", "Washington, D.C.");
map.set("United Kingdom", "London");

function checkMap(map:Map<string,string>) {
    if (map.has("Canada")) {
        console.log(map.get("Canada"));
    }
    else {
        console.log("Canada is not in the map");
    }
}

checkMap(map);

