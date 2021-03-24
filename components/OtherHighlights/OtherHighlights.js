import styles from "./OtherHighlights.module.css";

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
              <img
                src={otherHeadlines[0].urlToImage}
                className="card-img"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h6>{otherHeadlines[0].title}</h6>
            </div>
          </div>
          <div className={`card ${styles.card_no_border}`}>
            <div>
              <img
                src={otherHeadlines[1].urlToImage}
                className="card-img"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h6>{otherHeadlines[1].title}</h6>
            </div>
          </div>
          <div className={`card ${styles.card_no_border}`}>
            <div>
              <img
                src={otherHeadlines[2].urlToImage}
                className="card-img"
                alt="..."
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
