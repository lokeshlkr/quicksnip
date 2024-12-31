import { ButtonHTMLAttributes, MouseEventHandler } from "react";
import { LanguageType, SnippetType } from "../types";
import CodePreview from "./CodePreview";
import slugify from "../utils/slugify";

export type SnippetComponentType = {
    snippet:SnippetType;
    language:LanguageType;
    onClick?: MouseEventHandler<HTMLButtonElement>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Snippet = ({snippet, language, onClick}:SnippetComponentType) => {
    let style = {
        fontSize:"0.5rem",
        height:"10rem",
        scrollbarWidth:"none",
    } as React.CSSProperties;
    return (
            <section className="section snippet"
              onClick={onClick}
            >
            <div className="section-title snippet__details icon-text">
                <img className="lang__icon" src={language.icon} alt={language.lang} />
                <h3 className="snippet__title">{snippet.title}</h3>
            </div>
            <div className="section-body" >
                <CodePreview language={slugify(language.lang)} code={snippet.code} customStyle={style}/>
            </div>
          </section>
          )
}

export default Snippet;