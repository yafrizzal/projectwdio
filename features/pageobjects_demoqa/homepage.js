const Page = require('./page');

class HomePage extends Page {
    get btnElements () {
        return $(`.category-cards > div:nth-of-type(1) .card-up`);
    }

    get btnInteractions () {
        return $(`div:nth-of-type(5) .card-up`)
    }

    async clickInteractions () {
        await (await this.btnInteractions).click();
    }

    async clickElements() {
        await (await this.btnElements).click();
    }

    open() {
        return super.open()
    }

}

module.exports = new HomePage