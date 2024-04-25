import { Rate } from "antd";

const ReviewItem = ({ defaultValue, percent, count }: any) => (
  <div className="flex flex-nowrap gap-3 md:w-3/4 w-full items-center">
    <div>
      <Rate defaultValue={defaultValue} disabled className="text-sm" />
    </div>
    {/* <Progress percent={percent} className="w-2/4" /> */}
    <div className="flex w-2/4 items-center">
      <div className="w-full bg-teal-200 rounded-full">
        <div
          className="w-full h-2 bg-teal-500 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
    <h4 className="text-sm">{count}</h4>
  </div>
);

const ReviewDetail = () => (
  <>
    <div className="flex md:basis-1/2 basis-full">
      <div className="flex flex-col items-center justify-center border border-grey-text rounded-xl py-4 px-10">
        <h1 className="text-3xl text-green-text font-bold">
          <span>4.5</span>
        </h1>
        <h4 className="text-sm text-grey-text">Out of 5</h4>
        <Rate defaultValue={3} allowHalf disabled />
      </div>
    </div>

    <div className="flex flex-col py-3">
      <ReviewItem defaultValue={5} percent={100} count={1000} />
      <ReviewItem defaultValue={4} percent={80} count={800} />
      <ReviewItem defaultValue={3} percent={80} count={800} />
      <ReviewItem defaultValue={2} percent={80} count={800} />
      <ReviewItem defaultValue={1} percent={80} count={800} />
    </div>
  </>
);

export default ReviewDetail;
