// Question 141: Discuss the significance of the await reserved word in asynchronous JavaScript.



let fetchData = async () => {
    
    let DataFetch = await fetchSomething()

    console.log(DataFetch);

}

console.log( "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.");
fetchData()