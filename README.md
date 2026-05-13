# SauceDemo
# SauceDemo Playwright Automation Framework

This project contains Playwright JavaScript automation tests for SauceDemo.

## Tech Stack

- Playwright
- JavaScript
- Page Object Model
- Data-driven testing
- HTML report
- Cross-browser support

## Covered Scenarios

- Valid login
- Invalid login and error message validation
- Product listing validation
- Add single/multiple products to cart
- Cart badge count validation
- Cart product validation
- Checkout happy path
- Logout

## How to Install
```bash
npm install
npx playwright install

Framework Design
Page-specific locators and actions are stored inside page classes.
Test data is stored separately under test-data.
Tests use beforeEach to keep setup reusable.
Assertions validate both navigation and UI behavior.
```bash
npm install
npx playwright install

