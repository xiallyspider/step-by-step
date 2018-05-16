
import Person from "./person.js";
module.exports = class Teacher extends Person {
  constructor(id, name, age, cla){
    super(id, name, age)
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
}