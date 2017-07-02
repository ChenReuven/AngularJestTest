import { JestTestPage } from './app.po';

describe('jest-test App', () => {
  let page: JestTestPage;

  beforeEach(() => {
    page = new JestTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
