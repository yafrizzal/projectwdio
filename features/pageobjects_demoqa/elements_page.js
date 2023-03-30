const { expect } = require('chai');
const Page = require('./page');

class ElementsPage extends Page {

    get btnButtons () {
        return $(`.show li:nth-of-type(5)`);
    }

    get btnClickMe () {
        return $(`//button[text()="Click Me"]`);
    }

    get btnRightClickMe () {
        return $(`//button[text()='Right Click Me']`);
    }

    get btnDoubleClickMe () {
        return $(`//button[text()='Double Click Me']`);
    }

    get cmmndClick () {
        return $(`#dynamicClickMessage`)
    }

    get cmmndRight () {
        return $(`#rightClickMessage`)
    }

    get cmmndDouble() {
        return $(`#doubleClickMessage`)
    }
    
    async clickButtons() {
        await this.btnButtons.click()
        await browser.pause(3000)
    }
   
    async clickClickMe() {
        await this.btnClickMe.click();
        await browser.pause(2000)           
    }
    
    async clickRightClick() {
        await this.btnRightClickMe.click({ button: 'right' });
        await browser.pause(2000)   
    }

    async clickDoubleClick() {
        await this.btnDoubleClickMe.doubleClick();
        await browser.pause(2000)
    }

    async assertCommandClick () {
        const text = await this.cmmndClick.isDisplayed()
        expect(text).to.equal(true)
    }

    async assertCommandRight () {
        const text = await this.cmmndRight.isDisplayed()
        expect(text).to.equal(true);
    }

    async assertcommandDouble () {
        const text = await this.cmmndDouble.isDisplayed()
        expect(text).to.equal(true);
    }

    open() {
        return super.open();
    }
    
}

module.exports = new ElementsPage