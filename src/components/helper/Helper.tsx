import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

export default function Helper() {
  return (
    <div
      className="w-3/4 flex items-center flex-col justify-center border-b-2"
      style={{ height: '50vh' }}
    >
      <h1 className='text-4xl font-bold'>Chúng tôi có thể giúp gì cho bạn?</h1>
      <div className="w-full items-center flex justify-center h-1/3">
        <Input
          placeholder="Tìm kiếm theo sản phẩm, chủ đề và hơn thế nữa"
          className="w-1/2 h-12 rounded-3xl"
          prefix={<SearchOutlined className="text-xl text-cyan-500 " />}
        />
      </div>
    </div>
  );
}
