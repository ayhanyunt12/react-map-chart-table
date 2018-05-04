import React from 'react';
import {Checkbox, Table} from 'semantic-ui-react';

/**
 * format user address
 * @param address
 * @returns {string}
 */
const formatUserAddress = (address) => (
    `${address.street  }, ${ 
        address.suite  }, ${ 
        address.city  }, ${ 
        address.zipcode}`);

/**
 * map users to one table row
 * @param props
 */
const mapUsers = (props) => props.users.map(user => {
    let isChecked = null;
    isChecked = !!user.checked;
    return (
        <Table.Row key={user.id}>
            <Table.Cell><Checkbox
                slider
                defaultChecked={isChecked}
                onClick={() => props.toggleUser(user.id, isChecked)}
            />
            </Table.Cell>
            <Table.Cell>{user.id}</Table.Cell>
            <Table.Cell>{user.username}</Table.Cell>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>{user.phone}</Table.Cell>
            <Table.Cell>{user.website}</Table.Cell>
            <Table.Cell>{user.company.name}</Table.Cell>
            <Table.Cell>
                {formatUserAddress(user.address)}
            </Table.Cell>
        </Table.Row>
    )
}
);

const userTableComponent = (props) => {
    if (!props.userFetched) {
        return null;
    }

    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell/>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Username</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>E-Mail</Table.HeaderCell>
                    <Table.HeaderCell>Phone</Table.HeaderCell>
                    <Table.HeaderCell>Website</Table.HeaderCell>
                    <Table.HeaderCell>Company</Table.HeaderCell>
                    <Table.HeaderCell>Address</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {mapUsers(props)}
            </Table.Body>
        </Table>
    );
};

export default userTableComponent;