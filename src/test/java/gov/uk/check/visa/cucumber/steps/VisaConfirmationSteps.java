package gov.uk.check.visa.cucumber.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gov.uk.check.visa.pages.*;
import org.testng.Assert;

/**
 * By Dimple Patel
 **/
public class VisaConfirmationSteps
{
    @Given("^I am on the Check UK visa website$")
    public void iAmOnTheCheckUKVisaWebsite()
    {
        new StartPage().clickCookiesAccept();
    }

    @And("^I start visa check$")
    public void iStartVisaCheck()
    {
        new StartPage().clickStartNowButton();
    }
    @When("^I select a nationality of \"([^\"]*)\"$")
   public void i_select_a_nationality_of(String country)  {
       new SelectNationalityPage().selectNationality(country);
       new SelectNationalityPage().clickNextStepButton();
   }
   @And("^I select reason 'Tourism'$")
    public void iSelectReasonTourism(String workReason)
    {
        new ReasonForTravelPage().selectReasonForVisit(workReason);
    }
    @Then("^I will be informed 'You will not need a visa to come to the UK'\"([^\"]*)\"$")
    public void iWillBeInformedYouWillNotNeedAVisaToComeToTheUK(String expected)
    {
        new ReasonForTravelPage().clickNextStepButton();
        //System.out.println(new ResultPage().getResultMessage());
        Assert.assertEquals(expected,new ResultPage().getResultMessage());
        //new ResultPage().confirmResultMessage("You will not need a visa to come to the UK");

    }
    @When("^I select a nationality of 'Chile\"([^\"]*)\"$")
    public void iSelectANationalityOfChile(String country)
    {
        new SelectNationalityPage().selectNationality(country);
        new SelectNationalityPage().clickNextStepButton();
    }
    @When("^I select reason \"([^\"]*)\"$")
    public void i_select_reason(String workReason)  {
        new ReasonForTravelPage().selectReasonForVisit(workReason);
        new ReasonForTravelPage().clickNextStepButton();
    }
    @When("^I state I am intending to stay for \"([^\"]*)\"$")
    public void i_state_I_am_intending_to_stay_for(String duration)  {
        new DurationOfStayPage().selectDurationOfStay(duration);
        new DurationOfStayPage().clickOnContinue();

    }
    @When("^I state I have planning to work \"([^\"]*)\"$")
    public void i_state_I_have_planning_to_work(String jobType)
    {
        new WorkTypePage().selectJobType(jobType);
    }
    @Then("^I will be informed \"([^\"]*)\"$")
    public void i_will_be_informed(String expected)  {
        new ReasonForTravelPage().clickNextStepButton();
        Assert.assertEquals(expected,new ResultPage().getResultMessage());
    }
    @When("^I select a nationality of 'Colombia'$")
    public void iSelectANationalityOfColombia(String country)
    {
        new SelectNationalityPage().selectNationality(country);
    }
    @And("^I select reason 'family'$")
    public void iSelectReasonFamily(String workReason)
    {
        new ReasonForTravelPage().selectReasonForVisit(workReason);
    }
    @When("^I state My partner or family member have uk immigration status \"([^\"]*)\"$")
    public void i_state_My_partner_or_family_member_have_uk_immigration_status(String duration)  {
        new StartPage().clickCookiesAccept();
        new DurationOfStayPage().selectDurationOfStay(duration);
    }
    @Then("^I will be informed 'You’ll need a visa to join your family or partner in the UK'$")
    public void iWillBeInformedYouLlNeedAVisaToJoinYourFamilyOrPartnerInTheUK(String result)
    {
        Assert.assertEquals(result,new ResultPage().getResultMessage());
    }
}
