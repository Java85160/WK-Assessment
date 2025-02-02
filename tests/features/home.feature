Feature: Home Page Functionality

  #Positive Scenario
  
  Scenario: Verify that Add a new todo item functionality
    Given I open the application
    When I add a new task "Buy groceries"
    Then I should see "Buy groceries" in the task list

  Scenario: Verify that Mark a task as completed functionality
    Given I open the application
    And I add a new task "Complete assignment"
    When I mark "Complete assignment" as completed
    Then "Complete assignment" should appear as completed

  Scenario: Verify that Edit an existing task
    Given I open the application
    And I add a new task "Old Task"
   #When I edit "Old Task" to "Updated Task"
    #Then I should see "Updated Task" in the task list

  Scenario: Verify that Delete a task
    Given I open the application
    And I add a new task "Remove Task"
    When I delete "Remove Task"
    Then "Remove Task" should not be in the task list

  Scenario: Verify that Clear all completed tasks
    Given I open the application
    And I add multiple tasks
      | Task 1 | Task 2 |
    And I mark "Task 1" as completed
    When I clear all completed tasks
    Then "Task 1" should not be in the task list
    And "Task 2" should still be in the task list

  Scenario: Verify that Filter tasks by status
    Given I open the application
    And I add multiple tasks
      | Active Task | Completed Task |
    And I mark "Completed Task" as completed
    When I filter tasks by "Active"
    Then I should only see "Active Task"
    When I filter tasks by "Completed"
    Then I should only see "Completed Task"

#Negative Scenario

  Scenario: Verify that Add an empty todo item
    Given I open the application
    When I try to add an empty task
    Then I should not see any new task added

  Scenario: Verify that Add a very long task name
    Given I open the application
    When I add a new task with 1000 characters
    Then I should see either truncation, wrapping, or a prevented action

  Scenario: Verify that Edit task
    Given I open the application
    When I add a new task "Sample Task"
    And I edit "Sample Task"
    Then I should see that "Sample Task" remains unchanged

  Scenario: Verify that Unexpected refresh behavior
    Given I open the application
    When I add multiple tasks
      | Task 1 |
      | Task 2 |
    And I refresh the page
    Then I should see no tasks in the list

