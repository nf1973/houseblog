import Details from "./components/Details";

export default function Home() {
  return (
    <article className="mx-4">
      <h1>We built a house in Germany</h1>
      <div>
        <p>
          Back in 2016/2017, we bought a building plot in a small town in
          Hessen, and built a house with Viebrockhaus.
        </p>
        <p>
          To have a permanent memento of this exciting time, with lots of
          pictures taken before and during the build, we made this blog. The
          blog is no longer updated.
        </p>
        <p>
          We have now been living in our wonderful house for more than six years
          (time flies!). We are very happy with our house and with the excellent
          service and build quality from Viebrockhaus.
        </p>
        <img
          src="https://sn1316.s3.eu-central-1.amazonaws.com/houseblog/202306IMG_0025.jpg"
          alt=""
          width="100%"
        />
        <Details />
      </div>
    </article>
  );
}
