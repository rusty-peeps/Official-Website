import React from 'react';
import CourseItem from './CourseItem';

const courses = [
  {
    id: "00001",
    image: "assets/img/course/error-handling.png",
    title: "Understanding Ownership in Rust",
    category: "Beginner",
    oldPrice: "₹60",
    newPrice: "₹30",
    description: "Master the core concept of ownership, borrowing, and lifetimes in Rust programming.",
    features: [
      "Ownership rules and memory management",
      "Borrowing and references",
      "Lifetimes and scope in detail"
    ]
  },
  {
    id: "00002",
    image: "assets/img/course/error-handling.png",
    title: "Rust Traits and Generics",
    category: "Beginner",
    oldPrice: "₹45",
    newPrice: "₹22",
    description: "Learn about Rust traits and generics to create reusable and type-safe code.",
    features: [
      "Defining and implementing traits",
      "Using generics in functions and structs",
      "Associated types and trait bounds"
    ]
  },
  {
    id: "00003",
    image: "assets/img/course/error-handling.png",
    title: "Effective Error Handling in Rust",
    category: "Beginner",
    oldPrice: "₹50",
    newPrice: "₹25",
    description: "Develop robust Rust applications by mastering error handling patterns.",
    features: [
      "Result and Option enums",
      "Error propagation using `?` operator",
      "Custom error types and traits"
    ]
  },
  {
    id: "00004",
    image: "assets/img/course/error-handling.png",
    title: "Asynchronous Programming with Rust",
    category: "Beginner",
    oldPrice: "₹60",
    newPrice: "₹30",
    description: "Learn how to write concurrent applications using Rust's error-handling/await.",
    features: [
      "Introduction to error-handling programming",
      "Using `tokio` and `error-handling-std`",
      "Streams and tasks in error-handling Rust"
    ]
  },
  {
    id: "00005",
    image: "assets/img/course/error-handling.png",
    title: "Rust Macros and Metaprogramming",
    category: "Beginner",
    oldPrice: "₹55",
    newPrice: "₹28",
    description: "Unlock the power of Rust macros to write efficient and concise code.",
    features: [
      "Declarative macros with `macro_rules!`",
      "Procedural macros for custom attributes",
      "Metaprogramming techniques"
    ]
  },
  {
    id: "00006",
    image: "assets/img/course/error-handling.png",
    title: "Memory Safety in Rust",
    category: "Beginner",
    oldPrice: "₹40",
    newPrice: "₹19",
    description: "Explore how Rust ensures memory safety without a garbage collector.",
    features: [
      "Ownership and borrowing rules",
      "Preventing null pointer dereferences",
      "Safe concurrency with threads"
    ]
  }
];

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
