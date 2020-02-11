
function valid(){

    var emailval = document.forms["regform"]["email"];
    var passwordval = document.forms["regform"]["password"];
    var conpassval = document.forms["regform"]["confirmpass"];
    var firstval = document.forms["regform"]["firstname"]; 
    var lastval = document.forms["regform"]["lastname"];  
    var zipval = document.forms["regform"]["zip"]; 

    var mailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    if (!email.value.match(mailreg))                                   
    { 
        alert("Please enter valid email");
        emailval.focus(); 
        return false; 
    }
    if (password.value == "" && password.value<6)                                   
    { 
        alert("Please enter a valid password."); 
        passwordval.focus(); 
        return false; 
    }
    if (password.value == "" || password.value!= confirmpass.value)                                   
    { 
        alert("Please enter correct confirm password."); 
        conpassval.focus();  
        return false; 
    }
    
    var numbers = /^[0-9]+$/;
    if(firstname.value.match(numbers) || firstname.value=="")
    {
        alert('numerics values are not allowed');
        firstval.focus();  
        return false;
    }
    if(lastname.value.match(numbers)|| lastname.value=="")
    {
        alert('numerics values are not allowed');
        lastval.focus();
        return false;
    }
    var zipcode = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/; 
    if(zip.value.match(zipcode) || zip =="")
    {
        return true;
    }
    else
    {
        alert("characters are not allowed in zipcode"); 
        zipval.focus(); 
        return false;  
    }
}
// valid();