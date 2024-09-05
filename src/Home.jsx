import Widgets from "./components/widgets/Widgets";

const Home = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center items-stretch w-full h-full p-4 md:p-6 lg:p-8 gap-4 lg:gap-9">
        <div className="left-side bg-[#616161] rounded-2xl w-full md:w-1/2 lg:w-[55%] flex-grow border border-[#96BEE7] h-[10vh] md:h-auto"></div>
        <div className="right-side w-full md:w-1/2 lg:w-[45%] flex-grow text-base">
          <Widgets />
        </div>
      </div>
    </div>
  );
};

export default Home;
