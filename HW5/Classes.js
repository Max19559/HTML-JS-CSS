class Working{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    getName(){ return this.name; }

    getAge(){ return this.age; }

    setName(newName){
        if(newName < 30){
            this.name = newName;
        } else{
            alert("Sorry, set norm name!");
        }
    }

    setAge(newAge){
        if(newAge > 18 && newAge < 65){
            this.age = newAge;
        } else{
            alert("You can't work");
        }
    }  
}


class FactoryWorker extends Working{

    constructor(name, age, category){
        super(name, age);
        this.category = category;
    }

    getCategory(){ return this.category; }

    setCategory(newCategory){
        if(newCategory < 100){
            this.category = newCategory;
        }
    }

    setAge(newAge){
        if(newAge > 16 && newAge < 60){
            this.age = newAge;
        } else{
            alert("You can't work in our Factory");
        }
    }
}

class EnterpriseWorker extends Working{

    constructor(name, age, workerID){
        super(name, age);
        this.workerID = workerID;
    }

    getWorkerID(){ return this.workerID; }

    setWorkerID(newWorkerID){
        this.workerID = newWorkerID;
    }
}


var worker = new Working("Alex", 19);
var factoryWorker = new FactoryWorker("Gevorg", 19, 0);
var enterpriseWorker = new EnterpriseWorker("Gleb", 33, 1234);


worker.setAge(17);
factoryWorker.setAge(17);
enterpriseWorker.setAge(15);
console.log(worker.getAge());
console.log(factoryWorker.getAge());
console.log(enterpriseWorker.getAge());
console.log(factoryWorker);
console.log(enterpriseWorker);
