async function getWeath(location) {
    
    const {By,Key,Builder, until}=require('selenium-webdriver') ;
    require('chromedriver');
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get('http://www.weather.com/');
    console.log("step0");
    let elem = await driver.findElement(By.xpath('//*[@id="WxuHeaderLargeScreen-header-9944ec87-e4d4-4f18-b23e-ce4a3fd8a3ba"]/header/div/div[2]/div[1]/div/div[1]/input[@id="LocationSearch_input"]'));
    console.log("step 1");
    await driver.findElement(By.xpath('//*[@id="WxuHeaderLargeScreen-header-9944ec87-e4d4-4f18-b23e-ce4a3fd8a3ba"]/header/div/div[2]/div[1]/div/div[1]/input[@id="LocationSearch_input"]')).click();
    console.log("step2");
    await driver.findElement(By.xpath('//*[@id="WxuHeaderLargeScreen-header-9944ec87-e4d4-4f18-b23e-ce4a3fd8a3ba"]/header/div/div[2]/div[1]/div/div[1]/input[@id="LocationSearch_input"]')).sendKeys(location);
    console.log("3");
    let weath = await driver.wait(until.elementLocated(By.name('CurrentConditions--phraseValue--2Z18W')), 10);
    let weather = JSON.stringify(weath);
    driver.quit();

    if (weather.includes("Cloudy")){
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get('https://www.youtube.com/watch?v=545ih5ygngs');
        await driver.manage().setTimeouts( { implicit: 240000 } );
        await driver.quit();
    }
    if (weather.includes("Sunny")){
        let driver = await new Builder().forBrowser("chrome").build();
 
        await driver.get('https://www.youtube.com/watch?v=aQUlA8Hcv4s');
        await driver.manage().setTimeouts( { implicit: 360000 } );
        await driver.quit();
    }

    if (weather.includes("Fair")){
        let driver = await new Builder().forBrowser("chrome").build();
 
        await driver.get('https://www.youtube.com/watch?v=daXKU-tCR8o');
        await driver.manage().setTimeouts( { implicit: 360000 } );
        await driver.quit();
    }

    if (weather.includes("Rain")){
        let driver = await new Builder().forBrowser("chrome").build();
 
        await driver.get('https://www.youtube.com/watch?v=gL2FpxyNXGU');
        await driver.manage().setTimeouts( { implicit: 360000 } );
        await driver.quit();
    }

    if (weather.includes("Wind")){
        let driver = await new Builder().forBrowser("chrome").build();
 
        await driver.get('https://www.youtube.com/watch?v=tH2w6Oxx0kQ');
        await driver.manage().setTimeouts( { implicit: 360000 } );
        await driver.quit();
    }
    else {
        console.log("Sorry! We couldn't find a song to match the weather. Listen to this instead: https://www.youtube.com/watch?v=0xRY9j8tHvw");
    }
    };


getWeath("90272");


