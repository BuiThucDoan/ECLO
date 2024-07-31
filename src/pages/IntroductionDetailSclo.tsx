import { useEffect, useRef, useState } from 'react';
import { Breadcrumb, Anchor } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import IntroductionNavBar from '../components/introduction/navbar/NavBar';
import { instructionDetailSclo } from '../mock/detailsclo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

const findParentItem = (items, key) => {
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

const findItemByKey = (items, key) => {
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

export default function IntroductionDetail() {
  const topRef = useRef<HTMLDivElement>(null);
  const [targetOffset, setTargetOffset] = useState<number>();
  const [breadCrumb, setBreadCrumb] = useState<any>([
    { title: 'Trung tâm hỗ trợ', link: '/' },
  ]);
  const params = useParams();
  const navigate = useNavigate();

  const findDetail = instructionDetailSclo.find(
    (detail) => detail.link === params.name,
  );
  useEffect(() => {
    window.scrollTo(0, 0);
    setTargetOffset(topRef.current?.clientHeight);
    if (findDetail) {
      const newBreadcrumb = [{ title: 'Trung tâm hỗ trợ', link: '/' }];
      const buildBreadcrumb = (link) => {
        const parent = findParentItem(instructionDetailSclo, link);
        if (parent) {
          buildBreadcrumb(parent.link);
          newBreadcrumb.push({
            title: parent.label,
            link: `/chitiet-SCLO/${parent.link}`,
          });
        }
      };
      buildBreadcrumb(findDetail.link);
      newBreadcrumb.push({
        title: findDetail.label,
        link: `/chitiet-SCLO/${findDetail.link}`,
      });
      setBreadCrumb(newBreadcrumb);
    }
  }, [params.name, findDetail]);

  return (
    <div className="w-full h-full flex items-center flex-col justify-center">
      <div className="w-full flex items-center justify-center overflow-auto">
        <IntroductionNavBar />
      </div>
      <div
        className="navbar-noilen"
        style={{ borderBottom: '2px solid #E5E7EB', backgroundColor: 'white' }}>
        <div className="flex justify-start p-2 font-be-vietnam-pro ml-15 ml-10">
          <Breadcrumb>
            {breadCrumb.map((crumb, index) => (
              <Breadcrumb.Item key={index}>
                <a
                  href={crumb.link}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(crumb.link);
                  }}
                >
                  {crumb.title}
                </a>
              </Breadcrumb.Item>
            ))}
          </Breadcrumb>
        </div>
      </div>
      <style jsx>
        {`
          .navbar-noilen {
            float: left;
            width: 100%;
            margin-right: auto;
          }

          @media (min-width: 1124px) {
            .navbar-noilen {
              width: 1168px;
            }
          }

          @media (max-width: 1123px) {
            .navbar-noilen {
              width: 100%;
            }
          }

          @media (max-width: 768px) {
            .content-full-width {
              width: 100%;
            }
            .hide-on-mobile {
              display: none;
            }
          }
        `}
      </style>
      <div className="w-4/5 flex h-full justify-between flex-row mt-2 bg-gray-0">
        <div className="w-3/4 flex flex-col content-full-width">
          <h1 className="font-bold font-be-vietnam-pro text-4xl pt-2 pb-2 mb-5 mt-5 leading-relaxed">
            {findDetail?.label}
          </h1>
          <p
            className="text-justify mb-3 font-plus-jakarta leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: findDetail?.description?.replace(/\n/g, '<br>'),
            }}
          />
          <div className="w mt-5">
            {findDetail?.image && <img src={findDetail.image} />}
          </div>
          {findDetail?.steps?.map((step) => (
            <div key={step.id} id={step.id.toString()}>
              <p className="font-bold font-be-vietnam-pro text-2xl pt-2 pb-2 mt-5">
                {step.label}
              </p>
              {step.description && (
                <p
                  className="text-justify font-plus-jakarta leading-relaxed mb-3 mt-3"
                  dangerouslySetInnerHTML={{
                    __html: step.description.replace(/\n/g, '<br>'),
                  }}
                />
              )}
              {step.image && <img src={step.image} className="mt-2" />}
            </div>
          ))}
        </div>
        <div className="w-1/5 flex h-full flex-col overflow-auto ml-100 font-be-vietnam-pro hide-on-mobile fixed right-0 mr-12">
          <Anchor
            className="bg-white"
            targetOffset={targetOffset}
            items={findDetail?.steps?.map((step) => ({
              key: step.id.toString(),
              href: `#${step.id}`,
              title: step.label,
            }))}
          />
          <br />
          <div className="border-b-2 border-gray-200"></div>
          <br />
          <div className="border-l-2 border-gray-200 related-articles">
            <div className="font-bold font-be-vietnam-pro ml-2 sm:ml-0 pl-2">
              Các bài viết quan trọng
            </div>
            <a
              href="huong-dan-su-dung-HTML"
              className="font-plus-jakarta ml-4 mt-3 text-sm block sm:inline-block">
              <FontAwesomeIcon icon={faFileAlt} className="mr-1" /> Hướng dẫn sử dụng HTML
            </a>{' '}
            <br />
            <a
              href="huong-dan-su-dung-SVG"
              className="font-plus-jakarta ml-4 mt-3 text-sm block sm:inline-block">
              <FontAwesomeIcon icon={faFileAlt} className="mr-1 mt-1" /> Hướng dẫn sử dụng SVG
            </a>{' '}
            <br />
            <a
              href="huong-dan-su-dung-AI"
              className="font-plus-jakarta ml-4 mt-3 text-sm block sm:inline-block">
              <FontAwesomeIcon icon={faFileAlt} className="mr-1 pt-1" /> Hướng
              dẫn sử dụng trợ lý AI
            </a>
          </div>
          <br />
          <div className="border-b-2 border-gray-200"></div>
          <br />
          <div className="border-l-2 border-gray-200 sm:pl-0">
            <div className="font-bold font-be-vietnam-pro mt-3 sm:ml-0 pl-3">
              Demo ứng dụng
            </div>
            <a
              href="https://my.sclo.vn/"
              className="font-be-vietnam-pro ml-4 mt-3 text-sm block sm:inline-block hover-blue">
              <FontAwesomeIcon icon={faFileAlt} className="mr-1 ml-1" /> Bấm vào đây!!!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
