// components/SkeletonLoader.js
import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="d-flex align-items-center">
      <div className="w-100">
        <div className="bg-secondary rounded" style={{ height: "20px" }} />
        <div
          className="bg-secondary rounded mt-2"
          style={{ height: "15px", width: "80%" }}
        />
      </div>
    </div>
  );
};

export default SkeletonLoader;
