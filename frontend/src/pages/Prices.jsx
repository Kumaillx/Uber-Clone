import React from "react";

const pricesData = [
    { type: "UberX", baseFare: "$2.50", perMile: "$1.20", perMinute: "$0.25" },
    { type: "UberXL", baseFare: "$3.50", perMile: "$1.75", perMinute: "$0.35" },
    { type: "Uber Black", baseFare: "$7.00", perMile: "$3.00", perMinute: "$0.65" },
];

const Prices = () => (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: 24 }}>
        <h2>Ride Prices</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
                <tr>
                    <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: 8 }}>Type</th>
                    <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: 8 }}>Base Fare</th>
                    <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: 8 }}>Per Mile</th>
                    <th style={{ borderBottom: "1px solid #ccc", textAlign: "left", padding: 8 }}>Per Minute</th>
                </tr>
            </thead>
            <tbody>
                {pricesData.map((price) => (
                    <tr key={price.type}>
                        <td style={{ padding: 8 }}>{price.type}</td>
                        <td style={{ padding: 8 }}>{price.baseFare}</td>
                        <td style={{ padding: 8 }}>{price.perMile}</td>
                        <td style={{ padding: 8 }}>{price.perMinute}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <p style={{ marginTop: 16, color: "#555" }}>
            * Prices are estimates and may vary based on location, time, and demand.
        </p>
    </div>
);

export default Prices;