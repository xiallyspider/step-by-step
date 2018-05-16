
import Person from "./person.js";
module.exports = class Teacher extends Person {
  constructor(id, name, age, cla){
    super(id, name, age)
    this.klasses = cla
  }
  introduce() {
    if(this.klasses){
        let classNumber = this.klasses.reduce((a,b)=>{return a.number+", "+b.number})
        return super.introduce() + ' I am a Teacher. I teach Class ' + classNumber + '.'
    } else {
        return super.introduce() + ' I am a Teacher. I teach No Class.'
    }
  }
}