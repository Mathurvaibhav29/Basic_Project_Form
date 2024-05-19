const validateDetails=(mobile,firstName)=>{
    if(mobile.length>10){
        alert('Enter Valid number')
    }
    if(!firstName){
        alert('Enter First Name')
    }
}

export default validateDetails;

