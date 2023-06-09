const { By, Key, Builder, until } = require('selenium-webdriver');
require('chromedriver');
const chrome = require('selenium-webdriver/chrome');
const chromeOptions = new chrome.Options();
chromeOptions.headless();
chromeOptions.addArguments('--disable-dev-shm-usage')

const TestCase_2 = async () => {
	var username = 'Tester';
	var password = 'abc123';
	var name = 'Test Selenium';
	var email = 'test@gmail.com';
	let driver = await new Builder()
		.forBrowser('chrome')
		.setChromeOptions(chromeOptions)
		.build();
	try {
		await driver.get('https://devops-2-production.up.railway.app/');
		await driver
			.findElement(By.xpath(`/html/body/div/div/div[1]/div/a[3]`))
			.click();
		await driver.sleep(5000);
		await driver
			.findElement(
				By.xpath(`/html/body/div/div/div[2]/div/form/div[2]/input`)
			)
			.sendKeys(username, Key.RETURN);
		await driver
			.findElement(
				By.xpath(`/html/body/div/div/div[2]/div/form/div[4]/input`)
			)
			.sendKeys(password, Key.RETURN);
		await driver
			.findElement(
				By.xpath(`/html/body/div/div/div[2]/div/form/div[1]/input`)
			)
			.sendKeys(name, Key.RETURN);
		await driver
			.findElement(
				By.xpath(`/html/body/div/div/div[2]/div/form/div[3]/input`)
			)
			.sendKeys(email, Key.RETURN);
		await driver
			.findElement(
				By.xpath(`/html/body/div/div/div[2]/div/form/div[5]/button`)
			)
			.click();
		await driver.wait(
			until.elementLocated(
				By.xpath('/html/body/div/div/div[2]/div[2]/div/a[3]')
			),
			10000
		);
		console.log('Test Case-2 (REGISTER) passed.');
	} catch (error) {
		console.log('Test Case-2 (REGISTER) failed.');
	} finally {
		await driver.quit();
	}
};

module.exports = { TestCase_2 };
