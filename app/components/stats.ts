import { atom } from "nanostores";
export const $abstts = atom<string>("");
export const $anstts = atom<string | null>(null);
export const $pidtts = atom<string | null>(null);
export const $usrtts = atom<string | null>(null);
export const $qestts = atom<string | null>(null);

$qestts.subscribe((val) => console.log(val));
