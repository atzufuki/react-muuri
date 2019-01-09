Feature: Render grid
  Scenario: shows 3 grid items
    Given I have 2 grid items
    When I add 1
    Then I end up with 3 grid items
