import React from "react";

const Videos: React.FC = () => {
  return (
    <div className="card bg-base-100 p-4 sm:p-1 md:p-2">
      <div className="card-body">
        <h1 className="card-title text-2xl sm:text-3xl mb-4">Videos</h1>
        <div className="flex flex-col justify-center items-center space-y-4">
          <div
            className="relative w-full max-w-2xl"
            style={{ aspectRatio: "16 / 9" }}
          >
            <iframe
              src="https://www.youtube.com/embed/DTFrVzIrdFw"
              title="मुलांभोवती व्यसनांचा विळखा पडतोय? Teenagers getting addicted is a BIG PROBLEM. (Part 01)"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          <div
            className="relative w-full max-w-2xl"
            style={{ aspectRatio: "16 / 9" }}
          >
            <iframe
              src="https://www.youtube.com/embed/R_BJ7RB8l7Y"
              title="मोबाईल मुलांचं आयुष्य बिघडवतोय ? | Is mobile a curse for your kids ?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
          <div
            className="relative w-full max-w-2xl"
            style={{ aspectRatio: "16 / 9" }}
          >
            <iframe
              src="https://www.youtube.com/embed/EIKw-kjKVfw"
              title="Inside the Teen Mind - How Girls &amp; Boys Navigate Teenage Differently."
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
