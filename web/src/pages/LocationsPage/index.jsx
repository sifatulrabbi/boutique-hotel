import React from "react";
import PageMain from "../../components/PageMain";
import ArticleSection from "./ArticleSection";
import {v4} from "uuid";
import {Link} from "react-router-dom";

const articles = [
  {
    header: {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      className: "text-3xl",
    },
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis congue justo, elementum ut quisque velit aenean viverra. Accumsan eu, augue porttitor eleifend sagittis.Sed augue tincidunt leo porta malesuada vitae, tellus. Vitae lacinia vulputate interdum auctor cras imperdiet vitae lacus, sem. Vitae eget aliquam non venenatis turpis placerat et cursus feugiat. Morbi amet in faucibus ac ultricies facilisis ultrices.",
    img: "https://unsplash.com/photos/2TmsyZXMNTE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8cGxhY2VzfGVufDB8fHx8MTY1NDM2MDM0OA&force=true",
    reverse: true,
  },
  {
    header: {
      title: "Lorem ipsum dolor sit amet consectetur",
    },
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis congue justo, elementum ut quisque velit aenean viverra. Accumsan eu, augue porttitor eleifend sagittis.Sed augue tincidunt leo porta malesuada vitae, tellus. Vitae lacinia vulputate interdum auctor cras imperdiet vitae lacus, sem. Vitae eget aliquam non venenatis turpis placerat et cursus feugiat. Morbi amet in faucibus ac ultricies facilisis ultrices.",
    img: "https://unsplash.com/photos/JciWPlhXg4M/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8N3x8cGxhY2VzfGVufDB8fHx8MTY1NDM2MDM0OA&force=true",
  },
  {
    header: {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis congue justo, elementum ut quisque velit aenean viverra. Accumsan eu, augue porttitor eleifend sagittis.Sed augue tincidunt leo porta malesuada vitae, tellus. Vitae lacinia vulputate interdum auctor cras imperdiet vitae lacus, sem. Vitae eget aliquam non venenatis turpis placerat et cursus feugiat. Morbi amet in faucibus ac ultricies facilisis ultrices.",
    img: "https://unsplash.com/photos/WB294UEtDhU/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8OXx8cGxhY2VzfGVufDB8fHx8MTY1NDM2MDM0OA&force=true",
    reverse: true,
  },
  {
    header: {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis congue justo, elementum ut quisque velit aenean viverra. Accumsan eu, augue porttitor eleifend sagittis.Sed augue tincidunt leo porta malesuada vitae, tellus. Vitae lacinia vulputate interdum auctor cras imperdiet vitae lacus, sem. Vitae eget aliquam non venenatis turpis placerat et cursus feugiat. Morbi amet in faucibus ac ultricies facilisis ultrices.",
    img: "https://unsplash.com/photos/pPRFR24Avj0/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MjF8fHBsYWNlc3xlbnwwfHx8fDE2NTQzNjAzODM&force=true",
  },
];

const LocationsPage = () => {
  return (
    <PageMain className="pt-5 flex flex-col gap-12 justify-center items-start mb-12">
      {articles.map((article) => (
        <ArticleSection key={v4()} {...article} />
      ))}
      <div className="flex flex-col gap-6 justify-start">
        <span className="text-xl font-bold text-textPrimary">
          Lorem ipsum dolor sit amet
        </span>
        <Link to="/rooms" className="btn-primary w-max">
          Check rooms
        </Link>
      </div>
    </PageMain>
  );
};

export default LocationsPage;
