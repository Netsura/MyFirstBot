"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const bot = new grammy_1.Bot("7496685815:AAHOvO4NYcZMbcwaezJeGTu3yOW0SryY3Zc");
bot.command("Start", (ctx) => ctx.reply("Bari Ereko Miqayel."));
// bot.on('message', (ctx) => ctx.reply("Got another message.!"))
// bot.on("message", async (ctx) => {
//     const message = ctx.message;
//   });
bot.on("message", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    // `txt` will be a `string` when processing text messages.
    // It will be `undefined` if the received message does not have any message text,
    // e.g. photos, stickers, and other messages.
    const txt = ctx.message.text;
}));
bot.start();
