// Question 135: Explain how you can format a JSON string with proper indentation for readability.

const json = `{
    "name": "John",
    "age": 30,
    "address": {
        "streetAddress": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postalCode": "10021-3100"
    },
    "phoneNumbers": [
        {
            "type": "home",
            "number": "212 555-1234"
        },
        {
            "type": "office",
            "number": "646 555-4567"
        }
    ],
    "children": [],
    "spouse": null
}`;

console.log(JSON.stringify(JSON.parse(json), null, 4));
