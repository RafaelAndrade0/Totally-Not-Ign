import Reviews from "../Reviews/Reviews";
import Image from "next/image";

const News = ({ articles }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="section_title">
              <h1>Notícias</h1>
            </div>
            <div className="row">
              <div className="col-md-4 order-md-2">
                <Image
                  src={articles[0].urlToImage}
                  className="rounded img-fluid"
                  alt="..."
                  height="120"
                  width="200"
                  layout="responsive"
                />
              </div>

              <div className="col-md-8 order-md-1">
                <h5>{articles[0].title}</h5>
                <p>{articles[0].content}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 order-md-2">
                <Image
                  src={articles[1].urlToImage}
                  className="rounded img-fluid"
                  alt="..."
                  height="120"
                  width="200"
                  layout="responsive"
                />
              </div>

              <div className="col-md-8 order-md-1">
                <h5>{articles[1].title}</h5>
                <p>{articles[1].content}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 order-md-2">
                <Image
                  src={articles[4].urlToImage}
                  className="rounded img-fluid"
                  alt="..."
                  height="120"
                  width="200"
                  layout="responsive"
                />
              </div>

              <div className="col-md-8 order-md-1">
                <h5>{articles[4].title}</h5>
                <p>{articles[4].content}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="section_title">
              <h1>Latest Reviews</h1>
            </div>
            <Reviews />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
