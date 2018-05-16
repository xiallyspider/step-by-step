
import Person from "./person.js";
module.exports = class Student extends Person {
  constructor(id, name, age, cla) {
    super(id, name, age)
    this.klass = cla
  }

  introduce() {
    if(this.klass.leader == this){
      return super.introduce() + ' I am a Student. I am Leader of Class ' + this.klass.number + '.'
    } else {
      return super.introduce() + ' I am a Student. I am at Class ' + this.klass.number + '.'
    }
  } 
}