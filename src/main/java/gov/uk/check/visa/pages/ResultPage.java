package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;


public class ResultPage extends Utility {
    public ResultPage() {
        PageFactory.initElements(driver, this);
    }

    //    resultMessage locator and create methods 'String getResultMessage()' and '
//    void confirmResultMessage(String expectedMessage)' (Note Use Assert.assertTrue)
    @CacheLookup
    @FindBy(xpath = "//h2[@class='gem-c-heading gem-c-heading--font-size-27 govuk-!-margin-bottom-6']")   //h2[@class='gem-c-heading gem-c-heading--font-size-27 govuk-!-margin-bottom-6']
            WebElement resultMessage;
    public String getResultMessage() {
        //System.out.println(resultMessage.getText());
        return getTextFromElement(resultMessage);
    }

    public void confirmResultMessage(String expectedMessage) {
        verifyThatTextIsDisplayed(resultMessage, expectedMessage);
        Assert.assertTrue(resultMessage.getText().equals(expectedMessage),"Not Matched");

    }           //(Note Use Assert.assertTrue)
}
