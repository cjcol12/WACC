import { Content } from "./Content.js";
import { Box } from "./Box.js";
import TitleCard from "./titleCard.js";
import "../style/layout.css";
import BlankPage from "./BlankRed.js";

export const Layout = ({ children }) => {
    const color1 = "blue"; // Define the desired color
    const color2 = "green";
    return (
        <Box>
            {children}
            {/* <TimeCard /> */}
            <section>
                <TitleCard />
            </section>
            <section style={{ backgroundColor: color1 }}>
                <BlankPage />
            </section>
            <section style={{ backgroundColor: color2 }}>
                <BlankPage />
            </section>
            <section>
                <Content />
            </section>
        </Box>
    );
};
