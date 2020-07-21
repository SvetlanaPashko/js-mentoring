/**
 * Organize a page object structure of any app you want:
 * 1. Base page should be created
 * 2. At least one of the child pages should be inherited from the page
 * 3. Create a simple walk through scenarios using the described elements (how it was done on the sessions for Login functionality)
 */

class BasePage {
    constructor(page) {
        this.page = page;

    }
    viewPage() {
        return `It's ${this.page}`;
    }
}

class MessagePage extends BasePage {
    constructor(page, messageBlock) {
        super(page);
        this.messageBlock = messageBlock;
    }

    get fieldTo() {
        return `Recepient`;
    }

    get textMessage() {
        return `Message`;
    }

    get buttonSend() {
        return `Send button`;
    }

    typeMessage(text) {
        return `Enter this text " ${text} " into the field ${this.textMessage}`;
    }

    typeRecipient(text) {
        return `Enter this recipient " ${text} " in field ${this.fieldTo}`;
    }

    clickButton() {
        return `Click on ${this.buttonSend}`
    }

}

const page1 = new MessagePage(`home page`, `message block`)

console.log(page1.typeRecipient(`mail@mail.ru`))
console.log(page1.typeMessage(`hello, Universe!`))
console.log(page1.clickButton())