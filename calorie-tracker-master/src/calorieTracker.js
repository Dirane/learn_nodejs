
 
const calculateWeightLostInAMonth = (cycling, running, swimming, extraCalorieIntake) => {
   let weightLostInAMonth = 0;
 if(cycling > 0 && running > 0 && swimming > 0 && extraCalorieIntake > 0){
   // Calculate total calories burned per week
   const caloriesBurnedPerWeek = (cycling * 2) + (running * 2) + (swimming * 2);
 
   // Calculate total extra calories burned in a month
   const totalExtraCaloriesBurned = caloriesBurnedPerWeek * 4 - (extraCalorieIntake * 30);
 
   // Calculate number of pounds lost in a month
   weightLostInAMonth = totalExtraCaloriesBurned / 1000;
 }
 else{
   weightLostInAMonth = -1;
 }
 
   return weightLostInAMonth;
 };
module.exports = calculateWeightLostInAMonth

