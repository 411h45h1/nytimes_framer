import { motion } from "framer";

const ArticleItem = ({ data }) => {
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
          border: "2px solid",
          overflow: "hidden",
        }}
      >
        <img
          width="100%"
          src={media[0]["media-metadata"][2].url}
          alt="New York Times Article"
        />
        <div style={{ padding: 5 }}>
          <p style={{ margin: 0 }}>{abstract}</p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "95%",
        }}
      >
        <p
          style={{ fontSize: "12px", fontWeight: "bold" }}
        >{`Published: ${published_date}`}</p>
        <p
          style={{ fontSize: "12px", fontWeight: "bold" }}
        >{`Section: ${nytdsection}`}</p>
      </div>
    </motion.a>
  );
};

export default ArticleItem;
