import React from "react";
import { Card, Text } from "@nextui-org/react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
    position: absolute;
    top: 80%;
    left: 75%;
    transform: translate(-50%, -50%);
    z-index: 1;

    @media only screen and (max-width: 600px) {
        top: 70%;
        left: 70%;
    }
`;

export const Card1 = () => (
    <Card>
        <HeaderWrapper>
            <Text h2 color="white">
                Net Zero is Impossible
            </Text>
        </HeaderWrapper>
        <Card.Image
            src="https://nextui.org/images/card-example-4.jpeg"
            objectFit="cover"
            width="100%"
            height={340}
            alt="Card image background"
        />
    </Card>
);
