import React, {useEffect, useState} from "react";
import "./Followers.css";

export function Followers({followsUrl}) {
    const [follows,setFollows] = useState([]);

    useEffect(() => {
        fetch(followsUrl)
            .then(response => response.json())
            .then(data =>setFollows(data))
    }, [followsUrl]);

  // console.log(follows);

    return(
        follows ?
            <div className={"Cart-Follows-Wraper"}>
                {
                    follows.map(follow=>
                        <div key={follow.id} className={"Cart-Follows"}>
                            <div>
                                <img src={follow.avatar_url} alt=""/>
                            </div>
                            <div>
                                <h2>{follow.login}</h2>
                                <p>{follow.html_url}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        :
        <p>There isn't any followers!</p>
    )
}