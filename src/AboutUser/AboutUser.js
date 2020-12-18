import React, { useState, useEffect } from "react";
import "./AboutUser.css";
import repos from "./img/repository.png";
import followers from "./img/followers.png";
import following from "./img/following.png";
import gists from "./img/gists.png";

export function AboutUser({userData}) {
    const [repo,setRepo] = useState([]);
    const [follows,setFollows] = useState([]);
    const [followg,setFollowg] = useState([]);
    const [gist,setGist] = useState([]);

    console.log(userData);

    // useEffect(()=>{
    //     async function fetchItem() {
    //         try {
    //             const response = await fetch(userData.followers_url);
    //             const json = await response.json();
    //             setFollowers(json);
    //         } catch (error) {
    //             alert("Կներեք, նկատվել է խնդիր համացանցում: Փորձեք մի փոքր ավելի ուշ: Շնորհակալություն ...!")
    //         }
    //     }
    //     fetchItem()
    // },[]);
    const handleRepos = ()=>{
        console.log("arach")
    };
    //use Router
    return(
        userData &&
        <div className={"AboutUser"}>
            <button onClick={handleRepos}>
                <div>
                    <img src={repos} alt=""/>
                </div>
                <div className={"text"}>
                    <h2>{userData.public_repos}</h2>
                    <span>Repository</span>
                </div>
            </button>
            <button>
                <div>
                    <img src={followers} alt=""/>
                </div>
                <div className={"text"}>
                    <h2>{userData.followers}</h2>
                    <span>Followers</span>
                </div>
            </button>
            <button>
                <div>
                    <img src={following} alt=""/>
                </div>
                <div className={"text"}>
                    <h2>{userData.following}</h2>
                    <span>Following</span>
                </div>
            </button>
            <button>
                <div>
                    <img src={gists} alt=""/>
                </div>
                <div className={"text"}>
                    <h2>{userData.public_gists}</h2>
                    <span>Gists</span>
                </div>
            </button>
        </div>
    )
}