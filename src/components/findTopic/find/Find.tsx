import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
import { IHighlight,IFindAnswer } from '../../../common/types';
import { useNavigate } from 'react-router-dom';
export default function FindDetail(item: IFindAnswer) {
  const navigate = useNavigate()
  return (
    <div className="mb-5 ml-2" key={item.id}>
      <Card
        hoverable
        style={{ width: 275, height: 320, borderWidth: '2px' }}
        cover={<img alt="example" src={item.image} style={{ width: '318.8px', height: '180px' }} onClick={()=>navigate(`/${item.link}`)}/>}
      >
        <div className="flex flex-col items-start ">
          <div className="flex flex-col">
            <p className="font-bold text-2xl" onClick={()=>{navigate(`/${item.link}`)}}>
              {item.title}
            </p>
            <div className=" flex flex-col  min-h-5">
              {item.highlight?.map((hightlight: IHighlight) => (
                <p
                  key={hightlight.id}
                  onClick={() => {navigate(`/introduction/${item.link}`)}}
                  className=" w-full border-2overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis hover:text-cyan-500 pt-0.5"
                >
                  {hightlight.content}
                </p>
              ))}
            </div>
          </div>
          <div className="">
            <Button
              type="default"
              iconPosition="end"
              className="rounded-2xl "
              onClick={()=>navigate(`/${item.link}`)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '5px',
                paddingTop:'5px',
                paddingLeft:'15px',
                marginTop:'15px',
                marginLeft:'110px',
              }}
              icon={<ArrowRightOutlined />}
            >
              Xem tất cả
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
