import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { VnSearchItem } from "../../vndb/VnTypes";

interface VisualNovelCardProps {
  vn: VnSearchItem;
}

const VisualNovelCard = (props: VisualNovelCardProps) => {
  return (
    <div className="relative w-44 h-60 lg:w-52 lg:h-96">
      <motion.div
        className="item w-full h-full rounded text-dark hover:text-primary"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-full h-72 relative">
          <Link to={"/vn/" + props.vn.id}>
            <img
              src={props.vn.image.src}
              alt="vn_card_image"
              className="w-full h-full rounded-md shadow-md"
            />
          </Link>
        </div>
        <div className="title min-h-12 py-2 overflow-hidden text-base font-medium ">
          <Link to={"/vn/" + props.vn.id}>{props.vn.title}</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default VisualNovelCard;
