import { useContext } from "react";
import FilteredProducts from "../components/reusable/FilteredProducts";
import { ProductsContext } from "../context/context";
import TopHeader from "../components/reusable/TopHeader";
import Header from "../components/reusable/Header";
import { AuthContext } from "../context/authContext";

const Logout = () => {
  const { filteredProducts, searchProduct } = useContext(ProductsContext);
  const { user, handleLogout } = useContext(AuthContext);
  return (
    <div className="lg:h-[42vh]">
      <TopHeader />
      <Header />
      {searchProduct?.trim().length > 0 && filteredProducts?.length > 0 ? (
        <FilteredProducts />
      ) : (
        <div className="flex items-center justify-center p-4 lg:px-0 lg:py-24">
          <div className="lg:w-1/3 shadow rounded p-4 lg:p-12 flex flex-col lg:gap-4 gap-1 items-center justify-center">
            <h1 className="text-2xl leading-10 font-secondary font-semibold text-center capitalize">
              Thank Your,
              <span className="opacity-50 text-xl px-2">
                {user ? user.userName : null}
              </span>
              For visiting us
            </h1>
            <button
              className="rounded bg-black px-12 py-2 hover:bg-opacity-80 text-white text-lg"
              onClick={() => handleLogout()}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;
