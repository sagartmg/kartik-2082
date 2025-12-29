import { useState } from "react";

export const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("images");

  const changeTabToAll = () => {
    console.log("change tab");
    setCurrentTab("all");
  };

  const changeTabToImages = () => {
    console.log("change tab");
    setCurrentTab("images");
  };
  const changeTabToVideos = () => {
    console.log("change tab");
    setCurrentTab("videos");
  };

  const changeTab = (tab) => {
    setCurrentTab(tab);
  };

  // re-render on stage changes
  return (
    <div className="m-12">
      <ul className="mb-8 flex gap-4 capitalize">
        <li>
          <a
            // onClick={changeTabToAll}
            onClick={() => {
              setCurrentTab("all");
            }}
            className={currentTab == "all" ? "text-red-500" : ""}
          >
            all
          </a>
        </li>
        <li>
          <a
            // onClick={changeTabToImages}
            onClick={() => {
              // setCurrentTab("images");
              changeTab("images")
            }}
            href="#"
            className={currentTab == "images" ? "text-red-500" : ""}
          >
            images
          </a>
        </li>
        <li>
          <a
            onClick={changeTabToVideos}
            href="#"
            className={currentTab == "videos" ? "text-red-500" : ""}
          >
            videos
          </a>
        </li>
      </ul>
      {currentTab == "all" && (
        <div>
          <h2>All</h2>
          <p>
            ALL Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            aliquam ea nobis exercitationem animi! Fugit esse culpa distinctio
            labore repudiandae facilis possimus reprehenderit hic quia quos
            quidem veniam, cumque voluptates.
          </p>
        </div>
      )}

      {currentTab == "images" && (
        <div>
          <h2>Images</h2>
          <p>
            Images Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Alias aliquam ea nobis exercitationem animi! Fugit esse culpa
            distinctio labore repudiandae facilis possimus reprehenderit hic
            quia quos quidem veniam, cumque voluptates.
          </p>
        </div>
      )}

      {currentTab == "videos" && (
        <div>
          <h2>Videos</h2>
          <p>
            Videso Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Alias aliquam ea nobis exercitationem animi! Fugit esse culpa
            distinctio labore repudiandae facilis possimus reprehenderit hic
            quia quos quidem veniam, cumque voluptates.
          </p>
        </div>
      )}
    </div>
  );
};
