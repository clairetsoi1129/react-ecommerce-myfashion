import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const CopyRight = () => {
    const {
        palette: { neutral },
        } = useTheme();

    return (
        <Box padding="20px 0" backgroundColor={neutral.light} textAlign="center">
            <Typography variant="h4">
                © 2023 My Fashion. This site is for demo purpose only.
            </Typography>
        </Box>
    )
}

export default CopyRight