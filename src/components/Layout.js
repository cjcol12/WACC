import { Content } from "./Content.js";
import { Box } from "./Box.js";
import TitleCard from "./titleCard.js";
import "../style/layout.css";
import BlankPage from "./BlankRed.js";

export const Layout = ({ children }) => {
    const color1 = "blue";
    const color2 = "green";
    const color3 = "black"; // Define another color for the last page overlay
    return (
        <Box>
            {children}
            <section className="section">
                <TitleCard />
            </section>
            <section className="section" style={{ backgroundColor: color1 }}>
                <div
                    className="color-overlay"
                    style={{ backgroundColor: color1 }}
                ></div>
                <BlankPage className="content" />
            </section>
            <section className="section" style={{ backgroundColor: color2 }}>
                <div
                    className="color-overlay"
                    style={{ backgroundColor: color2 }}
                ></div>
                <BlankPage className="content" />
            </section>
            <section className="section">
                <Content className="content" />
            </section>
        </Box>
    );
};
