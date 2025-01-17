"use client";

import react from "react";

export interface ChildrenProps {
  readonly children: react.ReactNode;
}

export function useEffectOnce(effect: react.EffectCallback) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  react.useEffect(effect, []);
}

export type SafeContextResult<T> = [
  () => T,
  react.Provider<T | null>,
  react.Context<T | null>,
];

/**
 * A helper that creates a Context Consumer and Provider without having to declare a
 * default value and checking nullable.
 *
 * @example
 * export const [useAuth, AuthProvider] = createSafeContext<AuthView>('AuthCtx')
 *
 * @param displayName Context name displayed in React Component's Tree
 * @returns A context consumer, the context provider and the context itself
 */
export function createCtx<T>(
  displayName: Readonly<string>,
): SafeContextResult<T> {
  const Ctx = react.createContext<T | null>(null);
  Ctx.displayName = displayName;

  function useCtx() {
    const value = react.useContext(Ctx);
    if (value === null) {
      throw new Error(
        `Missing ${displayName} context provider upwards on this tree`,
      );
    }

    return value;
  }

  return [useCtx, Ctx.Provider, Ctx];
}

export function useIsClient() {
  const [isClient, setIsClient] = react.useState(false);

  useEffectOnce(() => {
    setIsClient(true);
  });

  return isClient && typeof window !== "undefined";
}
