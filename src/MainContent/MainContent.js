import React from "react";
import "./MainContent.css";
import {User} from "../User/User";
import {AboutUser} from "../AboutUser/AboutUser";

export function MainContent({userData}) {
    return(
        <div>
            <User userData={userData}/>
            <AboutUser userData={userData}/>
        </div>
    )
}