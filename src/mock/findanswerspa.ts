import { ITopic } from '../common/types';
export const findAnswerSpa: ITopic[] = [
  {
    id: 1,
    title: 'Dữ liệu',
    image: 'https://res.cloudinary.com/dzh4pimvj/image/upload/v1717770595/cloud_riksef.jpg',
    link: 'du-lieu',
    description:'Trang Dữ liệu cho phép người dùng quản lý và lưu trữ các tệp dữ liệu một cách hiệu quả. Người dùng có thể dễ dàng tạo thêm các thư mục mới để tổ chức tệp tin của mình. Trang hỗ trợ nhiều định dạng tệp như mp4, png, và pdf, cung cấp khả năng thực hiện các thao tác như xem trước tệp, xóa tệp, tải tệp lên từ máy tính cá nhân, và chỉnh sửa tên tệp theo nhu cầu.',
    highlight: [
      {
            id: 11,
            content: 'Giới thiệu',
            link: 'gioi-thieu',
            children: [
              {
                id: 111,
                content: 'Dữ liệu',
                link: 'gioi-thieu-trang-du-lieu',
              },
            ],
          },
          {
            id: 12,
            content: 'Hướng dẫn sử dụng',
            link: 'huong-dan-su-dung',
            children: [
              {
                id: 121,
                content: 'Dữ liệu',
                link: 'huong-dan-su-dung-trang-du-lieu',
              },
            ],
          },
    ],
  },
  {
    id: 2,
    title: 'Hóa đơn',
    link: 'hoa-don',
    image: 'https://res.cloudinary.com/dzh4pimvj/image/upload/v1717770595/cloud_riksef.jpg',
    description:'Chức năng quản lý hóa đơn trong SPA bao gồm ba phần chính: quản lý liệu trình, đặt lịch trước và quản lý trả hàng. Quản lý liệu trình giúp theo dõi và cập nhật trạng thái dịch vụ khách hàng đã chọn, đảm bảo mọi giao dịch được ghi nhận chính xác. Đặt lịch trước cho phép khách hàng đăng ký dịch vụ và quản lý các cuộc hẹn một cách hiệu quả, giúp SPA lên kế hoạch tốt hơn. Quản lý trả hàng xử lý các yêu cầu trả lại sản phẩm, đảm bảo hoàn tiền hoặc điều chỉnh tài khoản khách hàng kịp thời và minh bạch.',
    highlight: [
          {
            id: 21,
            content: 'Hướng dẫn sử dụng',
            link: 'huong-dan',
            children: [
              {
                id: 211,
                content: 'Liệu trình',
                link: 'huong-dan-su-dung-trang-lieu-trinh',
              },
              {
                id: 212,
                content: 'Đặt trước',
                link: 'huong-dan-su-dung-trang-dat-truoc',
              },
              {
                id: 213,
                content: 'Combo',
                link: 'huong-dan-su-dung-trang-combo',
              },
              {
                id: 214,
                content: 'Liệu trình hủy',
                link: 'huong-dan-su-dung-trang-lieu-trinh-huy',
              },
              {
                id: 215,
                content: 'Trả hàng',
                link: 'huong-dan-su-dung-trang-tra-hang',
              },
            ],      
          },
    ],
  },
  {
    id: 3,
    title: 'Khách hàng',
    link: 'thiet-lap-khach-hang',
    image:'https://res.cloudinary.com/dzh4pimvj/image/upload/v1717770595/cloud_riksef.jpg',
    description:'Bao gồm việc thu thập, lưu trữ và phân tích thông tin khách hàng, từ lịch sử mua hàng, sở thích, đến phản hồi và yêu cầu đặc biệt. Bằng cách hiểu rõ nhu cầu và mong muốn của khách hàng, doanh nghiệp có thể cung cấp các sản phẩm và dịch vụ phù hợp, nâng cao trải nghiệm khách hàng và tăng cường sự hài lòng.',
    highlight: [
      {
        id: 31,
        content: 'Quản lý khách hàng',
        link: 'huong-dan-su-dung-thiet-lap-khach-hang',
        children:[
          {
            id:310,
            content: 'Khách hàng',
            link: 'huong-dan-su-dung-trang-khach-hang',
          },
          {
            id: 311,
            content: 'Sinh nhật khách hàng',
            link: 'huong-dan-su-dung-trang-sinh-nhat-khach-hang',
          },
          {
            id: 312,
            content: 'Thẻ khách hàng',
            link: 'huong-dan-su-dung-trang-the-khach-hang',
          },
          {
            id: 313,
            content: 'Loại khách hàng',
            link: 'huong-dan-su-dung-trang-loai-khach-hang',
          },
          {
            id: 314,
            content: 'Nguồn kênh',
            link: 'huong-dan-su-dung-trang-nguon-kenh',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Kho hàng',
    image: 'https://res.cloudinary.com/dzh4pimvj/image/upload/v1717770595/cloud_riksef.jpg',
    link: 'kho-hang',
    description:'Kho hàng trong quản lý SPA đóng vai trò quan trọng trong việc đảm bảo nguồn cung cấp liên tục các sản phẩm và thiết bị cần thiết cho các dịch vụ chăm sóc sắc đẹp. Quản lý kho hàng hiệu quả giúp tối ưu hóa việc lưu trữ, bảo quản và phân phối các mặt hàng như mỹ phẩm, thiết bị, và dụng cụ SPA. Điều này không chỉ giúp duy trì chất lượng dịch vụ mà còn giảm thiểu chi phí và lãng phí. Hệ thống quản lý kho hàng hiện đại thường sử dụng phần mềm để theo dõi số lượng hàng tồn kho, hạn sử dụng, và tự động đặt hàng khi cần thiết, giúp nâng cao hiệu suất và sự chuyên nghiệp trong hoạt động của SPA.',
    highlight: [
      {
            id: 41,
            content: 'Giới thiệu',
            link: 'gioi-thieu-kho-hang',
            children: [
              {
                id: 411,
                content: 'Kho thành phẩm',
                link: 'gioi-thieu-kho-thanh-pham',
              },
              {
                id: 412,
                content: 'Kho nguyên liệu',
                link: 'gioi-thieu-kho-nguyen-lieu',
              },
            ],
          },
          {
            id: 42,
            content: 'Hướng dẫn sử dụng',
            link: 'huong-dan-su-dung-kho-hang',
            children: [
              {
                id: 421,
                content: 'Kho thành phẩm',
                link: 'huong-dan-su-dung-kho-thanh-pham-spa',
              },
              {
                id: 422,
                content: 'Kho nguyên liệu',
                link: 'huong-dan-su-dung-kho-nguyen-lieu-spa',
              },
              {
                id: 423,
                content: 'Danh mục sản phẩm',
                link: 'huong-dan-su-dung-danh-muc-san-pham-spa',
              },
              {
                id: 424,
                content: 'Nhóm sản phẩm',
                link: 'huong-dan-su-dung-nhom-san-pham-spa',
              },
              {
                id: 425,
                content: 'Đơn vị',
                link: 'huong-dan-su-dung-don-vi',
              },
              {
                id: 426,
                content: 'Nhà cung cấp',
                link: 'huong-dan-su-dung-nha-cung-cap',
              },
            ],
          }, 
    ],
  },
  {
    id: 5,
    title: 'Dịch vụ',
    link: 'dich-vu',
    image: 'https://res.cloudinary.com/dzh4pimvj/image/upload/v1717770595/cloud_riksef.jpg',
    description:'Chức năng quản lý dịch vụ trong SPA bao gồm hai phần chính: quản lý dịch vụ và quản lý nhóm dịch vụ. Quản lý dịch vụ cho phép SPA tổ chức và quản lý các dịch vụ cụ thể mà họ cung cấp. Đây bao gồm các tính năng như thêm, xóa và cập nhật thông tin chi tiết về từng dịch vụ',
    highlight: [
      {
        id: 51,
        content: 'Hướng dẫn sử dụng',
        link: 'huong-dan-su-dung-dich-vu',
        children:[
          {
            id: 511,
            content: 'Dịch vụ',
            link: 'huong-dan-su-dung-trang-dich-vu',
          },
          {
            id: 512,
            content: 'Nhóm dịch vụ',
            link: 'huong-dan-su-dung-trang-nhom-dich-vu',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Báo cáo',
    link: 'bao-cao',
    image:'https://res.cloudinary.com/dzh4pimvj/image/upload/v1717770595/cloud_riksef.jpg',
    description:'Chức năng báo cáo trong trang quản lý SPA cung cấp cái nhìn tổng quát và chi tiết về các hoạt động kinh doanh như thu chi, doanh thu, hoa hồng nhân viên, công nợ, xuất nhập tồn, và thống kê về dịch vụ, sản phẩm. Nhờ vào các báo cáo này, SPA có thể quản lý và điều hành hiệu quả các hoạt động, đồng thời cải thiện trải nghiệm khách hàng và tối ưu hóa chiến lược kinh doanh.',
    highlight: [
      {
        id: 61,
        content: 'Hướng dẫn sử dụng',
        link: 'huong-dan-su-dung',
        children:[
          {
            id: 611,
            content: 'Thu chi',
            link: 'huong-dan-su-dung-trang-thu-chi',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'Nhân sự',
    link: 'nhan-su',
    image: 'https://res.cloudinary.com/dzh4pimvj/image/upload/v1717770595/cloud_riksef.jpg',
    description:'Quản lý nhân sự trong SPA bao gồm các tính năng chính như chấm công, tính lương, ứng lương, thêm nhân viên, quản lý hợp đồng lao động, khen thưởng, kỷ luật và tăng ca. Nhờ vào các tính năng này, SPA có thể tổ chức và quản lý nhân viên một cách hiệu quả, đảm bảo tuân thủ các quy trình pháp lý và chính sách nhân sự, từ đó nâng cao hiệu suất làm việc và tạo môi trường làm việc tích cực.',
    highlight: [
      {
        id: 71,
        content: 'Quản lý nhân sự',
        link: 'huong-dan-su-dung',
        children:[
          {
            id: 711,
            content: 'Chấm công',
            link: 'huong-dan-su-dung-trang-cham-cong',
          },
          {
            id: 712,
            content: 'Ứng lương',
            link: 'huong-dan-su-dung-trang-ung-luong',
          },
          {
            id: 713,
            content: 'Nhân viên',
            link: 'huong-dan-su-dung-trang-nhan-vien',
          },
          {
            id: 714,
            content: 'Hợp đồng lao động',
            link: 'huong-dan-su-dung-trang-hop-dong-lao-dong',
          },
          {
            id: 715,
            content: 'Bảo hiểm',
            link: 'huong-dan-su-dung-trang-bao-hiem',
          },
          {
            id: 716,
            content: 'Bảng phân công',
            link: 'huong-dan-su-dung-trang-bang-phan-cong',
          },
          {
            id: 717,
            content: 'Nghỉ phép',
            link: 'huong-dan-su-dung-trang-nghi-phep',
          },
          {
            id: 718,
            content: 'Khen thưởng kỷ luật',
            link: 'huong-dan-su-dung-trang-khen-thuong-ky-luat',
          },
          {
            id: 719,
            content: 'Tăng ca',
            link: 'huong-dan-su-dung-trang-tang-ca',
          },
        ],
      },
      {
        id: 72,
        content: 'Cấu hình nhân sự',
        link: 'huong-dan-su-dung-trang-cau-hinh-nhan-su',
        children:[
          {
            id: 721,
            content: 'Phòng ban',
            link: 'huong-dan-su-dung-trang-phong-ban',
          },
          {
            id: 722,
            content: 'Chức vụ',
            link: 'huong-dan-su-dung-trang-chuc-vu',
          },
          {
            id: 723,
            content: 'Tiền lương',
            link: 'huong-dan-su-dung-trang-tien-luong',
          },
          {
            id: 724,
            content: 'Đi trễ về sớm',
            link: 'huong-dan-su-dung-trang-di-tre-ve-som',
          },
          {
            id: 725,
            content: 'Thời gian làm việc',
            link: 'huong-dan-su-dung-trang-thoi-gian-lam-viec',
          },
          {
            id: 726,
            content: 'Nghỉ phép',
            link: 'huong-dan-su-dung-trang-cau-hinh-nghi-phep',
          },
          {
            id: 727,
            content: 'Lương ngày lễ',
            link: 'huong-dan-su-dung-trang-luong-ngay-le',
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: 'Người dùng',
    link: 'nguoi-dung',
    image:'https://res.cloudinary.com/dzh4pimvj/image/upload/v1717770595/cloud_riksef.jpg',
    description:'Bao gồm việc tạo, duy trì và kiểm soát các tài khoản người dùng trong hệ thống, bao gồm cả việc thiết lập quyền truy cập và phân quyền sử dụng tài nguyên. Quản lý tài khoản người dùng đảm bảo rằng chỉ những người được ủy quyền mới có thể truy cập vào các dữ liệu và ứng dụng quan trọng, giúp bảo vệ thông tin nhạy cảm và giảm thiểu rủi ro bảo mật.',
    highlight: [
      {
        id: 81,
        content: 'Hướng dẫn sử dụng',
        link: '#',
        children:[
          {
            id: 811,
            content: 'Tài khoản',
            link: 'huong-dan-su-dung-trang-tai-khoan',
          },
          {
            id: 812,
            content: 'Nhóm quyền',
            link: 'huong-dan-su-dung-trang-nhom-quyen',
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: 'Quản trị',
    link: 'quan-tri',
    image:'https://res.cloudinary.com/dzh4pimvj/image/upload/v1717770595/cloud_riksef.jpg',
    description:'Chức năng quản trị bao gồm việc quản lý chi nhánh, tích điểm khách hàng, quản lý voucher khuyến mãi, và kiểm soát truy cập hệ thống. Quản trị viên có thể xem nhật ký hoạt động của các tài khoản người dùng để đảm bảo an ninh và hiệu quả. Đồng thời, họ cũng có thể cấu hình trang web để tối ưu hóa trải nghiệm người dùng. Những chức năng này giúp duy trì và nâng cao hiệu quả hoạt động của hệ thống.',
    highlight: [
      {
        id: 91,
        content: 'Hướng dẫn sử dụng',
        link: '#',
        children:[
          {
            id: 911,
            content: 'Chi nhánh',
            link: 'huong-dan-su-dung-trang-chi-nhanh',
          },
          {
            id: 912,
            content: 'Tích điểm',
            link: 'huong-dan-su-dung-trang-tich-diem',
          },
          {
            id: 913,
            content: 'Voucher',
            link: 'huong-dan-su-dung-trang-voucher',
          },
          {
            id: 914,
            content: 'Chặn truy cập',
            link: 'huong-dan-su-dung-trang-chan-truy-cap',
          },
          {
            id: 915,
            content: 'Cấu hình',
            link: 'huong-dan-su-dung-trang-cau-hinh',
          },
        ],
      },
    ],
  },
];
