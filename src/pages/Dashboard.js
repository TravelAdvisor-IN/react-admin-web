
import { Chip } from "@mui/material";
import Sidenavigation from "../components/SideNavigation";
import StarsIcon from '@mui/icons-material/Stars';
import CheckUserAuth from "../components/CheckUserAuth";

function Dashboard()
{

  const shouldRenderMain = CheckUserAuth();
  console.log(shouldRenderMain)
  if (!shouldRenderMain) {return <h1>Access Denied</h1>}
  else 
    return(
        <div className="dashboardConatiner">
          <Sidenavigation/>
          <div className="mainConatiner">
                <div className="welcomeContainer">
                   
                </div>
                <div className="profilePicture" 
                style={{ backgroundImage: `url('https://cdn.dribbble.com/users/2253180/avatars/normal/e76cd92d63352dc67521a7138574f2c9.jpg')` }} />
                <div className="userInfo">
                   <div className="userInfoFirst">
                    <p className="txtLargeTitle" style={{color:'white'}}>Good Morning, Chethan</p>
                   </div>
                   <div className="userInfoSecond">
                   <Chip className="chipIcon" icon={<StarsIcon/>} label="Super Admin" size="medium" color="secondary"/>
                   </div>
                </div>
          </div>
        </div>
        
    )
}

export default Dashboard;