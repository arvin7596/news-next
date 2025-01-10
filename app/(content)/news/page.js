import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";
// import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";

async function NewsPage() {
  // const response = await fetch("http://localhost:8080/news");
  // if (!response.ok) {
  //   throw new Error("Failed to fetch news");
  // }
  // const news = await response.json();

  const news = getAllNews();
  return (
    <>
      <h1>This is News Page</h1>
      <NewsList list={news} />
    </>
  );
}

export default NewsPage;
