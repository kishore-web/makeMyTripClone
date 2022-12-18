const loginButton = document.querySelector(".login_btn");
const loginPopUp = document.querySelector(".popup-box");
const crossButton = document.querySelector(".cross_btn");
const otpVerifyButton = document.querySelector(".otp-button");
const continueButton = document.querySelector(".continue");
const signUpButton = document.querySelector(".sign-up-button");
const createNewAccountButton = document.querySelector(".create-account-button");

const persnolAccount = document.querySelector(".personal-account");
const myBizAccount = document.querySelector(".mybiz-account");
const myBizPersnolAccount = document.querySelector(".my-biz-personal-account");
const myBizMyBizAccount = document.querySelector(".my-biz-mybiz-account");

const myBizSection = document.querySelector(".mybizz-section");
const persnolAccountSection = document.querySelector(".personal-account-section");
const otpSection = document.querySelector(".otp-section");
const signUpSection = document.querySelector(".sign-up-section");

const verifyInput = document.querySelector(".login-credentials-btn");
const nameForSignUpInput = document.getElementById('name-signup');
const emailForSignUpInput = document.getElementById('email-signup');
const passwordForSignUpInput = document.getElementById('password-signup');
const mobileForSignUpInput = document.getElementById('mobile-signup');
const otpInput = document.querySelector('.otp-input');


const errorDisplayOnSignUpPage = document.getElementById('error-signup');
const errorDisplayOnSigninPage = document.getElementById('error-signin');
const errorDisplayOnOTPPage = document.getElementById('error-otp');

const backClick = document.getElementById('back-click');


const messageDisplayForUserExist = document.querySelector(".message-display");
const userNameDisplay = document.querySelector('.user-name-display');

let userArray = JSON.parse(localStorage.getItem("user")) ?? [];
let userId;

function reset() {
    nameForSignUpInput.value = "";
    emailForSignUpInput.value = "";
    passwordForSignUpInput.value = "";
    mobileForSignUpInput.value = "";
    verifyInput.value = "";
    errorDisplayOnSignUpPage.innerText = "";
    errorDisplayOnSigninPage.innerText = "";
    errorDisplayOnOTPPage.innerText = "";

}

function login() {
  loginPopUp.style.display = "block";
  myBizSection.classList.add("hidden");
  persnolAccountSection.classList.remove("hidden");
  otpSection.classList.add("hidden");
  signUpSection.classList.add("hidden");

 

}

function disappear() {
  reset();
  loginPopUp.style.display = "none";
  
}

function loginFields() {
  myBizSection.classList.add("hidden");
  persnolAccountSection.classList.remove("hidden");
  otpSection.classList.add("hidden");
  signUpSection.classList.add("hidden");
}

function myBizz() {
  myBizSection.classList.remove("hidden");
  persnolAccountSection.classList.add("hidden");
  otpSection.classList.add("hidden");
  signUpSection.classList.add("hidden");
}

function signUpFields() {
  myBizSection.classList.add("hidden");
  persnolAccountSection.classList.add("hidden");
  otpSection.classList.add("hidden");
  signUpSection.classList.remove("hidden");
  errorDisplayOnSignUpPage.innerText="";
  messageDisplayForUserExist.classList.remove('green-background');
  messageDisplayForUserExist.classList.remove('red-background');
  messageDisplayForUserExist.innerText = "";


}

function backClickFunction(){
  reset();
  myBizSection.classList.add("hidden");
  persnolAccountSection.classList.remove("hidden");
  otpSection.classList.add("hidden");
  signUpSection.classList.add("hidden");
  errorDisplayOnSigninPage.innerText = "";
}

function createAccount(e){
    e.preventDefault();

    if(nameForSignUpInput.value == ""){
        errorDisplayOnSignUpPage.innerText = "*Please enter your name";
        return;
    }

    if(emailForSignUpInput.value == ""){
        errorDisplayOnSignUpPage.innerText = "*Please enter your email";
        return;
    }else if(!emailForSignUpInput.value.includes("@")){
      errorDisplayOnSignUpPage.innerText = "*invalid email";
      return;
    }else if(!emailForSignUpInput.value.includes(".")){
      errorDisplayOnSignUpPage.innerText = "*invalid email";
      return;
    }

    if(mobileForSignUpInput.value == ""){
      errorDisplayOnSignUpPage.innerText = "*Please enter your mobile";
      return;
    }else  if(mobileForSignUpInput.value%1!==0){
      errorDisplayOnSignUpPage.innerText = "*Please enter numbers only";
      return;
    }

    if(passwordForSignUpInput.value == ""){
        errorDisplayOnSignUpPage.innerText = "*Please set your password";
        return;
    }

        let userObject = {
            name : nameForSignUpInput.value,
            email : emailForSignUpInput.value,
            password : passwordForSignUpInput.value, 
            mobile : mobileForSignUpInput.value,
            id : Date.now()
        }



    userArray.push(userObject);
    localStorage.setItem("user", JSON.stringify(userArray));
    reset();
    messageDisplayForUserExist.innerText = `New Account Created`;
    messageDisplayForUserExist.classList.remove('red-background');
    messageDisplayForUserExist.classList.add('green-background');
    messageDisplayForUserExist.classList.add('')
    console.log(userArray);

}

function userVerify() {
  let flag = false;
  if(verifyInput.value == ""){
    errorDisplayOnSigninPage.innerText = "*Please enter email or mobile";
    return;
  }


  for (let i = 0; i < userArray.length; i++) {
    if (userArray[i].email == verifyInput.value || userArray[i].mobile==verifyInput.value) {
        userId=userArray[i].id;
      flag = true;
      break;
    }
  }

  if (flag) {
    myBizSection.classList.add("hidden");
    persnolAccountSection.classList.add("hidden");
    otpSection.classList.remove("hidden");
    signUpSection.classList.add("hidden");
  } else {
    messageDisplayForUserExist.innerText = "User not found. Please Sign Up";
    messageDisplayForUserExist.classList.add('red-background');
    messageDisplayForUserExist.classList.remove('green-background');
    myBizSection.classList.add("hidden");
    persnolAccountSection.classList.add("hidden");
    otpSection.classList.add("hidden");
    signUpSection.classList.remove("hidden");

  }
  
  reset();
}

function loginAccount(){

  if(otpInput.value == "") {
     errorDisplayOnOTPPage.innerText = "*Please enter otp";
     return;
  }
  if(otpInput.value%1!==0){
    errorDisplayOnOTPPage.innerText = "*Please enter numbers only";
    return;
  }
  if(otpInput.value.length!==4){
    errorDisplayOnOTPPage.innerText = "*Invalid Otp";
    return;
  }

    userArray.map((val) => {
        if(val.id==userId){
            userNameDisplay.innerText=`Hi, ${val.name}`
        }
    })
    
    disappear();
}

loginButton.addEventListener("click", login);

crossButton.addEventListener("click", disappear);

persnolAccount.addEventListener("click", loginFields);

myBizAccount.addEventListener("click", myBizz);

myBizPersnolAccount.addEventListener("click", loginFields);

myBizMyBizAccount.addEventListener("click", myBizz);

continueButton.addEventListener("click", userVerify);

signUpButton.addEventListener("click", signUpFields);

createNewAccountButton.addEventListener("click", createAccount);

otpVerifyButton.addEventListener("click", loginAccount);

backClick.addEventListener("click", backClickFunction)
