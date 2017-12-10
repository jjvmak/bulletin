import { ServerTestPage } from './app.po';

describe('server-test App', () => {
  let page: ServerTestPage;

  beforeEach(() => {
    page = new ServerTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
