import { useContext } from "react";
import BlogContext from "./BlogContext";

const useBlogContext = () => {
  return useContext(BlogContext);
};

export default useBlogContext;
