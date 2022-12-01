import {AppBar, Box, CssBaseline, Toolbar, Typography} from "@mui/material"
import {ReactNode} from "react"

export const AppShell: React.FC<{ title: string, children?: ReactNode }> = ({title, children}) => {
    return (
        <>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            {title}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box sx={{overflow: 'auto'}}>
                    <Toolbar/>
                    {children}
                </Box>
            </Box>
        </>
    )
}