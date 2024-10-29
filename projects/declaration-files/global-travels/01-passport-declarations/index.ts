// Write your types here! ✨

interface Allowed {
	allowed: true;
}
interface NotAllowed {
	allowed: false;
	reason: string;
}

declare global {
	interface Window {
		passports: {
			[key: string]: Passport | undefined;
		};
	}
}

interface Passport {
	name: string;
	expires: Date;
}

export function checkPassport(id: string): Allowed | NotAllowed {
	const passport = window.passports[id];

	if (!passport) {
		return {
			allowed: false,
			reason: "No passport found.",
		};
	}

	if (!passport.name) {
		return {
			allowed: false,
			reason: "No known name.",
		};
	}

	if (passport.expires.getTime() < new Date().getTime()) {
		return {
			allowed: false,
			reason: "Passport has expired.",
		};
	}

	return {
		allowed: true,
	};
}
