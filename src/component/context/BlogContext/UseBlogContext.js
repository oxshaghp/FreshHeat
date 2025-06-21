import { useContext } from "react";
import BlogContext from "./BlogContext";

const UseBlogContext = () => {
  return useContext(BlogContext);
};

export default UseBlogContext;
