let handler = async (bot, msg, isEdit = false, msgId) => {
  const chatId = msg.chat.id;
  const ttlfitur = globalThis.commands?.length || 0;

  const text = `
|—————WELCOME TO BOT ${globalThis.config.botName}—————|                                 
| • BOT SUDAH AKTIF, SILAHKAN GUNAKAN FITUR YANG TERSEDIA
| • NAMA BOT : ${globalThis.config.botName}
| • ID OWNER : ${globalThis.config.ownerId}
| • NAMA OWNER : ${globalThis.config.ownerName}
| • USERNAME OWNER : @${globalThis.config.ownerUsername}
| • TELE DEV BASE : rapzzgege.t.me
| • TAMBAHKAN NAMA DEV KE CREDIT UNTUK MENGHARGAI

| • TOTAL FITUR AKTIF :
| • ${ttlfitur}
|—————————————————————————————|
`;

  const keyboard = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "📜 List Fitur Aktif", callback_data: "list_fitur" }]
      ]
    }
  };

  if (isEdit && msgId) {
    bot.editMessageText(text, {
      chat_id: chatId,
      message_id: msgId,
      reply_markup: keyboard.reply_markup
    });
  } else {
    bot.sendMessage(chatId, text, keyboard);
  }
};

handler.callback = (bot, query) => {
  const chatId = query.message.chat.id;
  const msgId = query.message.message_id;
  const data = query.data;

  if (data === "list_fitur") {
    const fiturList = globalThis.commands
      .map((c) => (c.help ? `- ${c.help.join(", ")}` : ""))
      .filter((t) => t.trim() !== "")
      .join("\n");

    bot.editMessageText(`📜 *List Fitur Aktif:*\n${fiturList}`, {
      chat_id: chatId,
      message_id: msgId,
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [[{ text: "⬅️ Kembali", callback_data: "go_start" }]]
      }
    });
  }

  if (data === "go_start") {
    handler(bot, { chat: { id: chatId } }, true, msgId);
  }
};

handler.help = ["start"];
handler.tags = ["info"];
handler.command = ["start"];

export default handler;
