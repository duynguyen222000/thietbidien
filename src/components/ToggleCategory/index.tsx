"use client";
import React, { useState } from "react";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";

const ToggleCategory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsExiting(false);
      setIsVisible(false);
    }, 400);
  };

  return (
    <div className="toggle-category">
      <div
        className="hamburger-category bs-icon"
        onClick={() => setIsVisible(true)}
      >
        <BsFillMenuButtonWideFill />
      </div>

      <div
        className={`category ${
          isVisible ? (isExiting ? "exit" : "enter") : ""
        }`}
        aria-hidden={!isVisible}
      >
        <div className="category-header">
          <p>Category</p>
          <button onClick={handleClose} className="bs-icon">
            <BsXLg />
          </button>
        </div>
      </div>
      {isVisible && (
        <div
          className={`toggle-overlay ${isExiting ? "exit" : "enter"}`}
          onClick={handleClose}
        ></div>
      )}
    </div>
  );
};

export default ToggleCategory;
