import { FaPlus } from "react-icons/fa6";

const SideNav = () => {
  return (
    <div>
        <div className="w-full">
            <div className="hidden md:flex md:font-bold md:text-xl">
                <h2>Refine Results</h2>
            </div>
            <div className="hidden md:flex flex-col md:my-5">
                <div className="border-2 py-2 px-4 flex items-center justify-between">
                    <p>Brand</p>
                    <span><FaPlus /></span>
                </div>
                <div className="border-2 py-2 px-4 flex items-center justify-between">
                    <p>Gender</p>
                    <span><FaPlus /></span>
                </div>
                <div className="border-2 py-2 px-4 flex items-center justify-between">
                    <p>Product Type</p>
                    <span><FaPlus /></span>
                </div>
                <div className="border-2 py-2 px-4 flex items-center justify-between">
                    <p>Price</p>
                    <span><FaPlus /></span>
                </div>
                <div className="border-2 py-2 px-4 flex items-center justify-between">
                    <p>Color</p>
                    <span><FaPlus /></span>
                </div>
                <div className="border-2 py-2 px-4 flex items-center ">
                    <input type="checkbox" />
                    <p className="ml-2">Men</p>
                </div>
                <div className="border-2 py-2 px-4 flex items-center ">
                    <input type="checkbox" />
                    <p className="ml-2">Women</p>
                </div>
                <div className="border-2 py-2 px-4 flex items-center ">
                    <input type="checkbox" />
                    <p className="ml-2">Kids</p>
                </div>
                <div className="border-2 py-2 px-4 flex items-center ">
                    <input type="checkbox" />
                    <p className="ml-2">New Arrival</p>
                </div>
            </div>
            <div className="border-2 border-black h-[50px] mx-2 flex items-center justify-center md:hidden">
                <p>Filter & Sort</p>
            </div>
        </div>
    </div>
  )
}

export default SideNav