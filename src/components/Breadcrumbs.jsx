import { Link, useLocation } from "react-router-dom";
import { FaHome, FaChevronRight } from "react-icons/fa";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const formatBreadcrumb = (str) => {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  if (pathnames.length === 0) return null;

  return (
    <nav className="bg-white border-b border-gray-200 py-3 px-[3%]">
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link
            to="/"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FaHome className="mr-1" />
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={name} className="flex items-center">
              <FaChevronRight className="text-gray-400 mx-2" size={10} />
              {isLast ? (
                <span className="text-blue-600 font-semibold">
                  {formatBreadcrumb(name)}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {formatBreadcrumb(name)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
