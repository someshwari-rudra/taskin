const UserName = document.getElementById('UserName')
const  MobileNo= document.getElementById('MobileNo')
const DOB = document.getElementById('DOB')
const FavFalvor = document.getElementById('favorit_Flavor')
const gender = document.getElementById('gender')
const TermsConditons = document.getElementById('terms_Conditons')
const Submit = document.getElementById('Submit')
const Reset = document.getElementById('Reset')

Submit.addEventListener('click', (e) => {
    e.preventDefault()
    checkInputs()
})
function checkInputs(){
    const UserNameValue = UserName.value.trim()
    const MobileNoValue = MobileNo.value.trim()
    const DOBValue = DOB.value.trim()
    const FavFalvorValue = FavFalvor.value.trim()
    // const genderValue = gender.value.trim()
    const TermsConditonsValue = TermsConditons.value.trim()

    if (UserNameValue === "") {
        setError(UserName, "FirstName is required");
    } else if (UserNameValue.length < 5) {
        setError(UserName ,"Minimum 5 charcter length required")
    }else if (UserNameValue.length > 10) {
            setError(UserName ,"Maximum 10 charcter length required")
    } else {
         setsuccess(UserName)
    }
    if (MobileNoValue === "") {
         setError(MobileNo ,"Mobile no is required.")
    }else if(MobileNoValue.length != 10) {
         setError(MobileNo ,"length must be exactly 10 characters")
    } else {
        setsuccess(MobileNo)
    }
    date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
    if (date_regex.test(DOBValue)) {
         setError(DOBValue ,"DOB is required")
    }

    function setError(element, message) {
        const inputControl = element.parentElement;
        const errorDisplay = inputControl.querySelector('.error');
        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
    }
    function setsuccess(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}
}