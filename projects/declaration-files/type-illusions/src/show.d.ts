// Declare your types here! ✨
export interface AudienceMember {
	name: string;
}
export interface Act {
	performer: string;
	name: string;
	sections: Section[];
}

export type Section = Illusion | Trick;

export interface Illusion {
	introduction(): string;
	flair(): string;
	payoff(): string;
}

export interface VolunteerIllusion extends Illusion {
	title: string;
	duration: number;
}

export interface Trick {
	gimmick: string;
}
export function getAudienceMemberFor(data: {
	duration: number;
	title: string;
}): Promise<AudienceMember>;

export function isTrick(section: Section): section is Trick;

export function isVolunteerIllusion(
	illusion: Illusion
): illusion is VolunteerIllusion;
