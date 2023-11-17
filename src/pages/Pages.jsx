import React, { useEffect } from "react";
import image from "../assets/img/Group 4.png";
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Pages = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div  className="w-full h-screen flex justify-between items-center bg-black px-[10rem]">
      <div data-aos="fade-up" data-aos-duration="3000"  className="text-white  space-y-4  ">
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="51"
          viewBox="0 0 50 51"
          fill="none">
          <g clip-path="url(#clip0_7_13)">
            <path
              d="M9.84234 5.44167C5.79947 8.61292 2.74036 12.9685 1.19934 17.9918C22.0284 31.6738 23.1795 49.2952 23.2391 50.7859C23.8537 50.8431 24.4775 50.8751 25.1034 50.8865C27.6008 21.0922 14.3485 8.73639 9.84234 5.44167Z"
              fill="#79197E"
            />
            <path
              d="M0.158191 23.7033C0.112328 24.3229 0.0825195 24.9472 0.0825195 25.5782C0.0825195 38.4507 10.794 49.0871 23.2368 50.7836C18.162 34.2071 5.30868 26.4172 0.158191 23.7033Z"
              fill="#933093"
            />
            <path
              d="M40.2293 5.44167C44.2722 8.61292 47.3313 12.9685 48.8724 17.9918C28.0433 31.6738 26.8922 49.2952 26.8326 50.7859C26.218 50.8431 25.5942 50.8751 24.9681 50.8865C22.4731 21.0922 35.7232 8.73639 40.2293 5.44167Z"
              fill="#933093"
            />
            <path
              d="M49.9134 23.5731C49.9593 24.1926 49.9891 24.8169 49.9891 25.4479C49.9891 38.3205 39.2776 49.0849 26.8349 50.7838C31.9097 34.2072 44.7629 26.2871 49.9134 23.5731Z"
              fill="#79197E"
            />
            <path
              d="M16.7814 1.90002C20.9115 3.07294 24.1197 6.45 25.0346 10.6684V0C22.0741 0 19.2741 0.683638 16.7814 1.90002Z"
              fill="#FF9C00"
            />
            <path
              d="M25.037 0V10.6684C25.9519 6.45 29.1624 3.07294 33.2902 1.90002C30.7975 0.683638 27.9975 0 25.037 0Z"
              fill="#F58600"
            />
          </g>
          <defs>
            <clipPath id="clip0_7_13">
              <rect width="50" height="51" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p  className="font-costum font-bold text-6xl">
          RIZAL <br></br> ADIYAKSA AM
        </p>
        <p  className="font-costum font-medium text-2xl ">
          Study Independent Front End Developer <br></br> Binar Academy
        </p>
        <div >
          <a 
            className="bg-[#933093] px-8 py-2 rounded-3xl font-costum font-bold hover:bg-[#79197E]"
            href="https://www.instagram.com/rzal_ady/#">
            Follow
          </a>
        </div>
      </div>
      <div data-aos="zoom-in" data-aos-duration="2000" className="">
        <img height={100} width={550} src={image} />
      </div>
    </div>
  );
};
