import { ITopic } from '../common/types';
export const findAnswerSclo: ITopic[] = [
  {
    id: 1,
    title: 'Bắt đầu',
    image: 'https://res.cloudinary.com/dzh4pimvj/image/upload/v1720490169/Untitled61_oku4lg.png',
    link: 'bat-dau',
    description:'Sử dụng SCLO để xây dựng trang web và phát triển doanh nghiệp của bạn. Hãy khám phá các công cụ AI của chúng tôi để dễ dàng tạo trang web, tùy chỉnh các mẫu hoặc thuê chuyên gia nhằm nâng cao sự hiện diện trực tuyến của bạn.',
    highlight: [
      {
            id: 11,
            content: 'Giới thiệu',
            link: 'gioi-thieu',
            children: [
              {
                id: 111,
                content: 'Giới thiệu về SCLO',
                link: 'gioi-thieu',
              },
            ],
          },
          {
            id: 12,
            content: 'Hướng dẫn đăng ký',
            link: 'huong-dan',
            children: [
              {
                id: 121,
                content: 'Hướng dẫn đăng ký tài khoản trên SCLO',
                link: 'huong-dan',
              },
            ],
          },
          {
            id: 13,
            content: 'Đăng nhập SCLO',
            link: 'dang-nhap',
            children: [
              {
                id: 131,
                content: 'Hướng dẫn đăng nhập vào SCLO',
                link: 'dang-nhap',
              },
            ],
          },
    ],
  },
  {
    id: 2,
    title: 'Tạo tên miền',
    link: 'create-a-domain',
    image: 'https://res.cloudinary.com/dzh4pimvj/image/upload/v1720490557/Untitled61_bzg18g.png',
    description:'Hãy theo dõi hướng dẫn từng bước của chúng tôi để học cách mua, kết nối hoặc chuyển miền cho trang web của bạn, đồng thời khám phá các phương pháp bảo mật dữ liệu hiệu quả cho trang web của bạn.',
    highlight: [
          {
            id: 21,
            content: 'Hướng dẫn',
            link: 'tao-ten-mien',
            children: [
              {
                id: 211,
                content: 'Hướng dẫn tạo tên miền tại SCLO',
                link: 'tao-ten-mien',
              },
            ],      
          },
          {
            id: 22,
            content: 'Các chính sách bảo mật',
            link: 'bao-mat',  
            children: [
              {
                id: 221,
                content: 'Các chính sách bảo mật của SCLO',
                link: 'bao-mat',
              },
            ],     
          },
    ],
  },
  {
    id: 3,
    title: 'Quản lý',
    link: 'quan-ly',
    description:'Chào mừng bạn đến với hướng dẫn chi tiết về quản lý cấu trúc và dự án. Trong quá trình phát triển và duy trì dự án, việc quản lý cấu trúc và các thành phần bên trong là rất quan trọng để đảm bảo tính mạch lạc, hiệu quả và nhất quán. Bài viết này sẽ giới thiệu cụ thể các thao tác bạn có thể thực hiện để quản lý dự án, bao gồm thêm, chỉnh sửa và xóa các thành phần trong cấu trúc dự án của bạn.',
    image:'https://res.cloudinary.com/dzh4pimvj/image/upload/v1720490628/Untitled61_raxejw.png',
    highlight: [
      {
        id: 31,
        content: 'Dự án',
        link: 'quan-ly-du-an',
        children: [
          {
            id: 311,
            content: 'Xem dự án',
            link: 'xem-du-an',
          },
          {
            id: 312,
            content: 'Xóa dự án',
            link: 'xoa-du-an',
          },
          {
            id: 313,
            content: 'Sửa dự án',
            link: 'sua-du-an',
          },
        ],
      },{
        id: 32,
        content: 'Cấu trúc',
        link: 'quan-ly-cau-truc',
        children: [
          {
            id: 321,
            content: 'Thêm cấu trúc',
            link: 'them-cau-truc',
          },
          {
            id: 322,
            content: 'Xóa cấu trúc',
            link: 'xoa-cau-truc',
          },
          {
            id: 323,
            content: 'Sửa cấu trúc',
            link: 'sua-cau-truc',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Trợ lý AI',
    link: 'tro-ly-ai',
    image: 'https://res.cloudinary.com/dzh4pimvj/image/upload/v1720490723/Untitled61_vzyvsw.png',
    description:'Cung cấp nhiều tính năng hỗ trợ mạnh mẽ cho nhà thiết kế và doanh nghiệp, SCLO mang đến từ nguồn cảm hứng và đề xuất ý tưởng sáng tạo, viết nội dung và tối ưu hóa SEO, đến cá nhân hóa trải nghiệm người dùng và quản lý dự án hiệu quả. SCLO giúp bạn cộng tác một cách suôn sẻ và hiệu quả trong mọi khía cạnh của công việc.',
    highlight: [
      {
        id: 41,
        content: 'Lợi ích',
        link: 'loi-ich-AI',
        children: [
          {
            id: 411,
            content: 'Lợi ích của việc sử dụng trợ lý AI',
            link: 'loi-ich-AI',
          },
        ],
      },
      {
        id: 42,
        content: 'Hướng dẫn sử dụng',
        link: 'huong-dan-su-dung-AI',
        children:[
          {
            id: 421,
            content: 'Hướng dẫn sử dụng trợ lý AI trong thiết kế Website',
            link: 'huong-dan-su-dung-AI',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: '< HTML >',
    link: 'HTML',
    image: 'https://res.cloudinary.com/dzh4pimvj/image/upload/v1720490774/Untitled61_fovo4t.png',
    description:'Mang đến cho người dùng quyền kiểm soát toàn diện đối với giao diện và nội dung trang web. Với khả năng chỉnh sửa mã HTML trực tiếp, bạn có thể tùy chỉnh bố cục, thêm hoặc xóa nội dung, tích hợp các tính năng mới và khắc phục lỗi giao diện một cách dễ dàng.',
    highlight: [
      {
        id: 51,
        content: 'Giới thiệu',
        link: 'gioi-thieu-HTML',
        children:[
          {
            id: 511,
            content: 'Giới thiệu về HTML trong thiết kế Website',
            link: 'gioi-thieu-HTML',
          },
        ],
      },
      {
        id: 52,
        content: 'Hướng dẫn sử dụng',
        link: 'huong-dan-su-dung-HTML',
        children:[
          {
            id: 521,
            content: 'Hướng dẫn sử dụng chức năng chỉnh sửa bằng HTML trong thiết kế Website',
            link: 'huong-dan-su-dung-HTML',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Nhúng SVG',
    link: 'SVG',
    image:'https://res.cloudinary.com/dzh4pimvj/image/upload/v1720490869/Untitled61_dh4ngn.png',
    description:'Cho phép bạn dễ dàng thêm đồ họa vector vào trang web. Đồ họa vector được tạo thành từ các đường và điểm, giúp hình ảnh có thể được phóng to hoặc thu nhỏ đến bất kỳ kích thước nào mà không bị giảm chất lượng.',
    highlight: [
      {
        id: 61,
        content: 'Giới thiệu',
        link: 'gioi-thieu-SVG',
        children:[
          {
            id: 611,
            content: 'Giới thiệu về SVG trong thiết kế Website',
            link: 'gioi-thieu-SVG',
          },
        ],
      },
      {
        id: 62,
        content: 'Hướng dẫn sử dụng',
        link: 'huong-dan-su-dung-SVG',
        children:[
          {
            id: 621,
            content: 'Hướng dẫn sử dụng chức năng nhúng SVG vào Website',
            link: 'huong-dan-su-dung-SVG',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'Công cụ xem trước',
    link: 'cong-cu-xem-truoc',
    image: 'https://res.cloudinary.com/dzh4pimvj/image/upload/v1720490902/Untitled61_im4j8v.png',
    description:'Cho phép bạn mô phỏng giao diện website trên các thiết bị khác nhau như điện thoại thông minh, máy tính bảng, laptop và máy tính bàn. Điều này giúp đảm bảo trang web của bạn hiển thị hoàn hảo và thân thiện với người dùng trên mọi thiết bị.',
    highlight: [
      {
        id: 71,
        content: 'Mô tả',
        link: 'cac-cong-cu-xem-truoc',
        children:[
          {
            id: 711,
            content: 'Mô tả các công cụ xem trước trang web',
            link: 'cac-cong-cu-xem-truoc',
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: 'Điều chỉnh văn bản',
    link: 'van-ban',
    image:'https://res.cloudinary.com/dzh4pimvj/image/upload/v1720490964/Untitled61_yimn0x.png',
    description:'Sử dụng các công cụ điều chỉnh văn bản mang lại nhiều lợi ích như tiết kiệm thời gian, cải thiện chất lượng nội dung, tăng cường hiệu quả SEO và phát triển kỹ năng viết. Lựa chọn công cụ phù hợp giúp bạn tạo ra nội dung chất lượng, thu hút độc giả và đạt được các mục tiêu của bạn một cách hiệu quả.',
    highlight: [
      {
        id: 81,
        content: 'Mô tả',
        link: 'cc-van-ban',
        children:[
          {
            id: 811,
            content: 'Mô tả các công cụ chỉnh sửa văn bản',
            link: 'cc-van-ban',
          },
        ],
      },
    ],
  },
  {
    id: 9,
    title: 'Bố cục',
    link: 'bo-cuc',
    image:'https://res.cloudinary.com/dzh4pimvj/image/upload/v1720491016/Untitled61_vtc3bm.png',
    description:'Công cụ chỉnh sửa và thêm bố cục timeline editor cho trang web là một tiện ích mạnh mẽ giúp bạn tạo ra những dòng thời gian trực quan và sống động ngay trên website của mình.',
    highlight: [
      {
        id: 91,
        content: 'Mô tả',
        link: 'cc-bo-cuc',
        children:[
          {
            id: 911,
            content: 'Mô tả các công cụ điều chỉnh bố cục Website',
            link: 'cc-bo-cuc',
          },
        ],
      },
      {
        id: 92,
        content: 'Hướng dẫn sử dụng Timeline Editor', 
        link: 'timeline',
        children:[
          {
            id: 921,
            content: 'Hướng dẫn sử dụng công cụ Timeline Editor',
            link: 'timeline',
          },
        ],
      },
    ],
  },
];
