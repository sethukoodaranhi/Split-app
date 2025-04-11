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
  const closeOffcanvas=()=>{
    setshowSplitOffcanvas(false)
  }
  return (
    <div className=''>
      <div className='d-flex justify-content-between m-2'>
        <h1>Split</h1>
        <Button onClick={splitOpenhandler} size=''>New Split</Button>
      </div>
      <div className='container'>
        <h4>Pending Split</h4>
        <Tabs
          id="controlled-tab-example"
          activeKey={tabkey}
          onSelect={(k) => settabkey(k)}
          className="mb-3"
        >
          <Tab eventKey="byUser" title="Paid By User">
            <PendingSplitPaidByUser />
          </Tab>
          <Tab eventKey="toUser" title="Paid to User">
            <PendingSplitPaidTotheUser />
          </Tab>

        </Tabs>
      </div>
      <CreateNewSplit
        show={showSplitOffcanvas}
        close={closeOffcanvas} />
    </div>

  )
}

export default SplitDashbaord