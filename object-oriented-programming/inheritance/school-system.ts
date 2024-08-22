class Student {
    private firstName: string
    private lastName: string
    private studentID: number

    constructor (firstName: string, lastName: string, studentID: number){
        this.firstName = firstName
        this.lastName = lastName
        this.studentID = studentID
    }

    getFirstName(): string {
        return this.firstName
    }

    getLastName(): string {
        return this.lastName
    }

    getStudentID(): number {
        return this.studentID
    }

    enroll(): void {
        console.log(`${this.firstName} ${this.lastName} is enrolled.`)
    }

    checkGrades(): void {
        console.log(`${this.firstName} ${this.lastName} is checking grades.`)
    }
}

class Teacher {
    private firstName: string
    private lastName: string
    private teacherID: number
      
    constructor(firstName: string, lastName: string, teacherID: number) {
        this.firstName = firstName
        this.lastName = lastName
        this.teacherID = teacherID
        
    }

        getFirstName(): string {
            return this.firstName
          }
        
          getLastName(): string {
            return this.lastName
          }
        
          getTeacherID(): number {
            return this.teacherID
          }

          assignGrades(): void {
            console.log(`${this.firstName} ${this.lastName} is assigning grades.`)
          }
        
          createLessonPlans(): void {
            console.log(`${this.firstName} ${this.lastName} is creating lesson plans.`)
          }
        }

        class HonorsStudent extends Student {
            private gpa: number
          
            constructor(firstName: string, lastName: string, studentId: number, gpa: number) {
              super(firstName, lastName, studentId)
              this.gpa = gpa
            }

            getGPA(): number {
                return this.gpa
             }

             study(): void {
                console.log(`${this.getFirstName()} ${this.getLastName()} is studying.`)
              }
            }

let student = new Student("John", "Doe", 123456)
student.enroll()
student.checkGrades()

let teacher = new Teacher("Jack", "Dawson", 654321)
teacher.assignGrades()
teacher.createLessonPlans()

let honorsStudent = new HonorsStudent("Johnny", "Jones", 123456, 4.0)
honorsStudent.enroll()
honorsStudent.checkGrades()
honorsStudent.study()

    











    


