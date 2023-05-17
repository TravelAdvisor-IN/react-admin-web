import React, { useState } from 'react';
// import { API } from '../Constants';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';


function LoginPage()
{
    const [cookies, setCookie] = useCookies(['user']);
   
    const navigate = useNavigate();
    // // const [setData] = useState('');

    const [user_id, setUserID] = useState('');
    const [user_email, setEmail] = useState('');
    const [user_password, setPassword] = useState('');

    // const cookieValue = cookies._state;
    // console.log(cookieValue);

    // if (cookieValue!==undefined)
    // {
    //   navigate('dashboard');
    // }

    // const postData = async () => {
    //     try {
    //       const response = await fetch(API+'/loginAdmin', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ user_id: user_id, user_email: user_email, user_password:user_password }),
    //       });
    //       const responseData = await response.json();
    //       // setData(responseData);
    //       // console.log(responseData);


    //       if (responseData.status === '200') {
    //         // Navigate to the next page
    //         navigate('dashboard');
    //         setCookie('_state', responseData.user_uid, { path: '/' });

    //       }else if(responseData.status === '401')
    //       {
    //            console.log("PM"); 
    //       }
    //       else if (responseData.status==='404')
    //       {
    //         console.log("UNF");
    //       }
    //       else if (responseData.status==='412')
    //       {
    //         console.log("ENF");
    //       }
    //       else
    //       {
    //         console.log("Something went wrong!")
    //       }

    //     } catch (error) {
    //       console.error('Error:', error);
    //     }
    //   };


    return (
        <div className="outConatiner">
            <div className="firstDiv">
                <div className="logContainer">
                <p className="txtMedTitle">Travel Expert</p>

                    <div className="logContainer" style={{marginTop:"40px"}}>
                        <p className="txtLargeTitle">Welcome Back!</p>

                        <p className="txtSmallTitle">User ID</p>

                        <input
                        type="text"
                        className="lginputTxt"
                        // placeholder="Identity Number"
                        value={user_id}
                        onChange={(e) => setUserID(e.target.value)}
                    />

                        <p className="txtSmallTitle">Email Address</p>
                        <input
                        type="text"
                        className="lginputTxt"
                        // placeholder="Email"
                        value={user_email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                        
                        <p className="txtSmallTitle">Password</p>
                        <input
                            type="password"
                            className="lginputTxt"
                            // placeholder="Password"
                            value={user_password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button  className="lginButton" 
                        // onClick={postData} 
                        >LOGIN</button >

                    </div>

                </div>
            </div>
            <div className="secondDiv"/>
        </div>
    );
}

export default LoginPage;