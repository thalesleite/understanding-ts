abstract class Department {
  static fiscalYear = 2021;
  // private   *** only visible inside the class
  // protected *** can be inhireted from the class
  protected employees: string[] = [];

  constructor(protected readonly id: string, private name: string) {
    // this.name = n;
    // console.log(Department.fiscalYear);
  }

  // abstract *** force all inhireted class to have it
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log(`IT Department (${this.id})`);
  }
}

class AccountDepartment extends Department {
  private lastReport: string;
  private static instance: AccountDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error("No report found!");
  }

  set mostRecetReport(value: string) {
    if (!value) {
      throw new Error("Please put a valid value");
    }
    this.addReport(value);
  }

  // private constructor *** for guarantee to call the class once
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
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

  // overwriting method
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

// const accounting = new Department("d1", "Accounting");
const accounting = AccountDepartment.getInstance();

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };
// accountingCopy.describe();
