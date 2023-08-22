# DiscordJS Starter Template

This is a starter template for Discord.js v14.

## How to start
1. Clone the repository with `git clone https://github.com/x1xo/DiscordJS-Starter`
2. Replace your Discord Token in the `.env` file.
3. Replace your Discord Development Guild Id in the `.env` file so you don't push the commands to all of the guilds.

## How to deploy
### Docker
1. Clone the repository from your GitHub using `git clone https://github.com/<name>/<repo>`.
2. Navigate into the folder using `cd <folder>`.
3. Build the Docker image using `docker build -t image-name .` (dot is very important).
4. Deploy the Docker image using `docker run -itd image-name`.

If you don't have Docker installed on your machine, run the following command:\
`curl -sSL https://get.docker.com | sh`