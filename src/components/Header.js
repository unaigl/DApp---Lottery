import React from 'react';
import { Menu, Button, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './App.css';

export default() => {
    return (
            <Menu stackable center style={{ scale: '20px', margin: '10px', marginLeft: '30px' }}>
                <Segment inverted>
                <Button animated='vertical' size='small' inverted color='teal' as={Link} to='/'>
                    <Button.Content visible>Gestión de ERC-20</Button.Content>
                    <Button.Content hidden>Gestión de ERC-20</Button.Content>
                </Button>

                <Button animated='vertical' size='small' inverted color='teal' as={Link} to='/loteria'>
                    <Button.Content visible>Gestión de boletos</Button.Content>
                    <Button.Content hidden>Gestión de boletos</Button.Content>
                </Button>

                <Button animated='vertical' size='small' inverted color='teal' as={Link} to='/premios'>
                    <Button.Content visible>Premios de lotería</Button.Content>
                    <Button.Content hidden>Premios de lotería</Button.Content>
                </Button>

                </Segment>
           
        </Menu>
    );
}


