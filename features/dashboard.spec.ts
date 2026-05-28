import { test } from '../src/config/page.config';
import { users, dashboardExpected as expected } from '../src/config/page-loader';

test.describe('OrangeHRM - dashboard', () => {
  test('should show dashboard navigation and title after login', async ({ loginPage, dashboardPage }) => {
    await loginPage.step_navigate();
    await loginPage.step_login(users.admin);
    await dashboardPage.verify_onDashboard();
    await dashboardPage.verify_pageTitle(expected.labels.pageTitle);
  });
});
