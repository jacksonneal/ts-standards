import Box from '@mui/material/Box';
import type { } from '@mui/material/themeCssVarsAugmentation';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme, useColorScheme } from '@mui/material/styles';
import { SdButton } from '@jacksonneal/mui-standard';

type SupportedColorScheme = "rosePine" | "rosePineDawn" | "rosePineMoon";

function MyApp() {
  const { colorScheme, systemMode, setMode, setColorScheme } = useColorScheme();
  if (colorScheme == null) {
    return null;
  }
  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: theme.vars.palette.sd.background.primary,
        borderRadius: 1,
        p: 3,
        minHeight: '56px',
      })}
    >
      <Select
        value={colorScheme}
        onChange={(event) => {
          if (event.target.value === "system") {
            setMode("system");
            setColorScheme(systemMode == 'dark' ? 'rosePine' : 'rosePineDawn');
          } else {
            setColorScheme(event.target.value as SupportedColorScheme);
          }
        }}
        sx={(theme) => ({
          color: theme.vars.palette.sd.text.primary
        })}
      >
        <MenuItem value="system">System</MenuItem>
        <MenuItem value="rosePine">Rose Pine</MenuItem>
        <MenuItem value="rosePineDawn">Rose Pine Dawn</MenuItem>
        <MenuItem value="rosePineMoon">Rose Pine Moon</MenuItem>
      </Select>
      <SdButton />
    </Box>
  );
}

declare module '@mui/material/styles' {
  interface PaletteOptions {
    sd: {
      background: {
        primary: string;
      },
      text: {
        primary: string;
      }
    }
  }
  interface Palette {
    sd: {
      background: {
        primary: string;
      },
      text: {
        primary: string;
      }
    }
  }
  interface ColorSchemeOverrides {
    rosePine: true,
    rosePineDawn: true,
    rosePineMoon: true,
  }
}

const basePalette = createTheme().palette;

const theme = createTheme({
  defaultColorScheme: "rosePine",
  cssVariables: {
    colorSchemeSelector: 'class'
  },
  colorSchemes: {
    rosePine: {
      palette: {
        ...basePalette,
        primary: {
          main: "#191724"
        },
        sd: {
          background: {
            primary: "#191724"
          },
          text: {
            primary: "#e0def4"
          }
        }
      },
    },
    rosePineDawn: {
      palette: {
        ...basePalette,
        sd: {
          background: {
            primary: "#faf4ed"
          },
          text: {
            primary: "#575279"
          }
        }
      },
    },
    rosePineMoon: {
      palette: {
        ...basePalette,
        sd: {
          background: {
            primary: "#232136"
          },
          text: {
            primary: "#e0def4"
          }
        }
      },
    }
  }
});

export default function ToggleColorMode() {
  return (
    <ThemeProvider theme={theme}>
      <MyApp />
      <SdButton />
    </ThemeProvider>
  );
}
