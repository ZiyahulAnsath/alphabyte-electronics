// import DefaultFooter from "./DefaultFooter/page";
import Categories from "./Categories/page";
import Menus from "./Menus/page";
import Posts from "./Posts/page";

export default function Footer() {
  return (
    <footer className="shadow-sm border-t-gray-500 border border-l-0 border-r-0 border-b-0 md:mt-10 mt-3">
      <div className="container mx-auto px-5 xl:px-0">
        <div className="pt-3 pb-3 md:pt-6 md:pb-6">
          <div className="grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 ">
            <div className="xl:grid-cols-2 lg:grid-cols-4 grid-cols-6 text-grey-text">
              <h5 className="text-16 mb-3">Contact Us</h5>
              Added to Contact Info
            </div>
            {/* End Conatact */}

            <Menus/>
            {/* End Menus */}
          
            <Categories/>
            {/* End Categories */}

            <Posts/>
            {/* End Posts */}
          </div>
        </div>
      </div>
    </footer>
  );
}
