import React from "react";
import {
    Navbar,
    Button,
    Link,
    Text,
    Card,
    Spacer,
    Radio,
    useTheme,
} from "@nextui-org/react";
import { Layout } from "./components/Layout.js";
import { AcmeLogo } from "./AcmeLogo.js";
import { VariantsSelectorWrapper } from "./VariantsSelectorWrapper.js";
import { Card1 } from "./components/Card1.js";
import { Grid } from "@nextui-org/react";
import "./style/App.css";
import TimeCard from "./components/CO2Released.js";

export default function App() {
    const [variant, setVariant] = React.useState("default");
    const [activeColor, setActiveColor] = React.useState("primary");

    const { isDark } = useTheme();

    const variants = [
        "default",
        "highlight",
        "highlight-solid",
        "underline",
        "highlight-rounded",
        "highlight-solid-rounded",
        "underline-rounded",
    ];

    const colors = ["primary", "secondary", "success", "warning", "error"];

    return (
        <div>
            <Navbar isBordered={isDark} variant="sticky">
                <Navbar.Brand>
                    <AcmeLogo />
                    <Text b color="inherit" hideIn="xs">
                        WACC
                    </Text>
                </Navbar.Brand>
                <Navbar.Content
                    activeColor={activeColor}
                    hideIn="xs"
                    variant="underline-rounded"
                >
                    <Navbar.Link isActive href="#">
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#">Learn More</Navbar.Link>
                    <Navbar.Link href="#">
                        What are the Alternatives
                    </Navbar.Link>
                    <Navbar.Link href="#">Contact us</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <TimeCard />
                </Navbar.Content>
            </Navbar>
            <Layout></Layout>
        </div>
    );
}
