import React from 'react';
import CourseItem from './CourseItem';
import courses from '../../data/courseList.json';

const CoursesList = () => {
  return (
    <div className="row">
      {courses.map((course, index) => (
        <CourseItem key={index} course={course} />
      ))}
    </div>
  );
};

export default CoursesList;
