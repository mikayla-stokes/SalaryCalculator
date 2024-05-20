class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
        console.log(`Name: ${this.name}, Monthly Salary: ${this.salary}`);
    }

    annualSalary() {
        return this.salary * 12;
    }
}

// Example usage:
const employee = new Employee("John Doe", 5000);
console.log(`Annual Salary: ${employee.annualSalary()}`);
