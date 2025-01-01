import React from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { CloseIcon } from "./Icons";
import CodePreview from "./CodePreview";
import { SnippetType } from "../types";
import slugify from "../utils/slugify";
import useEscapeKey from "../hooks/useEscapeKey";

type Props = {
  snippet: SnippetType;
  language: string;
  handleCloseModal: () => void;
};

const SnippetModal: React.FC<Props> = ({
  snippet,
  language,
  handleCloseModal,
}) => {
  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;
  useEscapeKey(handleCloseModal);

  return ReactDOM.createPortal(
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            handleCloseModal();
          }
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="modal | flow"
          data-flow-space="lg"
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <div className="modal__header">
            <h2 className="section-title">{snippet.title}</h2>
            <Button isIcon={true} onClick={handleCloseModal}>
              <CloseIcon />
            </Button>
          </div>
          <CodePreview language={slugify(language)} code={snippet.code} />
          <p>
            <b>Description: </b>
            {snippet.description}
          </p>
          <p>
            Contributed by{" "}
            <a
              href={`https://github.com/${snippet.author}`}
              target="_blank"
              rel="noopener noreferrer"
              className="styled-link"
            >
              @{snippet.author}
            </a>
          </p>
          <ul role="list" className="modal__tags">
            {snippet.tags.map((tag) => (
              <li key={tag} className="modal__tag">
                {tag}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    modalRoot
  );
};

export default SnippetModal;
