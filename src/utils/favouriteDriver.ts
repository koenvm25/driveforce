import { useSyncExternalStore } from "react";

const STORAGE_KEY = "driveforce-favourite-driver";
const listeners = new Set<() => void>();
let fallback: string | undefined;

const read = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? undefined;
  } catch {
    return fallback;
  }
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
};

export const setFavouriteDriver = (driverId: string | undefined) => {
  fallback = driverId;
  try {
    if (driverId) localStorage.setItem(STORAGE_KEY, driverId);
    else localStorage.removeItem(STORAGE_KEY);
  } catch {
    // storage can be blocked (private window); the in-memory fallback covers this visit
  }
  listeners.forEach((listener) => listener());
};

export const useFavouriteDriver = () =>
  [
    useSyncExternalStore(subscribe, read, () => undefined),
    setFavouriteDriver,
  ] as const;
