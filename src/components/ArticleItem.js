import { motion } from "framer";

const ArticleItem = ({ data }) => {
  const { abstract, title, author, media, url, pubDate, section } = data;
  return (
    <motion.div
      id="NytItem"
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
      <p>{title}</p>
      <p>{author}</p>

      <img
        width="100%"
        src={media[0]["media-metadata"][2].url}
        alt="New York Times Article"
      />

      <p>{abstract}</p>
      <p>xxxxxxxx</p>
    </motion.div>
  );
};

export default ArticleItem;
