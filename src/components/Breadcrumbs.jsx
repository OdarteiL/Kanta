import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      currentLink += `/${crumb}`;

      // Check if it's the last item in the array
      const isLast = index === array.length - 1;

      return (
        <div key={crumb} className="flex items-center">
          <Link to={currentLink}>{crumb}</Link>
          {!isLast && <span className="mx-1">{'/'}</span>} {/* Separator */}
        </div>
      );
    });

  return (
    <div className="flex max-w-[1200px] my-2 mx-[3%]">
      {crumbs}
    </div>
  );
};

export default Breadcrumbs
