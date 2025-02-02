const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");


Given("I open the application", async function () {
  await this.page.goto("https://todomvc.com/examples/react/dist/");
});

When("I add a new task {string}", async function (taskName) {
  await this.page.fill(".new-todo", taskName);
  await this.page.keyboard.press("Enter");
});

Then("I should see {string} in the task list", async function (taskName) {
  const task = await this.page.locator(`.todo-list li:has-text("${taskName}")`);
  await expect(task).toBeVisible();
});

When("I mark {string} as completed", async function (taskName) {
  const taskCheckbox = this.page.locator(`.todo-list li:has-text("${taskName}") input[type="checkbox"]`);
  await taskCheckbox.check();
});

Then("{string} should appear as completed", async function (taskName) {
  const task = this.page.locator(`.todo-list li:has-text("${taskName}")`);
  await expect(task).toHaveClass(/completed/);
});

When("I edit {string} to {string}", async function (oldTask, newTask) {
  const task = this.page.locator(`.todo-list li:has-text("${oldTask}") label`);
  await task.dblclick();
  const inputField = this.page.locator(".todo-list li.editing .edit");
  await inputField.fill(newTask);
  await inputField.press("Enter");
});

When("I delete {string}", async function (taskName) {
  await this.page.hover(`.todo-list li:has-text("${taskName}")`);
  await this.page.click(`.todo-list li:has-text("${taskName}") .destroy`);
});

Then("{string} should not be in the task list", async function (taskName) {
  const task = this.page.locator(`.todo-list li:has-text("${taskName}")`);
  await expect(task).not.toBeVisible();
});

Given("I add multiple tasks", async function (dataTable) {
  const tasks = dataTable.rawTable.flat();
  for (const task of tasks) {
    await this.page.fill(".new-todo", task);
    await this.page.keyboard.press("Enter");
  }
});

When("I clear all completed tasks", async function () {
  await this.page.click(".clear-completed");
});

Then("{string} should still be in the task list", async function (taskName) {
  const task = await this.page.locator(`.todo-list li:has-text("${taskName}")`);
  await expect(task).toBeVisible();
});

When("I filter tasks by {string}", async function (filterType) {
  await this.page.click(`.filters a:has-text("${filterType}")`);
});

Then("I should only see {string}", async function (taskName) {
  const visibleTasks = await this.page.locator(".todo-list li").count();
  expect(visibleTasks).toBe(1);
  const task = await this.page.locator(`.todo-list li:has-text("${taskName}")`);
  await expect(task).toBeVisible();
});



When("I try to add an empty task", async function () {
  await this.page.fill(".new-todo", "");
  await this.page.keyboard.press("Enter");
});

Then("I should not see any new task added", async function () {
  const tasks = await this.page.locator(".todo-list li").count();
  expect(tasks).toBe(0);
});

When("I add a new task with 1000 characters", async function () {
  const longTask = "A".repeat(1000);
  await this.page.fill(".new-todo", longTask);
  await this.page.keyboard.press("Enter");
});

Then("I should see either truncation, wrapping, or a prevented action", async function () {
  const task = this.page.locator(".todo-list li");
  if (await task.count() === 0) {
    console.log("Task was prevented from being added.");
  } else {
    const text = await task.innerText();
    console.log(`Task added with length: ${text.length}`);
  }
});


When("I edit {string}", async function (taskName) {
  const taskLabel = this.page.locator(`.todo-list li:has-text("${taskName}") label`);
  if (await taskLabel.count() === 0) {
    console.log(`Task "${taskName}" does not exist.`);
    return;
  }
  await taskLabel.dblclick();
  const inputField = this.page.locator(".todo-list li");
  await inputField.press("Enter");
});

Then("I should see that {string} remains unchanged", async function (taskName) {
  const task = await this.page.locator(`.todo-list li:has-text("${taskName}")`);
  await expect(task).toBeVisible();
});


When("I refresh the page", async function () {
  await this.page.reload();
});

Then("I should see no tasks in the list", async function () {
  const tasks = await this.page.locator(".todo-list li").count();
  expect(tasks).toBe(0);
});