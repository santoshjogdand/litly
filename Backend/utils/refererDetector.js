export function detectSource(referer = "") {
  if (!referer) return { source: "Direct", medium: "None" };

  const ref = referer.toLowerCase();

  if (ref.includes("instagram.com") || ref.includes("l.instagram.com"))
    return { source: "Instagram", medium: "Social" };

  if (ref.includes("facebook.com") || ref.includes("fb.com"))
    return { source: "Facebook", medium: "Social" };

  if (ref.includes("twitter.com") || ref.includes("t.co"))
    return { source: "Twitter", medium: "Social" };

  if (ref.includes("youtube.com") || ref.includes("youtu.be"))
    return { source: "YouTube", medium: "Video" };

  if (ref.includes("linkedin.com"))
    return { source: "LinkedIn", medium: "Social" };

  if (ref.includes("whatsapp.com") || ref.includes("wa.me"))
    return { source: "WhatsApp", medium: "Messaging" };

  if (ref.includes("telegram.org") || ref.includes("t.me"))
    return { source: "Telegram", medium: "Messaging" };

  if (ref.includes("snapchat.com"))
    return { source: "Snapchat", medium: "Social" };

  if (ref.includes("reddit.com"))
    return { source: "Reddit", medium: "Community" };

  if (ref.includes("pinterest.com"))
    return { source: "Pinterest", medium: "Visual" };

  if (ref.includes("mail.google.com") || ref.includes("outlook.live.com") || ref.includes("yahoo.com/mail"))
    return { source: "Email", medium: "Email" };

  if (ref.includes("google.com") || ref.includes("bing.com") || ref.includes("yahoo.com") || ref.includes("duckduckgo.com"))
    return { source: "Search Engine", medium: "Search" };

  if (ref.includes("quora.com"))
    return { source: "Quora", medium: "Q&A" };

  if (ref.includes("discord.com") || ref.includes("discord.gg"))
    return { source: "Discord", medium: "Community" };

  if (ref.includes("medium.com"))
    return { source: "Medium", medium: "Blog" };

  if (ref.includes("threads.net"))
    return { source: "Threads", medium: "Social" };

  try {
    const url = new URL(referer);
    return { source: url.hostname, medium: "Referral" };
  } catch (err) {
    return { source: "Unknown", medium: "Unknown" };
  }
}
