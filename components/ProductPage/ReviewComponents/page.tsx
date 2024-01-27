import OverallReviews from "./common/OverallReviews/page";
import ReviewDetail from "./common/ReviewDetail/page";
import ReviewPost from "./common/ReviewPost/page";

const ReviewComponents = ({laptop}:any) => {
    // console.log(laptop?.name);
  return (
    <>
      <div className="px-5 py-5">
        <h1 className="text-2xl">Customer Reviews (100)</h1>
        <div className="flex flex-row md:flex-nowrap flex-wrap gap-5">
          <div className="md:basis-1/2 basis-full">
            <ReviewDetail />
          </div>
          <div className="md:basis-1/2 basis-full">
            <h2 className="text-lg font-bold">Be the first to review <span className="text-green-text">{laptop?.name}</span></h2>
            <ReviewPost />
          </div>
        </div>
        <div className="py-8">
          <OverallReviews />
        </div>
      </div>
    </>
  );
};

export default ReviewComponents;
