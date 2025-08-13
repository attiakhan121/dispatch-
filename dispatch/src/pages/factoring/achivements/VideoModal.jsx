import { motion, AnimatePresence } from "framer-motion";
import TechIcon from "../../../components/TechIcon";
import { useEffect } from "react";

const VideoModal = ({ isOpen, onClose, videoUrl, title }) => {


  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-dark-blue rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] relative"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 border-b border-border-blue">
            <h3 className="text-white text-xl font-medium">{title}</h3>
            <button
              onClick={onClose}
              className="text-white hover:text-accent transition-colors"
            >
              <TechIcon name="x" className="w-6 h-6" />
            </button>
          </div>
          <div className="aspect-video">
            <iframe
              src={videoUrl}
              title={title}
              className="w-full h-full opacity-0 transition-opacity duration-700"
              frameBorder="0"
              loading="lazy"
              onLoad={(e) => e.target.classList.remove("opacity-0")}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoModal;
