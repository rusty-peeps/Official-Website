import React from "react";
import CoursesList from "./CoursesList";

const TabPane = ({ id, label, isActive,courses }) => {
  return (
    <>
      <div
        className={`tab-pane fade ${isActive ? "show active" : ""}`}
        id={id}
        role="tabpanel"
        aria-labelledby={`${id}-tab`}
        tabIndex="0">
        <CoursesList courses={courses} />
      </div>
    </>
  );
};

export default TabPane;
