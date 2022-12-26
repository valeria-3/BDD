Feature: NewDoctor

@newDoctorPop-up @positive
 Scenario: It should be possible to add new doctor
    When I open "Dashboard" page
    And I click "Doctors" link from the side menu
    And I click add new doctor button from list header
    And I enter doctor's name in name field
    And I enter doctor's phone number in phone field
    And I enter doctor's email in email field
    And I enter doctor's education in education field
    And I click "Save" button in modal window
    Then modal window should not be displayed 
    Then name of newly created doctor should correspond to the specified one
    Then education of newly created doctor should correspond to the specified one
    

@newDoctorPop-up @negative @nameField
 Scenario: It should not be possible to add new doctor if name field value is empty
 When I open "Dashboard" page
    And I click "Doctors" link from the side menu
    And I click add new doctor button from list header
    And I dont enter doctor's name in name field
    And I enter doctor's phone number in phone field
    And I enter doctor's email in email field
    And I enter doctor's education in education field
    And I click "Save" button in modal window
    Then modal window should be displayed


@newDoctorPop-up @negative @emailField
Scenario: It should not be possible to add new doctor if email field value is invalid
 When I open "Dashboard" page
    And I click "Doctors" link from the side menu
    And I click add new doctor button from list header
    And I enter "<Invalid Email>" in email field
    And I enter doctor's phone number in phone field
    And I enter doctor's name in name field
    And I enter doctor's education in education field
    And I click "Save" button in modal window
    Then modal window should be displayed
    Then error message should be displayed under email field


    Examples:

  | Invalid Email| 

  | john_doe | 
  | John_doe@yopmail | 
  | John_yopmail.com |
   


    
    