//  ===========DAY 5 Task==============

// RESUME
var resume = {
  name: "Gopinath",
  age: "26",
  qualification: ["10th", "12th", "DEEE"],
  JobProfile: "Sales Manager",
  workExperience: "8 Years",
  language: ["English", "Tamil"],
};

// ===================== TASK 1  print RESUME ====================
console.log(resume);

// output
// {name: 'Gopinath', age: '26', qualification: Array(3), JobProfile: 'Sales Manager', workExperience: '8 Years', …}
// JobProfile
// :
// "Sales Manager"
// age
// :
// "26"
// language
// :
// (2) ['English', 'Tamil']
// name
// :
// "Gopinath"
// qualification
// :
// (3) ['10th', '12th', 'DEEE']
// workExperience
// :
// "8 Years"

// ==================== TASK 2 Using FOR LOOP ===================
for (var i = 0; i < resume.qualification.length; i++) {
  console.log(resume.qualification[i]);
}
// // OUTPUT

// 10th script.js:41
// 12th script.js:41
// DEEE script.js:41

// ===================== TASK 3 Using FOR IN  (KEY + VALUE) ========================
for (var i in resume) {
  console.log(i, "  : ", resume[i]);
}
// OUTPUT
//  name   :  Gopinath
//  age   :  26
//  qualification   :  (3) ['10th', '12th', 'DEEE']
//  JobProfile   :  Sales Manager
//  workExperience   :  8 Years
//  language   :  (2) ['English', 'Tamil']
