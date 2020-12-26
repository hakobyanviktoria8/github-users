import React, { useState } from "react";
import "./Header.css";
import logo from "./img/logo.png";
import search from "./img/searchBtn.png";
import {MainContent} from "../MainContent/MainContent";
// import { trackPromise } from 'react-promise-tracker';

export function Header(props) {
    const [input,setInput] = useState("");
    const [userData,setuserData] = useState("");
    // const [users,setUsers] = useState([]);

    // const onLoadTables=() =>{
    //     setUsers([])
    // };

    const handleChange = event => {
        setInput(event.target.value);
    };
    const hendleSearch = (e)=>{
        e.preventDefault();
        const url = "https://api.github.com/users/"+input;
        fetch(url)
            .then(response => response.json())
            .then(data => setuserData(data));
    };
    // trackPromise(userAPI.fetchUsers()
    //     .then((users)=>{
    //         setUsers(users)
    //     })
    // );
    return(
        <div className={"Header"}>
            <div className={"logo"}>
                <img src={logo} alt=""/>
            </div>
            <form action="" onSubmit={hendleSearch} className={"form"}>
                <input type="text" value={input} onChange={handleChange} placeholder={"Search users"}/>
                <button disabled={!input} type="submit">
                    <img src={search} alt=""/>
                </button>
            </form>

            {/*Main Content About Users*/}
            <MainContent userData={userData}/>
        </div>
    )
}