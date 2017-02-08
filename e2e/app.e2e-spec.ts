import { BudgetAppPage } from './app.po';

describe('budget-app App', function() {
  let page: BudgetAppPage;

  beforeEach(() => {
    page = new BudgetAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
