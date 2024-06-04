// Question 135: Explain how you can format a JSON string with proper indentation for readability.
var json = "{\n    \"name\": \"John\",\n    \"age\": 30,\n    \"address\": {\n        \"streetAddress\": \"21 2nd Street\",\n        \"city\": \"New York\",\n        \"state\": \"NY\",\n        \"postalCode\": \"10021-3100\"\n    },\n    \"phoneNumbers\": [\n        {\n            \"type\": \"home\",\n            \"number\": \"212 555-1234\"\n        },\n        {\n            \"type\": \"office\",\n            \"number\": \"646 555-4567\"\n        }\n    ],\n    \"children\": [],\n    \"spouse\": null\n}";
console.log(JSON.stringify(JSON.parse(json), null, 4));
/*
{
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
}


*/ 
