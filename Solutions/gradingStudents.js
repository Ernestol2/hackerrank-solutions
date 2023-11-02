function gradingStudents(grades) {
    return grades.map((grade) => {
        let nextMultiple = (Math.ceil(grade/5) * 5) 
        if(nextMultiple < 40) {
            return grade
        } else if((nextMultiple - grade) < 3) {
            return nextMultiple 
        } else {
            return grade;
        }
    })
}

console.log(gradingStudents([73, 67, 38, 33]));