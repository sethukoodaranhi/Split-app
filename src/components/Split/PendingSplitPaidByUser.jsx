import React from 'react';
import { Table, Button } from 'react-bootstrap';

function PendingSplitPaidByUser() {
  const pendingSplit = [
    { id: 1, name: "Leanne Graham", pendingAmount: 50 },
    { id: 2, name: "Martin Lucas", pendingAmount: 200 },
    { id: 3, name: "Jason Bright", pendingAmount: 100 },
    { id: 4, name: "Sam Wills", pendingAmount: 150 },
    { id: 5, name: "John Lucas", pendingAmount: 50 },
  ];

  const handlePay = (user) => {
    alert("payment initiated")
  };

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Pending Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pendingSplit.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.pendingAmount}</td>
              <td>
                <Button
                  variant="primary"
                  onClick={() => handlePay(user)}
                >
                  Pay
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default PendingSplitPaidByUser;
