import React from 'react';
import { Menu, Button, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './App.css';

export default() => {
    return (
        <Menu stackable center /* style={{ width: '600px'}} */>
            <Segment inverted>
            <Button animated='vertical' size='big' inverted color='teal' as={Link} to='/'>
                <Button.Content visible>Gestión de ERC-20</Button.Content>
                <Button.Content hidden>Gestión de ERC-20</Button.Content>
            </Button>

            <Button animated='vertical' size='big' inverted color='teal' as={Link} to='/loteria'>
                <Button.Content visible>Gestión de boletos</Button.Content>
                <Button.Content hidden>Gestión de boletos</Button.Content>
            </Button>

            <Button animated='vertical' size='big' inverted color='teal' as={Link} to='/premios'>
                <Button.Content visible>Premios de lotería</Button.Content>
                <Button.Content hidden>Premios de lotería</Button.Content>
            </Button>

            {/* <Button color='linkedin' href="">
                <Icon name='linkedin' /> LinkedIn
            </Button> */}

                <Button size='big' inverted color='teal' href="https://www.instagram.com/unai_igl/?hl=es">
                <Icon name='instagram' />
                 Instagrams
            </Button>

            {/* <Button color='facebook' href="">
                <Icon name='facebook' /> Facebook
            </Button> */}
                </Segment>
        </Menu>
    );
}


