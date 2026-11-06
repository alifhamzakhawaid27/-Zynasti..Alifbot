const botName = "ZYNasti ALIF";

function reply(message) {
  const text = message.trim();
  const command = text.toLowerCase();

  if (command === "!help") {
    return `
👑 ${botName}

!help - Commands
!info - Bot information
!anime - Anime suggestions
!pair - Fun pair game
!song - Song search
!video - Video search
!hello - Greeting
`;
  }

  if (command === "!info") {
    return `${botName} | Version 1.0 | Created by Alif`;
  }

  if (command === "!hello") {
    return "Hello! Welcome to ZYNasti ALIF 👑";
  }

  if (command === "!anime") {
    return "🍥 Anime time! Naruto, One Piece, Bleach, Demon Slayer!";
  }

  if (command === "!pair") {
    return "❤️ Pair Game! Try !pair Alif Sara";
  }

  if (command.startsWith("!pair ")) {
    const names = text.slice(6).trim();
    return `❤️ ${names} — Fun Pair Match!`;
  }

  if (command.startsWith("!song ")) {
    const song = text.slice(6).trim();
    return `🎵 Search song: https://www.youtube.com/results?search_query=${encodeURIComponent(song)}`;
  }

  if (command.startsWith("!video ")) {
    const video = text.slice(7).trim();
    return `🎬 Search video: https://www.youtube.com/results?search_query=${encodeURIComponent(video)}`;
  }

  return "Unknown command! Type !help";
}

console.log(reply("!help"));
