var laptop = {
    make: "hp",
    model: "ProBook",
    year: 2022,
    describe: function () {
        console.log("This laptop is manufactured by ".concat(this.make, " in year ").concat(this.year, " it's model is ").concat(this.model, "."));
    }
};
laptop.describe();
