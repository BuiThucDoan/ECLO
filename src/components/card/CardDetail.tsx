import { ProfileOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

interface IProps {
  id: number;
  content: string;
  children?: {
    id: number;
    content: string;
    link: string;
  }[];
}

export default function CardDetail(props: IProps) {
  const navigate = useNavigate();

  const handleChildClick = (link: string) => {
    navigate(`/chitiet-GOLD/${link}`);
  };

  return (
    <Card
      style={{ width: 350, borderWidth: 2 }}
      className="mb-2"
      key={props.id}
    >
      <h1 className="font-bold text-xl hover:text-cyan-500" >{props.content}</h1>

      {props.children?.map((child) => (
        <p
          key={child.id}
          className="cursor-pointer hover:text-cyan-500"
          onClick={() => handleChildClick(child.link)
          }
        >
          <ProfileOutlined className="pr-2" />
          {child.content}
        </p>
      ))}
    </Card>
  );
}
