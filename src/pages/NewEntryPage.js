import CheckUserAuth from "../components/CheckUserAuth";
import NewEntry from "../components/NewEntry";
import Sidenavigation from "../components/SideNavigation";

function NewEntryPage()
{
  const shouldRenderMain = CheckUserAuth();
  console.log(shouldRenderMain)
  if (!shouldRenderMain) {return <h1>Access Denied</h1>}
  else 
    return(
        <div className="dashboardConatiner">
          <Sidenavigation/>
          <div className="mainConatiner">
           
            <div style={{padding:'20px'}}>
            <p className="txtLargeTitle">New Places for approval</p>
                <NewEntry/>
            </div>
          </div>
        </div>
    );
}

export default NewEntryPage;