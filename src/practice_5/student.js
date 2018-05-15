
import Person from "./person.js";
module.exports = class Student extends Person {
  constructor(name, age, cla){
    super(name, age)
    this.klass = cla
  }
  introduce() {
    return super.introduce() + ' I am a Student. I am at Class ' + this.klass + '.'
  }
}