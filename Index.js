const courseUnits = {
    english: 2,
    french: 1,
    math: 4,
    physics: 4,
    chemistry: 4,
    biology: 3,
    workshop: 1,
    technicalDrawing: 1,
    humanities: 1,
}


const grades ={
    A: 5,
    B: 4,
    C: 3,
    D: 2,
    E: 1,
    F: 0,
}

const englishScore = calculateSubjectScore('english', courseUnits.english);
const frenchScore = calculateSubjectScore('french', courseUnits.french);
const mathScore = calculateSubjectScore('math', courseUnits.math);
const physicsScore = calculateSubjectScore('physics', courseUnits.physics);
const chemistryScore = calculateSubjectScore('chemistry', courseUnits.chemistry);
const biologyScore = calculateSubjectScore('biology', courseUnits.biology);
const workshopScore = calculateSubjectScore('workshop', courseUnits.workshop);
const technicalDrawingScore = calculateSubjectScore('technicalDrawing', courseUnits.technicalDrawing);
const humanitiesScore = calculateSubjectScore('humanities', courseUnits.humanities);

function calculateSubjectScore(course, units) {
    let grade = getUserGrade(course)

    let subjectScore;
    if (grade === 'A'){
        subjectScore = 5 * units;
    }
    else if (grade === 'B') {
        subjectScore = 4 * units;
    }
    else if (grade === 'C') {
        subjectScore = 3 * units;
    }
    else if (grade === 'D') {
        subjectScore = 3 * units;
    }
    else if (grade === 'E') {
        subjectScore = 3 * units;
    }
    else {
        subjectScore = 0;
    }
    return subjectScore;
}

function getUserGrade(course) {
    let grade = prompt ("what was your grade in " + course) ;

   while(!correctGrade(grade)) {
    grade = prompt ("Incorrect grade please enter your grade in " + course);
   }

   return grade;
}

function correctGrade(grade) {
    let validation= grade === 'A' ||
                 grade === 'B' ||
                 grade === 'C' ||
                 grade === 'D' ||
                 grade === 'E' ||
                 grade === 'F';
    return validation;
}

const totalScore = englishScore + frenchScore + mathScore + physicsScore + chemistryScore + biologyScore + workshopScore + technicalDrawingScore + humanitiesScore;

const totalPoints = courseUnits.english + courseUnits.french + courseUnits.math + courseUnits.physics + courseUnits.chemistry + courseUnits.biology + courseUnits.workshop + courseUnits.technicalDrawing + courseUnits.humanities;

const gpa = totalScore / totalPoints;

document.write(gpa)