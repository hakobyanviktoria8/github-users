import React from "react";
import "./User.css";
import address from "./img/address.png";
import website from "./img/website.png";
import company from "./img/compani.png";
import email from "./img/email.png";

export function User({userData}) {
    console.log(userData);
    return(
        userData && <div className={"User"}>
            <div className={"col"}>
                <img className={"avatar"} src={userData.avatar_url} alt=""/>
                <h3>{userData.login}</h3>
                <a href={userData.html_url}><button>Github profile</button></a>
            </div>
            <div className={"col col-center"}>
                <h2>{userData.name}</h2>
                <span>{userData.bio}</span><br/><br/>
                <div className={"data"}>
                    <div  className={"data-img"}><img src={website} alt=""/></div>
                    <p>{userData.blog}</p>
                </div>
                <div className={"data"}>
                    <div  className={"data-img"}><img src={address} alt=""/></div>
                    <p>{userData.location}</p>
                </div>
                <div className={"data"}>
                    <div  className={"data-img"}><img src={company} alt=""/></div>
                    <p>{userData.company}</p>
                </div>
                <div className={"data"}>
                    <div  className={"data-img"}><img src={email} alt=""/></div>
                    <p>{userData.email}</p>
                </div>
                <div className={"data"}>
                    <span>Create: {userData.created_at.slice(0,10)}</span>
                    <span>Update: {userData.updated_at.slice(0,10)}</span>
                </div>
            </div>

        </div>
    )
}