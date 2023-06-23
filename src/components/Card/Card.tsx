import React, { useState } from "react";
import "./Card.scss";

interface CardProps {
  imgSrc?: string;
  cardClassName?: string;
  imgClassName?: string;
  popupClassName?: string;
  title?: string;
  description?: string;
  imageAlt?: string;
  circular?: boolean;
}

const Card: React.FC<CardProps> = ({
  imgSrc,
  cardClassName,
  imgClassName,
  popupClassName,
  title,
  description,
  imageAlt,
  circular = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const modeCircular = circular ? "round" : "";
  const showPopup = isHovered && (title || description) ? "visible" : "";

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`card ${modeCircular} ${cardClassName}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <img
        className={`card-image ${modeCircular} ${imgClassName}`}
        src={imgSrc}
        alt={imageAlt || title}
      />
      {showPopup && (
        <div className={`card-popup ${showPopup} ${popupClassName}`}>
          <h3 className="card-title">{title}</h3>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Card;