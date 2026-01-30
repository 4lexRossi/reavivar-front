import {
  MD3LightTheme,
  MD3DarkTheme,
  configureFonts,
  type MD3Theme,
} from "react-native-paper";

// Paleta Reavivar (baseada nas imagens)
const reavivar = {
  primary: "#5C66DE",        // índigo suave (CTA)
  secondary: "#6FA8FF",      // azul suave (destaques)
  tertiary: "#B6A6FF",       // lavanda (acentos)
  background: "#FFFFFF",     // pedido: branco
  surface: "#FFFFFF",
  surfaceVariant: "#F6F7FF", // lavanda bem leve para cards
  outline: "#E7E9F6",        // bordas
  onSurface: "#2A2D3E",
  onSurfaceVariant: "#6E7191",
  onPrimary: "#FFFFFF",
  error: "#EB5757",
};

const fontConfig = configureFonts({
  config: {
    displayLarge: { fontFamily: "System", fontWeight: "600" },
    displayMedium: { fontFamily: "System", fontWeight: "600" },
    displaySmall: { fontFamily: "System", fontWeight: "600" },

    headlineLarge: { fontFamily: "System", fontWeight: "600" },
    headlineMedium: { fontFamily: "System", fontWeight: "600" },
    headlineSmall: { fontFamily: "System", fontWeight: "600" },

    titleLarge: { fontFamily: "System", fontWeight: "600" },
    titleMedium: { fontFamily: "System", fontWeight: "500" },
    titleSmall: { fontFamily: "System", fontWeight: "500" },

    bodyLarge: { fontFamily: "System", fontWeight: "400" },
    bodyMedium: { fontFamily: "System", fontWeight: "400" },
    bodySmall: { fontFamily: "System", fontWeight: "400" },

    labelLarge: { fontFamily: "System", fontWeight: "500" },
    labelMedium: { fontFamily: "System", fontWeight: "500" },
    labelSmall: { fontFamily: "System", fontWeight: "500" },
  },
});

export const paperLightTheme: MD3Theme = {
  ...MD3LightTheme,
  fonts: fontConfig,
  roundness: 16, // botões e inputs com cara “Reavivar”
  colors: {
    ...MD3LightTheme.colors,

    // Material 3 tokens
    primary: reavivar.primary,
    onPrimary: reavivar.onPrimary,

    secondary: reavivar.secondary,
    tertiary: reavivar.tertiary,

    background: reavivar.background,
    surface: reavivar.surface,
    surfaceVariant: reavivar.surfaceVariant,

    outline: reavivar.outline,

    onSurface: reavivar.onSurface,
    onSurfaceVariant: reavivar.onSurfaceVariant,

    error: reavivar.error,

    // Alguns extras úteis no app
    elevation: {
      ...MD3LightTheme.colors.elevation,
      level1: "#FFFFFF",
      level2: "#FFFFFF",
      level3: "#FFFFFF",
    },
  },
};

export const paperDarkTheme: MD3Theme = {
  ...MD3DarkTheme,
  fonts: fontConfig,
  roundness: 16,
  colors: {
    ...MD3DarkTheme.colors,

    primary: "#7D86FF",
    onPrimary: "#0F1220",

    secondary: "#8BB9FF",
    tertiary: "#C6B9FF",

    background: "#0F1220",
    surface: "#171A2A",
    surfaceVariant: "#1C2033",

    outline: "#2A2F4A",

    onSurface: "#F3F5FF",
    onSurfaceVariant: "#B9BED6",

    error: reavivar.error,
  },
};
