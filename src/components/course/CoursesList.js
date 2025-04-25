import React from "react";
import CourseItem from "./CourseItem";

const CoursesList = ({ courses }) => {
  return (
    <div className="row">
      {courses.map((course, index) => (
        <CourseItem key={index} course={course} />
      ))}
    </div>
  );
};

export default CoursesList;
