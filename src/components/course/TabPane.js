import React from 'react';
import CoursesList from './CoursesList';
import courses from '../../data/courseList.json';
import courses1 from '../../data/courseList1.json';
import courses2 from '../../data/courseList2.json';
import courses3 from '../../data/courseList3.json';
import courses4 from '../../data/courseList4.json';
const TabPane = ({ id, label, isActive }) => {
  return (
    <>
    <div
      className={`tab-pane fade ${isActive ? 'show active' : ''}`}
      id='pills-home'
      role="tabpanel"
      aria-labelledby={`${id}-tab`}
      tabIndex="0"
    >
      <div className="row">
        <CoursesList courses={courses}/>
      </div>
    </div>
    <div
      className={`tab-pane fade ${isActive ? 'show active' : ''}`}
      id='pills-profile'
      role="tabpanel"
      aria-labelledby={`${id}-tab`}
      tabIndex="0"
    >
      <div className="row">
        <CoursesList courses={courses1}/>
      </div>
    </div>
    <div
      className={`tab-pane fade ${isActive ? 'show active' : ''}`}
      id='pills-contact'
      role="tabpanel"
      aria-labelledby={`${id}-tab`}
      tabIndex="0"
    >
      <div className="row">
        <CoursesList courses={courses2}/>
      </div>
    </div>
    <div
      className={`tab-pane fade ${isActive ? 'show active' : ''}`}
      id='pills-four'
      role="tabpanel"
      aria-labelledby={`${id}-tab`}
      tabIndex="0"
    >
      <div className="row">
        <CoursesList courses={courses3}/>
      </div>
    </div>
    <div
      className={`tab-pane fade ${isActive ? 'show active' : ''}`}
      id='pills-five'
      role="tabpanel"
      aria-labelledby={`${id}-tab`}
      tabIndex="0"
    >
      <div className="row">
        <CoursesList courses={courses4}/>
      </div>
    </div>
    </>
    
    
  );
};

export default TabPane;
