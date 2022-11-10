import { createTheme } from "@mui/material/styles";
import { Palette } from "./palette";

export const theme = createTheme({
    palette: Palette,
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    label: {
                        color: '#fff'
                    },
                    input: {
                        color: '#fff'
                    }
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    '::before': {
                        borderBottom: '1px solid #fff',
                    },
                    '&:hover:not(.Mui-disabled):before': {
                        borderBottom: '1px solid #fff',
                    }
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    border:'3px solid #fff'
                }
            }
        }
    }
})