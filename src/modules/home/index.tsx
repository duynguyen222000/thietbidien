import SwiperHero from "@/components/SwiperHero";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="home-page ">
      <div className="container">
        <section className="hero">
          <SwiperHero />
          <div className="banner-hero">
            <div className="banner-hero-item">
              <div className="content">
                <p className="desc">Description</p>
                <h3 className="heading">Mo ta tieu de</h3>
                <Link href={""}>Shop Now</Link>
              </div>
              <div className="img-desc">
                <Image
                  src="/images/mock/cms-banner-1.jpg"
                  width={500}
                  height={500}
                  alt=""
                />
              </div>
            </div>
            <div className="banner-hero-item">
              {/* <Image src="/images/mock/1.jpg" width={500} height={500} alt="" /> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
