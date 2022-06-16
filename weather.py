from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
import time

def getTheWeather(location):
    
    #  Initiate the browser
    driver = webdriver.Chrome(ChromeDriverManager().install())

    driver.get('https://www.weather.com/')
    time.sleep(2)

    elem = driver.find_element_by_id('LocationSearch_input')
    time.sleep(2)
    elem.send_keys(location)
    time.sleep(2)
    elem.send_keys(Keys.ENTER)
    time.sleep(2)

    weath = driver.find_element_by_class_name('CurrentConditions--phraseValue--2Z18W')
    return weath



