import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
import { IHighlight, ITopic } from '../../../common/types';
import { useNavigate } from 'react-router-dom';
export default function FindDetailSpa(item: ITopic) {
  const navigate = useNavigate()
  return (
    <div className="mb-5" key={item.id}>
      <Card
        hoverable
        style={{ width: 320, height: 390, borderWidth: '2px' }}
        cover={<img alt="example" src={item.image} style={{ width: '318.8px', height: '200px' }} onClick={()=>navigate(`/gioithieu-SPA/${item.link}`)}/>}
      >
        <div className="flex flex-col items-start ">
          <div className="flex flex-col">
            <p className="font-bold text-2xl" onClick={()=>{navigate(`/gioithieu-SPA/${item.link}`)}}>
              {item.title}
            </p>
            <div className=" flex flex-col  min-h-20">
              {item.highlight?.map((hightlight: IHighlight) => (
                <p
                  key={hightlight.id}
                  onClick={() => {navigate(`/gioithieu-SPA/${item.link}`)}}
                  className=" w-full border-2overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis hover:text-cyan-500 pt-0.5"
                >
                  {hightlight.content}
                </p>
              ))}
            </div>
          </div>
          <div className="">
            
          </div>
        </div>
      </Card>
    </div>
  );
}
