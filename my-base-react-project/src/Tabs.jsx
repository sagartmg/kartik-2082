import { useState } from "react";

export const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("all");

  // let currentTab = "images";
  // currentTab = "all";
  // currentTab = "videos";

  return (
    <div className="m-12">
      <ul className="mb-8 flex gap-4 capitalize">
        <li>
          <a className={currentTab == "all" ? "text-red-500" : ""}>all</a>
        </li>
        <li>
          <a href="#" className={currentTab == "images" ? "text-red-500" : ""}>
            images
          </a>
        </li>
        <li>
          <a href="#" className={currentTab == "videos" ? "text-red-500" : ""}>
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
