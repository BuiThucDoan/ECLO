import { ITopic } from '../common/types';
export const findAnswerSfit: ITopic[] = [
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
    description:'Trang Hóa đơn giúp quản lý các hóa đơn hội viên, hóa đơn bán hàng, hóa đơn bảo lưu, chuyển nhượng, sắp hết hạn và đã hết hạn. Chức năng này cho phép theo dõi tình trạng hóa đơn chi tiết, đảm bảo gia hạn kịp thời cho khách hàng và tránh gián đoạn việc tập luyện. Trang Hóa đơn giúp quản lý tài chính và duy trì sự hài lòng của khách hàng một cách hiệu quả.',
    highlight: [
          {
            id: 21,
            content: 'Quản lý hóa đơn',
            link: 'huong-dan',
            children: [
              {
                id: 211,
                content: 'Hóa đơn hội viên',
                link: 'huong-dan-su-dung-trang-hoa-don-hoi-vien',
              },
              {
                id: 212,
                content: 'Hóa đơn bán hàng',
                link: 'huong-dan-su-dung-trang-hoa-don-ban-hang',
              },
              {
                id: 213,
                content: 'Hóa đơn bảo lưu',
                link: 'huong-dan-su-dung-trang-hoa-don-bao-luu',
              },
              {
                id: 214,
                content: 'Hóa đơn chuyển nhượng',
                link: 'huong-dan-su-dung-trang-hoa-don-chuyen-nhuong',
              },
            ],      
          },
    ],
  },
  {
    id: 3,
    title: 'Sản phẩm',
    link: 'san-pham',
    image:'https://res.cloudinary.com/dzh4pimvj/image/upload/v1717770595/cloud_riksef.jpg',
    description:'Trang Sản phẩm giúp quản lý các sản phẩm trong phòng tập. Bạn có thể tạo và nhập sản phẩm mới, giúp việc quản lý trở nên dễ dàng và hiệu quả hơn. Trang này đảm bảo mọi thông tin về sản phẩm luôn được cập nhật và tổ chức một cách hợp lý.',
    highlight: [
      {
        id: 31,
        content: 'Quản lý kho hàng',
        link: 'huong-dan-su-dung-san-pham',
        children:[
          {
            id:310,
            content: 'Kho hàng',
            link: 'huong-dan-su-dung-trang-kho-hang',
          },
          {
            id: 311,
            content: 'Mua hàng',
            link: 'huong-dan-su-dung-trang-mua-hang',
          },
          {
            id: 312,
            content: 'Danh mục',
            link: 'huong-dan-su-dung-trang-danh-muc',
          },
          {
            id: 313,
            content: 'Nhà cung cấp',
            link: 'huong-dan-su-dung-trang-nha-cung-cap',
          },
          {
            id: 314,
            content: 'Đơn vị',
            link: 'huong-dan-su-dung-trang-don-vi',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Lịch tập',
    link: 'lich-tap',
    image:'https://res.cloudinary.com/dzh4pimvj/image/upload/v1717770595/cloud_riksef.jpg',
    description:'Trang Lịch tập giúp tạo và quản lý lịch tập luyện, cho phép bạn chỉnh sửa thông tin lịch tập dễ dàng. Chức năng điểm danh mỗi buổi tập bằng mã thẻ đảm bảo việc điểm danh nhanh chóng và chính xác, giúp quản lý sự tham gia của học viên hiệu quả hơn.',
    highlight: [
      {
        id: 41,
        content: 'Hướng dẫn sử dụng',
        link: 'huong-dan-su-dung-lich-tap',
        children:[
          {
            id:410,
            content: 'Thời khóa biểu',
            link: 'huong-dan-su-dung-trang-thoi-khoa-bieu',
          },
          {
            id: 411,
            content: 'Khung giờ',
            link: 'huong-dan-su-dung-trang-khung-gio',
          },
          {
            id: 412,
            content: 'Lớp học',
            link: 'huong-dan-su-dung-trang-lop-hoc',
          },
          {
            id: 413,
            content: 'Phòng học',
            link: 'huong-dan-su-dung-trang-phong-hoc',
          },
          {
            id: 414,
            content: 'Lịch tập',
            link: 'huong-dan-su-dung-trang-lich-tap',
          },
          {
            id: 415,
            content: 'Điểm danh',
            link: 'huong-dan-su-dung-trang-diem-danh',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Khách hàng',
    link: 'thiet-lap-khach-hang',
    image:'https://res.cloudinary.com/dzh4pimvj/image/upload/v1717770595/cloud_riksef.jpg',
    description:'Bao gồm việc thu thập, lưu trữ và phân tích thông tin khách hàng, từ lịch sử tập luyện. Bằng cách hiểu rõ nhu cầu và mong muốn của khách hàng, doanh nghiệp có thể cung cấp các sản phẩm và dịch vụ phù hợp, nâng cao trải nghiệm khách hàng và tăng cường sự hài lòng.',
    highlight: [
      {
        id: 51,
        content: 'Quản lý khách hàng',
        link: 'huong-dan-su-dung-thiet-lap-khach-hang',
        children:[
          {
            id:510,
            content: 'Khách hàng',
            link: 'huong-dan-su-dung-trang-khach-hang',
          },
          {
            id: 511,
            content: 'Sinh nhật khách hàng',
            link: 'huong-dan-su-dung-trang-sinh-nhat-khach-hang',
          },
          {
            id: 512,
            content: 'Loại khách hàng',
            link: 'huong-dan-su-dung-trang-loai-khach-hang',
          },
          {
            id: 513,
            content: 'Nguồn kênh',
            link: 'huong-dan-su-dung-trang-nguon-kenh',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Nhân sự',
    image: 'https://res.cloudinary.com/dzh4pimvj/image/upload/v1717770595/cloud_riksef.jpg',
    link: 'nhan-su',
    description:'Trang Nhân sự cung cấp các chức năng như chấm công, quản lý khen thưởng và kỷ luật, quản lý hoa hồng, và theo dõi ca làm việc của từng nhân viên. Trang này giúp quản lý hiệu quả các khía cạnh quan trọng của nhân sự, đảm bảo quy trình làm việc mượt mà và công bằng.',
    highlight: [
      {
            id: 61,
            content: 'Hướng dẫn sử dụng',
            link: 'huong-dan-su-dung-nhan-su',
            children: [
              {
                id: 611,
                content: 'Nhân viên',
                link: 'huong-dan-su-dung-trang-nhan-vien',
              },
              {
                id: 612,
                content: 'Khen thưởng kỷ luật',
                link: 'huong-dan-su-dung-trang-khen-thuong-ky-luat-nhan-su',
              },
              {
                id: 613,
                content: 'Nhóm hoa hồng',
                link: 'huong-dan-su-dung-trang-nhom-hoa-hong',
              },
              {
                id: 614,
                content: 'Nhóm doanh số',
                link: 'huong-dan-su-dung-trang-nhom-doanh-so',
              },
              {
                id: 615,
                content: 'Ca làm việc',
                link: 'huong-dan-su-dung-trang-ca-lam-viec',
              },
              {
                id: 616,
                content: 'Loại nhân viên',
                link: 'huong-dan-su-dung-trang-loai-nhan-vien',
              },
            ],
          },
    ],
  },
  {
    id: 7,
    title: 'Báo cáo',
    link: 'dich-vu',
    image: 'https://res.cloudinary.com/dzh4pimvj/image/upload/v1717770595/cloud_riksef.jpg',
    description:'Chức năng báo cáo cung cấp cái nhìn tổng quát và chi tiết về các hoạt động kinh doanh như thu chi, doanh thu, hoa hồng nhân viên, công nợ, xuất nhập tồn, và thống kê về dịch vụ, sản phẩm. Nhờ vào các báo cáo này, SFIT có thể quản lý và điều hành hiệu quả các hoạt động, đồng thời cải thiện trải nghiệm khách hàng và tối ưu hóa chiến lược kinh doanh',
    highlight: [
      {
        id: 71,
        content: 'Hướng dẫn sử dụng',
        link: 'huong-dan-su-dung-bao-cao',
        children:[
          {
            id: 711,
            content: 'Thu chi',
            link: 'huong-dan-su-dung-trang-thu-chi',
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
        link: 'huong-dan-su-dung-nguoi-dung',
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
    description:'Trang Quản trị cung cấp các chức năng quản lý dịch vụ, quảng cáo, nhật ký nhận diện, cấu hình hệ thống và thêm ngày nghỉ cho phòng tập. Trang này giúp quản trị viên kiểm soát và tối ưu hóa mọi hoạt động trong phòng tập, đảm bảo hiệu quả và tiện lợi cho cả khách hàng và nhân viên.',
    highlight: [
      {
        id: 91,
        content: 'Hướng dẫn sử dụng',
        link: '#',
        children:[
          {
            id: 911,
            content: 'Dịch vụ',
            link: 'huong-dan-su-dung-trang-dich-vu',
          },
          {
            id: 912,
            content: 'Đối tượng',
            link: 'huong-dan-su-dung-trang-doi-tuong',
          },
          {
            id: 913,
            content: 'Hình thức thanh toán',
            link: 'huong-dan-su-dung-trang-hinh-thuc-thanh-toan',
          },
          {
            id: 914,
            content: 'Ngừng hoạt động',
            link: 'huong-dan-su-dung-trang-ngung-hoat-dong',
          },
          {
            id: 915,
            content: 'Quảng cáo',
            link: 'huong-dan-su-dung-trang-quang-cao',
          },
          {
            id: 916,
            content: 'Chi nhánh',
            link: 'huong-dan-su-dung-trang-chi-nhanh',
          },
          {
            id: 917,
            content: 'Cấu hình âm thanh',
            link: 'huong-dan-su-dung-trang-cau-hinh-am-thanh',
          },
          {
            id: 918,
            content: 'Cấu hình',
            link: 'huong-dan-su-dung-trang-cau-hinh',
          },
        ],
      },
    ],
  },
];
