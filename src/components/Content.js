import React, { useEffect } from "react";
import { Text, Spacer } from "@nextui-org/react";
import { Box } from "./Box.js";
import "../style/content.css";

export const Content = () => {
    const textContent = [
        "Net Zero in the UK is ‘targeted’ to stop the use of Coal, Gas, Oil, Diesel and Petrol by 2050 (28 years). If a total stop is not possible, then Co2 absorption will be relied upon for the balance to Net Zero, via either natural (trees and nature) or man made methods (Carbon Capture etc).",
        "In 2022 in the UK, just 8% of daily energy consumption is from clean sources such as Wind, Solar, Hydro and now Nuclear which has been ‘re-branded’ as ‘clean’ The other 92% of daily energy usage is shown below as 9.5% ‘dirty’ electricity from Fossil Fuels, 50.3% Gas, 7.6% Petrol, 15.5% Diesel and 9.2% Industrial and Aviation fuels.",
        "That alternative ‘clean’ sources of energy would need to be found for 92% of the UK’s daily energy needs, which would require 100+ NEW Nuclear Power-stations, which no-one is planning, which means……………..",
    ];

    const words = [
        "However...",
        "Which means...",
        "Net Zero in the UK is \n IMPOSSIBLE",
    ];

    useEffect(() => {
        const colorfulSection = document.getElementById("bg-black");
        const title = document.getElementById("title");
        const wordElements = document.querySelectorAll(".word");
        const textElements = document.querySelectorAll(".text-content"); // Select all the text content

        const observer = new IntersectionObserver(
            (entries) => {
                // If the title is in the viewport, start the color transition and word animation
                if (entries[0].isIntersecting) {
                    const changeColor = () => {
                        colorfulSection.style.backgroundColor = "white"; // Change to desired color
                    };

                    setTimeout(changeColor, 1000); // Delay of 1 second before starting the color change

                    wordElements.forEach((word, index) => {
                        setTimeout(() => {
                            word.classList.add("animate-word");
                        }, index * 1000); // 1000ms delay between each word
                    });

                    textElements.forEach((text, index) => {
                        // For each text content
                        setTimeout(() => {
                            text.classList.add("animate-text"); // Add class for animation
                        }, index * 1500); // Delay 2 seconds between each text content
                    });
                }
            },
            {
                threshold: 1.0, // Title is fully visible
            }
        );

        observer.observe(title);

        return () => observer.disconnect();
    }, []);

    return (
        <div id="bg-black">
            <Box
                css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}
                class="container"
                style={{ marginTop: "10rem" }}
            >
                <Text h2 id="title">
                    Net Zero Is Impossible
                </Text>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gridTemplateRows: "1fr 1fr 1fr",
                    }}
                >
                    {textContent.map((text, index) => (
                        <div
                            key={index}
                            className="column"
                            style={{
                                gridRow: index + 1,
                                gridColumn: index + 1,
                                transition: "background-color 2s ease",
                            }}
                        >
                            <Text size="$lg" className="text-content">
                                {text}
                            </Text>{" "}
                            {/* Add class to text content */}
                            <Spacer y={1} />
                            <Text size="$lg" className="right-col word">
                                {words[index]}
                            </Text>
                        </div>
                    ))}
                </div>
            </Box>
        </div>
    );
};
