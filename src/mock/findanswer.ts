import { ITopic } from '../common/types';
export const findAnswer: ITopic[] = [
  {
    id: 1,
    title: 'Hóa đơn',
    link: 'hoa-don',
    image: 'https://res.cloudinary.com/dzh4pimvj/image/upload/v1719744031/Untitled51_szgmct.png',
    description:'Hóa đơn bán hàng là chứng từ quan trọng trong hoạt động kinh doanh, ghi nhận thông tin chi tiết về giao dịch mua bán giữa doanh nghiệp và khách hàng. Hóa đơn bao gồm các thông tin như tên sản phẩm, số lượng, đơn giá, tổng giá trị, thuế suất và các khoản chiết khấu nếu có. Hóa đơn bán hàng không chỉ là căn cứ để khách hàng thanh toán mà còn giúp doanh nghiệp theo dõi doanh thu, quản lý hàng tồn kho và thực hiện các nghĩa vụ thuế. Việc phát hành hóa đơn chính xác và kịp thời là yếu tố then chốt để duy trì sự tin tưởng và hài lòng của khách hàng.',
    highlight: [
          {
            id: 11,
            content: 'Hoạt động bán hàng',
            link: '#',
            children: [
              {
                id:110,
                content: 'Bán hàng',
                link: 'huong-dan-su-dung-trang-ban-hang',
              },
              {
                id: 111,
                content: 'Đơn hàng',
                link: 'huong-dan-su-dung-trang-don-hang',
              },
              {
                id: 112,
                content: 'Trả hàng',
                link: 'huong-dan-su-dung-trang-tra-hang',
              },
            ],      
          },
          {
            id: 22,
            content: 'Bảo hành & Hóa đơn đã hủy',
            link: 'cac-van-de-lien-quan-den-hoa-don',  
            children: [
              {
                id: 221,
                content: 'Bảo hành',
                link: 'huong-dan-su-dung-trang-bao-hanh',
              },
            ],     
          },
    ],
  },
  {
    id: 2,
    title: 'Kho hàng',
    link: 'kho-hang',
    description:'Trong quản lý bán vàng, các loại kho hàng đóng vai trò quan trọng trong việc lưu trữ và luân chuyển hàng hóa. Kho hàng sản phẩm lưu trữ các sản phẩm vàng hoàn thiện, sẵn sàng để bán ra thị trường. Kho chế tác là nơi diễn ra quá trình sản xuất và chế tác các sản phẩm vàng từ nguyên liệu thô. Kho gia công thực hiện các công đoạn gia công bổ sung như đánh bóng, khắc tên, và gắn đá quý. Kho mua hàng tiếp nhận và lưu trữ nguyên liệu vàng từ các nhà cung cấp, đảm bảo chuỗi cung ứng luôn được duy trì liên tục. Quản lý hiệu quả các kho hàng này giúp doanh nghiệp kinh doanh vàng duy trì chất lượng sản phẩm, đáp ứng nhanh chóng nhu cầu khách hàng, và tối ưu hóa quy trình sản xuất và bán hàng.',
    image:'https://res.cloudinary.com/dzh4pimvj/image/upload/v1719744206/Untitled51_sfg5lr.png',
    highlight: [
      {
        id: 21,
        content: 'Các kho của cửa hàng',
        link: '',
        children: [
          {
            id: 211,
            content: 'Kho sản phẩm',
            link: 'huong-dan-su-dung-trang-kho-san-pham',
          },
          {
            id: 212,
            content: 'Kho chế tác',
            link: 'Huong-dan-su-dung-trang-kho-che-tac',
          },
          {
            id: 213,
            content: 'Kho gia công',
            link: 'Huong-dan-su-dung-trang-kho-gia-cong',
          },
          {
            id: 214,
            content: 'Kho mua hàng',
            link: 'Huong-dan-su-dung-trang-kho-mua-hang',
          },
        ],
      },{
        id: 22,
        content: 'Quản lý các mục liên quan',
        link: 'cac-van-de-lien-quan-den-kho-hang',
        children: [
          {
            id: 221,
            content: 'Nhóm sản phẩm',
            link: 'Huong-dan-su-dung-trang-nhom-san-pham',
          },
          {
            id: 2222,
            content: 'Danh mục',
            link: 'Huong-dan-su-dung-trang-danh-muc',
          },
          {
            id: 223,
            content: 'Đơn vị',
            link: 'Huong-dan-su-dung-trang-don-vi',
          },
          {
            id: 224,
            content: 'Thương hiệu',
            link: 'Huong-dan-su-dung-trang-thuong-hieu',
          },
          {
            id: 225,
            content: 'Đề xuất mua hàng',
            link: 'Huong-dan-su-dung-trang-de-xuat-mua-hang',
          },
          {
            id: 224,
            content: 'Nhà cung cấp',
            link: 'Huong-dan-su-dung-trang-nha-cung-cap',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Quản lý tem',
    image: 'https://res.cloudinary.com/dzh4pimvj/image/upload/v1719744337/Untitled51_zpkqxa.png',
    link: 'huong-dan-su-dung-trang-tem',
    description:'Tem niêm phong hoặc tem bảo hành không chỉ giúp bảo đảm tính nguyên vẹn và chính hãng của sản phẩm mà còn cung cấp thông tin về nguồn gốc và đặc điểm sản phẩm. Quản lý tem bao gồm việc thiết kế, in ấn, phân phối và kiểm soát tem một cách chính xác và hiệu quả.',
    highlight: [
      {
            id: 31,
            content: 'Tem',
            link: '#',
            children: [
              {
                id: 311,
                content: 'Tem',
                link: 'huong-dan-su-dung-trang-tem',
              },
            ],
          },
        ],
  },
  {
    id: 4,
    title: 'Cấu hình cân',
    image: 'https://res.cloudinary.com/dzh4pimvj/image/upload/v1719744413/Untitled51_r6acpm.png',
    link: 'huong-dan-ket-noi-can',
    description:'Kết nối và cấu hình cân là bước quan trọng trong quy trình quản lý kho và bán hàng, đặc biệt với các ngành hàng yêu cầu độ chính xác cao như kinh doanh vàng và trang sức. Kết nối cân giúp tích hợp cân điện tử với hệ thống quản lý dữ liệu của doanh nghiệp, cho phép tự động cập nhật trọng lượng sản phẩm vào phần mềm quản lý kho và bán hàng. ',
    highlight: [
      {
            id: 41,
            content: 'Cân',
            link: '#',
            children: [
              {
                id: 411,
                content: 'Kết nối cân',
                link: 'huong-dan-ket-noi-can',
              },
              {
                id: 412,
                content: 'Cấu hình cân',
                link: 'huong-dan-cau-hinh-can',
              },
            ],
          },
        ],
  },
  {
    id: 5,
    title: 'Kế toán',
    link: 'ke-toan',
    image: 'https://res.cloudinary.com/dzh4pimvj/image/upload/v1719744568/Untitled51_tpdlps.png',
    description:'Quản lý thu chi là một phần không thể thiếu trong hoạt động kinh doanh, đảm bảo việc theo dõi và kiểm soát dòng tiền một cách hiệu quả. Quản lý thu chi bao gồm việc ghi nhận và giám sát tất cả các khoản thu nhập và chi phí của doanh nghiệp, từ việc bán hàng, thanh toán của khách hàng đến các khoản chi phí hoạt động, mua nguyên vật liệu .',
    highlight: [
      {
        id: 51,
        content: 'Quản lý thu chi',
        link: 'Gioi-thieu-trang-ke-toan',
        children: [
          {
            id: 511,
            content: 'Giới thiệu',
            link: 'gioi-thieu-trang-thu-chi',
          },
          {
            id: 512,
            content: 'Hướng dẫn sử dụng',
            link: 'huong-dan-su-dung-trang-thu-chi',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Quản lý khách hàng',
    link: 'thiet-lap-khach-hang',
    image:'https://res.cloudinary.com/dzh4pimvj/image/upload/v1719744700/Untitled51_nn1kck.png',
    description:'Bao gồm việc thu thập, lưu trữ và phân tích thông tin khách hàng, từ lịch sử mua hàng, sở thích, đến phản hồi và yêu cầu đặc biệt. Bằng cách hiểu rõ nhu cầu và mong muốn của khách hàng, doanh nghiệp có thể cung cấp các sản phẩm và dịch vụ phù hợp, nâng cao trải nghiệm khách hàng và tăng cường sự hài lòng.',
    highlight: [
      {
        id: 61,
        content: 'Quản lý khách hàng',
        link: 'huong-dan-su-dung-thiet-lap-khach-hang',
        children:[
          {
            id:610,
            content: 'Khách hàng',
            link: 'huong-dan-su-dung-trang-khach-hang',
          },
          {
            id: 611,
            content: 'Sinh nhật khách hàng',
            link: 'huong-dan-su-dung-trang-sinh-nhat-khach-hang',
          },
          {
            id: 612,
            content: 'Tổng quan khách hàng',
            link: 'huong-dan-su-dung-trang-tong-quan-khach-hang',
          },
          {
            id: 613,
            content: 'Thẻ khách hàng',
            link: 'huong-dan-su-dung-trang-the-khach-hang',
          },
          {
            id: 614,
            content: 'Loại khách hàng',
            link: 'huong-dan-su-dung-trang-loai-khach-hang',
          },
          {
            id: 615,
            content: 'Nhóm khách hàng',
            link: 'huong-dan-su-dung-trang-nhom-khach-hang',
          },
          {
            id: 616,
            content: 'Nguồn kênh',
            link: 'huong-dan-su-dung-trang-nguon-kenh',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'Quản lý tài khoản',
    link: 'nguoi-dung',
    image: 'https://res.cloudinary.com/dzh4pimvj/image/upload/v1720669869/Untitled66_mevidz.png',
    description:'Bao gồm việc tạo, duy trì và kiểm soát các tài khoản người dùng trong hệ thống, bao gồm cả việc thiết lập quyền truy cập và phân quyền sử dụng tài nguyên. Quản lý tài khoản người dùng đảm bảo rằng chỉ những người được ủy quyền mới có thể truy cập vào các dữ liệu và ứng dụng quan trọng, giúp bảo vệ thông tin nhạy cảm và giảm thiểu rủi ro bảo mật.',
    highlight: [
      {
        id: 71,
        content: 'Giới thiệu',
        link: 'gioi-thieu-trang-nguoi-dung',
        children:[
          {
            id: 711,
            content: 'Tài khoản',
            link: 'gioi-thieu-trang-tai-khoan',
          },
          {
            id: 712,
            content: 'Nhóm quyền',
            link: 'gioi-thieu-trang-nhom-quyen',
          },
        ],
      },
      {
        id: 72,
        content: 'Hướng dẫn sử dụng',
        link: 'huong-dan-su-dung-trang-nguoi-dung',
        children:[
          {
            id: 721,
            content: 'Tài khoản',
            link: 'huong-dan-su-dung-trang-tai-khoan',
          },
          {
            id: 722,
            content: 'Nhóm quyền',
            link: 'huong-dan-su-dung-trang-nhom-quyen',
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: 'Quản lý cửa hàng',
    link: 'cua-hang',
    image:'https://res.cloudinary.com/dzh4pimvj/image/upload/v1719745001/Untitled51_rbdwg9.png',
    description:'Quản lý cửa hàng không chỉ bao gồm tổ chức và điều hành hoạt động hàng ngày mà còn bao gồm các hoạt động như thêm mới, xóa bỏ hoặc điều chỉnh các cửa hàng để phù hợp với chiến lược phát triển. Việc thêm mới cửa hàng có thể mở rộng thị trường và đáp ứng nhu cầu khách hàng mới, trong khi xóa bỏ hoặc sửa đổi cửa hàng giúp tối ưu hóa hoạt động và nâng cao hiệu quả kinh doanh.',
    highlight: [
      {
        id: 81,
        content: 'Hướng dẫn sử dụng',
        link: 'huong-dan-su-dung-cua-hang',
        children:[
          {
            id: 811,
            content: 'Cửa hàng',
            link: 'huong-dan-su-dung-trang-cua-hang',
          },
          {
            id: 812,
            content: 'Kho hàng',
            link: 'huong-dan-su-dung-trang-kho-hang',
          },
          {
            id: 813,
            content: 'Loại cửa hàng',
            link: 'huong-dan-su-dung-trang-loai-cua-hang',
          },
          {
            id: 814,
            content: 'KPI',
            link: 'huong-dan-su-dung-trang-kpi',
          },
        ],
      },
      {
        id: 82,
        content: 'Giới thiệu',
        link: '#',
        children: [
          {
            id: 821,
            content: 'Trang chủ',
            link: 'gioi-thieu-trang-chu',
          },
          {
            id: 822,
            content: 'Dữ liệu',
            link: 'gioi-thieu-du-lieu',
          },
        ],
      },
      {
        id: 83,
        content: 'Tổng quan',
        link: '#',
        children: [
          {
            id: 831,
            content: 'Trang chủ',
            link: 'huong-dan-su-dung-trang-chu',
          },
          {
            id: 832,
            content: 'Dữ liệu',
            link: 'huong-dan-su-dung-trang-du-lieu',
          },

        ],
      },
    ],
  },
  {
    id: 9,
    title: 'Quản trị',
    link: 'quan-tri',
    image:'https://res.cloudinary.com/dzh4pimvj/image/upload/v1720669640/Untitled66_v6yiad.png',
    description:'Quản trị tích điểm tập trung vào việc quản lý và kiểm soát các thông tin nhận dạng của người dùng, đảm bảo chỉ những người được ủy quyền mới có thể truy cập vào hệ thống. Chặn truy cập xác định và quản lý quyền truy cập vào các dịch vụ và dữ liệu, giúp ngăn chặn các mối đe dọa bảo mật. Cấu hình hệ thống bao gồm thiết lập và quản lý các thông số kỹ thuật như cài đặt mạng, bảo mật hệ điều hành và ứng dụng, để đảm bảo hoạt động ổn định và an toàn của hệ thống',
    highlight: [
      {
        id: 91,
        content: 'Hướng dẫn sử dụng',
        link: 'noi-dung-1',
        children:[
          {
            id: 911,
            content: 'Nhân viên bán hàng',
            link: 'huong-dan-su-dung-trang-nhan-vien-ban-hang',
          },
          {
            id: 912,
            content: 'Thẻ quà tặng',
            link: 'huong-dan-su-dung-trang-the-qua-tang',
          },
          {
            id: 913,
            content: 'Tích điểm',
            link: 'huong-dan-su-dung-trang-tich-diem',
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
