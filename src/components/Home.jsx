import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/driving-through-mountain-range-dusk-generated-by-ai_188544-20608.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Nova <span className="text-red-500">Freight</span> LLC
            </h1>
            <p className="mb-5 font-bold text-2xl">24 / 7 Dispatch Service</p>
            <p className="mb-5 text-lg">
              -Experienced Dispatchers <br />
              -Market Analyst <br /> -Negotiators
            </p>
            <Link to={"/about"} className="btn btn-error">
              About Us <box-icon name="right-arrow-alt"></box-icon>
            </Link>
          </div>
        </div>
      </div>
      {/* Hero  */}

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.freepik.com/free-photo/sun-sets-trucking-industry-long-journey-generated-by-ai_188544-17390.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="text-justify">
            <h1 className="text-5xl font-bold">Why Choose Us?</h1>
            <ol className="py-6 list-decimal">
              <li>
                Dedicated Team: Our team comprises logistics experts who are
                passionate about what they do. With their extensive industry
                knowledge and dedication, you can trust that your cargo is in
                safe hands.
              </li>
              <li>
                Cutting-Edge Technology: We leverage the latest technology to
                streamline dispatch operations, allowing real-time tracking,
                efficient route planning, and quick communication.
              </li>
              <li>
                Flexibility: We understand that every carrier has unique
                requirements. Our solutions are flexible and tailored to meet
                the specific needs of your business.
              </li>
            </ol>
            <Link to={"/gallery"} className="btn btn-error">
              Explore More <box-icon type="solid" name="truck"></box-icon>
            </Link>
          </div>
        </div>
      </div>

      {/* Crausal */}
      <div className="gallery mx-12 my-9">
        <div className="carousel carousel-center rounded-box mt-[3rem]">
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/truck-with-trailer-road_1340-32492.jpg"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/portrait-professional-american-truck-driver-casual-clothing-boots-standing-front-truck-vehicle-with-long-trailer_342744-1321.jpg?size=626&ext=jpg&ga=GA1.1.1028364397.1696517017&semt=ais"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/beautiful-shot-cars-road-blue-sky_181624-27314.jpg?size=626&ext=jpg&ga=GA1.1.1028364397.1696517017&semt=ais"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/jeep-car-hawaii_23-2148892251.jpg?size=626&ext=jpg&ga=GA1.1.1028364397.1696517017&semt=ais"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/3d-electric-truck-street_23-2148972420.jpg?size=626&ext=jpg&ga=GA1.1.1028364397.1696517017&semt=ais"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/beautiful-view-transportation-lights-road-night-time_181624-54880.jpg?size=626&ext=jpg&ga=GA1.1.1028364397.1696517017&semt=ais"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.freepik.com/free-photo/sun-sets-trucking-industry-long-journey-generated-by-ai_188544-17390.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
