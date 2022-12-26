const { Then } = require('@wdio/cucumber-framework');
const { page } = require('../po');
const compareText = require('./utils/compare-text');

/* Then('Page title should {string} {string}', async function (shouldBeParam, titleText) {
  const pageTitle = await browser.getTitle();
  return compareText(pageTitle, titleText, shouldBeParam);
}); */
Then("name of newly created doctor should correspond to the specified one", async function () {
return expect(page('doctors').specialistCard(8).name).toHaveTextContaining('John Doe');
});

Then("education of newly created doctor should correspond to the specified one", async function () {
  return expect(page('doctors').specialistCard(8).education).toHaveTextContaining('Cambridge', {
    ignoreCase: true,
  });
  });

Then(/^modal window should( not)? be displayed$/, async param => {
  let assert = expect(page('doctors').addDoctorModal.rootEl);
  if (param) {
    assert = assert.not;
  }
  return assert.toBeDisplayed();
}); 
Then("error message should be displayed under email field", async function() {
  return expect(page('doctors').addDoctorModal.label('labelEmail')).toHaveText('Email address is invalid');
})
 