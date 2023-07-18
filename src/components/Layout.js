import { Content } from "./Content.js";
import { Box } from "./Box.js";
import TitleCard from "./titleCard.js";
import "../style/layout.css";

export const Layout = ({ children }) => (
    <Box
        css={{
            maxW: "100%",
            overflow: "hidden", // Add this line
        }}
    >
        {children}

        <div class="pages">
            <section class="page-1">
                <TitleCard />
            </section>

            <section class="page-2">
                <Content />
            </section>
        </div>
    </Box>
);
