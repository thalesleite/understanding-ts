"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2021;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log(`IT Department (${this.id})`);
    }
}
class AccountDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found!");
    }
    set mostRecetReport(value) {
        if (!value) {
            throw new Error("Please put a valid value");
        }
        this.addReport(value);
    }
    static getInstance() {
        if (AccountDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountDepartment("d2", []);
        return this.instance;
    }
    describe() {
        console.log(`Accounting Department (${this.id}`);
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting = AccountDepartment.getInstance();
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.describe();
accounting.printEmployeeInformation();
//# sourceMappingURL=classes.js.map