import banner from '../assets/banner.png'
const Hero = () => {
    return (
      <div className="flex md:flex-row flex-col-reverse items-center justify-between md:my-10 my-5 md:gap-0 gap-6">
        <div className="text-[#1A1919] space-y-5 md:w-[48%]">
          <h1 className="font-extrabold text-3xl  md:text-6xl max-w-md md:leading-[70px] md:text-start text-center">
            One Step Closer To Your 
            <span className="bg-gradient-to-r from-blue-400 to-purple-600  bg-clip-text text-transparent">
               Dream Job
            </span>
          </h1>
          <p className="opacity-80 max-w-lg text-center md:text-start">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn block mx-auto md:mx-0 text-white bg-gradient-to-r from-blue-400 to-purple-600">
            Get Started
          </button>
        </div>
        <div className='md:w-[48%]'>
          <img src={banner} alt="" />
        </div>
      </div>
    );
};

export default Hero;