package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class StartPage extends Utility {
    public StartPage() {
        PageFactory.initElements(driver,this);
    }

    //    startNowButton locatores and create method 'void clickStartNow()'
    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Accept additional cookies']") //button[normalize-space()='Accept additional cookies']
    WebElement cookiesAccept;
    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Start now']") //a[normalize-space()='Start now']
    WebElement startNowButton;

    public void clickCookiesAccept(){
        clickOnElement(cookiesAccept);
    }
    public void clickStartNowButton(){
        clickOnElement(startNowButton);
    }
}
