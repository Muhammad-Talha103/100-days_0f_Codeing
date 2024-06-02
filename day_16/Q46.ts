let laptop={
    make:"hp",
    model:"ProBook",
    year:2022,
   describe:function(){
    console.log(`This laptop is manufactured by ${this.make} in year ${this.year} it's model is ${this.model}.`);
   }
}

laptop.describe()