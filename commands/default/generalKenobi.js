const { Command } = require('discord.js-commando');
const { Attachment } = require('discord.js');
const getData = require('../../getData');
const getRandomInt = require('../../getRandomInt');
class GeneralKenobi extends Command {
  constructor(client) {
    super(client, {
      name: 'general',
      group: 'default',
      memberName: 'general',
      description: 'Fetches prequel meme from reddit.'
    });
    this.apiUrl = `https://www.reddit.com/r/prequelmemes/new.json?sort=top`;
  }

  async run(message, args) {
    try {
      const archives = await getData(this.apiUrl);
      if (archives.data.children.length !== 0) {
        const entriesLength = archives.data.dist;
        const entries = archives.data.children;
        const randomEntry = entries[getRandomInt(1, entriesLength)];
        const { url } = randomEntry.data;
        const attachment = new Attachment(url);
        message.reply(attachment);
      } else {
        message.reply('The archives are incomplete!');
      }
    } catch (error) {
      message.reply('The archives are incomplete!');
    }
  }
}
module.exports = GeneralKenobi;
