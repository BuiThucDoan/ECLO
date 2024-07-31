import { Divider } from 'antd';
import trending from '../../assets/sclo.png';
import { ArrowRightOutlined } from '@ant-design/icons';
import { trendingData } from '../../mock/trending';
import { ITrending } from '../../common/types';
export default function Trending() {
  return (
    <div
      style={{ minHeight: '100vh' }}
      className="w-3/4 flex justify-evenly flex-col border-b-2"
    >
      <div className="h-2/5">
        <h1 className="font-bold text-3xl pb-3">Các bài viết nổi bật</h1>
        <p className="font-semibold">Đi tới những bài viết phổ biến ngay bây giờ.</p>
      </div>
      <div className="flex h-2/3 items-center flex-row w-full justify-between">
        <div className="w-2/5 ">
          <img
            src={trending}
            className="rounded-3xl"
            style={{ height: '250px', width: '400px' }}
          />
        </div>
        <div className="w-1/2 ">
          {trendingData.map((item: ITrending) => (
            <div className="flex flex-col justify-between h-1/6 " key={item.id}>
              <a
                href="#"
                className="bg-gray-200 uppercase font-semibold text-center mb-2 w-2/5 hover:bg-slate-900 hover:text-white"
                style={{ fontSize: '13px' }}
              >
                {item.type}
              </a>
              <a
                href={`/chitiet-GOLD/${item?.link}`}
                className="hover:text-cyan-500 w-full flex flex-row justify-between"
              >
                <p className="w-4/5 font-bold overflow-hidden whitespace-nowrap overflow-ellipsis mt-3">
                  {item.content}
                </p>
                <ArrowRightOutlined />
              </a>
              <Divider />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
