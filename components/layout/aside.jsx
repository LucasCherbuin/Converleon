import React from "react";
import { AdvertisingProvider, AdvertisingSlot } from "react-advertising";

const config = {
    slots: [
        {
            id: "aside-ad",
            path: "/6355419/Travel/Europe/France/Paris",
            sizes: [[640, 60]]
        }
    ]
};

function Aside() {
    return (
        <aside>
            <AdvertisingProvider config={config}>
                <h1>Slot</h1>
            </AdvertisingProvider>
        </aside>
    );
};