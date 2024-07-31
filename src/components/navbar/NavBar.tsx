import { MenuOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, Button, Drawer } from 'antd';
import { RightOutlined, DownOutlined } from '@ant-design/icons'; // Smaller icons
import logo from '../../assets/logo1.png';
import { useNavigate } from 'react-router-dom';
import { findAnswer } from '../../mock/findanswer';
import { findAnswerSpa } from '../../mock/findanswerspa';
import { findAnswerSclo } from '../../mock/findanswersclo';
import { findAnswerERP } from '../../mock/findanswererp';
import { findAnswerSfit } from '../../mock/findanswersfit';
import { useState, useEffect } from 'react';

export default function NavBar() {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState({ title: '', link: '' });
  const [isMobile, setIsMobile] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  //@ts-ignore
  const handleMenuClick = (item, routePrefix) => {
    const route = `${routePrefix}${item.link}`;
    setSelectedItem({ title: item.title, link: route });
    navigate(route);
    setMenuVisible(false);
  };

  //@ts-ignore
  const generateMenuItems = (data, routePrefixParent, routePrefixChild) => {
    //@ts-ignore
    return data.map((item) => ({
      label: (
        <a href={item.link} onClick={(e) => { e.preventDefault(); handleMenuClick(item, routePrefixParent); }}>
          {item.title}
        </a>
      ),
      key: item.id,
      //@ts-ignore
      children: item.highlight?.map((subItem) => ({
        label: (
          <a href={subItem.link} onClick={(e) => { e.preventDefault(); handleMenuClick(subItem, routePrefixChild); }}>
            {subItem.content}
          </a>
        ),
        key: subItem.id,
        //@ts-ignore
        children: subItem.children?.map((childItem) => ({
          label: (
            <a href={childItem.link} onClick={(e) => { e.preventDefault(); handleMenuClick(childItem, routePrefixChild); }}>
              {childItem.content}
            </a>
          ),
          key: childItem.id,
        })),
      })),
    }));
  };

  const menuItemsSCLO = generateMenuItems(findAnswerSclo, '/gioithieu-SCLO/', '/chitiet-SCLO/');
  const menuItemsGoldManagement = generateMenuItems(findAnswer, '/gioithieu-GOLD/', '/chitiet-GOLD/');
  const menuItemsSPAManagement = generateMenuItems(findAnswerSpa, '/gioithieu-SPA/', '/chitiet-SPA/');
  const menuItemsERPManagement = generateMenuItems(findAnswerERP, '/gioithieu-HRM/', '/chitiet-HRM/');
  const menuItemsSFITManagement = generateMenuItems(findAnswerSfit, '/gioithieu-SFIT/', '/chitiet-SFIT/');

  const desktopSubMenuItems = [
    { label: 'Hệ thống SCLO', items: menuItemsSCLO },
    { label: 'Quản lý Tiệm vàng', items: menuItemsGoldManagement },
    { label: 'Quản lý SPA', items: menuItemsSPAManagement },
    { label: 'Quản lý Nhân sự', items: menuItemsERPManagement },
    { label: 'Quản lý phòng GYM', items: menuItemsSFITManagement }
  ];
  const mobileMenuItems = [
    { key: 'SCLO', label: 'SCLO', items: menuItemsSCLO },
    { key: 'Vàng', label: 'Vàng', items: menuItemsGoldManagement },
    { key: 'SPA', label: 'SPA', items: menuItemsSPAManagement },
    { key: 'HRM', label: 'HRM', items: menuItemsERPManagement },
    { key: 'SFIT', label: 'SFIT', items: menuItemsSFITManagement }
  ];

  //@ts-ignore
  const toggleMenu = (key) => {
    if (openMenu === key) {
      setOpenMenu(null);
    } else {
      setOpenMenu(key);
    }
  };

  const toggleSubMenu = (key) => {
    setOpenSubMenu((prevState) => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  const renderSubMenu = (items) => {
    return items.map((subItem) => (
      <div key={subItem.key} style={{ padding: '10px 0' }}>
        <div onClick={() => toggleSubMenu(subItem.key)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
          <a href={subItem.label.props.href} onClick={(e) => subItem.label.props.onClick(e)}>{subItem.label.props.children}</a>
          {subItem.children && (
            openSubMenu[subItem.key] ? <RightOutlined className="small-icon" /> : <DownOutlined className="small-icon" />
          )}
        </div>
        {subItem.children && openSubMenu[subItem.key] && (
          <div style={{ marginLeft: 20, marginTop: 10 }}>
            {renderSubMenu(subItem.children)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div style={{   position: 'fixed', top: 0, width: '100%', zIndex: 1000,backgroundColor: '#000624', color:'white'}} className="h-16 w-full flex flex-row justify-between items-center">
      <div className="w-full flex justify-between h-full items-center px-4 gap-x-2">
        <img src={logo} className="w-20 h-15 p-2" alt="logo" onClick={() => navigate("/")} />

        {isMobile ? (
          <>
            <Button icon={<MenuOutlined />} onClick={() => setMenuVisible(true)} />
            <Drawer
              title="Menu"
              placement="right"
              onClose={() => setMenuVisible(false)}
              visible={menuVisible}
            >
              {mobileMenuItems.map(menu => (
                <div key={menu.key} style={{ padding: '15px 0' }}>
                  <div onClick={() => toggleMenu(menu.key)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                    <span className="menu-mobile-label">{menu.label}</span>
                    {openMenu === menu.key ? <RightOutlined className="small-icon" /> : <DownOutlined className="small-icon" />}
                  </div>
                  {openMenu === menu.key && (
                    <div style={{ marginLeft: 20, marginTop: 10 }}>
                      {renderSubMenu(menu.items)}
                    </div>
                  )}
                </div>
              ))}
            </Drawer>
          </>
        ) : (
          <>
            {desktopSubMenuItems.map((submenu, index) => (
              <Dropdown key={index} overlay={<Menu items={submenu.items} style={{ marginLeft: 20 }} />} trigger={['hover']} className="ml-12 w-1/2 pl-2">
                <a onClick={(e) => e.preventDefault()} className="hover:underline">
                  <Space>{submenu.label}</Space>
                </a>
              </Dropdown>
            ))}
          </>
        )}
      </div>
      <style jsx>{`
        a {
          font-weight: normal;
        }
        a:hover {
          text-decoration: none; 
        }
        .menu-mobile-label {
          font-size: 16px; 
        }
        .ant-drawer-body > div {
          padding: 15px 0; 
        }
        .ant-drawer-body .ant-menu {
          background-color: #f0f2f5; 
        }
        .ant-drawer-body .ant-menu-item {
          padding-left: 24px; 
        }
        .ant-drawer-body .ant-menu-item a {
          color: #000; 
        }
        .small-icon {
          font-size: 12px; 
        }
      `}</style>
    </div>
  );
}
