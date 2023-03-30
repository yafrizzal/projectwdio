const Page = require('./page.js');

class InteractionsPage extends Page {
    get btnDroppable () {
        return $(`.show.element-list li:nth-of-type(4)`);
    } 

    async clickDroppable () {
        await this.btnDroppable.click();
    }

    async dragMeBox () {
        const dragMe = await $(`#draggable`)
        await dragMe.dragAndDrop({x:300, y:50});
    }

    async dropBoxHere () {
        const dropBox = await $(`droppable`)
        const backgroundColor = dropBox.getCSSProperty('.ui-state-highlight');
        console.log(backgroundColor)
    }
    
}

module.exports = new InteractionsPage