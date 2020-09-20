import React from 'react'
import { Menu, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

 const SignedOutMenu = ({singIn}) => {
   
    return (
     
       
             <Menu.Item position ="right">
             <Button onClick={singIn}
                basic
                inverted
                content="login"
                style={{ marginLeft: "0.5em" }}
                
              />
           

            <Button 
                basic
                inverted
                content="register"
                style={{ marginLeft: "0.5em" }}
               
              />
            </Menu.Item>
    
    )
}
export default SignedOutMenu
