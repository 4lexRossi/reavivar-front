import React from "react";
import { AppPaperProvider } from "@/app/providers/PaperProvider";
import { RootNavigator } from "@/app/navigation/RootNavigator";
import { AuthProvider } from "@/store/AuthContext";

export default function App() {
  return (
    <AppPaperProvider>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </AppPaperProvider>
  );
}
