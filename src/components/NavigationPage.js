import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import LoginPage from '../pages/LoginPage';
import Maps from '../pages/Maps';
import NewEntryPage from '../pages/NewEntryPage';
import ViewEditPlace from '../pages/ViewEditPlace';
import { useEffect, useState } from 'react';
import { API } from '../Constants';

function NavigationPage() 
{

  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    const checkApiReachability = async () => {
      try {
        const response = await fetch(API+"/test");
        if (!response.ok) {
          throw new Error('API not reachable');
        }
        // API is reachable, continue with the actual flow
      } catch (error) {
        setApiError(error.message);
      }
    };

    // checkApiReachability();
  }, []);

    return (

    <div>
      {/* {apiError ? (
        <p>Failed to load API</p>
      ) : ( */}
        <div>
            <BrowserRouter>
            <Routes>
              <Route>
                <Route index element={<LoginPage/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/new" element={<NewEntryPage/>} />
                <Route path="/maps" element={<Maps/>} />
                <Route path ="new/viewEditPlace/:id" element={<ViewEditPlace/>}/>
              </Route>
            </Routes>
          </BrowserRouter>

        </div>
      {/* )} */}
    </div>

    );
}

export default NavigationPage;