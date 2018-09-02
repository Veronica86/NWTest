this.contactFormTest = function (browser) {
    //Open the website
    browser.url('http://magazine.trivago.com/');
    browser.pause(1000);
    //Expect the page to be loaded
    browser.expect.element('body').to.be.visible.before(1000);
    //Expect the contact button to be present
    browser.expect.element('#footer-main > div.container-wide > div:nth-child(2) > div > div:nth-child(2) > a').to.be.visible.before(2000);
    //Remove the cookies message
    browser.click('#app > div.cookie-notice > div > div.Cookie__buttons > div');
    browser.pause(1000);
    //Click on the contact button
    browser.click('#footer-main > div.container-wide > div:nth-child(2) > div > div:nth-child(2) > a');
    browser.pause(1000);
    //Switch to the new opened window for the contat form
    browser.window_handles(function(result) {
        var handle = result.value[1];
        browser.switchWindow(handle);
    });
    //Make sure that the correct window is opened
    browser.assert.urlEquals('http://magazine.trivago.com/contact/');
    //Expect the page to be loaded
    browser.expect.element('body').to.be.visible.before(1000);
    //Expect the message text box to be present and fill it
    browser.expect.element('#app > div.content-wrapper > div > div > div:nth-child(1) > div:nth-child(2) > div > textarea').to.be.visible.before(1000);
    browser.setValue('#app > div.content-wrapper > div > div > div:nth-child(1) > div:nth-child(2) > div > textarea','Did not receive July Newsletter');
    //Expect the name text box to be present and fill it
    browser.expect.element('#app > div.content-wrapper > div > div > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > input').to.be.visible.before(1000);
    browser.setValue('#app > div.content-wrapper > div > div > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > input','Veronica Nyamangara');
    //Expect the email text box to be present and fill it
    browser.expect.element('#contact-email').to.be.visible.before(1000);
    browser.setValue('#contact-email','veronica.mnroni@gmail.com');
    //Expect the confirmation check box to be present and tick it
    browser.expect.element('#confirm').to.be.visible.before(2000);
    browser.click('#confirm');
    //Expect the submit button to be present and click on it
    browser.expect.element('#app > div.content-wrapper > div > div > div:nth-child(1) > button > span').to.be.visible.before(2000);
    browser.click('#app > div.content-wrapper > div > div > div:nth-child(1) > button > span');
    browser.pause(1000);
    //Expect the loading bar to be visible
    browser.expect.element('#app > div.content-wrapper > div > div > div.contact-loading').to.be.visible.before(1000);
    browser.end();
}