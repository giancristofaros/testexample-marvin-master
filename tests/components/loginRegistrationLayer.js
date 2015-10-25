
//var chalk = require("chalk");

var Component = require('marvin-js').Component;

module.exports = new Component({
	
	// the login form element
	loginForm: { get:function () { return this.element('[data-form-type="login"]'); }},
    
    // the customer care link element
	loginMessage: { get:function () { return this.element(".loginMessage"); }},
    
      // login layer email (login form) field
    emailInput: { get: function () { return this.element("#txtUser"); }},

    // login layer password (login form) field
    passwordInput: { get: function () { return this.element("#txtPassword"); }},

    // login layer submit button
    loginSubmitBtn: { get: function () { return this.element("#buttonSubmitHeader"); }},
    
    // register button
    registerBtn: { get: function () { return this.element('#linkToReg'); }},
    
    /*
        Inizio dichiarazione elementi del form di registrazione 
    */
    
    // register form id, mi serve per controllare se dopo il click sul register button il form di registrazione esiste e            viene visualizzato
    registrationFormElement: { get: function () { return this.element('#registration'); }},
    
    //campo email
    registerEmailInput: { get: function () { return this.element('#registerEmail'); }},
    
    //campo conferma email
    registerEmailConfirm: { get: function () { return this.element('#registerCheckEmail'); }},
    
    //campo password
    registerPassInput: { get: function () { return this.element('#registerPassword'); }},
    
    //campo conferma password
    registerPassConfirm: { get: function () { return this.element('#registerCheckPassword'); }},
    
    //select selezione gender
    // option:nth-child(2) per prendere il secondo o terzo figlio
    selectGender: { get: function () { return this.element('#registerGender option:last-child'); }},
    
    //campo nome
    registerNameInput: { get: function () { return this.element('#registerName'); }},
    
    //campo cognome
    registerSurnameInput: { get: function () { return this.element('#registrationSurname'); }},
    
    //select giorni
    selectDay: { get: function () { return this.element('select#bday option:nth-child(2)'); }},
    
    //select mesi
    selectMonth: { get: function () { return this.element('select#bmonth option:nth-child(2)'); }},
    
    //select anno
    selectYear: { get: function () { return this.element('select#byear option:nth-child(2)'); }},
    
    //select country
    selectCountry: { get: function () { return this.element('select#registerCountry option:nth-child(2)'); }},
    
    //register submit button
    registerSubmitBtn: { get: function () { return this.element('button#buttonRegistrationSubmit'); }},
    
    /*
     * Login with email and password
     */
    login: {
        value: function (email, pw) {
            email = email || "test.us@yoox.com";
            pw = pw || "password";
            this.emailInput.sendKeys(email);
            this.passwordInput.sendKeys(pw);
            return this.loginSubmitBtn.click();
        }
    },
    
    
});