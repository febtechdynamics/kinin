import Image, { StaticImageData } from "next/image";

import featureThumb_1 from "@/assets/img/products/features_product01.png";
import featureThumb_2 from "@/assets/img/products/features_product02.png";
import featureThumb_3 from "@/assets/img/products/features_product03.png";

import featureThumbShape_1 from "@/assets/img/products/features_product_shape01.png";
import featureThumbShape_2 from "@/assets/img/products/features_product_shape02.png";
import featureThumbShape_3 from "@/assets/img/products/features_product_shape03.png";

import featureProduct_1 from "@/assets/img/others/features_sec_shape01.png";
import featureProduct_2 from "@/assets/img/others/features_sec_shape02.png";
import featureProduct_3 from "@/assets/img/others/features_sec_shape03.png";
import Link from "next/link";

interface DataType {
   id: number;
   thumb: StaticImageData;
   thumb_shape: StaticImageData;
   title: string;
   quantity: string;
   desc: JSX.Element;
   new_price: number;
   old_price: number;
}[]

const features_product_data: DataType[] = [
   {
      id: 1,
      thumb: featureThumb_1,
      thumb_shape: featureThumbShape_1,
      title: "Seriour Mass",
      quantity: "High-strength, 5000IU",
      desc: (<>Vitamin D3 supplements are commonly recommended for people at risk for vitamin D deficiency. Low vitamin D levels cause depression, fatigue, and muscle weakness. Over time, vitamin D deficiency can lead to weak bones, rickets in children, and osteoporosis in adults.</>),
      new_price: 89.99,
      old_price: 117.99,
   },
   {
      id: 2,
      thumb: featureThumb_2,
      thumb_shape: featureThumbShape_2,
      title: "Protein Whey",
      quantity: "High-strength, 4000IU",
      desc: (<>Vitamin D3 supplements are commonly recommended for people at risk for vitamin D deficiency. Low vitamin D levels cause depression, fatigue, and muscle weakness. Over time, vitamin D deficiency can lead to weak bones, rickets in children, and osteoporosis in adults.</>),
      new_price: 69.99,
      old_price: 79.99,
   },
   {
      id: 3,
      thumb: featureThumb_3,
      thumb_shape: featureThumbShape_3,
      title: "Max Mass 3xl",
      quantity: "High-strength, 3000IU",
      desc: (<>Vitamin D3 supplements are commonly recommended for people at risk for vitamin D deficiency. Low vitamin D levels cause depression, fatigue, and muscle weakness. Over time, vitamin D deficiency can lead to weak bones, rickets in children, and osteoporosis in adults.</>),
      new_price: 69.99,
      old_price: 89.99,
   },
]

const HomeOnefeatureProduct = ({ style }: any) => {
   return (
      <section id="paroller" className={`features-products ${style ? "inner-features-products" : ""}`}>
         <div className="container">
            {features_product_data.map((item) => (
               <div key={item.id} className="features-products-wrap">
                  <div className="row justify-content-center">
                     <div className="col-lg-6 col-md-8">
                        <div className="features-products-thumb">
                           <div className="main-img">
                              <Image src={item.thumb} alt="img" />
                           </div>
                           <Image src={item.thumb_shape} alt="img" className="shape-img" />
                        </div>
                     </div>
                     <div className="col-lg-6 col-md-10">
                        <div className="features-product-content">
                           <h2 className="title"><Link href="/shop-details">{item.title}</Link></h2>
                           <h6 className="features-product-quantity">{item.quantity}</h6>
                           <p>{item.desc}</p>
                           <div className="features-product-bottom">
                              <Link href="/shop-details" className="eg-btn">Shop Now</Link>
                              <span className="price">${item.new_price} <span className="old-price">${item.old_price}</span></span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>

         <div className="fp-shapes-wrap">
            <div className="fp-shape-one">
               <Image src={featureProduct_1} alt="shape" className="paroller" data-paroller-factor="0.25" data-paroller-factor-lg="0.20" data-paroller-factor-md="0.25" data-paroller-factor-sm="0.10" data-paroller-type="foreground" data-paroller-direction="vertical" />
            </div>
            <div className="fp-shape-two">
               <Image src={featureProduct_2} alt="shape" className="paroller" data-paroller-factor="-0.25" data-paroller-factor-lg="0.20" data-paroller-factor-md="0.25" data-paroller-factor-sm="0.10" data-paroller-type="foreground" data-paroller-direction="vertical" />
            </div>
            <div className="fp-shape-three">
               <Image src={featureProduct_3} alt="shape" className="paroller" data-paroller-factor="0.25" data-paroller-factor-lg="0.20" data-paroller-factor-md="0.25" data-paroller-factor-sm="0.10" data-paroller-type="foreground" data-paroller-direction="vertical" />
            </div>
         </div>
         <div className="fp-circle one"></div>
         <div className="fp-circle two"></div>
         <div className="fp-circle three"></div>
         <div className="fp-circle four"></div>
         <div className="fp-circle five"></div>
      </section>
   )
}

export default HomeOnefeatureProduct
