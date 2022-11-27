const schedule = require('node-schedule');

const {dailyReset,monthlyReset} = require('./scheduler.js')
const {Messages} = require('./schema.js')
const fs = require('fs');
const { Client, Collection, Intents,MessageEmbed,WebhookClient} = require('discord.js');
const mongoose = require('mongoose');
const { stringify } = require('querystring');
const { StringDecoder } = require('string_decoder');
const { builtinModules } = require('module');
const { hyperlink } = require('@discordjs/builders');
require('dotenv').config()
const webhook =new WebhookClient({url : 'https://discord.com/api/webhooks/1044631685700010064/8R9M_gIZ7cz7tRwTCYual3UD0rj-JNjOuAp3sB_LnQBxlojujXlkM2vfQqAFk76TddDU'})
const All = new Intents(7796)
const client = new Client({partials:['MESSAGE','CHANNEL','GUILD_MEMBER','USER'], intents: [Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILDS,Intents.FLAGS.MESSAGE_CONTENT,Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_INTEGRATIONS] });
const webFunc = async ()=>{
let sort = await Messages.find({}).sort({'messages': -1}).exec()
let sortDaily = await Messages.find({}).sort({'dailyMsg': -1}).exec()
let sortMonthly = await Messages.find({}).sort({'monthlyMsg': -1}).exec()
let  embed = {
    color: '#4527A0',
    title:`__**Messages Leaderboard**__`,
    fields: [
        {
            name: `**Rank**ㅤㅤㅤㅤ**User**\nㅤ`,
            value: '\u200B'
        },
        {
        name: `1:ㅤㅤ<@${sort[0].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sort[0].messages
    },
    {
        name: `2:ㅤㅤ<@${sort[1].userid}>`,
        value: '**Message count**:' + 'ㅤ' + sort[1].messages
    },
    {
        name: `3:ㅤㅤ<@${sort[2].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sort[2].messages
    },
    {
        name: `4:ㅤㅤ<@${sort[3].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sort[3].messages
    },
    {
        name: `5:ㅤㅤ<@${sort[4].userid}>ㅤㅤ`,
        value:'**Message count**:' + 'ㅤ' +  sort[4].messages
    },
    {
        name: `6:ㅤㅤ<@${sort[5].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sort[5].messages
    },
    {
        name: `7:ㅤㅤ<@${sort[6].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sort[6].messages
    },
    {
        name: `8:ㅤㅤ<@${sort[7].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sort[7].messages
    },
    {
        name: `9:ㅤㅤ<@${sort[8].userid}>ㅤㅤ`,
        value:'**Message count**:' + 'ㅤ' + sort[8].messages
    },
    {
        name: `10:ㅤㅤ<@${sort[9].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sort[9].messages
    },
],
    
 
}

let  monthlyembed = {
    color: '#4527A0',
    title:`__**Monthly Messages Leaderboard**__`,
    fields: [
        {
            name: `**Rank**ㅤㅤㅤㅤ**User**\nㅤ`,
            value: '\u200B'
        },
        {
        name: `1:ㅤㅤ<@${sortMonthly[0].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sortMonthly[0].messages
    },
    {
        name: `2:ㅤㅤ<@${sortMonthly[1].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sortMonthly[1].messages
    },
    {
        name: `3:ㅤㅤ<@${sortMonthly[2].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sortMonthly[2].messages
    },
    {
        name: `4:ㅤㅤ<@${sortMonthly[3].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sortMonthly[3].messages
    },
    {
        name: `5:ㅤㅤ<@${sortMonthly[4].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sortMonthly[4].messages
    },
    {
        name: `6:ㅤㅤ<@${sortMonthly[5].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sortMonthly[5].messages
    },
    {
        name: `7:ㅤㅤ<@${sortMonthly[6].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sortMonthly[6].messages
    },
    {
        name: `8:ㅤㅤ<@${sortMonthly[7].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sortMonthly[7].messages
    },
    {
        name: `9:ㅤㅤ<@${sortMonthly[8].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sortMonthly[8].messages
    },
    {
        name: `10:ㅤㅤ<@${sortMonthly[9].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sortMonthly[9].messages
    },
],
    
 
}


let  dailyembed = {
    color: '#4527A0',
    title:`__**Messages Leaderboard**__`,
    fields: [
        {
            name: `**Rank**ㅤㅤㅤㅤ**User**\nㅤ`,
            value: '\u200B'
        },
        {
        name: `1:ㅤㅤ<@${sortDaily[0].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sortDaily[0].messages
    },
    {
        name: `2:ㅤㅤ<@${sortDaily[1].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sortDaily[1].messages
    },
    {
        name: `3:ㅤㅤ<@${sortDaily[2].userid}>ㅤㅤ`,
        value:'**Message count**:' + 'ㅤ' + sortDaily[2].messages
    },
    {
        name: `4:ㅤㅤ<@${sortDaily[3].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sortDaily[3].messages
    },
    {
        name: `5:ㅤㅤ<@${sortDaily[4].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sortDaily[4].messages
    },
    {
        name: `6:ㅤㅤ<@${sortDaily[5].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sortDaily[5].messages
    },         
    {
        name: `7:ㅤㅤ<@${sortDaily[6].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sortDaily[6].messages
    },
    {
        name: `8:ㅤㅤ<@${sortDaily[7].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sortDaily[7].messages
    },
    {
        name: `9:ㅤㅤ<@${sortDaily[8].userid}>ㅤㅤ`,
        value: '**Message count**:' + 'ㅤ' + sortDaily[8].messages
    },
    {
        name: `10:ㅤㅤ<@${sortDaily[9].userid}>ㅤㅤ`,
        value:  '**Message count**:' + 'ㅤ' + sortDaily[9].messages
    },
],
    
 
}
await webhook.editMessage(process.env.DAILY,{embeds:[dailyembed]})
await webhook.editMessage(process.env.MONTHLY,{embeds:[monthlyembed]})
await webhook.editMessage(process.env.ALL,{embeds:[embed]})
}
// section for events schedules


 
// When the client is ready, run this code (only once)
client.once('ready', async () => {
	console.log('ready');
    


});

const msgLd = schedule.scheduleJob('*/5 * * * *',async (firedTime) => {

    await webFunc()
    
});
msgLd
client.login(process.env.TOKEN);