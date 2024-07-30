function applyToScholarship(grade1, grade2, grade3, grade4, assistantGrade) {

    const passesAssistantGrade = assistantGrade === "A" || assistantGrade === "B"
    const passesIndividualGrades = grade1 >= 8 && grade2 >= 8 && grade3 >= 8 && grade4 >= 8
    const gradeAverage = (grade1 + grade2 + grade3 + grade4) / 4
    
    const passesGradeAverage = (
        gradeAverage >= 9 ||
        gradeAverage >= 8.5 && passesAssistantGrade
    )
    
    const isScholarshipApproved = (
        passesAssistantGrade && passesIndividualGrades && passesGradeAverage
    )
  
      return ('You are ' + (isScholarshipApproved ? '' : 'not ') + 'entitled to the scholarship')
  }
  
  console.log(applyToScholarship(5, 4, 8, 3, "A")) 
  console.log(applyToScholarship(9, 10, 9, 9, "A")) 
  console.log(applyToScholarship(8, 8, 8, 8, "C")) 
  console.log(applyToScholarship(8.5, 8.5, 8.5, 8.5, "B")) 
  console.log(applyToScholarship(7, 8, 10, 10, "B")) 
  console.log()
  