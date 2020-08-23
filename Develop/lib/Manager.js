const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, officeNumber);
    officeNumber = this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
  getGithub() {
    return github;
  }
}

module.exports = Manager;
