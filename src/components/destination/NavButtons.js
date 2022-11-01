
import React from "react";
import { useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function changeTab(index, lastIndex) {
    console.log(index, lastIndex)
}

function NavButtons() {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <>
        <Tabs selectedTabClassName="active" focusTabOnClick={false} className={"cursor-pointer"} onSelect={(index, lastIndex) => changeTab(index, lastIndex)}>
            <TabList className = "nav-items flex flex-row justify-between top:0 w-2/3 h-10">
                <Tab value = "moon" className = "btn margin-0" href = "#moon">MOON</Tab>
                <Tab className = "btn margin-0" href = "#MARS">MARS</Tab>
                <Tab className = "btn margin-0" href = "#EUROPA">EUROPA</Tab>
                <Tab className = "btn margin-0" href = "#TITAN">TITAN</Tab>
            </TabList>

<TabPanel> as11d</TabPanel>
<TabPanel> as22d</TabPanel>
<TabPanel> a33sd</TabPanel>
<TabPanel> as44d</TabPanel>
        </Tabs>
        </>
    )
}

export default NavButtons;