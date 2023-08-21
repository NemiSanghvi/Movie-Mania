import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RankingPageLoading = () => {
  return (
    <div className="bg-slate-800 p-8">
      <h2 className="flex justify-center items-center">
        <Skeleton width={500} height={90} duration={1.5} />
      </h2>
      <div className="gap-4 ">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="flex bg-slate-700 bg-opacity-40 backdrop-blur-md border p-4 m-4"
          >
            <Skeleton
              width={100}
              height={150}
              style={{ marginRight: "1rem" }}
              duration={1.5}
            />{" "}
            {/* Skeleton for image */}
            <div className="flex flex-col">
              <Skeleton
                width={200}
                height={24}
                style={{ marginBottom: "0.5rem" }}
                duration={1.5}
              />{" "}
              {/* Skeleton for title */}
              <Skeleton
                count={2}
                width={150}
                style={{ marginBottom: "0.5rem" }}
              />{" "}
              {/* Skeleton for overview */}
              <Skeleton width={100} style={{ marginBottom: "0.5rem" }} />{" "}
              {/* Skeleton for genres */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RankingPageLoading;
