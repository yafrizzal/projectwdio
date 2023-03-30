Feature: Demoqa app Elements menu

    @elements @buttons
    Scenario: Access the elements menu
    Given I am on the front page
    When I click the elements menu
    When I click the buttons menu
    Then I single click on click me
    Then I should see the command a dynamic click
    When I click right click
    Then I should see the command a right click
    When I click double click
    Then I should see the command a double click


    @interactions @dragbox
    Scenario: Access the interactions menu
    Given I am on the front page
    When I click the interactions menu
    Then I scroll down the page
    When I click the droppable menu
    When I drag and drop the Drag me box into the Drop Here box
    Then I should see the background-color of Drop Here box changed