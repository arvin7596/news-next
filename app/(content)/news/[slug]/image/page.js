import { DUMMY_NEWS } from "@/dummy-news";

function NewsImage({ params }) {
  const newsId = params.slug;
  const newsItem = DUMMY_NEWS.find((news) => news.id === newsId);
  if (!newsItem) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}

export default NewsImage;
