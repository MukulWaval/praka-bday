import React from "react";

interface ImageProps {
  src: string;
  alt?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <img
      className="h-auto max-w-full lg:max-w-lg rounded-lg"
      src={src}
      alt={alt}
    />
  );
};

export default Image;
