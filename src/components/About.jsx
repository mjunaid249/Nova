import React from "react";

const About = () => {
  return (
    <div className="about p-24 flex items-center justify-center flex-col gap-5">
      <h1 className="font-bold text-4xl py-5">Get to About Know Us</h1>
      <img
        src="https://img.freepik.com/free-photo/beautiful-mountain-road-landscape_23-2149052440.jpg?size=626&ext=jpg&ga=GA1.1.1028364397.1696517017&semt=ais"
        alt=""
        className="rounded-lg"
      />
      <div className="paras flex items-center justify-center gap-[2rem] my-10">
        <div className="p1 flex items-center justify-center flex-col max-w-[45rem] text-center gap-7">
          <h1 className="font-bold text-3xl">Our mission</h1>
          <p>
            Our mission is simple yet powerful - to be the driving force behind
            the success of our carriers. We aim to optimize dispatch processes,
            reduce transit times, and ensure that every shipment reaches its
            destination securely, on time, and with utmost care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
