const { By, Key, Builder, until } = require('selenium-webdriver');
require('chromedriver');
const chrome = require('selenium-webdriver/chrome');
const chromeOptions = new chrome.Options();
chromeOptions.headless();
chromeOptions.addArguments('--disable-dev-shm-usage')

const TestCase_1 = async () => {
	var username = 'faaiz75@live.com';
	var password = 'tipu786';
	let driver = await new Builder()
		.forBrowser('chrome')
		.setChromeOptions(chromeOptions)
		.build();
	try {
		await driver.get('https://devops-2-production.up.railway.app/');
		await driver
			.findElement(
				By.xpath(`/html/body/div/div/div[2]/div[1]/form/div[1]/input`)
			)
			.sendKeys(username, Key.RETURN);

		await driver
			.findElement(
				By.xpath(`/html/body/div/div/div[2]/div[1]/form/div[2]/input`)
			)
			.sendKeys(password, Key.RETURN);
		await driver
			.findElement(
				By.xpath(`/html/body/div/div/div[2]/div[1]/form/div[3]/button`)
			)
			.click();
		await driver.wait(
			until.elementLocated(By.xpath('/html/body/div/div[2]/h2')),
			10000
		);
		console.log('Test Case-1 (LOGIN) passed.');
	} catch (error) {
		console.log('Test Case-1 (LOGIN) failed.');
	} finally {
		await driver.quit();
	}
};

module.exports = { TestCase_1 };
