import type { NextPage } from 'next'

// @mui material components
import Container from "@mui/material/Container";

//css
import classes from "../../../public/css/footer.module.css"

const Footer: NextPage = () => {
    return(
        <div id={classes.footerContainer}>
            <Container>
                <div id={classes.leftFooter}>&copy; 2022, made by William Onnyx</div>
            </Container>
        </div>
    );
}

export default Footer;