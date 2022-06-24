function validateProfile(){
    var valid=true;

    if(profile.firstName.value == ""){
    document.querySelector('#fNameError').innerHTML="*Please enter a First Name*";
        valid=false;
    }

    if(profile.lastName.value ==""){
        document.querySelector('#lNameError').innerHTML="*Please enter a Last Name*";
        valid=false;
    }

    if(profile.address1.value === ""){
        document.querySelector('#address1Error').innerHTML="*Please enter Address1*";
        valid=false;
    }

    if(profile.address2.value == ""){
        document.querySelector('#address2Error').innerHTML="*Please enter Address2*";
        valid=false;
    }

    if(profile.city.value == ""){
        document.querySelector('#cityError').innerHTML="*Please enter a City*";
        valid=false;
    }

    if(profile.province.options.selectedIndex == ""){
        valid = false;
        document.querySelector('#provinceError').innerHTML="*Please select a Province*";
    }

    if(profile.country.options.selectedIndex == ""){
        valid = false;
        document.querySelector('#countryError').innerHTML="*Please select a Country*";
    }

    if(valid){
        alert("Thank you");
    }

    return valid;

};
