import Head from "next/head";
import Highlights from "../components/Highlights/Highlights";
import News from "../components/News/News";
import OtherHighlights from "../components/OtherHighlights/OtherHighlights";
import styles from "../styles/Home.module.css";

export default function Home({ news, topHeadlines }) {
  return (
    <>
      <div className="container mt-4">
        <Highlights topHeadlines={topHeadlines.articles} />
        <OtherHighlights otherHeadlines={topHeadlines.articles} />
        <News articles={news.articles} />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=games&sources=ign&pageSize=20&apiKey=${process.env.API_KEY}`
  );
  const data = await response.json();

  const topHeadlines = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=ign&apiKey=${process.env.API_KEY}`
  );
  const dataTopHeadlines = await topHeadlines.json();

  return {
    props: { news: data, topHeadlines: dataTopHeadlines }, // will be passed to the page component as props
  };
};
