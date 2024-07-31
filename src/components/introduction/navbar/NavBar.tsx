import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

export default function IntroductionNavBar() {
  return (
    <div
      style={{ backgroundColor: '#000624' }}
      className="w-full min-h-16 items-center flex flex-row justify-evenly">
      <h1 className="text-white font-semibold font-be-vietnam-pro text-xl w-2/5"><a href="/">Trung tâm hỗ trợ </a></h1>
      <div className="w-1/2 flex justify-end">
        <Input
          placeholder="Tìm kiếm theo sản phẩm, chủ đề và nhiều hơn nữa"
          prefix={<SearchOutlined />}
          className="h-8 w-2/3 rounded-2xl"
        />
      </div>
    </div>
  );
}
