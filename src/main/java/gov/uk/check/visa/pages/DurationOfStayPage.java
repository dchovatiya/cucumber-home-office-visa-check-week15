package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;


public class DurationOfStayPage extends Utility {
    public DurationOfStayPage() {
        PageFactory.initElements(driver, this);
    }

    //     nextStepButton, lessThanSixMonths, moreThanSixMonths locators and create methods
//  'void selectLengthOfStay(String moreOrLess)' (Note: use switch statement for select moreOrLess stay) and
//  'void clickNextStepButton()'
    @CacheLookup
    @FindBy(xpath = "//main[@role='main']//label")
    List<WebElement> durationTabs;
    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Continue']")
    WebElement continueButton;

    public void selectDurationOfStay(String duration) {
        switch (duration) {
            case "6 months or less":
                durationTabs.get(0).click();
                break;
            case "longer than 6 months":
                durationTabs.get(1).click();
                break;
        }

/*        for (WebElement getDuration : durationTabs) {
            if (getDuration.getText().equalsIgnoreCase(duration)) {
                clickOnElement(getDuration);
                Reporter.log("Select Duration of Stay : " + duration + "<br>");
                break;
            }
        }*/

    }

    public void clickOnContinue() {
        clickOnElement(continueButton);
    }
}
