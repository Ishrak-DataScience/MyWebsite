let emplyee ={

    baseSalary: 30000,
    OverTime:10,
    rate:20,
    getWage:function(){
        return this.baseSalary+(this.OverTime*this.rate);

    }

};
console.log(emplyee.getWage());