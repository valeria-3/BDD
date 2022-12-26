const { Given } = require('@wdio/cucumber-framework');
const { When } = require('@wdio/cucumber-framework');
const { page } = require('C:/Users/Valeryia_Azheika/Projects/bdd/src/po');

Given ('I open {string} page', function (pageName) {
  return page(pageName).open();
});

When('I click {string} link from the side menu', function (link) {
  return page('dashboard').sideMenu.item(link).click();
});

When('I click add new doctor button from list header', function () {
  return page('doctors').doctorListHeader.addNewDoctorBtn.click();
});


When(/^I( dont)? enter doctor's name in name field$/, async dont => {
  if (dont) {
    return page('doctors').addDoctorModal.input('name').setValue("");
  }
  else return page('doctors').addDoctorModal.input('name').setValue("John Doe");
}); 

When("I enter doctor's phone number in phone field", function(){
  return page('doctors').addDoctorModal.input('phone').setValue(1111111111);
});
When("I enter doctor's email in email field", function(){
  return page('doctors').addDoctorModal.input('email').setValue("john_doe@yopmail.com");
}); 
When("I enter {string} in email field", function(invalidEmail){
  return page('doctors').addDoctorModal.input('email').setValue(invalidEmail);
});
When("I enter doctor's education in education field", function(){
  return page('doctors').addDoctorModal.input('education').setValue("Cambridge");
});

When('I click {string} button in modal window', function (button) {
    return page('doctors').addDoctorModal.clickButton(button);
   });


When('I wait {int} seconds', function (timeToWaitInSeconds) {
  return browser.pause(timeToWaitInSeconds * 1000);
}); 





 
