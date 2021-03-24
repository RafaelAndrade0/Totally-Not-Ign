import styles from "./Highlights.module.css";

const Highlights = ({ topHeadlines }) => {
  return (
    <>
      <div className="section_title">
        <h1>Destaques</h1>
      </div>

      <div className="card-deck">
        <div className="card text-white">
          <div className={styles.inner}>
            <img
              src="https://sm.ign.com/t/ign_br/slotter/default/outriders-1_q8yw.560.png"
              // src={topHeadlines[0].urlToImage}
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
              <h4 className="card-title">
                Outriders, Returnal, Pokémon: Os lançamentos de abril
                {/* {topHeadlines[0].title} */}
              </h4>
            </div>
          </div>
        </div>
        <div className="card text-white">
          <div className={styles.inner}>
            <img
              src="https://sm.ign.com/t/ign_br/slotter/default/magnamalo_a8aw.560.png"
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
              <h4 className="card-title">Monster Hunter Rise - Review</h4>
            </div>
          </div>
        </div>
        <div className="card text-white">
          <div className={styles.inner}>
            <img
              src="https://sm.ign.com/t/ign_br/slotter/default/brzrkr-keanu-reeves-netflix_gqhj.560.jpg"
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
              <h4 className="card-title">
                BRZRKR, HQ de Keanu Reeves, vai se tornar filme e anime
              </h4>
            </div>
          </div>
        </div>
        <div className="card text-white">
          <div className={styles.inner}>
            <img
              src="https://sm.ign.com/t/ign_br/slotter/default/demon-slayer-capa_7zqs.560.jpg"
              className="card-img"
              alt="..."
            />
            <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
              <h4 className="card-title">
                Kimetsu no Yaiba: Anime terá dublagem em português no Brasil
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highlights;
