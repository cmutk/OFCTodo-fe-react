

function calculateDaysUntilDeadline(deadlineDate) {
    const today = new Date();
    const deadline = new Date(deadlineDate).setHours(23,59,59,999);
    const differenceMilisec = deadline-today;
    const oneDay=1000*60*60*24;
    return differenceMilisec/oneDay; 
}

export function DaysUntilDeadlineToDisplay(deadlineDate){
    const deadlineInDays = calculateDaysUntilDeadline(deadlineDate);
    const hasDeadlinePassed = Math.sign(deadlineInDays) < 0;
    const isBetweenZeroAndOne = Math.abs(deadlineInDays) < 1;
    const result = isBetweenZeroAndOne ? 1 : Math.round(Math.abs(deadlineInDays));
   const label = result + "d"
    return hasDeadlinePassed ? `-${label}` 
    : (!hasDeadlinePassed&&isBetweenZeroAndOne) ? `<${label}`
    : label;
}

export function CalcStatus() {
    
    return "SomeString"; 
}
