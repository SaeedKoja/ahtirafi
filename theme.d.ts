import { Theme, ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  
  interface Palette {
    Tertiary?: PaletteColor
    Gold?: PaletteColor
    Grey?: PaletteColor
  }

  interface PaletteOptions {
    Tertiary?: PaletteColorOptions,
    Gold?: PaletteColorOptions,
    Grey?: PaletteColorOptions
  }

}
