import React from "react";

const ArticleSection = ({img, header, desc, reverse}) => {
  return (
    <article
      className={`flex flex-col-reverse xl:flex-row gap-8 w-full h-max ${
        reverse ? "xl:flex-row-reverse" : ""
      }`}
    >
      {header && (
        <div className="h-max flex flex-col gap-4">
          <span
            className={`font-bold text-textPrimary text-xl ${header.className}`}
          >
            {header.title}
          </span>
          <p>{desc}</p>
        </div>
      )}
      <img
        src={img}
        alt=""
        className="w-full h-[250px] object-cover lg:min-w-[40vw]"
      />
    </article>
  );
};

export default ArticleSection;
