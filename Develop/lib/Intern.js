const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    school = this.school;
  }

  getRole() {
    return "Intern";
  }
  getSchool() {
    return school;
  }
}

module.exports = Intern;
