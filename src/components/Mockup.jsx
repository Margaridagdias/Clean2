import React from "react";
import "../components/Mockup.css";

const Mockup = () => {
  return (
    <>
      <h1>Clean Kangaroo Prototype</h1>
      <video width="80%" controls autoplay className="video">
        <source src="Margarida Dias - Clean Kangaroo.mp4" type="video/mp4" />
      </video>
      <h4 className="details">
        More details on&nbsp;<a href="https://www.behance.net/gallery/123171895/Clean-Kangaroo" className="Link">
          Behance
        </a>
      </h4>
    </>
  );
};

export default Mockup;