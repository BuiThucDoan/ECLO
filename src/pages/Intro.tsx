import FindTopicABC from "../components/findTopic/Find";

export const Intro = () => {
  return (
    <div className="w-full h-full flex items-center flex-col justify-center">
      <div className="w-full flex items-center justify-center">
        {/* <Find /> */}
        <FindTopicABC />
      </div>
    </div>
  );
};
