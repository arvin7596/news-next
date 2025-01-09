import NewsList from "@/components/news-list";
import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>This is News Page</h1>
      <NewsList list={DUMMY_NEWS} />
    </>
  );
}

export default NewsPage;
