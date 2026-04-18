# K-S-DiscordBot
## What You Need Installed

- Node.js 18 or newer
- npm
- Bot Token

## Project Dependencies

Dependencies are listed in `package.json` and installed with npm.

Main packages used:

- discord.js
- dotenv

## Setup

1. Clone this repository.
2. Install dependencies:

```bash
npm install
```

3. Create your environment file by copying `.env.example` to `.env`.
4. Add your token in `.env`:

```env
BOT_TOKEN=your_discord_bot_token_here
```

5. In the Discord Developer Portal, make sure your bot has the **Message Content Intent** enabled.

## Run The Bot

```bash
npm start
```

## Run In Development (Auto-Restart)

```bash
npm run dev
```

This uses `nodemon` to watch your files and automatically restart the bot when you save changes.

If you do not want to use the script, you can also run:

```bash
node index.js
```