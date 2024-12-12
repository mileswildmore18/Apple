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
        <img src={appleImg} alt="Apple" width={14} height={18} />
        {/* Make Apple products centered and responsive hiding navigation on smaller devices */}
        <div className="flex flex-1 justify-center max-sm:hidden">
            {/* Add Apple products into an array based on navigation */}
            {navLists.map((nav) => (
                <div key={nav} className="px-5 text-sm cursor-pointer text-blue hover:text-white transition-all">
                    {nav}
                    </div>
            ))}
        </div>

        {/*Make search icon and shopping icon separate from each other and appear on the right side of the page*/}
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
            <img src={searchImg} alt="search" width={18} height={18} />
            <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
