const loginButton = document.querySelector('.login_btn');
const loginPopUp = document.querySelector('.popup-box');
const crossButton = document.querySelector('.cross_btn');

const persnolAccount = document.querySelector(".personal-account");
const myBizAccount = document.querySelector(".mybiz-account");
const myBizPersnolAccount = document.querySelector(".my-biz-personal-account");
const myBizMyBizAccount = document.querySelector(".my-biz-mybiz-account");
const continueButton = document.querySelector(".continue");
const otpVerifyButton = document.querySelector(".otp-button");
const myBizSection = document.querySelector('.mybizz-section');
const  persnolAccountSection = document.querySelector('.personal-account-section');
const otpSection = document.querySelector('.otp-section');

console.log("hello");






function login(){
    console.log("hiiiiiiiiiiii");
    console.log(loginPopUp);
    loginPopUp.style.display="block";
}

function dissapear(){
    loginPopUp.style.display="none";
}

function loginFields(){
    myBizSection.classList.add('hidden');
    persnolAccountSection.classList.remove('hidden');
    otpSection.classList.add('hidden');
}

function signUpFields(){
    myBizSection.classList.remove('hidden');
    persnolAccountSection.classList.add('hidden');
    otpSection.classList.add('hidden');
}

function otpVerify(){
    myBizSection.classList.add('hidden');
    persnolAccountSection.classList.add('hidden');
    otpSection.classList.remove('hidden');
}

loginButton.addEventListener('click', login);

crossButton.addEventListener('click', dissapear);

persnolAccount.addEventListener('click', loginFields)

myBizAccount.addEventListener('click', signUpFields)

myBizPersnolAccount.addEventListener('click', loginFields)

myBizMyBizAccount.addEventListener('click', signUpFields)

continueButton.addEventListener('click', otpVerify)

