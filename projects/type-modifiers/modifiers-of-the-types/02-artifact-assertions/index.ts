// Write your types and function below! ✨
// You'll need to export them so the tests can run it.
type ArtifactType = "magic" | "fortress" | "device" | "sword";
interface Artifact {
	[key: string]: {
		type: ArtifactType;
	};
}
const artifacts = {
	"Black Garnet": {
		type: "magic",
	},
	"Castle TypeScript": {
		type: "fortress",
	},
	"Cosmic Key": {
		type: "device",
	},
	"Power Sword": {
		type: "sword",
	},
	Starseed: {
		type: "magic",
	},
	"Sword of the Ancients": {
		type: "sword",
	},
} as Artifact;

export type ArtifactName = keyof typeof artifacts;

export function getArtifactType(artifact: ArtifactName): ArtifactType {
	return artifacts[artifact].type;
}
