const fs = require("fs/promises");
const path = require("path");

module.exports = class MessagesService {
    static async fetchMesages() {
        const messages = await fs.readFile(path.join(__dirname, '../db') + '/messages.json')
            .then(response => JSON.parse(response))
            .catch((err) => {
                console.log(err);
                return {
                    messages: []
                };
            });

        return messages;
    }
}