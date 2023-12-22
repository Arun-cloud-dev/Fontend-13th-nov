const gmailcalidate = /^[a-zA-Z\d\.-]+@gmail\.com$/;


const emailToValidate = "arunra@ymail.com";


if(gmailcalidate.test(emailToValidate)){
    console.log("valid gmail address");
}else{
    alert("Not a valid gmail address");
}