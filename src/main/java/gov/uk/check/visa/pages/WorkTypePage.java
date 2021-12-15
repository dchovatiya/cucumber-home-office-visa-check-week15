package gov.uk.check.visa.pages;


import gov.uk.check.visa.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;


public class WorkTypePage extends Utility {
    public WorkTypePage() {
        PageFactory.initElements(driver, this);
    }
    //    nextStepButton, selectJobtypeList locators and create methods  'void selectJobType(String job)'
    //  and 'void clickNextStepButton()'
    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-radios']//label")
    List<WebElement> selectJobTypeList;
    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-radios']//label")
    WebElement selectJobTypeListU;

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Continue']") //button[normalize-space()='Continue']
    WebElement nextStepButton;

    public void selectJobType(String job) {
        for (WebElement jobType : selectJobTypeList) {
            if (jobType.getText().equalsIgnoreCase(job)) {
                jobType.click();
            }
        }
    }

    public void setSelectJobTypeListU(String job)
    {
        selectByVisibleTextFromDropDown(selectJobTypeListU,job);
        //selectByContainsTextFromDropDown(selectJobTypeListU,job);
    }

    public void clickNextStepButton(){
        clickOnElement(nextStepButton);
    }
}
