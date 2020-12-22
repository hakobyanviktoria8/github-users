import React, {useEffect, useState} from "react";
import "../Repository/Repository.css";

export function Gists({gistsUrl}) {
    const [gists,setGists] = useState([]);

    useEffect(() => {
        fetch(gistsUrl)
            .then(response => response.json())
            .then(data =>setGists(data))
    }, [gistsUrl]);

    console.log(gists);

    return(
        gists ?
            <div className={"CartsWraper"}>
                {
                    gists.map(gist=>
                        <div key={gist.id} className={"Cart"}>
                            <div>
                                <h2>{gist.files["syntax-transcripts.json"] ? gist.files["syntax-transcripts.json"].filename : "File Name"}</h2>
                            </div>
                            <div>
                                <span><b>Created: </b>{gist.created_at.slice(0,10)}</span>
                                <span><b>Updated: </b>{gist.updated_at.slice(0,10)}</span>
                            </div>
                            <div>
                                <span><b>Comments: </b>{gist.comments}</span>
                                <span><b>public: </b><input type="checkbox" defaultChecked={gist.public}/></span>
                            </div>
                            <div className={"link"}>
                                <a href={gist.html_url}><button>See more</button></a>
                            </div>
                        </div>
                    )
                }
            </div>
            :
            <p>There isn't any following!</p>
    )
}