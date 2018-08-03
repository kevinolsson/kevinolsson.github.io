let loginButton = document.getElementById('loginButton'),
    loginButton2 = document.getElementById('loginButton2');
loginButton.addEventListener('click', toggleSidebar);
loginButton2.addEventListener('click', hideSidebar);

let registerButton = document.getElementById('registerButton'),
    registerButton2 = document.getElementById('registerButton2'),
    registerButton3 = document.getElementById('registerButton3');
registerButton.addEventListener('click', toggleSidebar);
registerButton2.addEventListener('click', hideSidebar);
registerButton3.addEventListener('click', regressRegistration);


// Login Sidebar
var sidebarForm__input1 = document.querySelectorAll('.sidebar-login__group')[0];
sidebarForm__input1 = sidebarForm__input1.querySelector('input');
var sidebarForm__input2 = document.querySelectorAll('.sidebar-login__group')[1];
sidebarForm__input2 = sidebarForm__input2.querySelector('input');

sidebarForm__input1.addEventListener('keypress', changeLoginButton);
sidebarForm__input2.addEventListener('keypress', changeLoginButton);
 
 function changeLoginButton() {
    if(sidebarForm__input1.value && sidebarForm__input2.value) {
        let sidebarForm = document.getElementById('sidebarLoginForm');
        let submit = sidebarForm.querySelector('.button');
        submit.classList.remove('button--disabled');
        submit.removeAttribute('disabled');
    }  
 }   

// Registration Step 1 Sidebar
// Login sidebar stuff
var registerForm__input1 = document.querySelectorAll('.sidebar-register__group')[0];
registerForm__input1 = registerForm__input1.querySelector('input');

var registerForm__input2 = document.querySelectorAll('.sidebar-register__group')[1];
registerForm__input2 = registerForm__input2.querySelector('input');

var registerForm__input3 = document.querySelectorAll('.sidebar-register__group')[2];
registerForm__input3 = registerForm__input3.querySelector('input');

registerForm__input1.addEventListener('keypress', changeRegisterButton1);
registerForm__input2.addEventListener('keypress', changeRegisterButton1);
registerForm__input3.addEventListener('keypress', changeRegisterButton1);
 
 function changeRegisterButton1() {
    if(registerForm__input1.value && registerForm__input2.value && registerForm__input3.value) {
        let registerForm = document.getElementById('sidebarRegisterForm1');
        let submit = registerForm.querySelector('.button');
        submit.classList.remove('button--disabled');
        submit.removeAttribute('disabled');
        submit.addEventListener('click',progressRegistration);
    }  
 }  

 function progressRegistration() {
    let register1 = document.getElementById('sidebarRegister1'),
        register2 = document.getElementById('sidebarRegister2');

    register1.classList.remove('sidebar-register--active');
    register2.classList.toggle('sidebar-register--active');
 }

function regressRegistration() {
    let register1 = document.getElementById('sidebarRegister1'),
        register2 = document.getElementById('sidebarRegister2');

    register2.classList.remove('sidebar-register--active');
    register1.classList.toggle('sidebar-register--active');
}

