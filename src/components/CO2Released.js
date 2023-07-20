import React, { useEffect, useState } from "react";

import { Card, Text } from "@nextui-org/react";
import styled from "styled-components";
import "../style/CO2.css";

const TimeCard = () => {
    const totalEmissions = 37.12 * Math.pow(10, 9); // Total yearly emissions in metric tons
    const [emissionsThisYear, setEmissionsThisYear] = useState(0);

    useEffect(() => {
        const updateEmissions = () => {
            const now = new Date();
            const startOfYear = new Date(now.getFullYear(), 0, 1);
            const secondsThisYear = (now - startOfYear) / 1000;
            const totalSecondsYear = 365 * 24 * 60 * 60; // Assuming a non-leap year

            // Calculate and set the emissions this year
            const emissionsThisYear =
                (secondsThisYear / totalSecondsYear) * totalEmissions;
            setEmissionsThisYear(emissionsThisYear);
        };

        // Update the emissions immediately and then every second
        updateEmissions();
        const intervalId = setInterval(updateEmissions, 20);

        // Clear interval on cleanup
        return () => clearInterval(intervalId);
    }, []);

    return (
        // <Card>
        <div className="card-body">
            <p className="card-text">
                <strong>{emissionsThisYear.toFixed(0)}</strong> Tons of CO2
                emitted this year
            </p>
        </div>
        /* </Card> */
    );
};

export default TimeCard;
