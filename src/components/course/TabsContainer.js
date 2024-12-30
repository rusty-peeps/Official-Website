import React, { useState } from 'react';
import TabPane from './TabPane';
import courses from "../../data/courseList.json";
import courses1 from "../../data/courseList1.json";
import courses2 from "../../data/courseList2.json";
import courses3 from "../../data/courseList3.json";
import courses4 from "../../data/courseList4.json";
const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState('pills-home'); 

  const tabs = [
    { id: 'pills-home', label: 'Home',course:courses  },
    { id: 'pills-profile', label: 'Profile',course:courses1 },
    { id: 'pills-contact', label: 'Contact',course:courses2 },
    { id: 'pills-four', label: 'Four',course:courses3 },
    { id: 'pills-five', label: 'Five',course:courses4 }
  ];

  return (
    <div>
      <div className="tab-content" id="pills-tabContent">
        {tabs.map((tab) => (
          <TabPane
            key={tab.id}
            id={tab.id}
            label={tab.label}
            isActive={activeTab === tab.id}
            courses={tab.course}
          />
        ))} 
      </div>
    </div>
  );
};

export default TabsContainer;
