//Import pictures for navigation
import { appleImg, bagImg, searchImg } from "../utils";

// Add a Navbar to the website
const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={appleImg} Alt="Apple" width={14} height={18} />

        <div>
            {/* Add Apple products into an array based on navigation */}
            {['Phones', 'Macbooks', 'Tablets'].map((nav, i) => (
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
