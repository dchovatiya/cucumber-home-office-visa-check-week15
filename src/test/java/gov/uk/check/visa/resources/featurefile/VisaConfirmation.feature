@Smoke
Feature:Visa confirmation test
  As a user I want to check the visa confirmation advice

  Background:As a user I want to verify the visa confirmation information for different nationalities
  Given I am on the Check UK visa website
  And I start visa check

  Scenario: An Australian coming to the UK for Tourism.
  When I select a nationality of "Australia"
  And I select reason "Tourism or visiting family and friends"
  Then I will be informed "You will not need a visa to come to the UK"

  Scenario: A Chilean coming to the UK for Work and plans on staying for longer than 6 months.
  When I select a nationality of "Chile"
  And I select reason "Work, academic visit or business"
  And I state I am intending to stay for "longer than 6 months"
  And I state I have planning to work "Health and care professional"
  Then I will be informed "You need a visa to work in health and care"

  Scenario: A Columbian national coming to the UK to join a partner for a long stay. They do have an Article 10 or 20 card.
  When I select a nationality of "Colombia"
  And I select reason "Tourism or visiting family and friends"
  And I state My partner or family member have uk immigration status "Yes"
  Then I will be informed "You’ll usually need a visa to come to the UK"
