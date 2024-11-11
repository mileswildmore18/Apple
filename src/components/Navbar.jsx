//Import pictures and nav links for navigation
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
// Add a Navbar to the website
const Navbar = () => {
  return (
    // Span the entire screen with padding and flex properties to make the website responsive
    <header className="w=full py-5 sm:px-10 px-5 flex justify-between items-center">
        {/* Span the whole screen and fill up the entire page */}
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} Alt="Apple" width={14} height={18} />
        {/* Make Apple products centered and responsive hiding navigation on smaller devices */}
        <div className="flex flex-1 justify-center max-sm:hidden">
            {/* Add Apple products into an array based on navigation */}
            {[navLists].map((nav, i) => (
                <div key={nav}>
                    {nav}
                    </div>
            ))}
        </div>

        <div>
            <img src={searchImg} alt="search" width={18} height={18} />
            <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
