this.newsletter = function(browser) {
    browser.url('http://magazine.trivago.com/');
    browser.expect.element('body').to.be.visible.before(1000);
    browser.pause(1000);
    browser.click('#app > div.cookie-notice > div > div.Cookie__buttons > div');
    browser.expect.element('#app > div.content-wrapper > div > div:nth-child(7) > section > div > div > div.newsletter-inputs > div.newsletter-email-submit > div.newsletter-email > input').to.be.visible.before(1000);
    browser.setValue('#app > div.content-wrapper > div > div:nth-child(7) > section > div > div > div.newsletter-inputs > div.newsletter-email-submit > div.newsletter-email > input', 'gtaaad@gmail.com');
    browser.expect.element('#confirm').to.be.visible.before(1000);
    browser.click('#confirm');
    browser.expect.element('#app > div.content-wrapper > div > div:nth-child(7) > section > div > div > div.newsletter-inputs > div.newsletter-email-submit > div.newsletter-submit > button').to.be.visible.before(1000);
    browser.click('#app > div.content-wrapper > div > div:nth-child(7) > section > div > div > div.newsletter-inputs > div.newsletter-email-submit > div.newsletter-submit > button');
    browser.pause(2000);
    browser.expect.element('#app > div.content-wrapper > div > div:nth-child(7) > section > div > p').to.be.visible.before(1000);
    browser.end();
}