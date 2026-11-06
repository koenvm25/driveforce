import { useSyncExternalStore } from "react";

const createStore = (key: string) => {
  const listeners = new Set<() => void>();
  let fallback: string | undefined;

  const read = () => {
    try {
      return localStorage.getItem(key) ?? undefined;
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

  const set = (value: string | undefined) => {
    fallback = value;
    try {
      if (value) localStorage.setItem(key, value);
      else localStorage.removeItem(key);
    } catch {
      // storage can be blocked (private window); the in-memory fallback covers this visit
    }
    listeners.forEach((listener) => listener());
  };

  return {
    useValue: () => useSyncExternalStore(subscribe, read, () => undefined),
    set,
  };
};

const driverStore = createStore("driveforce-favourite-driver");
const teamStore = createStore("driveforce-favourite-team");
const accentStore = createStore("driveforce-team-accent");

export const setFavouriteDriver = (
  driverId: string | undefined,
  constructorId?: string,
) => {
  driverStore.set(driverId);
  teamStore.set(driverId ? constructorId : undefined);
};

export const useFavouriteDriver = () =>
  [driverStore.useValue(), setFavouriteDriver] as const;

export const useFavouriteTeam = () => teamStore.useValue();

export const useTeamAccent = () =>
  [
    accentStore.useValue() !== "off",
    (enabled: boolean) => accentStore.set(enabled ? undefined : "off"),
  ] as const;
