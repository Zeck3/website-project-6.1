interface PlaylistItem {
  Title: string | null;
  Thumbnail: string;
  MusicVideo: string | null;
  Description: string | null;
  Subtitles: string | null;
}

export const Playlist: PlaylistItem[] = [
  {
    Title: null,
    Thumbnail: "/Assets/YorushikaThumbnail.png",
    MusicVideo: null,
    Description:
      "There are various thieves nowadays, but I am a little different from them. It's not about stealing money. I'm not really interested in antique jewelry or other valuable art. I'm a thief stealing sound.",
    Subtitles: "/Assets/Subtitles/NoneTemplate.vtt",
  },
  {
    Title: "思想犯",
    MusicVideo: "/Assets/ヨルシカ - 思想犯OFFICIAL VIDEO.webm",
    Thumbnail: "/Assets/ThoughtCrimeThumbnail.png",
    Description: null, // "The theme of Thought Crime is plagiarized from George Orwell's novel, '1984.' Then, the moment it's declared to be plagiarized, I change its form to that of an 'homage.' The line between plagiarism and paying homage to something seems ambiguous, and the truth is that that line doesn't actually exist at all. This holds true even when the roles are reversed. A homage holds a great risk of becoming plagiarism. The lyrics to this song pay homage to Ozaki Hosai's haiku and his final years of life. Surely, it can also be said that this is plagiarism.",
    Subtitles: "/Assets/Subtitles/ThoughtCrimeLyrics.vtt",
  },
  {
    Title: "盗作",
    MusicVideo: "/Assets/ヨルシカ - 盗作OFFICIAL VIDEO.webm",
    Thumbnail: "/Assets/PlagiarismThumbnail.png",
    Description: null, // "The objective facts are plagiarism of all modern music. I have no intention of being intentional or unintentional. Both the melodic patterns and chord progressions are long gone. Still, the value of the work does not depend on the evaluation of others. Information, whether stolen or not, is only information. There is no real value there. Only the sense of hearing it at first and its beauty at first glance determines the value of the work to your life. Who would have decided that the “stolen work” was not enough? I'm a thief.",
    Subtitles: "/Assets/Subtitles/PlagiarismLyrics.vtt",
  },
  {
    Title: "春ひさぎ",
    MusicVideo: "/Assets/ヨルシカ - 春ひさぎOFFICIAL VIDEO.webm",
    Thumbnail: "/Assets/ProstitutionThumbnail.png",
    Description: null, // "Selling spring is jargon for prostitution. It functions here as a metaphor for 'music being sold like products.' Don't you think it's sad? It's more silly than real prostitution. To stay alive, we throw away our pride, choose themes to appeal to the masses, and put together pop melodies. Create beautifully verbalized and easy-to-understand works. In this way, I sell myself to you in the form of music. I call it selling spring.",
    Subtitles: "/Assets/Subtitles/ProstitutionLyrics.vtt",
  },
  {
    Title: "斜陽",
    MusicVideo: "/Assets/ヨルシカ - 斜陽.webm",
    Thumbnail: "/Assets/TheSettingSunThumbnail.png",
    Description: null,
    Subtitles: "/Assets/Subtitles/NoneTemplate.vtt",
  },
  {
    Title: "だから僕は音楽をやめた",
    MusicVideo: "/Assets/ヨルシカ - だから僕は音楽を辞めた (Music Video).webm",
    Thumbnail: "/Assets/That'sWhyIGaveUpOnMusicThumbnail.png",
    Description: null,
    Subtitles: "/Assets/Subtitles/ThatsWhyIGaveUpOnMusicLyrics.vtt",
  },
  {
    Title: null,
    Thumbnail: "/Assets/About.png",
    MusicVideo: null,
    Description:
      "I am not a thief but this work cannot determined if its plagiarized or not. It is merely made to enhance my skills on coding on Javascript and React JS, on web development. And thus, as a fan of ヨルシカ, I made this playlist website (sort of) with minimal functionalities, and only a few songs from ヨルシカ used. I do not own the images, the videos, and their work.",
    Subtitles: "/Assets/Subtitles/NoneTemplate.vtt",
  },
];
