import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import MenuFooter from "./MenuFooter";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <p className="footer-top-text">
            <BsTelephoneFill />
            Liên hệ chúng tôi: <Link href="tel:0382230633"> 038.223.0633</Link>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-layout">
            <div className="left">
              <p className="company_name">Company name here</p>
              <div className="contact_number">
                <div className="contact_number-img">
                  <Image
                    src="/images/call-us.svg"
                    width={50}
                    height={50}
                    alt="Image contact number"
                  />
                </div>
                <div className="contact_number-text">
                  <p>Zalo/ Số điện thoại:</p>
                  <Link href="https://zalo.me/0382230633" target="_blank">
                    038.223.0633
                  </Link>
                </div>
              </div>
              <p className="contact_address">
                25 Thành Mỹ, Phường 8, quận Tân Bình, TP. HCM
              </p>
              <p className="contact_mail">huyduylinhvy@gmail.com</p>
              <div className="contact_social">
                <Link href="" className="contact_social-item">
                  <Image
                    src="/images/zalo-icon.png"
                    width={100}
                    height={100}
                    alt="icon zalo"
                  />
                </Link>
                <Link href="" className="contact_social-item">
                  <Image
                    src="/images/zalo-icon.png"
                    width={100}
                    height={100}
                    alt="icon zalo"
                  />
                </Link>
                <Link href="" className="contact_social-item">
                  <Image
                    src="/images/zalo-icon.png"
                    width={100}
                    height={100}
                    alt="icon zalo"
                  />
                </Link>
              </div>
            </div>
            <MenuFooter />
          </div>
        </div>
      </div>
      <div className="footer-company">
        <div className="container">
          <p className="footer-company-text">Company</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
