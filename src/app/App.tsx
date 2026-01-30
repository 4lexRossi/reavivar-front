import React from "react";
import { AppPaperProvider } from "@/app/providers/PaperProvider";
import { RootNavigator } from "@/app/navigation/RootNavigator";

export default function App() {
  return (
    <AppPaperProvider>
      <RootNavigator />
    </AppPaperProvider>
  );
}
