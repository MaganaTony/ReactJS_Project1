import React from "react";
import { useParams } from "react-router-dom";

export default function Hello(){
    const { name, lastname } = useParams()

    return (
        <div className="container card p-2">
            <h1>Hello ! {name} {lastname}</h1>
        </div>
    );
}