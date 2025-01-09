import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

function LatestNewsPage() {
  const latestNews = getLatestNews();
  return (
    <>
      <h1>This is Latest Page</h1>
      <NewsList list={latestNews} />
    </>
  );
}

export default LatestNewsPage;
