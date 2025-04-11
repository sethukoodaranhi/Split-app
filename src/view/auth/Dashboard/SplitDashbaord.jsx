import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Button } from 'react-bootstrap';
import PendingSplitPaidByUser from '../../../components/Split/PendingSplitPaidByUser';
import PendingSplitPaidTotheUser from '../../../components/Split/PendingSplitPaidTotheUser';
import CreateNewSplit from '../../../components/Split/CreateNewSplit';

function SplitDashbaord() {
  const [tabkey, settabkey] = useState("byUser")
  const [showSplitOffcanvas, setshowSplitOffcanvas] = useState(false)
  const splitOpenhandler = () => {
    setshowSplitOffcanvas(true)
  }
  const closeOffcanvas = () => {
    setshowSplitOffcanvas(false)
  }
  const splitDetails = JSON.parse(localStorage.getItem('splits')) || [];
  console.log("splitDetails", splitDetails)
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Split Manager</h2>
        <Button variant="success" onClick={splitOpenhandler}>
          + New Split
        </Button>
      </div>

      <div>
        <h5 className="mb-3">Pending Splits</h5>
        <Tabs
          id="split-tabs"
          activeKey={tabkey}
          onSelect={(k) => settabkey(k)}
          className="mb-4"
          justify
        >
          <Tab eventKey="byUser" title="Paid By You">
            <PendingSplitPaidByUser />
          </Tab>
          <Tab eventKey="toUser" title="Paid To You">
            <PendingSplitPaidTotheUser splitDetails={splitDetails} />
          </Tab>
        </Tabs>
      </div>

    
      <CreateNewSplit
        show={showSplitOffcanvas}
        close={closeOffcanvas}
      />
    </div>


  )
}

export default SplitDashbaord