import React from "react";

const services = [
    { name: "UberX", price: "$10 - $15" },
    { name: "UberXL", price: "$15 - $20" },
    { name: "Uber Black", price: "$25 - $35" },
    { name: "Uber SUV", price: "$35 - $50" },
];

const Prices = () => {
    return (
        <div className="prices-page" style={{ maxWidth: 500, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px #eee" }}>
            <h1 style={{ marginBottom: 24 }}>Uber Service Prices</h1>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: "left", padding: 8, borderBottom: "2px solid #eee" }}>Service</th>
                        <th style={{ textAlign: "left", padding: 8, borderBottom: "2px solid #eee" }}>Estimated Price</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service) => (
                        <tr key={service.name}>
                            <td style={{ padding: 8, borderBottom: "1px solid #f5f5f5" }}>{service.name}</td>
                            <td style={{ padding: 8, borderBottom: "1px solid #f5f5f5" }}>{service.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p style={{ marginTop: 24, color: "#888" }}>
                Prices are estimates and may vary based on location, time, and demand.
            </p>
        </div>
    );
};

export default Prices;
