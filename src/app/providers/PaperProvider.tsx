import React from "react";
import { PaperProvider } from "react-native-paper";
import { paperLightTheme } from "@/shared/theme/paperTheme";

export function AppPaperProvider({ children }: { children: React.ReactNode }) {
  return <PaperProvider theme={paperLightTheme}>{children}</PaperProvider>;
}
