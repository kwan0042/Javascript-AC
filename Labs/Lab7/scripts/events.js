document.querySelector('#fName').addEventListener("blur", function(){
    if(this.value !== ""){
        fNameError.innerText = "";
    }
});


document.querySelector('#lName').addEventListener("blur", function(){
    if(this.value !== ""){
        lNameError.innerText = "";
    }
});

document.querySelector('#address1').addEventListener("blur", function(){
    if(this.value !== ""){
        address1Error.innerText = "";
    }
});

document.querySelector('#address2').addEventListener("blur", function(){
    if(this.value !== ""){
        address2Error.innerText = "";
    }
});

document.querySelector('#city').addEventListener("blur", function(){
    if(this.value !== ""){
        cityError.innerText = "";
    }
});


document.querySelector('#province').addEventListener("change", function(){
    if(profile.province.options.selectedIndex !== -1){
        provinceError.innerText = "";
    }
});

document.querySelector('#country').addEventListener("change", function(){
    if(profile.country.options.selectedIndex !== -1){
        countryError.innerText = "";
    }
});

document.profile.addEventListener("submit", validateProfile);

document.profile.addEventListener("reset", reset);
function reset() {
  fNameError.innerText = "";
  lNameError.innerText = "";
  address1Error.innerText = "";
  address2Error.innerText = "";
  cityError.innerText = "";
  provinceError.innerText = "";
  countryError.innerText = "";
}
