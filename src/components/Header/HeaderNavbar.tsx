import { category_list, navbarlist } from "@/mock";
import Link from "next/link";
import React from "react";
import {
  BsChevronDown,
  BsFillMenuButtonWideFill,
  BsSearch,
} from "react-icons/bs";

const HeaderNavbar = () => {
  return (
    <div className="header-navbar">
      <div className="container">
        <div className="layout">
          <button className="btn-category-navbar">
            <BsFillMenuButtonWideFill />
            Danh mục sản phẩm
            <BsChevronDown />
            <ul className="category-navbar">
              {category_list.map((item, index) => (
                <li className="category-navbar-item" key={index}>
                  <div className="item">
                    <Link href={""}>{item.name}</Link>
                    {item.subcategories.length > 0 && (
                      <div className={`icon-toggle-sub `}>
                        <BsChevronDown />
                      </div>
                    )}
                  </div>

                  {item.subcategories.length > 0 && (
                    <ul className={`sub-category-navbar `}>
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
              ))}
            </ul>
          </button>
          <ul className="navbar">
            {navbarlist.map((item, index) => (
              <li className="navbar-item active" key={index}>
                <Link className="item " href="">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="search-box">
            <input type="text " placeholder="Nhập tên sản phẩm..." />
            <button className="btn-search">
              <BsSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNavbar;
