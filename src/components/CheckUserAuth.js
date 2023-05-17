import { useCookies } from 'react-cookie';
import { API } from '../Constants';
import useSWR from 'swr'

const  CheckUserAuth = () =>
{

    const [cookies] = useCookies(['user']);
    const cookieValue = cookies._state;
    console.log(cookieValue)
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR(API+'/checkuser?uid='+cookieValue, fetcher)

    if (error) return <span>failed to load</span>
    if (isLoading) return <span>loading...</span>
    if (cookieValue===undefined)
    {
        console.log("undefined false")
        return false;
    }
    else
    {
        console.log("Cookie not null")
        if (data[0]===undefined)
        {
            return false;
        }
        else
        {
            if(data[0].user_id!=null)
            {
                return true;
            }
            else{
                return false;
            }
    }
    }
}

export default CheckUserAuth;
