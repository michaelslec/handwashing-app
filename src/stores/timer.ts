import { writable } from "svelte/store";
import { handwashingTime } from "../constants";

export const countdownSecondsRemaining = writable(handwashingTime);
