import React from "react";
import "./AboutUser.css";

export function AboutUser({userData}) {
    return(
        userData && <div className={"AboutUser"}>
            <button>
                <p>{userData.public_repos}</p>
                <span>Repository</span>
            </button>
            <button>
                <p>{userData.followers}</p>
                <span>Followers</span>
            </button>
            <button>
                <p>{userData.following}</p>
                <span>Following</span>
            </button>
            <button>
                <p>{userData.public_gists}</p>
                <span>Gists</span>
            </button>
        </div>
    )
}