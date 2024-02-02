import data from "@/app/data/posts.json";

export default function Pages({ params }) {
  function getPost(slug) {
    return data.find((item) => item.slug === slug);
  }

  const post = getPost(params.posts);

  return (
    <div>
      <div className="col-sm-8">
        {post ? (
          <>
            <h1>{post.title.rendered}</h1>
            <div
              className="text-secondary"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </>
        ) : (
          <div className="w-full">
            <p>Blog post not found</p>
          </div>
        )}
      </div>
    </div>
  );
}
