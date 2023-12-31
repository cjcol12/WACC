import React from "react";
import { Card, Text } from "@nextui-org/react";
import styled from "styled-components";
import cardImage from "../images/1_tonne.png";
import "../style/styles.css";

const HeaderWrapper = styled.div`
    position: absolute;
    // top: 80%;
    // left: 60%;
    // transform: translate(-50%, -50%);
    z-index: 1;

    // @media only screen and (max-width: 600px) {
    //     top: 70%;
    //     left: 70%;
    // }
`;

export const Card1 = () => (
    <Card>
        <HeaderWrapper>
            <Text h2 color="white" className="card_caption">
                Net Zero is Impossible.
            </Text>
        </HeaderWrapper>
        <Card.Image
            src={cardImage}
            objectFit="cover"
            width="100%"
            height="100%"
            alt="1 Tonne CO2 ballon compared to bus"
        />
    </Card>
);
