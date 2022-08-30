const {By} = require("selenium-webdriver");

module.exports = {
    addMovie: async (driver) => {
        await (await driver).findElement(By.xpath("//input")).sendKeys("Titanic")

        await driver.findElement(By.xpath("//button")).click();

        const movie = await driver.findElement(By.xpath("//ul"));

        const displayed = movie.isDisplayed();

        expect(displayed).toBeTruthy();
    },

    // crossOffMovie: async (driver) => {
    //     await (await driver).findElement(By.xpath("//span")).click();

    //     await driver.findElement(By.xpath('//span')).classList.toggle("checked");

    //     await driver.sleep(2000);
    // },
};