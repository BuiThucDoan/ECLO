import { IFindAnswer } from '../../common/types';
import { findAnswer } from '../../mock/find';
import Find from './find/Find';

export default function FindTopicABC() {
  return (
    <div className="min-h-screen-75 w-full flex flex-col text-center">
      <div className="h-1/5 mb-3 ml-3 mt-12">
        <h1 className="font-bold text-3xl pb-3 ml-5 mt-12">HƯỚNG DẪN SỬ DỤNG</h1>
        <p className="font-semibold ml-5" style={{ fontSize: '1.2em' }}>
          Các bài hướng dẫn của chúng tôi!
        </p>
      </div>
      <div className="flex flex-row h-3/5 justify-evenly flex-wrap mt-5">
        {findAnswer.map((item: IFindAnswer) => (
          <Find
            key={item.id}
            title={item.title}
            image={item.image}
            link={item.link}
            highlight={item.highlight}
          />
        ))}
      </div>
    </div>
  );
}
