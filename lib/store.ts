import { createContext, useContext } from "react";
import { createStore, useStore as useZustandStore } from "zustand";
import { combine } from "zustand/middleware";

export type StoreType = ReturnType<typeof initializeStore>;
type StoreInteface = ReturnType<StoreType["getState"]>;

const getDefaultInitialState = () => ({
  lastUpdate: Date.now(),
  light: false,
  count: 0,
});

const zustandContext = createContext<StoreType | null>(null);
export const Provider = zustandContext.Provider;

export const useStore = <T>(selector: (state: StoreInteface) => T) => {
  const store = useContext(zustandContext);
  if (!store) throw new Error("Store is missing the provider");
  return useZustandStore(store, selector);
};

export const initializeStore = (preloadedState = {}) => {
  return createStore(
    combine({ ...getDefaultInitialState(), ...preloadedState }, (set, get) => ({
      reset2: () => {
        set({ count: 100 });
      },
      tick: (lastUpdate: number, light: boolean) => {
        set({
          lastUpdate,
          light: !!light,
        });
      },
      increment: () => {
        set({
          count: get().count + 1,
        });
      },
      decrement: () => {
        set({
          count: get().count - 1,
        });
      },
      reset: () => {
        set({
          count: getDefaultInitialState().count,
        });
      },
    }))
  );
};
