
import Person from "./person.js";
module.exports = class Worker extends Person {
  constructor(name, age){
    super(name, age)
  }
  introduce() {
    return super.basic_introduce() + 'I am a Worker. I have a job.'
  }
}