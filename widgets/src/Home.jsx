import Widgets from "./components/widgets/Widgets";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-stretch w-full min-h-screen p-4 md:p-6 lg:p-8 gap-4 md:gap-[5%] lg:gap-9 md:flex-row">
        <div className="left-side bg-[#616161] sm:pb-40 rounded-2xl w-full sm:h-1/2 md:w-1/2 md:h-auto lg:w-[55%] flex-grow border border-[#96BEE7]"></div>
        <div className="right-side w-full sm:h-1/2 md:w-1/2 md:h-auto flex-grow text-base lg:w-[45%]">
          <Widgets />
        </div>
      </div>
    </div>
  );
};

export default Home;
