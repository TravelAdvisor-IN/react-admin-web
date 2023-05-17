import { Button } from "semantic-ui-react";
import Sidenavigation from "../components/SideNavigation";
import { useParams } from 'react-router-dom';
import { API } from "../Constants";
import useSWR from 'swr'
import { useState } from "react";
// import CheckUserAuth from "../components/CheckUserAuth";


function ViewEditPlace()
{
    const { id } = useParams();
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    
    const [isApproved, setIsApproved] = useState(false);
    const [isRejected, setIsRejected] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const handleApprove = async () => {
        try{
            const response = await fetch(API+'/updatestatus', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ place_id: id,  status: "APPROVED" }),
              });

              setIsApproved(true);
              setIsDisabled(true);
              console.log(response)

        }catch (error) {
          console.error('Error:', error);
        }
    
    };

    const handleReject = async () => {

        try{
            const response = await fetch(API+'/updatestatus', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ place_id: id,  status: "REJECTED" }),
              });

              setIsRejected(true);
              setIsDisabled(true);
              console.log(response)
        }catch (error) {
          console.error('Error:', error);
        }

      
    };
    

    const { data, error, isLoading } = useSWR(API+'/getTempPlace?place_id='+id, fetcher)
    if (data && Array.isArray(data)) {
    const length = data.length;
  
    if (length===0)
    {
        return <span>No Items to load</span>
    }
    
  }
    if (error) return <span>failed to load</span>
    if (isLoading) return <span>loading...</span>

    return (
        <div className="dashboardConatiner">
          <Sidenavigation/>
          <div className="mainConatiner">
          <div className="titleContainer">
                    <div className="titleLeft">
                        <span className="txtLargeTitle">{data[0].place_name}</span>
                        <span className="category">{data[0].category}</span>
                    </div>
                    
                    <div className="titleRight1 aprv">
                        <Button onClick={handleApprove} className="mapButton" disabled={isDisabled} color="primary">
                              {isApproved ? 'Approved' : 'Approve'}
                        </Button>
                    </div>
                     <div className="titleRight1 rjct">
                        <Button onClick={handleReject} className="mapButton" disabled={isDisabled} color='secondary'>
                            {isRejected ? 'Rejected' : 'Reject'}
                            </Button>
                    </div>
                </div>
            <div className="subdiv">
                
                <div className="div1">

                    <p className="txtMedTitle">General Information </p>

                    <p className="txtSmallGreyTitle ">Serial No. : </p>
                    <span className="txtSmallTitle">{data[0].response_id}</span>

                    <p className="txtSmallGreyTitle mrginTop10">Place Name :</p>
                    <span className="txtSmallTitle">{data[0].place_name}</span>

                    <p className="txtSmallGreyTitle mrginTop10">Street Name :</p>
                    <span className="txtSmallTitle">{data[0].street_name}</span>

                    <p className="txtSmallGreyTitle mrginTop10">Local Name : </p>
                    <span className="txtSmallTitle">{data[0].local_name}</span>

                    <p className="txtSmallGreyTitle mrginTop10">Free Form Address </p>
                    <span className="txtSmallTitle">{data[0].free_form_addr}</span>

                    <p className="txtSmallGreyTitle mrginTop10">Taluq - District : </p>
                    <span className="txtSmallTitle">{data[0].taluq} - {data[0].district}</span>

                    <p className="txtSmallGreyTitle mrginTop10">State - Pincode: </p>
                    <span className="txtSmallTitle">{data[0].state} - {data[0].pincode}</span>
                </div>
                <div className="div2">
                <p className="txtMedTitle">User Details</p>        
                

                <p className="txtSmallGreyTitle ">Created By</p>
                <span className="txtSmallTitle">{data[0].created_by}</span>

                <p className="txtSmallGreyTitle mrginTop10">User ID</p>
                <span className="txtSmallTitle">{data[0].usr_id}</span>

                <p className="txtSmallGreyTitle mrginTop10">User Email:</p>
                <span className="txtSmallTitle">{data[0].usr_email}</span>

                </div>
                <div className="div3">
                    <div className="imageMain">

                    </div>
                    <div className="mapsBackground">
                        <Button rounded>Redirect to Maps</Button>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}



export default  ViewEditPlace;