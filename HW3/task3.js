var Working = function (name, age){
    this.name = name;
    this.age = age;

    this.getName = function (){
        return this.name;
    }

    this.getAge = function(){
        return this.age;
    }

    this.setName = function(newName){
        if(newName < 30){
            this.name = newName;
        } else{
            alert("Sorry, set norm name!");
        }
    }
}

Working.prototype.setAge = function(newAge){
    if(newAge > 18 && newAge < 65){
        this.age = newAge;
    } else{
        alert("You can't work");
    }
}


var FactoryWorker = function(name, age, category){
    Working.apply(this, arguments);
    this.category = category;

    this.getCategory = function(){
        return this.category;
    }

    this.setCategory = function(newCategory){
        if(newCategory < 100){
            this.category = newCategory;
        }
    }
}

var EnterpriseWorker = function(name, age, workerID){
    Working.apply(this, arguments);
    this.workerID = workerID;

    this.getWorkerID = function(){
        return this.workerID;
    }

    this.setWorkerID = function(newWorkerID){
        this.workerID = newWorkerID;
    }
}



FactoryWorker.prototype = Object.create(Working.prototype);
EnterpriseWorker.prototype = Object.create(Working.prototype);
FactoryWorker.prototype.constructor = FactoryWorker;
EnterpriseWorker.prototype.constructor = EnterpriseWorker;


FactoryWorker.prototype.setAge = function(newAge){
    if(newAge > 16 && newAge < 60){
        this.age = newAge;
    } else{
        alert("You can't work in our Factory");
    }
}






var worker = new Working("Alex", 19);
var factoryWorker = new FactoryWorker("Gevorg", 19, 0);
var enterpriseWorker = new EnterpriseWorker("Gleb", 33, 1234);


/*worker.setAge(17);
factoryWorker.setAge(17);
enterpriseWorker.setAge(15);
console.log(worker.getAge());
console.log(factoryWorker.getAge());
console.log(factoryWorker);
console.log(enterpriseWorker);*/



