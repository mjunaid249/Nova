import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer ">
      <footer className="footer p-10 bg-neutral text-neutral-content flex items-center justify-between bottom-0">
        <Link to={"/Nova"}>
          <img
            src="/Logo.jpg"
            alt=""
            className="rounded-full w-[3rem]"
          />
          <p className="font-bold">
            Nova <span className="text-red-500">Freight</span> LLC
            <br />
          </p>
        </Link>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link to={"/Nova"} className="btn btn-active btn-accent">
              <box-icon name="home-alt-2"></box-icon>
            </Link>
            <Link to={"/about"} className="btn btn-active btn-error ">
              <box-icon name="globe"></box-icon>
            </Link>
            <Link to={"/contact"} className="btn btn-active btn-warning">
              <box-icon name="phone"></box-icon>
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
