import React from "react";
import "./MainContent.css";
import {User} from "../User/User";
import {AboutUser} from "../AboutUser/AboutUser";
// import { usePromiseTracker } from "react-promise-tracker";

// import Loader from 'react-loader-spinner';

// const LoadingIndicator = props => {
//     const { promiseInProgress } = usePromiseTracker();
//
//     return promiseInProgress &&
//         <div
//           style={{
//                 width: "100%",
//                 height: "100",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center"
//               }}
//         >
//             <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
//        </div>
// };

export function MainContent({userData}) {
    // console.log(userData);
    return(
        <div>
            {/*<LoadingIndicator/>*/}
            <User userData={userData}/>
            <AboutUser userData={userData}/>
        </div>
    )
}