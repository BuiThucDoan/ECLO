import { Breadcrumb, Menu, MenuProps } from 'antd';
import IntroductionNavBar from '../components/introduction/navbar/NavBar';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { findAnswer } from '../mock/findanswer';
import { ITopic } from '../common/types';
import Intro from '../components/intro/Intro';
import CardDetail from '../components/card/CardDetail';

type MenuItem = Required<MenuProps>['items'][number];//định nghĩa kiểu dữ liệu
const items: MenuItem[] = findAnswer.map((topic) => ({
  key: topic.id.toString(),
  label: topic.title,
  children: topic.highlight.map((highlight) => ({
    key: highlight.id.toString(),
    label: highlight.content,
    link: highlight.link,
    children: highlight.children?.map((child) => ({
      key: child.id.toString(),
      label: child.content,
      link: child.link,
    })),
  })),
}));

interface LevelKeysProps {
  key?: string;
  link?: string;
  children?: LevelKeysProps[];
}

const getLevelKeys = (items1: LevelKeysProps[]) => {
  const key: Record<string, number> = {};
  const func = (items2: LevelKeysProps[], level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;//gán cấp độ cho key
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const levelKeys = getLevelKeys(items as LevelKeysProps[]);

export default function IntroductionPage() {
  const [stateOpenKeys, setStateOpenKeys] = useState<string[]>(['2', '23']);
  const [selectKey, setSelectKey] = useState<string>();
  const [breadCrumb, setBreadCrumb] = useState<any>([
    { title: <a href="/">Trung tâm hỗ trợ</a>, link: '/' },
  ]);

  const params = useParams();
  const navigate = useNavigate();

  const onOpenChange: MenuProps['onOpenChange'] = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1,
    );
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  const findParentItem = (
    items: LevelKeysProps[],
    key: string,
  ): LevelKeysProps | undefined => {
    for (const item of items) {
      if (item.children) {
        for (const child of item.children) {
          if (child.key === key) {
            return item;
          }
          if (child.children) {
            const found = findParentItem(child.children, key);
            if (found) {
              return item;
            }
          }
        }
      }
    }
    return undefined;
  };

  const findItemByKey = (
    items: LevelKeysProps[],
    key: string,
  ): LevelKeysProps | undefined => {
    for (const item of items) {
      if (item.key === key) {
        return item;
      }
      if (item.children) {
        const found = findItemByKey(item.children, key);
        if (found) {
          return found;
        }
      }
    }
    return undefined;
  };

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    const item = findItemByKey(items as LevelKeysProps[], e.key);
    if (item?.link) {
      navigate(`/chitiet-GOLD/${item?.link}`);
    }
  };

  const updateBreadcrumb = (key: string) => {
    const item = findItemByKey(items as LevelKeysProps[], key);
    if (item) {
      const newBreadcrumb = [
        { title: <a href="/">Trung tâm hỗ trợ</a>, link: '/' },
      ];
      const parentItem = findParentItem(items as LevelKeysProps[], key);

      if (parentItem) {
        newBreadcrumb.push({
          title: parentItem.label,
          link: `/chitiet-GOLD/${parentItem.link}`,
        });
      }
      newBreadcrumb.push({ title: item.label, link: `/detail/${item.link}` });
      setBreadCrumb(newBreadcrumb);
    }
  };

  const findItem = findAnswer.find((item: ITopic) => item.link === params.name);

  useEffect(() => {
    if (findItem) {
      setStateOpenKeys([findItem.id.toString()]);
      setSelectKey(findItem.id.toString());
      updateBreadcrumb(findItem.id.toString());
    }
  }, [params.name, findItem]);

  return (
    <div className="w-full h-full flex items-center flex-col justify-center">
      <div className="w-full flex items-center justify-center">
        <IntroductionNavBar />
      </div>
      <div className="w-full flex justify-start p-2 border-b-2 font-be-vietnam-pro">
        <Breadcrumb>
          {breadCrumb.map((crumb: any, index: number) => (
            <Breadcrumb.Item key={index}>
              <a href={crumb.link} onClick={(e) => { e.preventDefault(); navigate(crumb.link); }}>{crumb.title}</a>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </div>
      <div className="w-full flex h-full justify-between flex-row flex-wrap">
        <div className="w-full sm:w-1/4">
          <Menu
            mode="inline"
            onOpenChange={onOpenChange}
            openKeys={stateOpenKeys}
            defaultSelectedKeys={[selectKey]}
            style={{ width: '100%', minWidth: '200px' }}
            items={items}
            onClick={handleMenuClick}
          />
        </div>
        <div className="w-full sm:w-3/4 flex h-full flex-col ">
          <div className="w-full sm:w-11/12 h-1/4 flex items-center justify-center ">
            <Intro content={findItem?.title} key={findItem?.id} description={findItem.description}/>
          </div>
          <div className="w-full sm:w-11/12 flex mt-2 items-center justify-center ">
            <div className="w-full sm:w-4/5 flex-wrap flex flex-row justify-between mt-5 ">
              {findItem?.highlight?.map((highlight) => (
                <CardDetail
                  key={highlight.id}  // Thêm key vào đây để React không cảnh báo lỗi
                  id={highlight.id}
                  content={highlight.content}
                  children={highlight.children}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
