import styles from "./OtherHighlights.module.css";
import Image from "next/image";

const OtherHighlights = ({ otherHeadlines }) => {
  return (
    <>
      <div className="mt-4">
        <div className="section_title">
          <h1>Outros Destaques</h1>
        </div>
        <div className="card-deck">
          <div className={`card ${styles.card_no_border}`}>
            <div>
              <Image
                src={otherHeadlines[0].urlToImage}
                alt="..."
                className="card-img"
                height="180"
                width="300"
                layout="responsive"
              />
            </div>
            <div className="card-body">
              <h6>{otherHeadlines[0].title}</h6>
            </div>
          </div>
          <div className={`card ${styles.card_no_border}`}>
            <div>
              <Image
                src={otherHeadlines[1].urlToImage}
                alt="..."
                className="card-img"
                height="180"
                width="300"
                layout="responsive"
              />
            </div>
            <div className="card-body">
              <h6>{otherHeadlines[1].title}</h6>
            </div>
          </div>
          <div className={`card ${styles.card_no_border}`}>
            <div>
              <Image
                src={otherHeadlines[2].urlToImage}
                alt="..."
                className="card-img"
                height="180"
                width="300"
                layout="responsive"
              />
            </div>
            <div className="card-body">
              <h6>{otherHeadlines[2].title}</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherHighlights;
