import React from 'react';
import { Table } from 'react-bootstrap';

function PendingSplitPaidTotheUser({ splitDetails }) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User</th>
            <th>Amount</th>
            <th>Split Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {splitDetails.map((split, index) => (
            split.users.map((user) => (
              <tr key={index}>
                <td>{`User ${user.id}`}</td>
                <td>{user.value}</td>
                <td>{split.splitType}</td>
                <td>pending</td>
              </tr>
            ))
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default PendingSplitPaidTotheUser;
