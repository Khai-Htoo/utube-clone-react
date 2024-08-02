import { useContext } from "react";
import LeftNav from "../components/LeftNav";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { loading, searchResult } = useContext(AppContext);
  return (
    <div className=" flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className=" w-full h-full bg-black">
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {searchResult &&
              searchResult.map((data) => {
                <div className="" key={data.id}>
                  <div className=" h-[200px] relative rounded-lg overflow-hidden">
                    <img
                      className="h-full w-full object-cover"
                      src={data?.video?.thumbnails[0]?.url}
                    />
                    <div className=" absolute bottom-2 right-2 bg-black/[0.5] text-white px-2 py-1 rounded-md">
                      1:08:13
                    </div>
                  </div>
                  <div className="flex flex-row mt-2 items-start">
                    <img
                      src={data?.video?.author?.avatar[0]?.url}
                      className="size-9 rounded-full"
                      alt=""
                    />
                    <div className="ml-3 ">
                      <h1 className=" line-clamp-2 text-lg font-semibold text-white">
                        {data?.video?.title}
                      </h1>
                      <p className=" text-white/[0.7] text-sm mt-2">
                        {data?.video?.description}
                      </p>
                      <p className=" text-white/[0.7] text-md">
                        {data?.stats?.viewers} view {data?.pulishedTimeText}
                      </p>
                    </div>
                  </div>
                </div>;
              })}
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
