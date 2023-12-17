import data from "@/data/posts.json";
import _ from "lodash";
import Header from "@/components/header";
import styles from "./page.module.css";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";

export default function Pages({ params }) {
  function getPost(slug) {
    return _.find(data, { slug });
  }

  const post = getPost(params.posts);

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              {post ? (
                <>
                  <h1 className="mt-3 mb-5 text-dark">{post.title.rendered}</h1>
                  <div
                    className="text-secondary"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                  />
                </>
              ) : (
                <p>Blog post not found</p>
              )}
            </div>
            <div className="col-sm-4">
              <Sidebar />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
