package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;


public class ReasonForTravelPage extends Utility {
    public ReasonForTravelPage() {
        PageFactory.initElements(driver, this);
    }

    //    nextStepButton, reasonForVisitList locators and create methods  'void selectReasonForVisit(String reason)'

    @CacheLookup
   // @FindBy(xpath = "//button[normalize-space()='Continue']")
    @FindBy(xpath = "//button[contains(text(),'Continue')]")
    WebElement nextStepButton;

    @CacheLookup
//    @FindBy(id = "response-0")
    @FindBy(xpath = "//label[@for='response-0']")
    WebElement opt1;
    @CacheLookup
//    @FindBy(id = "response-1")
    @FindBy(xpath = "//label[@for='response-1']")
    WebElement opt2;
    @CacheLookup
//    @FindBy(id = "response-4")
    @FindBy(xpath = "//label[@for='response-4']") //label[@for='response-4']
    WebElement opt3;
    @FindBy(xpath = "//div[@class='govuk-radios']//label")
    List<WebElement> reasonForVisitList;
    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-radios']//div//label")
    List<WebElement> reasonForTravelRadios;

    public void selectReasonForVisit(String selectReason) {

        for (WebElement reason: reasonForVisitList) {
            if (reason.getText().equalsIgnoreCase(selectReason))
            {reason.click();
            break;}
        }
    }
    public void clickNextStepButton(){
        clickOnElement(nextStepButton);
        //nextStepButton.submit();
    }



}
