import React from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default() => {
    return (
        <Menu stackable style={{ marginTop: '50px' }}>

            <Button color='blue' as={Link} to='/'>
                Gestión de Tokens ERC-20
            </Button>

            <Button color='green' as={Link} to='/loteria'>
               Gestión de boletos
            </Button>

            <Button color='orange' as={Link} to='/premios'>
               Premios de lotería
            </Button>

            {/* <Button color='linkedin' href="">
                <Icon name='linkedin' /> LinkedIn
            </Button> */}

            <Button color='red' href="https://www.instagram.com/unai_igl/?hl=es">
                <Icon name='instagram' /> Instagram
            </Button>

            {/* <Button color='facebook' href="">
                <Icon name='facebook' /> Facebook
            </Button> */}

        </Menu>
    );
}


