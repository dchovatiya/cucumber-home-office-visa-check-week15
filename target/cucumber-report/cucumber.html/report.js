$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/gov/uk/check/visa/resources/featurefile/VisaConfirmation.feature");
formatter.feature({
  "line": 2,
  "name": "Visa confirmation test",
  "description": "As a user I want to check the visa confirmation advice",
  "id": "visa-confirmation-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "duration": 5775925800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "As a user I want to verify the visa confirmation information for different nationalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Check UK visa website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I start visa check",
  "keyword": "And "
});
formatter.match({
  "location": "VisaConfirmationSteps.iAmOnTheCheckUKVisaWebsite()"
});
formatter.result({
  "duration": 217667900,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iStartVisaCheck()"
});
formatter.result({
  "duration": 355065900,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "An Australian coming to the UK for Tourism.",
  "description": "",
  "id": "visa-confirmation-test;an-australian-coming-to-the-uk-for-tourism.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I select a nationality of \"Australia\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I select reason \"Tourism or visiting family and friends\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I will be informed \"You will not need a visa to come to the UK\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 27
    }
  ],
  "location": "VisaConfirmationSteps.i_select_a_nationality_of(String)"
});
formatter.result({
  "duration": 352126200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tourism or visiting family and friends",
      "offset": 17
    }
  ],
  "location": "VisaConfirmationSteps.i_select_reason(String)"
});
formatter.result({
  "duration": 460762300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You will not need a visa to come to the UK",
      "offset": 20
    }
  ],
  "location": "VisaConfirmationSteps.i_will_be_informed(String)"
});
formatter.result({
  "duration": 20035894000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[contains(text(),\u0027Continue\u0027)]\"}\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027PARAM397HP\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [18d322b869f464e4901c8c5806a69851, findElement {using\u003dxpath, value\u003d//button[contains(text(),\u0027Continue\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\jpate\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59402}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59402/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 18d322b869f464e4901c8c5806a69851\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat gov.uk.check.visa.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat gov.uk.check.visa.pages.ReasonForTravelPage.clickNextStepButton(ReasonForTravelPage.java:51)\r\n\tat gov.uk.check.visa.cucumber.steps.VisaConfirmationSteps.i_will_be_informed(VisaConfirmationSteps.java:69)\r\n\tat ✽.Then I will be informed \"You will not need a visa to come to the UK\"(src/test/java/gov/uk/check/visa/resources/featurefile/VisaConfirmation.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1137695200,
  "status": "passed"
});
formatter.before({
  "duration": 2549908000,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "As a user I want to verify the visa confirmation information for different nationalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Check UK visa website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I start visa check",
  "keyword": "And "
});
formatter.match({
  "location": "VisaConfirmationSteps.iAmOnTheCheckUKVisaWebsite()"
});
formatter.result({
  "duration": 71388200,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iStartVisaCheck()"
});
formatter.result({
  "duration": 352842600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "A Chilean coming to the UK for Work and plans on staying for longer than 6 months.",
  "description": "",
  "id": "visa-confirmation-test;a-chilean-coming-to-the-uk-for-work-and-plans-on-staying-for-longer-than-6-months.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I select a nationality of \"Chile\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I select reason \"Work, academic visit or business\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I state I am intending to stay for \"longer than 6 months\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I state I have planning to work \"Health and care professional\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I will be informed \"You need a visa to work in health and care\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chile",
      "offset": 27
    }
  ],
  "location": "VisaConfirmationSteps.i_select_a_nationality_of(String)"
});
formatter.result({
  "duration": 294487400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Work, academic visit or business",
      "offset": 17
    }
  ],
  "location": "VisaConfirmationSteps.i_select_reason(String)"
});
formatter.result({
  "duration": 335012300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "longer than 6 months",
      "offset": 36
    }
  ],
  "location": "VisaConfirmationSteps.i_state_I_am_intending_to_stay_for(String)"
});
formatter.result({
  "duration": 313357700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Health and care professional",
      "offset": 33
    }
  ],
  "location": "VisaConfirmationSteps.i_state_I_have_planning_to_work(String)"
});
formatter.result({
  "duration": 170124500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You need a visa to work in health and care",
      "offset": 20
    }
  ],
  "location": "VisaConfirmationSteps.i_will_be_informed(String)"
});
formatter.result({
  "duration": 302440700,
  "status": "passed"
});
formatter.after({
  "duration": 890232800,
  "status": "passed"
});
formatter.before({
  "duration": 2682867900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "As a user I want to verify the visa confirmation information for different nationalities",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Check UK visa website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I start visa check",
  "keyword": "And "
});
formatter.match({
  "location": "VisaConfirmationSteps.iAmOnTheCheckUKVisaWebsite()"
});
formatter.result({
  "duration": 94456600,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iStartVisaCheck()"
});
formatter.result({
  "duration": 376006600,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "A Columbian national coming to the UK to join a partner for a long stay. They do have an Article 10 or 20 card.",
  "description": "",
  "id": "visa-confirmation-test;a-columbian-national-coming-to-the-uk-to-join-a-partner-for-a-long-stay.-they-do-have-an-article-10-or-20-card.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I select a nationality of \"Colombia\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I select reason \"Tourism or visiting family and friends\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I state My partner or family member have uk immigration status \"Yes\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I will be informed \"You’ll usually need a visa to come to the UK\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Colombia",
      "offset": 27
    }
  ],
  "location": "VisaConfirmationSteps.i_select_a_nationality_of(String)"
});
formatter.result({
  "duration": 482784800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tourism or visiting family and friends",
      "offset": 17
    }
  ],
  "location": "VisaConfirmationSteps.i_select_reason(String)"
});
formatter.result({
  "duration": 313141300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 64
    }
  ],
  "location": "VisaConfirmationSteps.i_state_My_partner_or_family_member_have_uk_immigration_status(String)"
});
