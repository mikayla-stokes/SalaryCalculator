//Creating Employee class
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    annualSalary() {
        return this.salary * 12;
    }
}

//Creating Manager subclass
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
        console.log(`Name: ${this.name}, Monthly Salary: ${this.salary}, Department: ${this.department}`);
    }

    annualSalary() {
        const baseAnnualSalary = super.annualSalary();
        const bonus = baseAnnualSalary * 0.15;
        const totalAnnualSalary = baseAnnualSalary + bonus;
        console.log(`Bonus: ${bonus}, Total Annual Salary: ${totalAnnualSalary}`);
        return totalAnnualSalary;
    }
}


// Creating two instances of the Manager class with the provided test data
const manager1 = new Manager("Bob Ross", 6600, "Digital Marketing");
manager1.annualSalary();

const manager2 = new Manager("Debbie Little", 7205, "Finance");
manager2.annualSalary();
