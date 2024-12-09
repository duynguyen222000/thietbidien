import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BsTelephone, BsPerson } from "react-icons/bs";
const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="layout">
          <p className="info">
            Biggest Offer On -WaterProof, DSLR Camera Lenses & Earphones
          </p>
          <div className="contact">
            <div className="phone">
              <div className="icon">
                <BsTelephone />
              </div>
              <Link href="tel:0382230633" className="phone-number">
                0382230633
              </Link>
            </div>
            <div className="authen">
              <div className="icon">
                <BsPerson />
              </div>
              <Link href="" className="authen-text">
                Đăng nhập/Đăng ký
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
