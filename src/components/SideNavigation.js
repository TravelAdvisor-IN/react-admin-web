import { Icon } from 'semantic-ui-react'

function Sidenavigation ()
{
    return(
        <div className="sideNavigationConatiner">
            
            <div className='logocontainer'>
               
            </div>
            
            <div className='eachOptionsSideBar'>
                <a href='/dashboard'> <Icon name='chart bar' size='large' /> </a> 
            </div>
            <div className='eachOptionsSideBar'>
               <a href='/new'> <Icon name='tasks' size='large'/></a>
            </div>
            <div className='eachOptionsSideBar'>
            <a href='/dashboard'><Icon name='map' size='large' /></a>
            </div>
            <div className='eachOptionsSideBar'>
            <a href='/dashboard'> <Icon name='users' size='large' /></a>
            </div>

        </div>
    );
}

export default Sidenavigation;