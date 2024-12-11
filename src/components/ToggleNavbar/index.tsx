"use client";
import { navbarlist } from "@/mock";
import Link from "next/link";
import React, { useState } from "react";
import { BsList } from "react-icons/bs";
import { BsXLg } from "react-icons/bs";

const ToggleNavbar = () => {
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
    <div className="toggle-navbar">
      <div className="hambuger-nav bs-icon" onClick={() => setIsVisible(true)}>
        <BsList />
      </div>
      <div
        className={`category ${
          isVisible ? (isExiting ? "exit" : "enter") : ""
        }`}
        aria-hidden={!isVisible}
      >
        <div className="category-header">
          <button onClick={handleClose} className="bs-icon">
            <BsXLg />
          </button>
        </div>
        <ul className="category-content">
          {navbarlist.map((item, index) => {
            return (
              <li className="category-content-item" key={index}>
                <Link className="item-content" href={""}>
                  {item.name}
                </Link>
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

export default ToggleNavbar;
