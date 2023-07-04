import React from 'react'
import styles from '../styles'
import Lottie from "lottie-react";
import { animation } from '../assets';

const Home = () => (
  <section id='home' className={`flex md:flex-row flex-col relative ${styles.paddingY}`}>
    <div className="flex flex-row justify-between items-center justify-items-center w-full">
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[40px] text-white ss:leading-[100px]">
          Hi. My name is Kendrew. <br className="sm:block hidden"/> {" "}
          <span className="text-gradient"> Welcome to my website </span> {" "}
        </h1>
      </div>
      <Lottie
          animationData={animation}
          style={{
            height: '200px',
            width: '300px',
            marginLeft: '-20px',
          }}
      />
    </div>
  </section>
);

export default Home