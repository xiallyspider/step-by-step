
module.exports = class Class {
    constructor(number) {
      this.number = number;
    }
    getDisplayName(){
      return "Class " + this.number
    }
    assignLeader(Student){
      if(Student.klass.number == this.number){
        this.leader = Student;
      }else{
         console.log( "It is not one of us.")
      }
    } 
    appendMember(Student){
        Student.klass = this
    }
  }