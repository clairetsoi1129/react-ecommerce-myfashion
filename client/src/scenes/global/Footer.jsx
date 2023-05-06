import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();

  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 25px, 30px)"
      >
        <Box width="clamp(20%, 22%, 25%)">
          <Typography variant="h4" fontWeight="bold" mb="20px">
            Help
          </Typography>
          <Typography mb="10px">Frequently asked questions</Typography>
          <Typography mb="10px">Contact us</Typography>
          <Typography mb="10px">Arrange a return</Typography>
          <Typography mb="10px">Product recall</Typography>
          <Typography mb="10px">Site map</Typography>
          <Typography mb="10px">Track my order</Typography>
        </Box>

        <Box width="clamp(20%, 22%, 25%)">
          <Typography variant="h4" fontWeight="bold" mb="20px">
            Privacy & Legal
          </Typography>
          <Typography mb="10px">Terms & conditions</Typography>
          <Typography mb="10px">Cookies & Privacy Policy</Typography>
          <Typography mb="10px">Manually Manage Cookies</Typography>
        </Box>

        <Box width="clamp(20%, 22%, 25%)">
          <Typography variant="h4" fontWeight="bold" mb="20px">
            More From Abc
          </Typography>
          <Typography mb="10px">Store locator</Typography>
          <Typography mb="10px">Facebook</Typography>
          <Typography mb="10px">Instagram</Typography>
          <Typography mb="10px">Twitter</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="20px">
            About Us
          </Typography>
          <Typography mb="10px">
            Editorial hub
          </Typography>
          <Typography mb="10px" sx={{ wordWrap: "break-word" }}>
            Discover Abc
          </Typography>
          <Typography mb="10px">Reponsibly made</Typography>
          <Typography mb="10px">Equality & belonging</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;