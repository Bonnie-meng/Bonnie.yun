"use client";

import { PreferencesProvider } from "@/lib/preferences";

export function AppPreferenceProvider({
  children
}: {
  children: React.ReactNode;
}) {
  return <PreferencesProvider>{children}</PreferencesProvider>;
}
