import Link from "next/link";

function NewsList({ list }) {
  return (
    <ul className="news-list">
      {list.map((news) => (
        <li key={news.id}>
          <Link href={`/news/${news.id}`}>
            <img src={`/images/news/${news.image}`} alt={news.title} />
            <span>{news.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NewsList;
