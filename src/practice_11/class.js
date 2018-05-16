
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
         return "It is not one of us.";
      }
    } 
    appendMember(Student){
        Student.klass = this
    }
    isIn(Student){
        return (this.number === Student.klass.number)
    }
    registerAssignLeaderListener(teacher){
        
    }
  }