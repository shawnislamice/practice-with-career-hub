import accounts from "../assets/accounts-1.png";
import business from "../assets/business-1.png";
import chip from "../assets/chip-1.png";
import social from "../assets/social-media-1.png";

const CategoryList = () => {
  return (
    <div className="my-5 ">
      <div className="text-[#1A1919] my-5">
        <h1 className="text-3xl text-center font-bold">Job Category List</h1>
        <p className="text-center opacity-80 py-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex  md:flex-row flex-col md:gap-0 gap-4 justify-around items-center">
        <div className="bg-base-300 py-4 px-6 rounded-lg w-[280px]">
          <div>
            <img src={accounts} alt="" />
          </div>
          <div className="space-y-1 pt-2">
            <h3 className="font-semibold py-1">Account & Finance</h3>
            <p>300 Jobs Available</p>
          </div>
        </div>
        <div className="bg-base-300 py-4 px-6 rounded-lg w-[280px] ">
          <div>
            <img src={business} alt="" />
          </div>
          <div className="space-y-1 pt-2">
            <h3 className="font-semibold py-1">Creative Design</h3>
            <p>100+ Jobs Available</p>
          </div>
        </div>
        <div className="bg-base-300 py-4 px-6 rounded-lg w-[280px]">
          <div>
            <img src={chip} alt="" />
          </div>
          <div className="space-y-1 pt-2">
            <h3 className="font-semibold py-1">Marketing & Sales</h3>
            <p>150 Jobs Available</p>
          </div>
        </div>
        <div className="bg-base-300 py-4 px-6 rounded-lg w-[280px]">
          <div>
            <img src={social} alt="" />
          </div>
          <div className="space-y-1 pt-2">
            <h3 className="font-semibold py-1">Engineering Job</h3>
            <p>224 Jobs Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
