import { useState } from "react";
import { SnippetType } from "../types";
import { useAppContext } from "../contexts/AppContext";
import { useSnippets } from "../hooks/useSnippets";

import SnippetModal from "./SnippetModal";
import { LeftAngleArrowIcon } from "./Icons";
import Snippet from "./Snippet";

const SnippetList = () => {
  const { language, snippet, setSnippet } = useAppContext();
  const { fetchedSnippets } = useSnippets();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!fetchedSnippets)
    return (
      <div>
        <LeftAngleArrowIcon />
      </div>
    );

  const handleOpenModal = (activeSnippet: SnippetType) => {
    setIsModalOpen(true);
    setSnippet(activeSnippet);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSnippet(null);
  };

  return (
    <>
      <ul role="list" className="snippets">
        {fetchedSnippets.map((snippet, idx) => (
          <li key={idx}>
            <Snippet 
              snippet={snippet} 
              language={language} 
              onClick={() => handleOpenModal(snippet)}>
            </Snippet>
          </li>
        ))}
      </ul>

      {isModalOpen && snippet && (
        <SnippetModal
          snippet={snippet}
          handleCloseModal={handleCloseModal}
          language={language.lang}
        />
      )}
    </>
  );
};

export default SnippetList;
