import { ITopic } from '../common/types';
export const findAnswerERP: ITopic[] = [
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
    title: 'Công việc',
    link: 'cong-viec',
    image: 'https://res.cloudinary.com/dzh4pimvj/image/upload/v1717770595/cloud_riksef.jpg',
    description:'Trang Công việc giúp quản lý và theo dõi công việc hiệu quả. Trang cung cấp các chức năng như thống kê công việc, đánh giá, thêm công việc, cấu hình yêu cầu và mô tả chi tiết từng công việc. Với những tính năng này, việc quản lý nhân sự trở nên đơn giản và hiệu quả hơn.',
    highlight: [
          {
            id: 21,
            content: 'Hướng dẫn sử dụng',
            link: 'huong-dan',
            children: [
              {
                id: 211,
                content: 'Công việc',
                link: 'huong-dan-su-dung-trang-cong-viec',
              },
              {
                id: 212,
                content: 'Đánh giá công việc',
                link: 'huong-dan-su-dung-trang-danh-gia-cong-viec',
              },
              {
                id: 213,
                content: 'Mô tả công việc',
                link: 'huong-dan-su-dung-trang-mo-ta-cong-viec',
              },
              
            ],      
          },
          {
            id: 22,
            content: 'Cấu hình công việc',
            link: 'cau-hinh-cong-viec',
            children: [
              {
                id: 221,
                content: 'Cài đặt',
                link: 'huong-dan-su-dung-trang-cai-dat',
              },
              {
                id: 222,
                content: 'Quy tắc',
                link: 'huong-dan-su-dung-trang-quy-tac',
              },
              {
                id: 223,
                content: 'Tỷ trọng',
                link: 'huong-dan-su-dung-trang-ty-trong',
              },
              {
                id: 224,
                content: 'Nội dung quy tắc',
                link: 'huong-dan-su-dung-trang-noi-dung-quy-tac',
              },
              {
                id: 224,
                content: 'Quy trình công việc',
                link: 'huong-dan-su-dung-trang-quy-trinh-cong-viec',
              },
            ],
          },
    ],
  },
  {
    id: 3,
    title: 'Đề xuất',
    link: 'de-xuat',
    image:'https://res.cloudinary.com/dzh4pimvj/image/upload/v1717770595/cloud_riksef.jpg',
    description:'Trang Đề xuất cung cấp các công cụ để đề xuất ứng lương, nghỉ việc, tăng ca, và các đề xuất khác. Bạn có thể dễ dàng gửi đề xuất, xem thống kê về các đề xuất đã gửi và đang chờ xử lý, cũng như cấu hình các loại đề xuất theo nhu cầu của công ty. Chức năng này giúp cải thiện quy trình quản lý và đảm bảo mọi đề xuất được xử lý kịp thời và chính xác.',
    highlight: [
      {
        id: 31,
        content: 'Hướng dẫn sử dụng',
        link: 'huong-dan-su-dung-de-xuat',
        children:[
          {
            id:310,
            content: 'Đề xuất',
            link: 'huong-dan-su-dung-trang-de-xuat',
          },
        ],
      },
      {
        id: 32,
        content: 'Cấu hình đề xuất',
        link: 'huong-dan-su-dung-trang-cau-hinh-de-xuat',
        children:[
          {
            id:321,
            content: 'Hạng mục',
            link: 'huong-dan-su-dung-trang-cau-hinh-hang-muc',
          },
          {
            id:322,
            content: 'Hình thức',
            link: 'huong-dan-su-dung-trang-cau-hinh-hinh-thuc',
          },
          {
            id:323,
            content: 'Quy trình',
            link: 'huong-dan-su-dung-trang-cau-hinh-quy-trinh',
          },
          {
            id:324,
            content: 'Tiến trình',
            link: 'huong-dan-su-dung-trang-cau-hinh-tien-trinh',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Nhân sự',
    link: 'nhan-su',
    image: 'https://res.cloudinary.com/dzh4pimvj/image/upload/v1717770595/cloud_riksef.jpg',
    description:'Trang Nhân sự cung cấp một bộ công cụ toàn diện để quản lý các khía cạnh quan trọng của nhân sự. Chức năng quản lý chấm công giúp theo dõi giờ làm việc, trong khi chức năng lương và ứng lương đảm bảo việc thanh toán đúng hạn. Quản lý hợp đồng lao động và bảo hiểm giúp đảm bảo quyền lợi cho nhân viên. Trang này còn hỗ trợ phân công công việc, tăng ca, nhảy ca, và cấu hình nhân sự, giúp tối ưu hóa việc phân bổ nguồn lực và nâng cao hiệu quả công việc.',
    highlight: [
      {
        id: 41,
        content: 'Quản lý nhân sự',
        link: 'huong-dan-su-dung',
        children:[
          {
            id: 411,
            content: 'Chấm công',
            link: 'huong-dan-su-dung-trang-cham-cong',
          },
          {
            id: 412,
            content: 'Ứng lương',
            link: 'huong-dan-su-dung-trang-ung-luong',
          },
          {
            id: 413,
            content: 'Nhân viên',
            link: 'huong-dan-su-dung-trang-nhan-vien',
          },
          {
            id: 414,
            content: 'Hợp đồng lao động',
            link: 'huong-dan-su-dung-trang-hop-dong-lao-dong',
          },
          {
            id: 415,
            content: 'Bảo hiểm',
            link: 'huong-dan-su-dung-trang-bao-hiem',
          },
          {
            id: 416,
            content: 'Bảng phân công',
            link: 'huong-dan-su-dung-trang-bang-phan-cong',
          },
          {
            id: 417,
            content: 'Nghỉ phép',
            link: 'huong-dan-su-dung-trang-nghi-phep',
          },
          {
            id: 418,
            content: 'Khen thưởng kỷ luật',
            link: 'huong-dan-su-dung-trang-khen-thuong-ky-luat',
          },
          {
            id: 419,
            content: 'Tăng ca',
            link: 'huong-dan-su-dung-trang-tang-ca',
          },
          {
            id: 420,
            content: 'Nhảy ca',
            link: 'huong-dan-su-dung-trang-nhay-ca',
          },
        ],
      },
      {
        id: 42,
        content: 'Cấu hình nhân sự',
        link: 'huong-dan-su-dung-trang-cau-hinh-nhan-su',
        children:[
          {
            id: 421,
            content: 'Phòng ban',
            link: 'huong-dan-su-dung-trang-phong-ban',
          },
          {
            id: 422,
            content: 'Chức vụ',
            link: 'huong-dan-su-dung-trang-chuc-vu',
          },
          {
            id: 423,
            content: 'Tiền lương',
            link: 'huong-dan-su-dung-trang-tien-luong',
          },
          {
            id: 424,
            content: 'Đi trễ về sớm',
            link: 'huong-dan-su-dung-trang-di-tre-ve-som',
          },
          {
            id: 425,
            content: 'Thời gian làm việc',
            link: 'huong-dan-su-dung-trang-thoi-gian-lam-viec',
          },
          {
            id: 426,
            content: 'Nghỉ phép',
            link: 'huong-dan-su-dung-trang-cau-hinh-nghi-phep',
          },
          {
            id: 427,
            content: 'Lương ngày lễ',
            link: 'huong-dan-su-dung-trang-luong-ngay-le',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Người dùng',
    link: 'nguoi-dung',
    image:'https://res.cloudinary.com/dzh4pimvj/image/upload/v1717770595/cloud_riksef.jpg',
    description:'Bao gồm việc tạo, duy trì và kiểm soát các tài khoản người dùng trong hệ thống, bao gồm cả việc thiết lập quyền truy cập và phân quyền sử dụng tài nguyên. Quản lý tài khoản người dùng đảm bảo rằng chỉ những người được ủy quyền mới có thể truy cập vào các dữ liệu và ứng dụng quan trọng, giúp bảo vệ thông tin nhạy cảm và giảm thiểu rủi ro bảo mật.',
    highlight: [
      {
        id: 51,
        content: 'Hướng dẫn sử dụng',
        link: '#',
        children:[
          {
            id: 511,
            content: 'Tài khoản',
            link: 'huong-dan-su-dung-trang-tai-khoan',
          },
          {
            id: 512,
            content: 'Nhóm quyền',
            link: 'huong-dan-su-dung-trang-nhom-quyen',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Quản trị',
    link: 'quan-tri',
    image:'https://res.cloudinary.com/dzh4pimvj/image/upload/v1717770595/cloud_riksef.jpg',
    description:'Trang Quản trị cung cấp các chức năng quản lý khu vực, xem nhật ký nhận diện, quản lý chặn truy cập, cấu hình camera cho chấm công và cấu hình chung. Với những chức năng này, quản trị viên có thể kiểm soát và tối ưu hóa hoạt động của hệ thống một cách hiệu quả và bảo mật.',
    highlight: [
      {
        id: 61,
        content: 'Hướng dẫn sử dụng',
        link: '#',
        children:[
          {
            id: 611,
            content: 'Khu vực',
            link: 'huong-dan-su-dung-trang-khu-vuc',
          },
          {
            id: 612,
            content: 'Chặn truy cập',
            link: 'huong-dan-su-dung-trang-chan-truy-cap',
          },
          {
            id: 613,
            content: 'Cấu hình',
            link: 'huong-dan-su-dung-trang-cau-hinh',
          },
        ],
      },
    ],
  },
];
