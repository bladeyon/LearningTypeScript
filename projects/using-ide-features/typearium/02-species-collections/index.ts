// Refactor here! ✨
import { onlyTruthy } from "./utils/onlyTruthy";
import { getFauna, FaunaSettings } from "./fauna";
import { getFlora, FloraSettings } from "./flora";
export interface EverythingSettings {
	fauna?: FaunaSettings;
	flora?: FloraSettings;
}

export function getEverything(settings?: EverythingSettings) {
	return onlyTruthy(getFauna(settings?.fauna), getFlora(settings?.flora));
}
