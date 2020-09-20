import React from 'react'
import { Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react'

 const HomePage = ({history}) => {
    return (
           <Segment inverted textAlign='center' vertical className='masthead'>
           <Container text>
             <Header as='h1' inverted>
               <Image
                 size='massive'
                 src='/assets/heart-icon.png'
                 alt='logo'
                 style={{ marginBottom: 12 }}
               />
            ER-Helper
             </Header>
             <Button onClick={() => history.push('/mainPage')}size='huge' inverted>
               Get started
               <Icon name='right arrow' inverted />
             </Button>
           </Container>
         </Segment>
    )
}

export default HomePage
