// Import necessary MUI modules
import '@mui/material/styles';
import { PaletteColor } from '@mui/material/styles';

interface CustomPalatte {
    brand: {
        core: Pick<PaletteColor, 'main'>;
        primary: Pick<PaletteColor, 'main'>;
    }
}
// Extend the Palette interface for custom colors if necessary
declare module '@mui/material/styles' {
  interface Palette extends CustomPalatte {
    secondary: Pick<PaletteColor, 'main'>;
  }
  interface PaletteOptions extends CustomPalatte {
    tertiary?: PaletteOptions['primary'];
  }
}
