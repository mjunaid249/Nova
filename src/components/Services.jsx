import React from "react";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <div className="services">
      <div className="hero min-h-screen bg-base-200 pt-9">
        <div className="hero-content flex-col lg:flex-row gap-11">
          <img
            src="https://img.freepik.com/free-photo/aerial-shot-road-traffic-beautiful-nature-blue-clear-sky_181624-54977.jpg?size=626&ext=jpg&ga=GA1.1.1028364397.1696517017&semt=ais"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Our Services</h1>
            <ul className="py-6 list-disc text-justify">
              <li>
                Dispatch Coordination: From order processing to load planning
                and scheduling, we handle it all, so you can concentrate on
                growing your business.
              </li>
              <li>
                Real-Time Tracking: Stay informed about your shipment's progress
                with our advanced tracking system. You and your customers will
                always know where the cargo is.
              </li>
              <li>
                24/7 Support: Our support team is available round the clock to
                assist you with any queries or concerns.
              </li>
            </ul>
            <Link to={"/gallery"} className="btn btn-error">
              Explore More<box-icon name="world"></box-icon>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
