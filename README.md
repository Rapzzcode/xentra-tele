# 🤖 Telegram Bot ESM Base

![Telegram Bot](https://img.shields.io/badge/Telegram-Bot-blue?logo=telegram)
![Node.js](https://img.shields.io/badge/Node.js-%3E=18-green?logo=node.js)
![License](https://img.shields.io/badge/License-MIT-yellow)

Base ini adalah **Telegram Bot** berbasis **ESM Modular Plugin** seperti bot WhatsApp, tetapi untuk Telegram.  
Dikembangkan oleh **XENTRA - RAPZZCODE** sebagai kerangka dasar minimalis dengan 1 fitur bawaan (`start.js`) yang menampilkan banner dan daftar fitur aktif.

---

## ⚠️ Informasi Penting
- File `index.js` **sudah terenkripsi** karena ini base gratisan.
- Jika ingin **membeli versi full source (unencrypted)**, silakan hubungi developer di:  
  📩 **Telegram:** [rapzzgege.t.me](https://t.me/rapzzgege)
- Anda tetap bisa mengedit konfigurasi bot melalui `config.js`

---

## ✨ Fitur Bawaan
- 📜 **/start** — Menampilkan banner bot + tombol **List Fitur Aktif**
- 📋 **List Fitur Aktif** — Menampilkan semua plugin yang terload otomatis

> Base ini hanya memiliki **start.js** sebagai contoh.  
> Tambahkan fitur lain di folder `commands/` sesuai kebutuhan.

---

## 📂 Struktur Folder
```
tels/
│── commands/
│   └── start.js        # Banner awal + tombol list fitur
│── config.js           # Konfigurasi bot
│── index.js            # Koneksi utama bot (Encrypted)
│── package.json
```

---

## ⚙️ Konfigurasi
Edit file `config.js`:
```js
export default {
  botToken: "ISI_TOKEN_BOT_KAMU",
  botName: "Nama Bot Kamu",
  ownerId: 1234567890,
  ownerName: "Nama Owner",
  ownerUsername: "username_owner" // Tanpa '@'
};
```
💡 Anda bebas mengganti semua isi `config.js` tanpa perlu akses `index.js`

---

## ▶️ Cara Menjalankan
1. Clone repositori:
   ```bash
   git clone https://github.com/username/repo-bot.git
   cd repo-bot
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Jalankan bot:
   ```bash
   node index.js
   ```

> Gunakan **Node.js v18+**  
> Pastikan `package.json` memiliki `"type": "module"`

---

## 📜 Menambahkan Fitur Baru
1. Buat file di `commands/`  
2. Gunakan format:
```js
let handler = async (bot, msg) => {
  bot.sendMessage(msg.chat.id, "Hello World!");
};

handler.help = ["helloworld"];
handler.tags = ["general"];
handler.command = ["helloworld"];

export default handler;
```
3. Restart bot — otomatis terload

---

## 📸 Preview
```
|—————WELCOME TO BOT RAPZZBOT—————|
| • BOT SUDAH AKTIF, SILAHKAN GUNAKAN FITUR YANG TERSEDIA
| • NAMA BOT : RAPZZBOT
| • ID OWNER : 123456789
| • NAMA OWNER : Xentra
| • USERNAME OWNER : @rapzzcode
| • TELE DEV BASE : rapzzgege.t.me
| • TAMBAHKAN NAMA DEV KE CREDIT UNTUK MENGHARGAI

| • TOTAL FITUR AKTIF :
| • 1
|—————————————————————————————|
```

---

## 💡 Credits
- **Developer:** XENTRA - RAPZZCODE  
- Telegram: [rapzzgege.t.me](https://t.me/rapzzgege)

---

## 📄 Lisensi
[MIT License](LICENSE) — Bebas digunakan & dimodifikasi dengan tetap mencantumkan credit developer.
