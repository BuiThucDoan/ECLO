import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { FaFacebookF, FaTiktok, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <div style={{ backgroundColor: '#000624' }} className="w-full min-h-16 items-center flex flex-col sm:flex-row justify-between mt-5 p-4">
            <div className="text-white font-semibold text-sm w-full sm:w-2/5 font-be-vietnam-pro mb-3 sm:mb-0 text-center sm:text-left" style={{ marginLeft: '10px', marginRight: '10px' }}>
                Copyright ©2024 All Rights Reserved by <span className="text-custom-orange">ECLO</span>
            </div>
            <div className="w-full sm:w-1/2 flex justify-center sm:justify-end font-be-vietnam-pro">
                <div className="flex space-x-4" style={{ marginLeft: '20px', marginRight: '20px' }}>
                    <a href="https://www.facebook.com/eclo.io" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-white hover:text-custom-orange">
                        <FaFacebookF size={20} />
                        <span>Facebook</span>
                    </a>
                    <a href="https://www.youtube.com/@eclo_official" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-white hover:text-custom-orange">
                        <FaYoutube size={20} />
                        <span>YouTube</span>
                    </a>
                    <a href="https://www.tiktok.com/@eclo.vn" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-white hover:text-custom-orange">
                        <FaTiktok size={20} />
                        <span>TikTok</span>
                    </a>
                </div>
            </div>
        </div>
    );
}