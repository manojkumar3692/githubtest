import { GithubTestPage } from './app.po';

describe('github-test App', () => {
  let page: GithubTestPage;

  beforeEach(() => {
    page = new GithubTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
