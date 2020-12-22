import React, {useEffect, useState} from "react";
import "../Followers/Followers.css";

export function Following({followgUrl}) {
    const [followg,setFollowg] = useState([]);

    useEffect(() => {
        fetch(followgUrl)
            .then(response => response.json())
            .then(data =>setFollowg(data))
    }, [followgUrl]);

    console.log(followgUrl);

    return(
        followg.length ?
            <div className={"Cart-Follows-Wraper"}>
                {
                    followg.map(follow=>
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
            <p>There isn't any following!</p>
    )
}