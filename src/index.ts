import { Bot } from "grammy";
import "dotenv/config";

const bot = new Bot(process.env.BOT_TOKEN!);

(async () => {
  bot.command("start", (ctx) => ctx.reply("Bari Ereko Mikayel."));

  await bot.start({
    drop_pending_updates: true,
    onStart(botInfo) {
      console.log(
        `${botInfo.username} started 🤖🚀, visit https://${botInfo.username}.t.me to test it`,
      );
    },
  });
})();
