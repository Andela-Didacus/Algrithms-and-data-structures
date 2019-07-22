class Andelan {
    constructor(name, age, location, gender) {
        this.name = name;
        this.age = age;
        this.location = location;
        this.gender = gender;
        this.salary = 2000;
    }

    displayLocation() {
        return this.location;
    }

    editAge(age) {
        this.age = age;
        return this.age;
    }

    static method() {
        console.log("This is an Andelan Class Method")
    }

    
}

class Engineer extends Andelan { // inheritance
    constructor(name, age, location, gender, role, partner) {
        super(name, age, location, gender);
        this.role = role;
        this.partner = partner;
    }

    setSalary() { //encapsulation
        this.salary = this.salary + 30000;
        return this.salary;
    }

    displayInformation() {
        this.setSalary(); 
        console.log(this.name, this.age, this.location, this.role, this.salary , this.gender); // encapsulation
    }

    userInfo() {
        Engineer.displayInformation();
    }
}

Andelan.method();

const didah = new Engineer("Didah", 25, "Nairobi", "Male", "Senior Engineer", "Andela");
didah.displayInformation(); // abstraction

// interchanging between subclasses that share a common super class is know as polymorphism 



/* 

class Andelan {
    displaySalary() {
        .....
    }
}

class Engineer extends Andelan {
    displaySalary() {
        ......
    }
}

class Director extends Andelan {
    displaySalary() {
        ......
    }
}

const showSalary = (andelan) = {
    andelan.displaySalary();
}

showSalary(new Director());
showSalary(new Engineer());

*/
