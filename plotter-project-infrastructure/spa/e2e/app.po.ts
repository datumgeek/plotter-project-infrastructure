import { browser, element, by } from 'protractor';

export class SpaPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ppi-root h1')).getText();
  }
}
