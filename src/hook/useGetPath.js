import { useLocation } from "react-router-dom";

const useGetPath = () => {
  const location = useLocation();
  const path = location.pathname;

  const pathArray = path.split("/");
  pathArray.splice(0, 3);
  const pathStr = pathArray.join();

  return { pathStr };
};
export default useGetPath;
