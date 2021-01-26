import React  from "react";
import "./AboutUser.css";
import repos from "./img/repository.png";
import followers from "./img/followers.png";
import following from "./img/following.png";
import gists from "./img/gists.png";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Repository} from "./TypeBtn/Repository/Repository";
import {Followers} from "./TypeBtn/Followers/Followers";
import {Following} from "./TypeBtn/Following/Following";
import {Gists} from "./TypeBtn/Gists/Gists";

export function AboutUser({userData}) {
    //use Router
    return(
        userData &&
            <Router>
                <div className={"AboutUser"}>
                    <nav>
                        <Link to="/repository">
                            <button>
                                <div className={"img"}>
                                    <img src={repos} alt=""/>
                                </div>
                                <div className={"text"}>
                                    <h2>{userData.public_repos}</h2>
                                    <span>Repository</span>
                                </div>
                            </button>
                        </Link>
                        <Link to={"/followers"}>
                            <button>
                                <div className={"img"}>
                                    <img src={followers} alt=""/>
                                </div>
                                <div className={"text"}>
                                    <h2>{userData.followers}</h2>
                                    <span>Followers</span>
                                </div>
                            </button>
                        </Link>
                        <Link to={"/following"}>
                            <button>
                                <div className={"img"}>
                                    <img src={following} alt=""/>
                                </div>
                                <div className={"text"}>
                                    <h2>{userData.following}</h2>
                                    <span>Following</span>
                                </div>
                            </button>
                        </Link>
                        <Link to={"/gists"}>
                            <button>
                                <div className={"img"}>
                                    <img src={gists} alt=""/>
                                </div>
                                <div className={"text"}>
                                    <h2>{userData.public_gists}</h2>
                                    <span>Gists</span>
                                </div>
                            </button>
                        </Link>
                    </nav>
                    <div className={"main"}>
                        <Switch>
                            <Route exact path="/">
                                <Repository reposUrl={userData.repos_url}/>
                            </Route>
                            <Route path="/repository">
                                <Repository reposUrl={userData.repos_url}/>
                            </Route>
                            <Route path="/followers">
                                <Followers followsUrl={userData.followers_url}/>
                            </Route>
                            <Route path="/following">
                                <Following followgUrl={userData.following_url.slice(0,-13)}/>
                            </Route>
                            <Route path="/gists">
                                <Gists gistsUrl={userData.gists_url.slice(0,-10)}/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
    )
}
