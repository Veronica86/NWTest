this.search = function(browser){
    //Open the website
    browser.url('http://magazine.trivago.com/');
    browser.pause(1000);
    //Expect the page to be loaded
    browser.expect.element('body').to.be.visible.before(1000);
    //Expect the search button to be visible
    browser.expect.element('#header > div > div > div.search-icon').to.be.visible.before(1000);
    //Click on the search button
    browser.click('#header > div > div > div.search-icon');
    browser.pause(1000);
    //Fill the message text box
    browser.setValue('#search > div.container-wide > div.input.search-input-wrapper > input', 'barcelona');
    //Press enter key
    browser.keys(browser.Keys.ENTER);
    browser.pause(1000);
    //Expect the article to be visible
    browser.expect.element('#search > div.container-wide > div.search-results > section > div > div:nth-child(1) > a > div > span').to.be.visible.before(1000);
    browser.pause(5000);
    browser.end();
}