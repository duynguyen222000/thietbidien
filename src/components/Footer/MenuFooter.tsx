"use client";
import React, { useState } from "react";
import { BsChevronDown, BsChevronRight, BsChevronUp } from "react-icons/bs";
import Link from "next/link";
import { menuFooter } from "@/mock";

const MenuFooter = () => {
  const [openToggles, setOpenToggles] = useState<number[]>([]);
  const handleToggle = (index: number) => {
    setOpenToggles((prevState) =>
      prevState.includes(index)
        ? prevState.filter((item) => item !== index)
        : [...prevState, index]
    );
  };
  return (
    <div className="right">
      {menuFooter.map((item, index) => {
        return (
          <div className="right-item" key={index}>
            <p className="heading" onClick={() => handleToggle(index)}>
              {item.name}
              {openToggles.includes(index) ? (
                <BsChevronUp />
              ) : (
                <BsChevronDown />
              )}
            </p>
            <ul className={openToggles.includes(index) ? "active" : ""}>
              {item.subMenu.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>
                    <BsChevronRight />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default MenuFooter;
