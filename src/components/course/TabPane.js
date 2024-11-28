import React from 'react';
import CoursesList from './CoursesList';
import courses from '../../data/courseList.json';
const TabPane = ({ id, label, isActive }) => {
  return (
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
  );
};

export default TabPane;
