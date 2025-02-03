# WK-Assessment

Project Overview

This project automates functional testing for the TodoMVC React Application using Playwright, Cucumber (BDD), and JavaScript. The framework follows a Behavior-Driven Development (BDD) approach, making test cases readable and easy to understand.

📝 How We Select Test Scenarios

Test scenarios are selected based on the following key principles:

✅ Positive Test Scenarios (Valid User Actions)

1. Add a new task – Verify a task can be added successfully.

2. Mark a task as completed – Ensure users can mark tasks as done.

3. Edit a task – Check if a task can be updated.

4. Delete a task – Validate task deletion functionality.

5. Filter tasks (All, Active, Completed) – Ensure the filter works as expected.

6. Persistent tasks after refresh – Verify tasks remain after reloading the page.

❌ Negative Test Scenarios (Edge Cases & Invalid Inputs)

1. Add an empty task – Verify an empty task cannot be added.

2. Add a long task name – Test with 1000+ characters.

3. Edit a task– Ensure empty edits are not saved.

4. Unexpected refresh behavior – Verify if tasks persist after a page refresh.

5. Input with special characters – Test handling of special characters in task names.

🎯 Testing Approach

This project follows a Behavior-Driven Development (BDD) approach, ensuring tests are written in plain language and are easy to understand for both developers and non-technical stakeholders.

1️⃣ Test Automation Strategy

Functional Testing – Verifies the core features work as expected.

UI Validation – Ensures elements are present and correctly rendered.

Regression Testing – Runs automated tests after code changes to prevent breaking existing functionality.

2️⃣ Test Structure

Feature Files (.feature) – Written in Gherkin syntax, describing test scenarios.

Step Definitions (.js) – Maps Gherkin steps to Playwright automation scripts.


Test Reports (.html, .json) – Generates reports for analysis.

🚀 Running Tests

Run All Scenarios: 

npm run test

HTML Reports: Located in reports/test-report.html

JSON Reports: Located in reports/cucumber_report.json