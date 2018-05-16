
import Person from "./person.js";
module.exports = class Teacher extends Person {
  constructor(id, name, age, cla){
    super(id, name, age)
    this.klasses = cla
    console.log(this.klasses)
  }
  introduce() {
    if(this.klasses){
        let classNumber = this.klasses.reduce((a,b)=>{return a.number+", "+b.number})
        console.log(super.introduce() + ' I am a Teacher. I teach Class ' + classNumber + '.')
        return super.introduce() + ' I am a Teacher. I teach Class ' + classNumber + '.'
    } else {
        console.log(super.introduce() + ' I am a Teacher. I teach No Class.')
        return super.introduce() + ' I am a Teacher. I teach No Class.'
    }
  }
  isTeaching(Student){
    let studentClass={number:Student.klass}
    if(this.klasses.includes(studentClass)){

    }
  }
}