


// get user's location from their input to the button
function getLocation(){
let loc = document.getElementById("location").value;
alert("this far");
getWeath(loc);
return loc;
};

document.addEventListener('DOMContentLoaded', function() {
    var clic = document.getElementById("go");
    clic.addEventListener('click', getLocation); 
});


async function getWeath(location) {
    
    const {By,Key,Builder}=require('selenium-webdriver') ;
    require('chromedriver');
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get('http://www.weather.com/');
    await driver.findElement(By.id('LocationSearch_input')).sendKeys(location, Key.RETURN);
    let weather = await driver.wait(until.elementLocated(By.name('CurrentConditions--phraseValue--2Z18W')), 1000);
    await driver.quit();

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
        alert("Sorry! We couldn't find a song to match the weather. Listen to this instead: https://www.youtube.com/watch?v=0xRY9j8tHvw");
    }
    };





