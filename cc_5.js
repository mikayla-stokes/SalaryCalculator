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

// Example usage:
const manager = new Manager("John Doe", 5000, "HR");
console.log(`Annual Salary: ${manager.annualSalary()}`);
