"use client";
import { category_list } from "@/mock";
import Link from "next/link";
import React, { useState } from "react";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

const ToggleCategory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [openToggles, setOpenToggles] = useState<number[]>([]);
  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsExiting(false);
      setIsVisible(false);
    }, 400);
  };
  const handleToggle = (index: number) => {
    setOpenToggles((prevState) =>
      prevState.includes(index)
        ? prevState.filter((item) => item !== index)
        : [...prevState, index]
    );
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
          <h2>Category</h2>
          <button onClick={handleClose} className="bs-icon">
            <BsXLg />
          </button>
        </div>
        <ul className="category-content">
          {category_list.map((item, index) => {
            return (
              <li className="category-content-item" key={index}>
                <div className="item">
                  <Link className="item-content" href={""}>
                    {item.name}
                  </Link>
                  {item.subcategories.length > 0 && (
                    <div
                      className={`icon-toggle-sub ${
                        openToggles.includes(index) ? "active" : ""
                      }`}
                      onClick={() => handleToggle(index)}
                    >
                      <BsChevronDown />
                    </div>
                  )}
                </div>

                {item.subcategories.length > 0 && (
                  <ul
                    className={`sub-category ${
                      openToggles.includes(index) ? "active" : ""
                    }`}
                  >
                    {item.subcategories.map((item, index) => (
                      <li className="sub-category-item" key={index}>
                        <Link className="item-content" href={""}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
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
