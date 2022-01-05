import React from 'react';
import { Menu, Button, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './App.css';

export default() => {
    return (
            
            <Menu stackable center style={{ /* height: '30px', */ margin: '10px', marginLeft: '30px'}} >
                {/* <Button color='facebook' href="">
                    <Icon name='facebook' /> Facebook
                </Button> */}
                     
            <Button color='linkedin' size='small' href="https://www.linkedin.com/in/unaiiglesias/">
                    <Icon name='linkedin' /> LinkedIn
                </Button>

            <Button color='github' size='small' href="https://github.com/unaigl">
                    <Icon name='github' /> GitHub
                </Button>

            <Button /* size='big' inverted */ color='teal' size='small' href="https://www.instagram.com/unai_igl/?hl=es">
                    <Icon name='instagram' />
                    Instagram
                </Button>
                
                {/* <Button  color='teal' href="https://www.instagram.com/unai_igl/?hl=es">
                    <Icon name='ethereum' />
                    Wallet
                </Button> */}
        
            </Menu>
    );
}


