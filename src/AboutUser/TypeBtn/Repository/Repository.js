import React,{ useState , useEffect } from "react";
import "./Repository.css"

export function Repository({reposUrl}) {
    const [repos,setRepops] = useState([]);

    useEffect(() => {
        fetch(reposUrl)
            .then(response => response.json())
            .then(data =>setRepops(data))
    }, [reposUrl]);

    return(
        repos.length ?
        <div className={"CartsWraper"}>
            {repos.map(item =>
                <div  className={"Cart"} key={item.id}>
                    <div><h2>{item.name}</h2></div>
                    <div><small>Description: {item.description && item.description.length>75 ? item.description.slice(0,75)+"..." : item.description}</small></div>
                    <div>
                        <span><b>Branch: </b>{item.default_branch}</span>
                        <span><b>Private: </b><input type="checkbox" defaultChecked={item.private}/></span>
                        <span><b>Downloads: </b><input type="checkbox" defaultChecked={item.has_downloads}/></span>
                    </div>
                    <div className={"Cart-last-elem"}>
                        <span><b>Created: </b>{item.created_at.slice(0,10)}</span>
                        <span><b>Last updated: </b>{item.updated_at.slice(0,10)}</span>
                        <span><b>Watchers: </b>{item.watchers}</span>
                    </div>
                </div>
            )}
            {console.log(repos)}
        </div>
        :
        <p>There isn't any repositories!</p>
    )
}