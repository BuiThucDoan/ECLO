import FindTopic from '../components/findTopic/FindTopic';
import Helper from '../components/helper/Helper';
export const HomePage = () => {
  return (
    <div className="w-full h-full flex items-center flex-col justify-center">
      
      <div className="w-full flex items-center justify-center">
        <Helper />
      </div>
      <div className="w-full flex items-center justify-center">
        <FindTopic />
      </div>
      
    </div>
  );
};
