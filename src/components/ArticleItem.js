import { motion } from "framer";
import moment from "moment";

const ArticleItem = ({ data, topStories }) => {
  const {
    abstract,
    title,
    byline,
    media,
    url,
    published_date,
    nytdsection,
  } = data;
  return (
    <motion.a
      id="NytItem"
      target="/blank"
      href={url}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
      drag
      dragConstraints={{
        top: 5,
        left: 5,
        right: 5,
        bottom: 5,
      }}
    >
      <div style={{ padding: 2 }}>
        <h3 style={{ margin: 0 }}>{title}</h3>
        <sub>{byline}</sub>
      </div>

      <div
        style={{
          margin: 5,
          borderRadius: 15,
          border: "3px solid black",
          color: "black",
          overflow: "hidden",
          backgroundColor: "#EDD5C0",
        }}
      >
        {media && media.length > 0 ? (
          <img
            style={{ pointerEvents: "none" }}
            width="100%"
            src={media[0]["media-metadata"][2].url}
            alt="New York Times Article"
          />
        ) : null}
        <div style={{ padding: 5 }}>
          <p style={{ margin: 0 }}>{abstract}</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "97%",
        }}
      >
        <p
          style={{ fontSize: "12px", fontWeight: "bold", margin: 0 }}
        >{`Published: ${moment(published_date).format("MMM Do YY")}`}</p>
        <p
          style={{ fontSize: "12px", fontWeight: "bold", margin: 0 }}
        >{`Section: ${topStories ? data.section : nytdsection}`}</p>
      </div>
    </motion.a>
  );
};

export default ArticleItem;
