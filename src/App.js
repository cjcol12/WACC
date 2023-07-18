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
        <Layout>
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
                    variant={variant}
                >
                    <Navbar.Link href="#">Home</Navbar.Link>
                    <Navbar.Link isActive href="#">
                        Learn More
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        What are the Alternatives
                    </Navbar.Link>
                    <Navbar.Link href="#">Contact us</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <Navbar.Link color="inherit" href="#">
                        Login
                    </Navbar.Link>
                    <Navbar.Item>
                        <Button
                            auto
                            flat
                            as={Link}
                            color={activeColor}
                            href="#"
                        >
                            Sign Up
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>
            </Navbar>
            {/* <VariantsSelectorWrapper>
                <Card css={{ px: "$6", maxW: "90%" }}>
                    <Card.Body>
                        <Radio.Group
                            defaultValue="default"
                            label="Select active variant"
                            orientation="horizontal"
                            size="sm"
                            value={variant}
                            onChange={setVariant}
                        >
                            {variants.map((variant) => (
                                <Radio
                                    key={variant}
                                    color={activeColor}
                                    value={variant}
                                >
                                    {variant}
                                </Radio>
                            ))}
                        </Radio.Group>
                        <Spacer y={0.5} />
                        <Radio.Group
                            defaultValue="default"
                            label="Select active color"
                            orientation="horizontal"
                            size="sm"
                            value={activeColor}
                            onChange={setActiveColor}
                        >
                            {colors.map((color) => (
                                <Radio
                                    key={color}
                                    color={activeColor}
                                    value={color}
                                >
                                    {color === "primary"
                                        ? "primary (default)"
                                        : color}
                                </Radio>
                            ))}
                        </Radio.Group>
                    </Card.Body>
                </Card>
            </VariantsSelectorWrapper> */}
        </Layout>
    );
}
