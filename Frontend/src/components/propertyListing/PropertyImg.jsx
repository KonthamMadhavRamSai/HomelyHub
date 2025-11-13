import React from "react";
import Modal from "./Modal";
const PropertyImg = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const handleShowAllPhotos = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const safeUrl = (idx) =>
    images?.[idx]?.url ?? "/assets/property-placeholder.jpg";

  return (
    <>
      <div className="property-img-container">
        <div className="img-item">
          <img
            src={safeUrl(0)}
            className="images"
            style={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
            alt="property-1"
          />
        </div>
        <div>
          <img className="images" src={safeUrl(1)} alt="property" />
        </div>
        <div>
          <img className="images" src={safeUrl(2)} alt="property" />
        </div>
        <div>
          <img className="images" src={safeUrl(3)} alt="property" />
        </div>
        <div>
          <img
            className="images"
            src={safeUrl(4)}
            style={{ borderBottomRightRadius: "10px" }}
            alt="property"
          />
          <button className="similar-photos" onClick={handleShowAllPhotos}>
            <span className="material-symbols-outlined">photo_library</span>
          </button>
        </div>
      </div>
      <div className="similar-photos-container"></div>
      {isModalOpen && (
        <Modal images={images ?? []} onClose={handleCloseModal} />
      )}
    </>
  );
};
export default PropertyImg;
