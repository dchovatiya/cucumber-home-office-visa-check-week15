package gov.uk.check.visa.cucumber;

import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;

/**
 * Created by Jay Vaghani
 */
@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/gov/uk/check/visa/resources/featurefile/VisaConfirmation.feature", //copy from root path and copy from package
        //glue="com/nopcommerce/demo/cucumber" ,//copy from source not from root because we wrote glue
        plugin = {"pretty","html:target/cucumber-report/cucumber.html",
        "com.cucumber.listener.ExtentCucumberFormatter:target/Extent_Reports/report.html",
        "json:target/RunCuke/cucumber.json"},//json is the key and target where we want to run the report
        tags="@Smoke"
        //Inside plugin we need to inform for default generated reports and then target extent report
)

public class TestRunner
{
    @AfterClass
    public static void setUp()
    {
        String projectPath = System.getProperty("user.dir");
        String reportConfigPath = projectPath + "/src/test/java/resources/extentreport/extent-config.xml";
        Reporter.loadXMLConfig(reportConfigPath);
        Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
        Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
        Reporter.setSystemInfo("Machine", "Windows 10" + "64 Bit");
        Reporter.setSystemInfo("Selenium", "3.141.59");
        Reporter.setSystemInfo("Maven", "3.5.9");
        Reporter.setSystemInfo("Java Version", "1.8.0_151");
    }
}
