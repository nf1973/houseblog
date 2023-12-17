import Image from "next/image";
import styles from "./page.module.css";
import { Container } from "@/components/bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-8 text-secondary">
              <h1 className="mt-3 mb-5 text-dark">
                We built a house in Germany!
              </h1>
              <p>
                Back in 2016/2017, we bought a building plot in a small town in
                Hessen, and built a house with Viebrockhaus.{" "}
              </p>
              <p>
                To have a permanent memento of this exciting time, with lots of
                pictures taken before and during the build, we made this blog.
                The blog is no longer updated.{" "}
              </p>
              <p>
                We have now been living in our wonderful house for more than six
                years (time flies!). We are very happy with our house and with
                the excellent service and build quality from Viebrockhaus.
              </p>
              <img
                src="../images/2023/06/IMG_0025.jpg"
                width="100%"
                alt="garden"
              />
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
