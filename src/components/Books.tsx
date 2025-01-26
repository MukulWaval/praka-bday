import React from "react";

const Books: React.FC = () => {
  return (
    <div className="card bg-base-200 p-4 sm:p-1 md:p-2">
      <div className="card-body">
        <h1 className="card-title text-2xl sm:text-3xl mb-4">Books</h1>
        <div className="flex flex-col justify-center items-center">
          <ol className="list-decimal text-xl lg:text-2xl mb-4">
            <li>
              <a
                href="https://www.amazon.in/Ranatale-Pahune-Marathi-Prasad-Manerikar/dp/B07PN6TMDH/ref=sr_1_1?crid=ELSJ42XA350V&dib=eyJ2IjoiMSJ9.wuyxHlAyaqjDqZVwffVXKEvU_OnivQUA3T0S0Oqsqczrb43Un6Uq0PqI_llyYbMFB-HnSvOMUhFJFMTOPAmwUuMJlI_37Di62KImPKDCFbM.EwIkaSnvM2vcwAO-0fyE9YqikneYmGfzvBGk1cVUW8Q&dib_tag=se&keywords=prasad+manerikar&qid=1737913983&sprefix=prasad+manerika%2Caps%2C213&sr=8-1"
                className="text-xl lg:text-2xl link"
              >
                Ranatale Pahune (Marathi)
              </a>
            </li>
            <li>
              <a
                href="https://www.amazon.in/Ranatale-Pahune-Marathi-Prasad-Manerikar/dp/B07PN6TMDH/ref=sr_1_1?crid=ELSJ42XA350V&dib=eyJ2IjoiMSJ9.wuyxHlAyaqjDqZVwffVXKEvU_OnivQUA3T0S0Oqsqczrb43Un6Uq0PqI_llyYbMFB-HnSvOMUhFJFMTOPAmwUuMJlI_37Di62KImPKDCFbM.EwIkaSnvM2vcwAO-0fyE9YqikneYmGfzvBGk1cVUW8Q&dib_tag=se&keywords=prasad+manerikar&qid=1737913983&sprefix=prasad+manerika%2Caps%2C213&sr=8-1"
                className="text-xl lg:text-2xl link"
              >
                Zad Lavnare Pakshi (Marathi)
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.amazon.in/Ranatale-Pahune-Marathi-Prasad-Manerikar/dp/B07PN6TMDH/ref=sr_1_1?crid=ELSJ42XA350V&dib=eyJ2IjoiMSJ9.wuyxHlAyaqjDqZVwffVXKEvU_OnivQUA3T0S0Oqsqczrb43Un6Uq0PqI_llyYbMFB-HnSvOMUhFJFMTOPAmwUuMJlI_37Di62KImPKDCFbM.EwIkaSnvM2vcwAO-0fyE9YqikneYmGfzvBGk1cVUW8Q&dib_tag=se&keywords=prasad+manerikar&qid=1737913983&sprefix=prasad+manerika%2Caps%2C213&sr=8-1"
                className="text-xl lg:text-2xl link"
              >
                Sasulya (Marathi)
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Books;
