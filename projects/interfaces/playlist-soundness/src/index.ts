// Write your unrollPlaylist function and types here! ✨
// You'll need to export the function so the tests can run it.

interface Song {
	artist: string | string[];
	length: number;
	name: string;
	type: "song";
}

interface Album {
	type: "album";
	songs: Song[];
}

interface Playlist {
	type: "playlist";
	resolve(): Song[];
}

type PlaylistItem = Song | Album | Playlist;

interface Artists {
	[key: string]: string[];
}
interface GroupPlayList {
	time: number;
	songs: string[];
	artists: Artists;
}

export const unrollPlaylist = (
	playListItems: PlaylistItem[]
): GroupPlayList => {
	const groupedList: GroupPlayList = {
		time: 0,
		songs: [],
		artists: {},
	};

	for (const item of playListItems) {
		switch (item.type) {
			case "song":
				addSong(item);
				break;
			case "album":
				item.songs.forEach((song) => {
					addSong(song);
				});
				break;
			case "playlist":
				item.resolve().forEach((song) => {
					addSong(song);
				});
				break;
		}
	}

	function addSong(item: Song) {
		groupedList.songs.push(item.name);
		groupedList.time += item.length;
		const songArtists =
			typeof item.artist === "string" ? [item.artist] : item.artist;

		for (const artist of songArtists) {
			if (!groupedList.artists[artist]) groupedList.artists[artist] = [];
			groupedList.artists[artist].push(item.name);
		}
	}
	return groupedList;
};
