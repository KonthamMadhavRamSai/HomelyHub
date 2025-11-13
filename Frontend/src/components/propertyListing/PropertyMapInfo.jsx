import React from "react";
import MapComponent from "./MapComponent";

const PropertyMapInfo = ({ address }) => {
  return (
    <>
      <div className="map-image-container col-md-6 col-sm-12 col-12">
        <h2 className="map-header">Where you'll be</h2>
        <MapComponent address={address} />
      </div>
      <div className="extra-info col-md-6 col-sm-12 col-12">
        <h2 className="extra-heading">Extra Info</h2>
        <p className="extra-description">
          This is a beautiful villa located in the heart of the city with easy
          access to all the major attractions. The villa is equipped with all
          the modern amenities to ensure a comfortable stay. This is a hidden
          gem that offers a perfect blend of luxury and comfort. Whether you're
          here for a weekend getaway or a longer stay, this villa is sure to
          exceed your expectations. Historic nearby places include Fort Aguada,
          Basilica of Bom Jesus, and Chapora Fort. All necessary safety measures
          are in place to ensure a safe and enjoyable stay for all guests. Many
          water sports and adventure activities are available nearby for
          thrill-seekers. Best for families, couples, and solo travelers looking
          for a relaxing retreat.
        </p>
      </div>
    </>
  );
};
export default PropertyMapInfo;
