"use client";
import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default Wrapper