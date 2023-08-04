//  ===========DAY 5 Task==============

// RESUME
let resume = {
  name: "Gopinath",
  age: "26",
  qualification: ["10th", "12th", "DEEE"],
  JobProfile: "Sales Manager",
  workExperience: "8 Years",
  language: ["English", "Tamil"],
};

// // ===================== TASK  create JSON  ====================
let resumeJSON = JSON.stringify(resume)
console.log(resumeJSON);

// ==================== TASK 1 Using FOR LOOP ===================

let numbers = [10,20,30,40,50]
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]/10)
  
}

// ===================== TASK 2 Using FOR IN  (KEY + VALUE) ========================

for( var i in numbers){
  console.log(numbers[i])
}

// ===================== TASK 3 Using FOR OF  (KEY + VALUE) ========================
for(var i of numbers){
  console.log(i)
}
// ===================== TASK 4 Using FOR EACH  (KEY + VALUE) ========================
numbers.forEach((i)=>console.log(i+1))