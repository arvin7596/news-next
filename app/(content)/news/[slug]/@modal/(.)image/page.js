"use client";

import { DUMMY_NEWS } from "@/dummy-news";
import { useRouter, notFound } from "next/navigation";

function InterceptedNewsImage({ params }) {
  const router = useRouter();
  const newsId = params.slug;
  const newsItem = DUMMY_NEWS.find((news) => news.id === newsId);
  if (!newsItem) {
    notFound();
  }
  return (
    <div className="modal-backdrop" onClick={router.back}>
      <dialog className="modal" open>
        <h2>Intercepted</h2>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </div>
  );
}

export default InterceptedNewsImage;
