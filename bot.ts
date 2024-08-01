import { Bot } from "grammy";

const bot = new Bot("7496685815:AAHOvO4NYcZMbcwaezJeGTu3yOW0SryY3Zc")

bot.command("Start", (ctx) => ctx.reply("Bari Ereko Miqayel."))
// bot.on('message', (ctx) => ctx.reply("Got another message.!"))


// bot.on("message", async (ctx) => {
//     const message = ctx.message;
//   });


bot.start()