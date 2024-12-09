import Image from "next/image";
import React from "react";
import { BsCart2 } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import ToggleCategory from "../ToggleCategory";

const HeaderCenter = () => {
  return (
    <div className="header-center">
      <div className="container">
        <div className="layout">
          <div className="layout-left">
            <div className="logo">
              <Image
                src="https://demos.coderplace.com/woo/WCM02/WCM02046/wp-content/uploads/2023/07/logo.svg"
                width={200}
                height={32}
                alt="logo "
              />
            </div>
            <ToggleCategory />
          </div>
          <div className="layout-center">
            <div className="search-layout">
              <input
                type="text"
                className="search-box"
                placeholder="Search product..."
              />
              <button className="btn-search">Search</button>
            </div>
          </div>
          <div className="layout-right">
            <div className="hambuger-nav bs-icon">
              <BsList />
            </div>
            <div className="logo-cart bs-icon">
              <BsCart2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCenter;
