const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');

const ElementsPage = require('../pageobjects_demoqa/elements_page.js');
const HomePage = require('../pageobjects_demoqa/homepage.js');
const InteractionsPage = require('../pageobjects_demoqa/interactions_page.js');


Given('I am on the front page', async () => {
    await HomePage.open()
});

When('I click the elements menu', async () => {
    await browser.scroll(0,150)
    await HomePage.clickElements()
})

Then('I click the buttons menu', async () => {
    await ElementsPage.clickButtons()
})

When('I single click on click me', async () => {
    await ElementsPage.clickClickMe()
})
Then('I should see the command a dynamic click', async () => {
  await ElementsPage.assertCommandClick()
})

When('I click right click', async () => {
  await ElementsPage.clickRightClick();
})

Then('I should see the command a right click', async () => {
  await ElementsPage.assertCommandRight()
})

When('I click double click', async () => {
  await ElementsPage.clickDoubleClick();
})

Then('I should see the command a double click', async () => {
  await ElementsPage.assertcommandDouble()
})

When('I click the interactions menu', async () => {
  await browser.scroll(0,200)
  await HomePage.clickInteractions()
})

Then('I scroll down the page', async () => {
  await browser.execute('window.scrollBy(0,900)')
})

When('I click the droppable menu', async () => {
  await InteractionsPage.clickDroppable()
})


When('I drag and drop the Drag me box into the Drop Here box', async () => {
  await InteractionsPage.dragMeBox()
})

Then('I should see the background-color of Drop Here box changed', async () => {
  await InteractionsPage.dropBoxHere()
})







