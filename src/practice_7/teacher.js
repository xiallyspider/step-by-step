

import Person from "./person.js";
module.exports = class Teacher extends Person {
  constructor(name, age, cla){
    super(name, age)
    this.klass = cla
    console.log(this.klass)
  }
  introduce() {
    if(this.klass){
      return super.introduce() + ' I am a Teacher. I teach Class ' + this.klass.number + '.'
    } else {
      return super.introduce() + ' I am a Teacher. I teach No Class.'
    }
  }
  introduceWith(student){
    if(student.klass == this.klass){
      return super.introduce() + ' I am a Teacher. I teach ' + student.name + '.'
    } else {
      return super.introduce() + " I am a Teacher. I don't teach " + student.name + '.'
    }
  }
}