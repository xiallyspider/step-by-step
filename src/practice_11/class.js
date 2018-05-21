
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
        if(this.leaderListener){
          let info= 'I am ' +this.leaderListener.name + '. I know ' + Student.name + ' become Leader of Class '+ this.number +'.'
          console.log(info)
        }
      }else{
        console.log( "It is not one of us.")
      }
    } 
    appendMember(Student){
        Student.klass = this
        if(this.listener){
          let info= 'I am ' + this.listener.name + '. I know ' + Student.name + ' has joined Class ' + this.number + '.'
          console.log(info)
        }
    }
    isIn(klass){
        return (klass.includes(this))
    }
    registerJoinListener(listener){
        this.listener = listener
    }
    registerAssignLeaderListener(leaderListener){
      this.leaderListener = leaderListener
    }
  }