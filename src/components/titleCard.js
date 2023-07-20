import { useEffect, useState } from "react";
import { setupScrollDown } from "./scrollDown";
import { Card1 } from "./Card1.js";
import { Grid } from "@nextui-org/react";
import "../style/titleCard.css";

// function TitleCard() {
// useEffect(() => {
//     setupScrollDown();
// }, []);

function TitleCard() {
    useEffect(() => {
        setupScrollDown();
    }, []);
    const [loadDelay, setLoadDelay] = useState([false, false, false, false]); // Assume you have 4 paragraphs

    useEffect(() => {
        loadDelay.forEach((_, index) => {
            const timer = setTimeout(() => {
                setLoadDelay((prevState) => {
                    const newState = [...prevState];
                    newState[index] = true;
                    return newState;
                });
            }, 1000 * (index + 1)); // Each paragraph will load 1 second after the previous one
            return () => clearTimeout(timer);
        });
    }, []);

    return (
        <div style={{ marginTop: "5rem" }}>
            <Grid.Container gap={8} justify="center">
                <Grid sm={6} md={6} lg={6}>
                    <Card1 />
                </Grid>
                <Grid sm={6} md={6} lg={4} direction="column">
                    <p className={`nz-paras ${loadDelay[0] && "fade-in"}`}>
                        Net Zero only has a 10% chance of succeeding in the UK
                    </p>
                    <p className={`nz-paras ${loadDelay[1] && "fade-in"}`}>
                        Net Zero would need 100+ new Nuclear Power-stations in
                        the UK
                    </p>
                    <p className={`nz-paras ${loadDelay[2] && "fade-in"}`}>
                        Net Zero would require the UK National Grid to increase
                        by 400%
                    </p>
                    <p className={`nz-paras ${loadDelay[3] && "fade-in"}`}>
                        Net Zero has 0% chance of succeeding for 5 Billion
                        people worldwide
                    </p>
                </Grid>
            </Grid.Container>
            <div id="alternatives">
                <p id="alternatives-text">We Must Find Alternatives</p>
            </div>
            <div className="scroll-down"></div>
            <p></p>
            <div className="scroll-down"></div>
        </div>
    );
}

export default TitleCard;
