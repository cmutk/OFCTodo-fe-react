export const validateDates = (values)=>{
    const RESULT={};
    // console.log("values here",values)
    RESULT.startDate= validateTaskStart(values);
    RESULT.deadline= validateDeadline(values);
    return RESULT;

}
export const validateTaskName = function(values) {
    const ERROR ={status:"error", message:"* Can not be less than 6 characters"}
    const VALID ={status:"valid", message: " Looks fine!"}
    return (values.trim().length<6)?ERROR:VALID;   
    
};
const validateTaskDate = function (values) {
    const today = new Date().toISOString().substr(0, 10);
    let startDate = Date.parse(values.startDate);
    let currentDate = Date.parse(today);
    let finishDate = Date.parse(values.deadline);
    // console.log("StartDate FinishDate here:", values)
    if (startDate > finishDate) {
      return "Generic Error";
    } else if (currentDate > finishDate) {
      return "specific Error";
    } else {
      return "Good to go";
    } 
}

 const validateTaskStart = function(values) {
   const ERROR ={status:"error", message:"* Start date cannot be later than deadline."}
   const VALID ={status:"valid", message: " Looks fine!"}
   const result =validateTaskDate(values);
  //  console.log("validateTaskStart here",result, values)
   return result==="Generic Error"?ERROR:VALID;   
}

 const validateDeadline = function(values){
    const GENERIC_ERROR ={status:"error", message:"* Deadline cannot be earlier than Start Date"}
    const SPECIFIC_ERROR ={status:"error", message:"* Deadline cannot be earlier from Today."}
    const VALID ={status:"valid", message: " Looks fine!"}
    if (validateTaskDate(values) === "Generic Error") return GENERIC_ERROR; 
    else if (validateTaskDate(values) === "specific Error") return SPECIFIC_ERROR;
    else return VALID;    

             
}




// export default validation;