// Registration step 2 
var registerForm__input4 = document.querySelectorAll('.sidebar-register__group')[3],
    registerForm__input5 = document.querySelectorAll('.sidebar-register__group')[4],
    registerForm__input6 = document.querySelectorAll('.sidebar-register__group')[5],
    registerForm__input7 = document.querySelectorAll('.sidebar-register__group')[6],
    registerForm__input8 = document.querySelectorAll('.sidebar-register__group')[7],
    registerForm__input9 = document.querySelectorAll('.sidebar-register__group')[8],
    registerForm__input10 = document.querySelectorAll('.sidebar-register__group')[9],
    registerForm__input11 = document.querySelectorAll('.sidebar-register__group')[10],
    registerForm__input12 = document.querySelectorAll('.sidebar-register__group')[11],
    registerForm__input13 = document.querySelectorAll('.sidebar-register__group')[12],
    registerForm__input14 = document.querySelectorAll('.sidebar-register__group')[13],
    registerForm__input15 = document.querySelectorAll('.sidebar-register__group')[14],
    registerForm__input16 = document.querySelectorAll('.sidebar-register__group')[15];

    registerForm__input4 = registerForm__input4.querySelector('input');
    registerForm__input5 = registerForm__input5.querySelector('input');
    registerForm__input6 = registerForm__input6.querySelector('input');
    registerForm__input7 = registerForm__input7.querySelector('input');
    registerForm__input8 = registerForm__input8.querySelector('input');
    registerForm__input9 = registerForm__input9.querySelector('input');
    registerForm__input10 = registerForm__input10.querySelector('input');
    registerForm__input11 = registerForm__input11.querySelector('input');
    registerForm__input12 = registerForm__input12.querySelector('input');
    registerForm__input13 = registerForm__input13.querySelector('input');
    registerForm__input14 = registerForm__input14.querySelector('input');
    registerForm__input15 = registerForm__input15.querySelector('input');
    registerForm__input16 = registerForm__input16.querySelector('input');

    registerForm__input4.addEventListener('keypress', changeRegisterButton2);
    registerForm__input5.addEventListener('keypress', changeRegisterButton2);
    registerForm__input6.addEventListener('keypress', changeRegisterButton2);
    registerForm__input7.addEventListener('keypress', changeRegisterButton2);
    registerForm__input8.addEventListener('keypress', changeRegisterButton2);
    registerForm__input9.addEventListener('keypress', changeRegisterButton2);
    registerForm__input10.addEventListener('keypress', changeRegisterButton2);
    registerForm__input11.addEventListener('keypress', changeRegisterButton2);
    registerForm__input12.addEventListener('keypress', changeRegisterButton2);
    registerForm__input13.addEventListener('keypress', changeRegisterButton2);
    registerForm__input14.addEventListener('keypress', changeRegisterButton2);
    registerForm__input15.addEventListener('keypress', changeRegisterButton2);
    registerForm__input16.addEventListener('keypress', changeRegisterButton2);

 function changeRegisterButton2() {
    if(registerForm__input4.value && registerForm__input5.value && registerForm__input6.value && registerForm__input7.value && registerForm__input8.value && registerForm__input9.value && registerForm__input10.value && registerForm__input11.value && registerForm__input12.value && registerForm__input13.value && registerForm__input14.value && registerForm__input15.value) {
        let registerForm = document.getElementById('sidebarRegisterForm2');
        let submit = registerForm.querySelector('.button');
        submit.classList.remove('button--disabled');
        submit.removeAttribute('disabled');
    }  
 }  

var activeButton = null;

function toggleSidebar(subject) {

    let sidebar = document.getElementById('sidebar');
    let wrapper = document.getElementsByClassName('wrapper')[0];
    let grid = document.getElementsByClassName('grid')[0];


    // check if sidebar is already visible.
    // console.log(this.getAttribute('subject'));
    if(sidebar.classList.contains('sidebar--has-sidebar') &&  activeButton.getAttribute('id') != this.getAttribute('id') ) {
        
    } else {
        sidebar.classList.toggle('sidebar--has-sidebar');
        wrapper.classList.toggle('wrapper--has-sidebar');
        grid.classList.toggle('grid--has-sidebar');
        setWrapperGridTemplateColumns(window.innerWidth);
    }

    activeButton = this;

    let login = document.getElementById('sidebarLogin');
    let register1 = document.getElementById('sidebarRegister1');

    if(this) {
        if(this.id == 'loginButton' || this.id == 'loginButton2') {
            login.classList.add('sidebar-login--active');
        } else {
            login.classList.remove('sidebar-login--active');
        }

        if(this.id == 'registerButton' || this.id == 'registerButton2') {
            register1.classList.add('sidebar-register--active');
        } else {
            register1.classList.remove('sidebar-register--active');
        }
    }

}

function hideSidebar() {
    let sidebar = document.getElementById('sidebar');
    let wrapper = document.getElementsByClassName('wrapper')[0];
    let grid = document.getElementsByClassName('grid')[0];

    sidebar.classList.remove('sidebar--has-sidebar');
    wrapper.classList.remove('wrapper--has-sidebar');
    grid.classList.remove('grid--has-sidebar');
    setWrapperGridTemplateColumns(window.innerWidth);
}
