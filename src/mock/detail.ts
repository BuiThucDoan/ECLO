export const instructionDetail = [
    {
    id: 1,
    link: 'gioi-thieu-trang-chu',
    label: 'GIỚI THIỆU VỀ TRANG CHỦ',
    image:'https://res.cloudinary.com/dzh4pimvj/image/upload/v1718611144/Untitled_gych2u.png',
    description: `Trang chủ của hệ thống cung cấp các chức năng mạnh mẽ để theo dõi và phân tích hoạt động kinh doanh. Người dùng có thể xem thông báo doanh thu theo ngày, tuần, và tháng với biểu tượng mũi tên chỉ sự tăng hoặc giảm doanh thu. Biểu đồ cột trực quan hóa số lượng đơn hàng theo năm và cho phép tùy chỉnh thời gian hiển thị. Hệ thống hỗ trợ tải biểu đồ dưới dạng file SVG, PNG, CSV. Ngoài ra, chức năng sắp xếp cửa hàng bán chạy nhất dựa trên tổng số hóa đơn và lọc theo năm để kiểm tra KPI với tỷ lệ phần trăm đạt được giúp người dùng đánh giá hiệu suất kinh doanh một cách toàn diện và hiệu quả.`,
    steps: [
      {
        id: 11,
        label: 'I. NỘI DUNG',
        description: `<b>Doanh thu hôm nay</b>
        \nCung cấp thông tin cập nhật về biến động doanh thu trong ngày. Khi doanh thu tăng so với ngày trước, một mũi tên hướng lên trên sẽ xuất hiện cùng với số % tăng thêm, giúp người dùng dễ dàng nhận biết mức tăng trưởng. Ngược lại, nếu doanh thu giảm, một mũi tên hướng xuống sẽ hiển thị cùng với số % giảm, cho phép người dùng nắm bắt nhanh chóng tình hình doanh thu giảm sút. Chức năng này hỗ trợ doanh nghiệp theo dõi hiệu quả hoạt động kinh doanh hàng ngày và đưa ra các quyết định kịp thời dựa trên biến động doanh thu.
        \n<b>Doanh thu hôm qua</b>
        \nCung cấp thông tin cập nhật về biến động doanh thu của ngày trước. Khi doanh thu tăng so với hai ngày trước, một mũi tên hướng lên trên sẽ xuất hiện cùng với số % tăng thêm, giúp người dùng dễ dàng nhận biết mức tăng trưởng. Ngược lại, nếu doanh thu giảm, một mũi tên hướng xuống sẽ hiển thị cùng với số % giảm, cho phép người dùng nắm bắt nhanh chóng tình hình doanh thu giảm sút. Chức năng này hỗ trợ doanh nghiệp theo dõi hiệu quả hoạt động kinh doanh hàng ngày và đưa ra các quyết định kịp thời dựa trên biến động doanh thu.
        \n<b>Doanh thu tuần</b>
        \nCung cấp thông tin cập nhật về biến động doanh thu trong tuần vừa qua. Khi doanh thu tăng so với tuần trước, một mũi tên hướng lên trên sẽ xuất hiện cùng với số tiền tăng thêm, giúp người dùng dễ dàng nhận biết mức tăng trưởng. Ngược lại, nếu doanh thu giảm, một mũi tên hướng xuống sẽ hiển thị cùng với số tiền giảm, cho phép người dùng nắm bắt nhanh chóng tình hình doanh thu giảm sút. Chức năng này hỗ trợ doanh nghiệp theo dõi hiệu quả hoạt động kinh doanh hàng tuần và đưa ra các quyết định kịp thời dựa trên biến động doanh thu.
        \n<b>Doanh thu tháng</b>
        \nCung cấp thông tin cập nhật về biến động doanh thu trong tháng vừa qua. Khi doanh thu tăng so với tháng trước, một mũi tên hướng lên trên sẽ xuất hiện cùng với số % tăng thêm, giúp người dùng dễ dàng nhận biết mức tăng trưởng. Ngược lại, nếu doanh thu giảm, một mũi tên hướng xuống sẽ hiển thị cùng với số % giảm, cho phép người dùng nắm bắt nhanh chóng tình hình doanh thu giảm sút. Chức năng này hỗ trợ doanh nghiệp theo dõi hiệu quả hoạt động kinh doanh hàng tháng và đưa ra các quyết định kịp thời dựa trên biến động doanh thu.
        \n<b>Biểu đồ cột dùng để trực quan hóa Doanh thu bán hàng</b>
        \nCung cấp một cách nhìn tổng quan và trực quan về biến động doanh thu qua các năm. Biểu đồ cột này được thiết kế với hai trục chính: trục X và trục Y. Trục X hiển thị số tiền doanh thu, giúp người dùng dễ dàng nhận biết và so sánh mức doanh thu theo từng khoảng thời gian mà người dùng lựa chọn. Trục Y thể hiện thời gian, cụ thể là các năm, và có khả năng lọc theo yêu cầu của người dùng, cho phép họ tập trung vào các khoảng thời gian cụ thể mà họ quan tâm. Nhờ vào biểu đồ này, doanh nghiệp có thể dễ dàng theo dõi xu hướng doanh thu theo thời gian, nhận diện các giai đoạn tăng trưởng hoặc suy giảm, và đưa ra các quyết định kinh doanh dựa trên dữ liệu một cách hiệu quả hơn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718676383/Untitled26_ryg69i.png' alt='Trang chủ'>
        \n<b>Biểu đồ cột dùng để trực quan hóa Số lượng đơn hàng</b>
        \nCung cấp một cái nhìn rõ ràng và trực quan về biến động số lượng đơn hàng qua các khoản thời gian mà người dùng lựa chọn. Biểu đồ này sử dụng hai trục chính: trục X và trục Y. Trục X hiển thị số lượng đơn hàng, cho phép người dùng dễ dàng so sánh số lượng đơn hàng theo các điều kiện lọc. Trục Y thể hiện thời gian và có khả năng lọc theo yêu cầu của người dùng, giúp họ tập trung vào các khoảng thời gian cụ thể mà họ quan tâm. Thông qua biểu đồ này, doanh nghiệp có thể theo dõi xu hướng đơn hàng theo thời gian, nhận diện các giai đoạn tăng trưởng hoặc suy giảm về số lượng đơn hàng, và đưa ra các quyết định kinh doanh dựa trên dữ liệu một cách hiệu quả hơn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718676513/Untitled27_secliu.png' alt='Trang chủ'>
        \n<b>Tải file SVG, PNG, CSV</b>
        \nCung cấp cho người dùng khả năng lưu trữ và xem lại biểu đồ cột đã được lọc theo yêu cầu. Người dùng có thể xuất biểu đồ dưới dạng file SVG hoặc PNG để có thể xem hình ảnh chất lượng cao của biểu đồ bất cứ khi nào, ngay cả khi không có kết nối Internet. Ngoài ra, chức năng tải file CSV cho phép người dùng lưu trữ dữ liệu thô của biểu đồ, dễ dàng tích hợp vào các công cụ phân tích hoặc bảng tính khác để phân tích chi tiết hơn. Chức năng này giúp người dùng linh hoạt trong việc lưu trữ, chia sẻ và phân tích dữ liệu, đảm bảo họ có thể sử dụng thông tin một cách hiệu quả và thuận tiện nhất.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718618792/Screenshot_2024-06-17_170326_t2vzu9.png' alt='Trang chủ'
        \n<b>Lọc theo điều kiện</b>
        \nCho phép người dùng tùy chỉnh khoảng thời gian hiển thị biểu đồ một cách linh hoạt và chính xác theo yêu cầu. Người dùng có thể chọn các khoảng thời gian cố định như: Hôm nay, Hôm qua, 7 ngày trước, 30 ngày trước, Trong tháng, Tháng trước, hoặc tùy chỉnh phạm vi thời gian theo ý muốn. Khi áp dụng bộ lọc này, biểu đồ sẽ tự động cập nhật để hiển thị dữ liệu tương ứng với khoảng thời gian đã chọn. Tính năng này giúp người dùng dễ dàng theo dõi và phân tích dữ liệu trong các khung thời gian cụ thể, từ những khoảng thời gian ngắn hạn đến dài hạn, đáp ứng tốt nhu cầu theo dõi xu hướng và biến động của dữ liệu theo thời gian. Điều này hỗ trợ việc ra quyết định kinh doanh một cách hiệu quả, dựa trên thông tin chi tiết và phù hợp với từng giai đoạn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718675882/Untitled25_e8nhsc.png' alt='Trang chủ'>
        \n<b>Xếp hạng cửa hàng</b>
        \nCho phép người dùng xem danh sách các cửa hàng được xếp hạng dựa trên tổng số hóa đơn bán ra. Hệ thống sẽ tự động tổng hợp và hiển thị thông tin xếp hạng, bao gồm tên cửa hàng và tổng số hóa đơn tương ứng. Người dùng có thể dễ dàng nhận biết những cửa hàng có hiệu suất bán hàng cao nhất, nhờ vào bảng xếp hạng trực quan này. Tính năng này không chỉ giúp quản lý theo dõi hiệu quả hoạt động của từng cửa hàng mà còn hỗ trợ trong việc đưa ra các quyết định kinh doanh, chiến lược khuyến mãi và phân bổ nguồn lực hợp lý.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718676815/Untitled28_rgce0q.png' alt='Trang chủ'>
        \n<b>Lọc theo năm</b>
        \nBổ sung cho người dùng khả năng xem và đánh giá KPI (Key Performance Indicator - Chỉ số hiệu suất chính) của từng cửa hàng trong các năm khác nhau. Người dùng có thể chọn năm cụ thể để xem KPI của cửa hàng và tỷ lệ phần trăm KPI đã đạt được so với mục tiêu. Chức năng này giúp người dùng hiểu rõ hơn về thành tích và khả năng đáp ứng mục tiêu của cửa hàng qua từng năm, từ đó hỗ trợ trong việc đưa ra các chiến lược cải tiến và điều chỉnh để nâng cao hiệu quả kinh doanh.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718676737/Untitled28_xrv1ch.png' alt='Trang chủ'>`
      },
      {
        id: 12,
        label: 'II. TỔNG KẾT',
        description: `Trang chủ của hệ thống là công cụ đắc lực hỗ trợ người dùng trong việc theo dõi và phân tích hoạt động kinh doanh một cách toàn diện. Với các chức năng thông báo doanh thu theo ngày, tuần, và tháng, người dùng có thể dễ dàng nhận biết sự tăng giảm doanh thu. Biểu đồ cột trực quan hóa số lượng đơn hàng theo năm, cùng khả năng tùy chỉnh thời gian hiển thị và tải biểu đồ dưới dạng file SVG, PNG, CSV, giúp người dùng linh hoạt trong việc lưu trữ và phân tích dữ liệu. Chức năng sắp xếp cửa hàng bán chạy nhất dựa trên tổng số hóa đơn và lọc theo năm để kiểm tra KPI với tỷ lệ phần trăm đạt được, mang đến cái nhìn rõ ràng về hiệu suất kinh doanh. Tất cả các tính năng này kết hợp lại, giúp người dùng đưa ra các quyết định chiến lược một cách hiệu quả và chính xác.`,
      },
    ],
  },
  {
    id: 2,
    link: 'huong-dan-su-dung-trang-chu',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG CHỦ',
    steps: [
      {
        id: 21,
        label: '1. Tải file SVG, PNG, CSV',
        description: `Chức năng "Tải file SVG, PNG, CSV" trong hệ thống của chúng tôi cung cấp cho người dùng khả năng lưu trữ và xem lại biểu đồ cột đã được lọc theo yêu cầu. Dưới đây là hướng dẫn chi tiết để bạn có thể sử dụng chức năng này một cách dễ dàng và hiệu quả.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718788852/Untitled37_ksejg7.png' alt='Hướng dẫn tải biểu đồ'>
        \n<b>Bước 1:</b> Chọn dấu <b>☰</b>
        \nMở biểu đồ bạn muốn lưu trữ.
        \nChọn vào dấu ☰ nằm ở góc trên bên phải của biểu đồ. Đây là biểu tượng mở rộng các tùy chọn lưu trữ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718789048/Untitled37_pzbyul.png' alt='Hướng dẫn tải biểu đồ'>
        \n<b>Bước 2:</b> Chọn định dạng lưu trữ
        \nSau khi nhấp vào dấu ☰, hệ thống sẽ hiển thị ba lựa chọn cho bạn:
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>SVG:</b> Lưu biểu đồ dưới dạng file SVG.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>CSV:</b> Lưu dữ liệu thô của biểu đồ dưới dạng file CSV.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>PNG:</b> Lưu biểu đồ dưới dạng file PNG.
        \n<b>Bước 3:</b> Lựa chọn định dạng mong muốn
        \n&nbsp;Chọn định dạng bạn mong muốn:
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>SVG</b>: Nếu bạn muốn lưu biểu đồ dưới dạng file ảnh vector chất lượng cao.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>CSV:</b> Nếu bạn muốn lưu trữ dữ liệu thô của biểu đồ để dễ dàng tích hợp vào các công cụ phân tích hoặc bảng tính khác.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>PNG:</b> Nếu bạn muốn lưu biểu đồ dưới dạng file ảnh chất lượng cao.
        \n&nbsp;Nhấp vào định dạng mong muốn và hệ thống sẽ tự động tải file về máy của bạn.
        \n<b>Bước 4:</b> Kiểm tra file đã tải
        \nMở thư mục tải xuống trên máy tính của bạn để kiểm tra file đã tải.
        \nXác minh rằng file được lưu trữ đúng định dạng mà bạn đã chọn và kiểm tra chất lượng file.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718789753/Untitled37_yhgudp.png' alt='Hướng dẫn tải biểu đồ'>`
      },
      {
        id: 22,
        label: '2. Lọc theo điều kiện',
        description: `<b>Bước 1:</b> Di chuyển đến ô lựa chọn ngày<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718848601/Untitled38_adztyi.png' alt='Hướng dẫn chọn ngày để lọc biểu đồ'>
        \n<b>Bước 2:</b> Lựa chọn khoảng thời gian mong muốn
        \nSau khi mở giao diện lựa chọn ngày, bạn sẽ thấy các tùy chọn sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Hôm nay:</b> Hiển thị dữ liệu và biểu đồ cột cho ngày hiện tại.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Hôm qua:</b> Hiển thị dữ liệu và biểu đồ cột cho ngày hôm qua.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>7 ngày trước:</b> Hiển thị dữ liệu và biểu đồ cột cho 7 ngày gần đây nhất.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>30 ngày trước:</b> Hiển thị dữ liệu và biểu đồ cột cho 30 ngày gần đây nhất.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Trong tháng:</b> Hiển thị dữ liệu và biểu đồ cột cho toàn bộ tháng hiện tại.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Tháng trước:</b> Hiển thị dữ liệu và biểu đồ cột cho toàn bộ tháng trước.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Phạm vi tùy chỉnh:</b> Cho phép bạn tự chọn khoảng thời gian cụ thể theo nhu cầu.
        \n<b>Bước 3:</b> Chọn khoảng thời gian
        \nNhấp vào tùy chọn mong muốn. Ví dụ:
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chọn "Hôm nay" để xem dữ liệu của ngày hiện tại.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chọn "7 ngày trước" để xem dữ liệu của 7 ngày gần đây.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chọn "Phạm vi tùy chỉnh" nếu bạn muốn chỉ định một khoảng thời gian cụ thể.
        \nNếu bạn chọn <b>"Phạm vi tùy chỉnh"</b>, một cửa sổ sẽ xuất hiện cho phép bạn chọn ngày bắt đầu và ngày kết thúc. Chọn ngày mong muốn và nhấp vào <b>"Áp dụng"</b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718849493/Untitled38_a0tqok.png' alt='Hướng dẫn chọn ngày để lọc biểu đồ'>
        \n<b>Bước 4:</b> Hiển thị biểu đồ cột
        \nSau khi chọn khoảng thời gian, hệ thống sẽ tự động cập nhật và hiển thị biểu đồ cột tương ứng với dữ liệu trong khoảng thời gian bạn đã chọn.
        \nBạn có thể xem, phân tích và so sánh các dữ liệu được hiển thị để có cái nhìn tổng quan về xu hướng và hiệu suất trong khoảng thời gian đã chọn.`,
      },
      {
        id: 23,
        label: '3. Chức năng tìm kiếm theo năm',
        description: `Chức năng này giúp người dùng dễ dàng theo dõi và phân tích hiệu suất của cửa hàng qua các năm. Khi bạn lựa chọn năm mong muốn, hệ thống sẽ hiển thị thông tin chi tiết về cửa hàng và biểu đồ tròn minh họa. Đồng thời, hệ thống cũng hiển thị phần trăm KPI đạt được, giúp bạn nắm bắt rõ ràng hiệu quả hoạt động của cửa hàng trong năm đó. Dưới đây là các bước hướng dẫn chi tiết:
        \n<b>Bước 1:</b> Truy cập giao diện tìm kiếm theo năm<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718850171/Untitled39_atkzqw.png' alt='Hướng dẫn chức năng lọc thông tin theo năm'>
        \n<b>Bước 2:</b> Chọn năm mong muốn
        \nNhấp vào ô chọn năm. Một danh sách các năm sẽ xuất hiện.
        \nChọn năm mà bạn muốn xem dữ liệu. Ví dụ, chọn "2024" để xem dữ liệu của năm 2024.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718850352/Untitled39_jt1nsv.png' alt='Hướng dẫn chức năng lọc thông tin theo năm'>
        \n<b>Bước 3:</b> Hiển thị thông tin
        \nSau khi chọn năm, hệ thống sẽ tự động cập nhật và hiển thị thông tin chi tiết về cửa hàng cho năm đó. 
        \nThông tin bao gồm các chỉ số quan trọng và số liệu hoạt động.
        \nBiểu đồ tròn sẽ xuất hiện, minh họa phân bố các chỉ số hoặc số liệu quan trọng theo tỷ lệ phần trăm.
        \n<b>Bước 4:</b> Xem % KPI đạt được
        \nBên cạnh thông tin cửa hàng và biểu đồ tròn, hệ thống cũng sẽ hiển thị phần trăm KPI đạt được trong năm bạn đã chọn. Bạn có thể xem và phân tích các KPI để đánh giá hiệu suất của cửa hàng. Thông tin này giúp bạn nhận biết được mức độ hoàn thành mục tiêu và các lĩnh vực cần cải thiện.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718850660/Untitled40_yhh5v5.png' alt='Hướng dẫn chức năng lọc thông tin theo năm'>`,
      },
    ],
  },
  {
    id: 3,
    link: 'gioi-thieu-du-lieu',
    label: 'GIỚI THIỆU VỀ TRANG DỮ LIỆU',
    image:'https://res.cloudinary.com/dzh4pimvj/image/upload/v1718683248/Untitled29_boe9q0.png',
    steps: [
      {
        id: 31,
        label: 'I. CÁC THÀNH PHẦN TRONG TRANG DỮ LIỆU',
        description: `<b>1. Trang chủ</b>
        <br/>Cung cấp cái nhìn tổng quan về tất cả dữ liệu mà người dùng đã tải lên. Đây là điểm khởi đầu giúp người dùng dễ dàng điều hướng đến các phần cụ thể như dữ liệu tải lên, tài liệu, media, mục quan trọng và thùng rác. Trang chủ cung cấp các liên kết nhanh và thông tin tóm tắt để người dùng nhanh chóng truy cập và quản lý dữ liệu của mình.
        <br/><b>2. Dữ liệu</b>
        <br/>Chứa tất cả các tập tin và dữ liệu mà người dùng đã tải lên hệ thống. Người dùng có thể tìm kiếm, sắp xếp, và quản lý các tệp dữ liệu quan trọng cho công việc phân tích và báo cáo. Đây là kho lưu trữ chính giúp người dùng truy cập dễ dàng và tổ chức dữ liệu một cách hiệu quả.
        <br/><b>3. Tài liệu</b>
        <br/>Lưu trữ các file văn bản, báo cáo, và hướng dẫn quan trọng. Người dùng có thể lưu trữ, sắp xếp và truy cập các tài liệu này để sử dụng trong công việc hàng ngày. Đây là nơi tập trung các tài liệu cần thiết cho việc tham khảo và triển khai các nhiệm vụ quan trọng, đảm bảo tính sẵn sàng và an toàn của thông tin.
        <br/><b>4. Media</b>
        <br/>Lưu trữ tất cả các tệp đa phương tiện như hình ảnh, video và âm thanh. Người dùng có thể tải lên, sắp xếp và sử dụng các tệp đa phương tiện này trong các dự án, báo cáo hoặc bài thuyết trình. Đây là nơi tập trung các nội dung trực quan hỗ trợ truyền tải thông tin một cách sinh động và hiệu quả.
        <br/><b>5. Quan trọng</b>
        <br/>Lưu trữ các tệp và tài liệu được đánh dấu là quan trọng bởi người dùng. Đây là nơi dễ dàng truy cập những thông tin và dữ liệu cần thiết và ưu tiên, đảm bảo người dùng không bỏ lỡ bất kỳ thông tin quan trọng nào trong công việc hàng ngày. Người dùng có thể tập trung vào các tài liệu này để thực hiện các nhiệm vụ quan trọng và khẩn cấp.
        <br/><b>6. Thùng rác</b>
        <br/>Chứa tất cả các tệp và tài liệu đã bị xóa. Người dùng có thể khôi phục lại các tệp và tài liệu này nếu cần hoặc xóa vĩnh viễn để giải phóng không gian lưu trữ. Đây là nơi đảm bảo rằng không có thông tin nào bị mất một cách vô tình và người dùng có thể quản lý việc xóa dữ liệu một cách an toàn và có kiểm soát.<br/>`,
      },
      {
        id: 32,
        label: 'II. TỔNG KẾT',
        description: `Dựa vào các thành phần trong trang dữ liệu của hệ thống, người dùng được cung cấp một cơ sở hoàn chỉnh để quản lý và sử dụng thông tin một cách hiệu quả. Trang chủ cung cấp cái nhìn tổng quan và điều hướng nhanh đến các phần quan trọng như dữ liệu đã tải lên, tài liệu, media, mục quan trọng và thùng rác. Kho dữ liệu là nơi lưu trữ chính để tổ chức và quản lý các tệp quan trọng, trong khi tài liệu và media cung cấp khả năng lưu trữ và sử dụng các nội dung đa phương tiện. Các mục quan trọng và thùng rác đảm bảo tính an toàn và sẵn sàng của dữ liệu, cùng với khả năng khôi phục và quản lý dữ liệu đã xóa một cách hiệu quả. Hệ thống này giúp người dùng duy trì và sử dụng thông tin một cách có tổ chức và tiết kiệm thời gian, đồng thời bảo vệ dữ liệu quan trọng của họ.`
      },
    ],
  },
  {
    id: 4,
    link: 'gioi-thieu-ban-hang',
    label: 'GIỚI THIỆU VỀ TRANG BÁN HÀNG',
    description: `Hệ thống quản lý bán vàng mang đến những tính năng chuyên nghiệp giúp tối ưu hóa quy trình bán hàng và nâng cao hiệu quả kinh doanh. Với các công cụ hiện đại và tính năng thông minh, hệ thống này không chỉ đơn giản hóa việc quản lý mà còn giúp doanh nghiệp dễ dàng theo dõi, phân tích và điều chỉnh hoạt động kinh doanh một cách linh hoạt và hiệu quả.`,

    steps: [
      {
        id: 41,
        label: '1. Chọn sản phẩm',
        description: `<img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718771872/Untitled31_ficbec.png' alt='Trang bán hàng'>
        \nTính năng này được thiết kế để người dùng có thể dễ dàng tìm kiếm và lựa chọn sản phẩm từ nhiều tiêu chí khác nhau như nhóm sản phẩm, danh mục, nhà cung cấp hoặc xem tất cả các sản phẩm có sẵn. Hệ thống cung cấp đầy đủ thông tin về từng sản phẩm như mã sản phẩm, tên sản phẩm, trọng lượng, đơn giá, tiền công và các thông tin khác liên quan. Điều này giúp người bán có thể dễ dàng nắm bắt thông tin chi tiết về sản phẩm trước khi tiến hành bán cho khách hàng, đảm bảo tính chính xác và hiệu quả trong quá trình kinh doanh.`,
      },
      {
        id: 42,
        label:'2. Thêm thông tin bán hàng',
        description: `<img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718772401/Untitled32_szqn9u.png' alt='Trang bán hàng'>
        \nTính năng thêm thông tin bán hàng trong hệ thống quản lý bán vàng cho phép người dùng lựa chọn nhân viên bán hàng và ghi chú các thông tin liên quan đến giao dịch. Điều này giúp người bán có thể theo dõi hiệu quả bán hàng của từng nhân viên và lưu ý các yêu cầu đặc biệt từ khách hàng một cách chi tiết và chính xác. Các thông tin ghi chú bao gồm các yêu cầu đặc biệt của khách hàng như loại vàng mong muốn, số lượng, hoặc các điều khoản giao dịch đặc biệt khác, giúp tăng cường quản lý và tối ưu hóa trải nghiệm mua sắm của khách hàng.`,
      },
      {
        id: 43,
        label:'3. Tự động tính toán trọng lượng và giá bán',
        description: ` <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718779023/Untitled32_h6551a.png' alt='Trang bán hàng'>
        \nTính năng tự động tính toán trọng lượng và giá bán trong hệ thống quản lý bán vàng làm việc với cân điện tử để đo lấy số liệu trọng lượng vàng một cách chính xác. Hệ thống sẽ tự động tính toán giá bán dựa trên giá vàng hiện tại và trọng lượng vàng đã đo, giúp tiết kiệm thời gian và giảm thiểu sai sót trong quá trình thanh toán. Điều này đảm bảo tính chính xác và minh bạch trong các giao dịch mua bán vàng, đồng thời nâng cao hiệu quả và sự hài lòng của khách hàng.`,
      },
      {
        id: 44,
        label:'4. Quản lý khách hàng',
        description: `<img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718779834/Untitled33_cfjz9j.png' alt='Trang bán hàng'>
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.1. Tìm kiếm khách hàng có sẵn<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718780126/Untitled35_pk85n1.png' alt='Trang bán hàng'>
        \nTính năng này cho phép người dùng lựa chọn khách hàng từ danh sách có sẵn. Tính năng này giúp người bán dễ dàng truy cập thông tin chi tiết của khách hàng, bao gồm loại khách hàng, thông tin liên lạc và các ghi chú đặc biệt. Điều này không chỉ tăng cường khả năng chăm sóc khách hàng mà còn giúp tạo dựng mối quan hệ bền vững và cá nhân hóa dịch vụ, từ đó nâng cao trải nghiệm mua sắm và sự hài lòng của khách hàng.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.2. Thêm khách hàng mới<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718780721/Untitled35_eitzta.png' alt='Trang bán hàng'>
        \nHoặc thêm khách hàng mới nếu họ chưa có trong danh sách. Các thông tin khách hàng được quản lý bao gồm các cột: Loại khách hàng, Nhóm khách hàng, Họ tên, Giới tính, Ngày sinh, Điện thoại, Nguồn kênh, Trạng thái, Email, Địa chỉ, Tỉnh/Thành phố, Quận/Huyện, Phường/Xã, Facebook, và Ghi chú. Tính năng này giúp người bán dễ dàng quản lý và truy cập thông tin chi tiết của khách hàng, từ đó nâng cao khả năng chăm sóc khách hàng và cá nhân hóa dịch vụ, tạo dựng mối quan hệ bền vững và tăng cường trải nghiệm mua sắm.`,
      },
      {
        id: 45,
        label:'5. Tra cứu đơn hàng',
        description: ` <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718782252/Untitled35_rvtqhp.png' alt='Trang bán hàng'>
        \nTại giao diện trang Bán hàng, người dùng có thể tra cứu đơn hàng đã đặt, giúp dễ dàng theo dõi tình trạng đơn hàng với các thông tin chi tiết như thời gian đặt hàng, thông tin sản phẩm đã mua, số lượng, giá bán, địa chỉ giao hàng và thông tin thanh toán. Ngoài ra, trong một số trường hợp, người dùng có thể hủy đơn hàng nếu không còn nhu cầu mua sản phẩm hoặc in hóa đơn khi cần thiết. Tính năng này mang lại sự thuận tiện và linh hoạt, giúp người bán và khách hàng quản lý các giao dịch một cách hiệu quả và minh bạch.`,
      },
      {
        id: 46,
        label:'6. Các mục còn lại',
        description: ` <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718783735/Untitled36_nwj63o.png' alt='Trang bán hàng'>
        \n<b>Thẻ quà tặng</b> là công cụ cho phép khách hàng sử dụng như một phương thức thanh toán, giảm trừ số tiền tương ứng từ tổng giá trị hóa đơn. Thẻ này khuyến khích khách hàng quay lại mua sắm và mang lại sự linh hoạt trong thanh toán.
        \n<b>Phụ thu</b> là khoản phí bổ sung thêm vào hóa đơn để bù đắp cho các chi phí phát sinh, chẳng hạn như dịch vụ chế tác đặc biệt. Khoản phụ thu này được tính toán và thêm vào tổng giá trị hóa đơn, đảm bảo tính chính xác và đầy đủ của chi phí.
        \n<b>Giảm trừ</b> bao gồm các khoản giảm giá hoặc khuyến mại áp dụng trực tiếp vào hóa đơn, như các chương trình khuyến mại hoặc mã giảm giá. Điều này giúp giảm chi phí mua sắm cho khách hàng và thúc đẩy doanh số bán hàng, tạo ra các cơ hội kinh doanh hấp dẫn.
        \n<b>Phí vận chuyển</b> là chi phí để giao sản phẩm đến địa chỉ của khách hàng. Hệ thống sẽ tự động tính toán và hiển thị phí này trong tổng giá trị hóa đơn, giúp khách hàng nắm rõ chi phí liên quan đến vận chuyển trước khi xác nhận thanh toán. Điều này mang lại sự minh bạch và rõ ràng, giúp khách hàng có trải nghiệm mua sắm tốt hơn.`,
      },
    ],
  },
  {
    id: 5,
    link: 'gioi-thieu-khach-hang',
    label: 'GIỚI THIỆU VỀ TRANG KHÁCH HÀNG',
    description: `Trang quản lý khách hàng trong hệ thống của chúng tôi được thiết kế để cung cấp một giao diện trực quan và tiện lợi, cho phép người dùng quản lý thông tin khách hàng một cách hiệu quả. Trên trang này, người dùng có thể thực hiện các thao tác sau:`,
    steps: [
      {
        id: 51,
        label: '1. Tìm kiếm khách hàng',
        description: `Người dùng có thể dễ dàng tìm kiếm khách hàng thông qua các tiêu chí như tên, loại khách hàng, nhóm khách hàng và nhiều thông tin khác. Tính năng tìm kiếm nhanh chóng giúp bạn truy cập ngay vào hồ sơ cần thiết.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718852093/Untitled40_huuzo7.png' alt='Giao diện tìm kiếm khách hàng'>`,
      },
      {
        id: 52,
        label: '2. Thêm mới khách hàng',
        description: `Người dùng có thể thêm khách hàng mới vào hệ thống bằng cách nhập các thông tin như: loại khách hàng, nhóm khách hàng, họ & tên, ngày sinh, giới tính, điện thoại, nguồn kênh, trạng thái, email, địa chỉ, tỉnh thành, quận/huyện, phường/xã và các chi tiết quan trọng khác. Việc thêm mới khách hàng giúp duy trì cơ sở dữ liệu luôn được cập nhật..<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718852388/Untitled40_cbhxux.png' alt='Giao diện thêm khách hàng'>`,
      },
      {
        id: 53,
        label: '3. Xem thông tin khách hàng',
        description: `Người dùng có thể xem chi tiết thông tin của từng khách hàng đã được lưu trữ. Điều này giúp bạn dễ dàng theo dõi và quản lý các giao dịch cũng như lịch sử tương tác với khách hàng.<br/>
         <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718852605/Untitled40_vlg7lg.png' alt='Giao diện xem thông tin khách hàng'>`,
      },
      {
        id: 54,
        label: '4. Sửa thông tin khách hàng',
        description: `Khi có sự thay đổi hoặc cần cập nhật thông tin, người dùng có thể chỉnh sửa các chi tiết của khách hàng. Tính năng này đảm bảo thông tin khách hàng luôn chính xác và đầy đủ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718852798/Untitled40_vnqyiq.png' alt='Giao diện sửa thông tin khách hàng'>`,
      },
      {
        id: 55,
        label: '4. Xóa khách hàng',
        description: `Trong trường hợp khách hàng không còn liên quan hoặc cần loại bỏ khỏi cơ sở dữ liệu, người dùng có thể xóa hồ sơ khách hàng. Điều này giúp duy trì danh sách khách hàng gọn gàng và có tổ chức.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718853057/Untitled40_mxp8sh.png' alt='Giao diện xóa khách hàng'>`,
      },
    ],
  },
  {
    id: 6,
    link: 'huong-dan-su-dung-trang-du-lieu',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG DỮ LIỆU',
    description: `Chào mừng bạn đến với bài viết hướng dẫn sử dụng trang dữ liệu của chúng tôi! Trong bài viết này, chúng tôi sẽ cung cấp các hướng dẫn chi tiết để bạn có thể dễ dàng quản lý và thao tác với các thư mục và tệp tin trong hệ thống. Dưới đây là những nội dung chính mà bạn sẽ tìm thấy trong hướng dẫn này:`,
    steps: [
      {
        id: 61,
        label: 'I. THÊM MỚI',
        description: `Chức năng này cho phép bạn thêm thư mục mới hoặc tải tệp lên hệ thống một cách dễ dàng.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718853994/Untitled40_kggkfy.png' alt='Trang dữ liệu'> 
        Để sử dụng chức năng này, bạn có thể làm theo các bước sau:
        \n<b>1. Thêm thư mục</b>
        \n• Đầu tiên, chọn "Thêm thư mục" từ menu Thêm mới.
        \n• Hệ thống sẽ hiển thị một form yêu cầu bạn nhập thông tin. Bạn cần nhập Tên và Ghi chú cho thư mục mới.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718854119/Untitled40_grsxo7.png' alt='Giao diện thêm thư mục mới'>
        \n• Sau khi điền đầy đủ thông tin, nhấn <b>"Hoàn tất"</b> để hoàn thành việc thêm thư mục. Hệ thống sẽ hiển thị thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b> và lưu thư mục vào cơ sở dữ liệu (CSDL).<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718854260/Untitled40_au6gpd.png' alt='Giao diện thông báo thêm thư mục mới thành công'>
        \n• Nếu bạn chọn "Hủy", hệ thống sẽ trở về trang Dữ liệu mà không lưu lại bất kỳ thay đổi nào.
        \n<b>2. Tải tệp lên</b>
        \n• Chọn "Tải tệp lên" từ menu Thêm mới.
        \n• Hệ thống sẽ hiển thị một form yêu cầu bạn chọn tệp cần tải lên.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718854376/Untitled40_m39tld.png' alt='Giao diện chọn tệp tải lên'>
        \n• Chọn tệp từ thiết bị của bạn và nhấn "Hoàn tất" để hoàn thành việc tải tệp lên. Hệ thống sẽ hiển thị thông báo "Cập nhật thành công".<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718854504/Untitled40_ozpobp.png' alt='Giao diện chọn tệp tải lên và thông báo tải tệp lên thành công'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn "Hủy", hệ thống sẽ quay lại trang Dữ liệu mà không lưu lại bất kỳ thay đổi nào.</div>`,
      },
      {
        id: 62,
        label: 'II. QUẢN LÝ THƯ MỤC',
        description: `Chức năng này cho phép bạn quản lý thư mục một cách dễ dàng và hiệu quả.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718769678/Untitled31_ri1bmv.png' alt='Quản lý thư mục'>
        \nĐể thực hiện các thao tác với thư mục, hãy làm theo các bước sau:
        \n<b>1. Truy cập thư mục</b>
        \nTìm đến thư mục bạn muốn thao tác trong danh sách các thư mục hiện có.
        \nNhấp vào "dấu ba chấm" ở bên cạnh thư mục đó để hiển thị các tùy chọn.
        \n<b>2. Thực hiện các thao tác:</b>
        \n• <b>Xem:</b> Chọn "Xem" để mở và xem nội dung chi tiết của thư mục.
        \n• <b>Sửa:</b> Chọn "Sửa" để chỉnh sửa thông tin của thư mục, chẳng hạn như tên và ghi chú. Sau khi chỉnh sửa, nhấn "Hoàn tất" để lưu thay đổi.
        \n• <b>Xóa:</b> Chọn "Xóa" để xóa thư mục khỏi hệ thống. Hệ thống sẽ yêu cầu xác nhận trước khi xóa để đảm bảo bạn không xóa nhầm thư mục quan trọng.
        \n<b>2.1. Chức năng "Xem"</b><br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718855136/Untitled40_usnqaz.png' alt='Xem thư mục'>
        \nChọn "Xem" để mở và xem tất cả thông tin chi tiết về thư mục. Tại đây, bạn có thể thực hiện các thao tác sau:
        \n<b>Tải tệp lên:</b> Chọn "Tải tệp lên" để thêm các tệp mới vào thư mục. Hệ thống sẽ hiển thị form để bạn chọn tệp từ thiết bị và tải lên.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718855424/Untitled40_luxknb.png' alt='Xem thư mục-> Thêm tệp mới'>
        \n<b>Quản lý tệp:</b> Đối với các tệp đã tải lên, bạn có các tùy chọn sau:<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718855665/Untitled40_d2wa0d.png' alt='Quản lý tệp'>
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ Chọn <b>"Xem"</b> để mở và xem thông tin chi tiết về tệp đó. Tại đây, bạn có thể tải tệp về thiết bị của mình.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718855819/Untitled40_ppfrfi.png' alt='Tải tệp về máy tính cá nhân'>
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ Chọn <b>"Sửa"</b> để chỉnh sửa thông tin của tệp. Hệ thống sẽ hiển thị tên tệp ban đầu mà bạn đã thiết lập, bạn có thể chỉnh sửa tên tệp theo mong muốn và nhấn "Hoàn tất" để lưu thay đổi.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718855943/Untitled40_d4qcen.png' alt='Sửa thông tin tệp'>
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ Chọn <b>"Xóa"</b> để xóa tệp khỏi thư mục. Hệ thống sẽ hiển thị thông báo "Bạn có muốn xóa?". Nếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ hiển thị thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b> và xóa tệp khỏi cơ sở dữ liệu (CSDL).<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718856081/Untitled40_tqxgm5.png' alt='Xóa tệp'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn "Hủy", hệ thống sẽ trở lại trang trước đó mà không có bất kỳ thay đổi nào.</div>
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>2.2. Chức năng "Sửa"</b>
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Để sử dụng chức năng "Sửa thông tin thư mục", bạn có thể làm theo các bước sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Truy cập chức năng Sửa:
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tìm đến thư mục bạn muốn chỉnh sửa trong danh sách các thư mục hiện có.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nhấp vào <b>"..."</b> ở bên cạnh thư mục đó để hiển thị các tùy chọn.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chọn "Sửa" từ danh sách các tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718856316/Untitled40_njt5mi.png' alt='Sửa thư mục'>
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Chỉnh sửa thông tin thư mục:
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hệ thống sẽ hiển thị form thông tin hiện tại của thư mục bao gồm Tên và Ghi chú.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718856451/Untitled40_akmshr.png' alt='Giao diện sửa thư mục'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thực hiện chỉnh sửa các thông tin theo mong muốn của bạn.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Lưu thay đổi:
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sau khi chỉnh sửa xong, nhấn nút "Hoàn tất" để lưu thông tin mới.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hệ thống sẽ hiển thị thông báo "Cập nhật thành công" và lưu thông tin mới vào cơ sở dữ liệu (CSDL).<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718856637/Untitled40_ym6spb.png' alt='Sửa thư mục thành công'>
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Hủy bỏ thay đổi:
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nếu bạn không muốn lưu thay đổi, nhấn nút "Hủy".
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hệ thống sẽ quay lại trang trước đó mà không thực hiện bất kỳ thay đổi nào.
        \n<b>2.3. Chức năng "Xóa"</b>
        \nKhi khách hàng chọn chức năng "Xóa thư mục".<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718857097/Untitled40_jfhn96.png' alt='Xóa dữ liệu'>
        \nHệ thống sẽ hiển thị thông báo xác nhận: "Bạn có muốn xóa?"<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718857354/Untitled40_jb4odk.png' alt='Xóa dữ liệu'>
        \nNếu người dùng lựa chọn <b>"Đồng ý"</b>, hệ thống sẽ hiển thị thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b> và tiến hành xóa thư mục khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718857439/Untitled40_eutoc1.png' alt='Xóa dữ liệu'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Ngược lại, nếu người dùng bấm "Hủy", hệ thống sẽ trở lại trang danh sách thư mục mà không thực hiện bất kỳ thay đổi nào.</div>`,
      },
      {
        id: 63,
        label: 'III. QUẢN LÝ TỆP TIN',
        description: `Chức năng này cho phép bạn quản lý tệp tin một cách dễ dàng và hiệu quả.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718857807/Untitled40_efpi3o.png' alt='Quản lý thư mục'>
        \nĐể thực hiện các thao tác với tệp tin, hãy làm theo các bước sau:
        \n<b>1. Truy cập tệp tin</b>
        \nTìm đến tệp tin bạn muốn thao tác trong danh sách các tệp tin hiện có.
        \nNhấp vào <b>"..."</b> ở bên cạnh thư mục đó để hiển thị các tùy chọn.
        \n<b>2. Thực hiện các thao tác:</b>
        \n• <b>Xem:</b> Chọn "Xem" để mở và xem nội dung chi tiết của tệp tin.
        \n• <b>Sửa:</b> Chọn "Sửa" để chỉnh sửa thông tin của tệp tin, chẳng hạn như tên và ghi chú. Sau khi chỉnh sửa, nhấn "Hoàn tất" để lưu thay đổi.
        \n• <b>Xóa:</b> Chọn "Xóa" để xóa tệp tin khỏi hệ thống. Hệ thống sẽ yêu cầu xác nhận trước khi xóa để đảm bảo bạn không xóa nhầm tệp tin quan trọng.
        \n<b>2.1. Chức năng "Xem"</b><br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718858396/Untitled40_mmrcl2.png' alt='Xem thư mục'>
        \nChọn "Xem" để mở và xem tất cả thông tin chi tiết về tệp tin. Tại đây, bạn có thể tải tệp về thiết bị của mình.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718855819/Untitled40_ppfrfi.png' alt='Tải tệp về máy tính cá nhân'>
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>2.2. Chức năng "Sửa"</b>
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Để sử dụng chức năng "Sửa tên tệp", bạn có thể làm theo các bước sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Truy cập chức năng Sửa:
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tìm đến tệp tin bạn muốn chỉnh sửa trong danh sách các tệp tin hiện có.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nhấp vào <b>"..."</b> ở bên cạnh tệp tin đó để hiển thị các tùy chọn.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chọn "Sửa" từ danh sách các tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718858914/Untitled40_wtt1na.png' alt='Sửa tệp tin'>
        \n2. Chỉnh sửa tên tệp:
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hệ thống sẽ hiển thị Tên tệp ban đầu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718855943/Untitled40_d4qcen.png' alt='Giao diện sửa tên tệp'>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thực hiện chỉnh sửa tên tệp theo mong muốn của bạn.
        \n3. Lưu thay đổi:
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sau khi chỉnh sửa xong, nhấn nút <b>"Hoàn tất"</b> để lưu thông tin mới.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hệ thống sẽ hiển thị thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b> và lưu thông tin mới vào cơ sở dữ liệu (CSDL).<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718859238/Untitled40_pmaqob.png' alt='Sửa tên tệp thành công'>
        \n4. Hủy bỏ thay đổi:
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nếu bạn không muốn lưu thay đổi, nhấn nút <b>"Hủy"</b>.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hệ thống sẽ quay lại trang trước đó mà không thực hiện bất kỳ thay đổi nào.
        \n<b>2.3. Chức năng "Xóa"</b>
        \nKhi khách hàng chọn chức năng "Xóa".<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718859559/Untitled40_ksaflu.png' alt='Xóa tệp tin'>
        Hệ thống sẽ hiển thị thông báo xác nhận: "Bạn có muốn xóa?"<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718859655/Untitled40_c89yvy.png' alt='Xóa tệp tin'>
        Nếu người dùng lựa chọn <b>"Đồng ý"</b>, hệ thống sẽ hiển thị thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b> và tiến hành xóa thư mục khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718857439/Untitled40_eutoc1.png' alt='Xóa dữ liệu'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Ngược lại, nếu người dùng bấm <b>"Hủy"</b>, hệ thống sẽ trở lại trang danh sách thư mục mà không thực hiện bất kỳ thay đổi nào.</div>`,
      },
    ],
  },
  {
    id: 7,
    link: 'huong-dan-su-dung-trang-ban-hang',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG BÁN HÀNG',
    description: `<iframe width="100%" height="400" src="https://www.youtube.com/embed/swSwagImShk?start=12" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    steps: [
      {
        id: 71,
        label: '1. Bán hàng',
        description: `<b>Bước 1:</b> Chọn sản phẩm
        \nĐể bắt đầu, truy cập vào danh sách sản phẩm để xem tất cả các mặt hàng hiện có trong cửa hàng. Bạn có thể dễ dàng lọc sản phẩm theo nhóm sản phẩm, danh mục hoặc nhà cung cấp để nhanh chóng tìm thấy sản phẩm mong muốn. Sau đó, chọn một hoặc nhiều sản phẩm từ danh sách để thêm vào đơn hàng của bạn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718865700/Untitled40_nixkgt.png' alt='Chọn sản phẩm'>
        <div style='text-align:center;color:green'>Giao diện tất cả sản phẩm</div>
        \nNếu sản phẩm có số lượng không đủ trong kho, hệ thống sẽ tự động hiển thị thông báo <b>"Số lượng không đủ"</b> để bạn có thể cân nhắc và điều chỉnh đơn hàng phù hợp. Điều này giúp đảm bảo rằng bạn luôn nắm bắt được tình trạng hàng hóa và có thể quản lý đơn hàng một cách hiệu quả nhất.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718866643/Untitled40_m3jfsi.png' alt='Chọn sản phẩm'>
        <div style='text-align:center;color:green'>Hệ thống thông báo số lượng không đủ</div>
        \n<b>Bước 2:</b> Chọn khách hàng
        \nBạn có thể chọn khách hàng từ danh sách có sẵn hoặc thêm thông tin khách hàng mới.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718867106/Untitled40_zjmjjj.png' alt='Chọn khách hàng'>
        <div style='text-align:center;color:green'>Chọn khách hàng có sẵn</div>
        Hoặc thêm khách hàng mới. Để thực hiện thao tác này, bạn nhấn vào biểu tượng dấu cộng <b>+</b> ở góc phải màn hình. Tại đây, nhập các thông tin cần thiết như họ tên, số điện thoại, địa chỉ email và các thông tin liên quan khác. Quá trình này đảm bảo rằng thông tin khách hàng được lưu trữ đầy đủ và chính xác trong hệ thống, giúp bạn quản lý và theo dõi khách hàng một cách hiệu quả.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718867561/Untitled40_cbuyhx.png' alt='Thêm khách hàng mới'>
        <div style='text-align:center;color:green'>Giao diện thêm khách hàng mới</div>
        \n<b>Bước 3:</b> Nhập các khuyến mãi (nếu có)
        \nSau khi đã chọn sản phẩm và xác định khách hàng, bạn có thể tiến hành tạo hóa đơn cho đơn hàng. Tại bước này, bạn có thể nhập các mã giảm giá, sử dụng thẻ quà tặng hoặc thêm phí phụ thu nếu có áp dụng. Trước khi xác nhận thanh toán cuối cùng, hãy đảm bảo rằng tất cả các khuyến mãi và phụ thu đã được áp dụng chính xác.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719739098/Untitled51_poh9ae.png' alt='Nhập các khuyến mãi'>
        <div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Hệ thống hỗ trợ nhiều phương thức thanh toán như tiền mặt, thẻ VISA, VNPay (thanh toán qua cổng thanh toán điện tử), và COD (thanh toán khi nhận hàng), mang lại sự linh hoạt và tiện lợi tối đa cho khách hàng.</div>
        \n<b>Bước 4:</b> Thanh toán
        \nSau khi đã xem xét đầy đủ thông tin sản phẩm, giá cả và chi tiết đơn hàng, hãy chọn tùy chọn thanh toán. Hệ thống sẽ hiển thị một thông báo xác nhận để đảm bảo rằng bạn muốn tiếp tục thanh toán. Nếu bạn đồng ý, hệ thống sẽ thông báo thành công và gợi ý in đơn hàng để lưu trữ hoặc giải quyết các vấn đề liên quan sau này. Bạn có thể lựa chọn không in nếu không cần bản giấy của đơn hàng. Sau khi đã kiểm tra và đảm bảo rằng tất cả thông tin chi tiết đều chính xác, bạn hoàn tất quá trình thanh toán bằng cách chọn xác nhận hoặc đồng ý. Hệ thống sẽ tiến hành xử lý thanh toán và cập nhật trạng thái của đơn hàng, đảm bảo mọi thứ diễn ra suôn sẻ và nhanh chóng.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719739329/Untitled51_l2eo3i.png' alt='Xem hóa đơn'>`,
      },
      {
        id: 72,
        label: '2. Đổi hàng',
        description: `<b>Bước 1:</b> Chọn sản phẩm
        \nĐầu tiên, truy cập vào danh sách sản phẩm để hiển thị tất cả các mặt hàng có sẵn trong cửa hàng. Bạn có thể tìm kiếm sản phẩm theo nhóm sản phẩm, danh mục và nhà cung cấp để dễ dàng định vị sản phẩm cần đổi. Sau khi xác định được sản phẩm mong muốn, chọn một hoặc nhiều sản phẩm từ danh sách này để thêm vào đơn hàng đổi hàng. Việc lựa chọn sản phẩm chính xác giúp đảm bảo quá trình đổi hàng diễn ra suôn sẻ và hiệu quả.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718869739/Untitled40_si5wqv.png' alt='Đổi hàng'>
        \n<b>Bước 2:</b> Chọn đổi hàng
        \nSau khi đã chọn sản phẩm cần đổi từ danh sách sản phẩm, bạn chọn nút <b>Đổi hàng</b>. Tại bước này, hệ thống sẽ yêu cầu bạn nhập thông tin chi tiết như trọng lượng cũ và trọng lượng hiện tại của sản phẩm. Dựa trên các thông tin này, hệ thống sẽ tự động tính toán số tiền mà khách hàng cần bù thêm hoặc nhận lại (nếu có). Việc nhập chính xác các thông tin về trọng lượng giúp đảm bảo tính chính xác trong việc đổi hàng và tính toán giá trị chênh lệch<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718870248/Untitled40_yrzbof.png' alt='Nhập số gram vàng còn lại'>
        <div style='text-align:center;color:green'>Lỗi logic</div>
        \n<b>Bước 3:</b> Chọn khách hàng
        \nTiếp theo, bạn chọn khách hàng từ danh sách khách hàng có sẵn hoặc thêm thông tin khách hàng mới.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718870988/Untitled40_vblcpe.png' alt='Chọn khách hàng'>
        \nHoặc thêm khách hàng mới, để thực hiện chức năng này, nhấn vào biểu tượng dấu cộng (+) ở góc phải màn hình. Sau đó, nhập các thông tin cần thiết như họ tên, số điện thoại, địa chỉ email và các thông tin liên quan khác. Điều này đảm bảo rằng dữ liệu khách hàng được cập nhật đầy đủ và chính xác, giúp bạn dễ dàng quản lý và theo dõi lịch sử giao dịch của khách hàng một cách hiệu quả.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718867561/Untitled40_cbuyhx.png' alt='Thêm khách hàng'>
        <b>Bước 4:</b> Thanh toán
        \nSau khi đã xem xét đầy đủ các thông tin về sản phẩm, giá cả và chi tiết đơn hàng, chọn <b>Thanh Toán</b>. Hệ thống sẽ hiển thị một thông báo xác nhận để đảm bảo rằng bạn muốn tiếp tục với thanh toán.
        \nNếu bạn đồng ý thanh toán, hệ thống sẽ thông báo thành công và gợi ý cho bạn in đơn hàng để lưu trữ hoặc để giải quyết các vấn đề liên quan sau này. Bạn có thể lựa chọn không in nếu không cần bản giấy của đơn hàng.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718872023/Untitled40_zdqk93.png' alt='In hóa đơn'>
        \nSau khi đã kiểm tra và đảm bảo rằng tất cả các thông tin chi tiết đều chính xác, bạn có thể hoàn tất quá trình thanh toán bằng cách chọn <b>Đồng ý</b>. Hệ thống sẽ tiến hành xử lý thanh toán và cập nhật trạng thái của đơn hàng, đảm bảo mọi thứ diễn ra suôn sẻ và nhanh chóng.`,
      },
    ],
  },
  {
    id: 8,
    link: 'huong-dan-su-dung-trang-khach-hang',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG KHÁCH HÀNG',
    description: `Bài viết này sẽ hướng dẫn bạn sử dụng các chức năng trên trang Khách hàng một cách hiệu quả và thuận tiện. Trang này cung cấp nhiều tính năng quản lý khách hàng để giúp bạn dễ dàng quản lý thông tin và tương tác với khách hàng của mình. Các chức năng chính bao gồm:
    \n<b>Tìm khách hàng:</b> Cho phép bạn tìm kiếm và xem thông tin chi tiết của khách hàng từ danh sách có sẵn.
    \n<b>Xem đơn hàng gần nhất:</b> Hiển thị thông tin về hóa đơn và đơn hàng gần đây nhất mà khách hàng đã thực hiện.
    \n<b>Xem thông tin khách hàng:</b> Xem và kiểm tra các thông tin chi tiết về khách hàng như họ tên, địa chỉ, thông tin liên lạc, và lịch sử mua hàng.
    \n<b>Chỉnh sửa thông tin khách hàng:</b> Cập nhật và sửa đổi thông tin khách hàng để luôn giữ cho dữ liệu được cập nhật và chính xác.
    \n<b>Thêm khách hàng mới:</b> Thêm thông tin của khách hàng mới vào hệ thống để mở rộng danh sách khách hàng của bạn.
    \n<b>Xóa khách hàng hiện có:</b> Xóa thông tin khách hàng không còn cần thiết trong danh sách của bạn.
    \nVới các tính năng này, bạn có thể quản lý và tương tác với khách hàng một cách linh hoạt và hiệu quả, từ việc xem thông tin chi tiết đến thực hiện các thay đổi cần thiết. Hãy tiếp tục đọc để biết thêm chi tiết và hướng dẫn cụ thể về mỗi chức năng trên trang Khách hàng.`,
    steps: [
      {
        id: 81,
        label: '1. Tìm khách hàng',
        description: `<b>Bước 1:</b> Truy cập vào tính năng tìm kiếm
        \nĐầu tiên, truy cập vào trang quản lý khách hàng trên hệ thống.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718873927/Untitled40_o8dzcb.png' alt='Tìm kiếm khách hàng'>
        \n<b>Bước 2:</b> Nhập tiêu chí tìm kiếm
        \nNhấp vào ô tìm kiếm.
        \nNhập tiêu chí tìm kiếm, <b>ví dụ</b> như tên khách hàng, loại khách hàng, nhóm khách hàng hoặc các thông tin khác liên quan.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718874499/Untitled40_ei7vbo.png' alt='Nhập tiêu chí tìm kiếm khách hàng'>
        <b>Bước 3:</b> Chọn kết quả tìm kiếm
        \nHệ thống sẽ tự động lọc và hiển thị các kết quả phù hợp với tiêu chí tìm kiếm của bạn.
        \nChọn khách hàng mà bạn muốn xem chi tiết hoặc cập nhật thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718874616/Untitled40_cj1dl6.png' alt='Chọn khách hàng muốn xem thông tin'>
        \n<b>Bước 4:</b> Xem và quản lý thông tin khách hàng
        \nSau khi tìm kiếm thành công, bạn có thể xem thông tin chi tiết của khách hàng, bao gồm họ tên, địa chỉ, thông tin liên lạc và các thông tin khác.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718874932/Untitled40_zfgcce.png' alt='Xem thông tin khách hàng'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Từ đây, bạn có thể chỉnh sửa thông tin khách hàng nếu cần thiết</div><br/>
         <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718875314/Untitled40_rn1htj.png' alt='Chỉnh sửa thông tin khách hàng'>`,
      },
      {
        id: 82,
        label: '2. Thêm khách hàng',
        description: `<b>Bước 1:</b> Truy cập vào chức năng thêm khách hàng
        \nĐầu tiên, trên giao diện của trang quản lý khách hàng, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718876390/Untitled40_coimaq.png' alt='Chọn biểu tượng để thêm khách hàng'>
        \n<b>Bước 2:</b> Chọn thêm khách hàng
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu cộng <b>+</b>.
        \nHệ thống sẽ mở ra một form thêm khách hàng mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718876599/Untitled40_kjpjhe.png' alt='Form thêm khách hàng mới'>
        \n<b>Bước 3:</b> Nhập thông tin khách hàng
        \nTrên form thêm khách hàng, bạn sẽ thấy các trường thông tin như:<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719196258/Untitled45_x4nxb0.png' alt='Nhập thông tin vào form thêm khách hàng mới'>
        \nNhập thông tin khách hàng vào các trường tương ứng.
        \n<b>Bước 4:</b>  Hoàn tất thêm khách hàng
        \nSau khi điền đầy đủ thông tin, nhấn vào nút <b>"Hoàn tất"</b> để lưu thông tin khách hàng mới.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718876975/Untitled40_gukgqn.png' alt='Thêm khách hàng thành công'>`,
      },
      {
        id: 83,
        label: '3. Chỉnh sửa thông tin khách hàng',
        description: `<b>Bước 1:</b> Chọn khách hàng cần chỉnh sửa
        \nTruy cập vào danh sách khách hàng trên hệ thống.
        \nTìm và chọn khách hàng mà bạn cần chỉnh sửa thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718936604/Untitled41_vyfled.png' alt='Sửa thông tin khách hàng'>
        \n<b>Bước 2:</b> Mở form chỉnh sửa
        \nSau khi chọn khách hàng, nhấn vào biểu tượng cây <b>🖉</b> nằm bên phía bên phải để bắt đầu chỉnh sửa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718936967/Untitled41_skb6ni.png' alt='Sửa thông tin khách hàng'>
        \nHệ thống sẽ hiển thị form thông tin chi tiết của khách hàng đó.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718937225/Untitled41_iqzv74.png' alt='Sửa thông tin khách hàng'>
        \n<b>Bước 3:</b> Cập nhật thông tin
        \nTrong form chi tiết, cập nhật các thông tin mà bạn muốn thay đổi như họ tên, số điện thoại, địa chỉ email, hoặc bất kỳ thông tin nào khác.
        \nĐảm bảo rằng các thông tin mới được nhập chính xác và đầy đủ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718937683/Untitled41_w5oeql.png' alt='Sửa thông tin khách hàng'>
        \n<b>Bước 4:</b> Lưu thay đổi
        \nSau khi đã cập nhật xong thông tin, nhấn nút <b>"Hoàn tất"</b> để lưu các thay đổi.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/> 
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718937938/Untitled41_gahw7q.png' alt='Sửa thông tin khách hàng'>
        \n<b>Bước 5:</b> Hủy chỉnh sửa(nếu cần)
        \nNếu bạn quyết định không thực hiện thay đổi, bạn có thể nhấn nút <b>"Hủy"</b> để thoát khỏi form chỉnh sửa mà không lưu bất kỳ thay đổi nào.`,
      },
      {
        id: 84,
        label: '4. Xóa khách hàng',
        description: `<b>Bước 1:</b> Chọn khách hàng cần xóa
        \nTruy cập vào danh sách khách hàng trên hệ thống.
        \nTìm và chọn khách hàng mà bạn muốn xóa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718939421/Untitled41_axgjqa.png' alt='Xóa khách hàng'>
        \n<b>Bước 2:</b> Mở menu tùy chọn
        \nNhấn vào biểu tượng ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718939656/Untitled41_hyuixg.png' alt='Xóa khách hàng'>
        \n<b>Bước 3:</b> Chọn biểu tượng thùng rác
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa khách hàng.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718939890/Untitled41_xh5pn2.png' alt='Xóa khách hàng'>
        \n<b>Bước 4:</b> Xác nhận xóa
        \nHệ thống sẽ hiển thị thông báo: <b>"Bạn có muốn xóa ?"</b><br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718940128/Untitled41_aln3md.png' alt='Xóa khách hàng'>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>. Khách hàng sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718940210/Untitled41_l1rqba.png' alt='Xóa khách hàng'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn <b>"Hủy"</b>, hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.<div/>`,
      },
      {
        id: 85,
        label: '5. Xem thông tin chi tiết của khách hàng',
        description: `<b>Bước 1:</b> Chọn khách hàng cần xem
        \nTruy cập vào danh sách khách hàng trên hệ thống.
        \nTìm và chọn khách hàng mà bạn muốn xem thông tin chi tiết.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718936604/Untitled41_vyfled.png' alt='Xem thông tin chi tiết của khách hàng'>
        \n<b>Bước 2:</b> Chọn biểu tượng con mắt
        \nSau khi chọn khách hàng, nhấn vào biểu tượng <b>👁️</b> nằm cạnh tên khách hàng để bắt đầu quá trình xem chi tiết.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718940929/Untitled41_qrfal6.png' alt='Xem thông tin chi tiết của khách hàng'>
        \n<b>Bước 3:</b> Xem thông tin chi tiết
        \nHệ thống sẽ hiển thị thông tin chi tiết của khách hàng mà bạn vừa chọn.
        \nBạn có thể xem các thông tin như họ tên, số điện thoại, địa chỉ email, địa chỉ, và các thông tin liên quan khác.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718941190/Untitled41_opnt4q.png' alt='Xem thông tin chi tiết của khách hàng'>`,
      },
      {
        id: 86,
        label: '6. Xem đơn hàng gần nhất',
        description: `<b>Bước 1:</b> Chọn khách hàng cần xem
        \nTruy cập vào danh sách khách hàng trên hệ thống.
        \nTìm và chọn khách hàng mà bạn muốn xem đơn hàng gần nhất.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718936604/Untitled41_vyfled.png' alt='Xem hóa đơn gần nhất của khách hàng'>
        \n<b>Bước 2:</b> Chọn hóa đơn
        \nSau khi chọn khách hàng, nhấn vào tùy chọn <b>#HĐ-xxxxx</b> để mở thông tin hóa đơn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718941838/Untitled41_gbqrhk.png' alt='Xem hóa đơn gần nhất của khách hàng'>
        \n<b>Bước 3:</b> Xem thông tin chi tiết hóa đơn
        \nHệ thống sẽ hiển thị thông tin chi tiết về hóa đơn gần nhất của khách hàng mà bạn vừa chọn.
        \nBạn sẽ thấy các thông tin như sản phẩm đã mua, số lượng, giá cả, ngày mua hàng và các chi tiết thanh toán khác.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718941987/Untitled41_gg6f21.png' alt='Xem hóa đơn gần nhất của khách hàng'>`,
      },
    ],
  },
  {
    id: 9,
    link: 'huong-dan-su-dung-trang-don-hang',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG ĐƠN HÀNG',
    description: `<iframe width="100%" height="400" src="https://www.youtube.com/embed/uvBAGVNDPmc?start=14" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    steps: [
      {
        id: 91,
        label: '1. Tạo đơn hàng',
        description: `<b>Bước 1:</b> Truy cập vào chức năng tạo đơn hàng mới
        \nĐầu tiên, trên giao diện của trang quản lý đơn hàng, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.
        \nChọn vào biểu tượng <b>+</b> để tạo đơn hàng mới.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719477775/12c821da-ecf4-4c88-b3c4-057840ec7808.png'> 
        \n<b>Bước 2:</b> Nhập thông tin
        \nNhập thông tin bao gồm thông tin sản phẩm và thông tin khách hàng.
        \nNgười bán có thể nhập tên sản phẩm để tìm nhanh hoặc khi sản phẩm mới không có trong dữ liệu thì người bán có thể tạo sản phẩm nhanh</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719477956/1b2af434-4f5b-49f4-b2c8-0e6901270a40.png'>
        <div style='text-align:center'>Chọn thêm sản phẩm nhanh</div> </br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719478056/e2b4b016-896c-40b9-a82d-edc0729dc04d.png'>
        <div style='text-align:center'>Form điền thông tin thông sản phẩm nhanh</div> </br>
        <div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Các thông tin về VAT, ghi chú cho sản phẩm có thể bỏ trống</div>
        \nChọn khách hàng có sẵn thông tin hoặc là khách hàng mới thì người dùng chọn dấu <b>+</b> ở góc phải để thêm thông tin khách hàng, thông tin bao gồm: họ tên, số điện thoại, email...</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719478381/bc51911b-310f-415f-9be8-3ebf35a3bf8f.png'>
        \n<b>Bước 3:</b> Kiểm tra thông tin
        \nSau khi đã xác nhận đầy đủ thông tin sản phẩm và khách hàng, người bán kiểm tra lại thông tin và nhấn nút <b>"Hoàn tất"</b> để hoàn thành tạo đơn hàng. Hệ thống sẽ hiển thị chi tiết đơn hàng, bao gồm thông tin sản phẩm và khách hàng, cùng với tổng giá trị đơn hàng. Bạn có thể chọn <b>"In hóa đơn"</b> hoặc <b><span style="color: red;">"Yêu cầu hủy"</span></b> nếu cần thiết. </br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719478575/24900e58-16c9-474a-b8c6-a6f620071f0e.png'>
        `,
      },
      {
        id: 92,
        label: '2. Các thao tác với đơn hàng',
        description: `<b>Xóa đơn hàng</b>
        \n<b>Bước 1:</b> Chọn đơn hàng cần xóa
        \nTại giao diện Đơn hàng hệ thống sẽ hiển thị danh sách đơn hàng đã lập.Tại đây, mỗi đơn hàng sẽ có một ô vuông nhỏ ở phía trước. Bạn cần chọn vào ô vuông này để chọn đơn hàng cần xóa. Bạn cũng có thể chọn nhiều đơn hàng cùng lúc bằng cách click vào nhiều ô vuông tương ứng với các đơn hàng mà bạn muốn xóa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719478884/1e310ce1-8943-43e6-bd87-ace8f09e947f.png'>
        \n<b>Bước 2:</b> Chọn xóa
        \nHãy di chuyển đến góc phải màn hình. Ở đó, bạn sẽ thấy biểu tượng dấu ba gạch. Khi bạn click vào biểu tượng này, một menu sẽ xuất hiện. Trong menu này, hãy tìm và click vào biểu tượng <b>🗑</b> để tiến hành xóa các đơn hàng đã chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719479081/a3aee73e-6527-40ad-8f77-f9b53c0cf238.png'>
        \n<b>Bước 3:</b> Xác nhận xóa
        \nHệ thống sẽ hiển thị một hộp thoại xác nhận việc xóa đơn hàng. Hộp thoại này sẽ yêu cầu bạn xác nhận xem có chắc chắn muốn xóa các đơn hàng đã chọn hay không. Nếu bạn chắc chắn muốn xóa, hãy chọn vào nút <b>"Đồng ý"</b>. Hệ thống sẽ tiến hành xóa các đơn hàng và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719479406/d34c0cf0-0742-42cb-a273-f1ba6af7b089.png'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn thay đổi ý định và không muốn xóa nữa, hãy chọn vào nút "Hủy". Hệ thống sẽ không xóa các đơn hàng và bạn sẽ trở về giao diện danh sách đơn hàng.</div>
        \n<b>Bước 4:</b> Hoàn tất xóa đơn hàng
        \nKhi chọn <b>"Đồng ý"</b>, hệ thống sẽ thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b></br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719479516/ea6b1589-e08c-42d0-8970-875416a5138c.png'>
        \n<b>Xem đơn hàng</b>
        \n<b>Bước 1:</b> Chọn đơn hàng cần xem
        \nBạn cần xác định đơn hàng mà bạn muốn xem chi tiết. Trên giao diện danh sách đơn hàng, bạn có thể chọn đơn hàng bằng cách nhấp vào biểu tượng bánh răng hiển thị phía trước mỗi đơn hàng. Biểu tượng này sẽ mở ra một menu với các tùy chọn, trong đó có tùy chọn xem chi tiết đơn hàng.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719479800/cdd9bec6-2a5a-4944-a257-fb40f4e93ced.png'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Ngoài ra, bạn cũng có thể nhấp trực tiếp vào mã hóa đơn mà không cần nhấp vào biểu tượng bánh răng.</div>
        \n<b>Bước 2:</b> Xem chi tiết đơn hàng
        \nSau khi bạn đã chọn tùy chọn xem hoặc nhấp vào mã hóa đơn, hệ thống sẽ hiển thị thông tin chi tiết của hóa đơn<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719479874/ed47e080-7d40-416a-b2bb-e5bc5c0d5aa1.png'>
        <div style='text-align:center'>Chi tiết đơn hàng</div>
        <div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Trên trang chi tiết hóa đơn, bạn có thể thực hiện hai thao tác quan trọng: <b>"In hóa đơn"</b> và <b><span style="color: red;">"Hủy yêu cầu"</span></b>.</div>
        \n<b>Yêu cầu hủy đơn hàng</b>
        \n<b>Bước 1:</b> Xác định đơn hàng cần hủy và yêu cầu hủy
        \nTrên giao diện quản lý đơn hàng, mỗi đơn hàng sẽ có một biểu tượng bánh răng hiển thị phía trước. Biểu tượng bánh răng này cho phép bạn truy cập vào các tùy chọn quản lý đơn hàng khác nhau<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719551095/48b77a7b-8c02-436d-9e45-bb1840c49c18.png'>
        \n<b>Bước 2:</b> Nhập lý do yêu cầu hủy
        \nViệc yêu cầu nhập lý do hủy là rất quan trọng, vì nó giúp hệ thống và người quản lý có thể theo dõi và hiểu rõ hơn về lý do tại sao đơn hàng bị hủy<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719551226/fb796049-4389-47f0-9f26-e3a0349514d3.png'>
        \n<b>Bước 3:</b> Xác nhận yêu cầu hủy
        \nSau khi đã nhập lý do hủy bạn nhấn <b>"Yêu cầu hủy"</b> để hoàn tất quá trình yêu cầu hủy đơn hàng. Hệ thống sẽ hiển thị thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b><br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719551371/6e52a689-6ca0-450f-aa43-0755abd88827.png'>
        \n<b>Xác nhận hủy đơn hàng</b>
        \nCác đơn hàng đã có yêu cầu hủy sẽ hiển thị ở trang quản lý đơn hàng, người dùng được cấp quyền có thể xác nhận hủy đơn hàng hoặc không. Nếu đồng ý hủy đơn hàng, hệ thống sẽ hiển thị thông báo xác nhận hủy thành công và đơn hàng sẽ được chuyển sang trạng thái <b>"Đã hủy"</b>.
        \nTrên giao diện quản lý đơn hàng, mỗi đơn hàng sẽ có một biểu tượng bánh răng hiển thị phía trước. Biểu tượng bánh răng này cho phép bạn truy cập vào các tùy chọn quản lý đơn hàng khác nhau<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719551514/f5f8965b-cdb4-4ee8-be5f-e306696d8828.png'>
        \n<b>Bước 2:</b> Xác nhận hủy đơn hàng
        \nQuá trình hủy đơn hàng. Hệ thống sẽ tiến hành xóa đơn hàng khỏi danh sách và thông báo cho bạn rằng việc hủy đã thành công.
        \nNếu bạn thay đổi ý định và không muốn hủy đơn hàng nữa, hãy nhấn vào nút "Hủy". <br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719551947/a8b7ba70-5830-45ec-b75f-9ce65fed16ca.png'>
        \n<b>Trả hàng</b>
        \n<b>Bước 1:</b> Chọn đơn hàng cần trả
        \nTương tự hãy chọn vào biểu tượng bánh răng để hiển thị các tùy chọn, tại đây sẽ có tùy chọn trả hàng<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719552373/7a5f859a-0f35-4eb5-a4d9-cf41abac48c9.png'>
        \n<b>Bước 2:</b> Xác nhận hoặc hủy yêu cầu trả hàng
        \nKhi bạn chọn <b>"Trả hàng"</b>, hệ thống sẽ hiển thị thông tin chi tiết của đơn hàng. Các thông tin này bao gồm: thông tin sản phẩm, thông tin khách hàng, thông tin giao hàng, thông tin thanh toán.
        \nNếu bạn chắc chắn muốn trả hàng, nhấn vào nút <b>"Hoàn tất"</b> để xác nhận. Hệ thống sẽ ghi nhận yêu cầu trả hàng và chuyển đơn hàng này vào mục Trả hàng để tiếp tục xử lý.
        \nNếu bạn thay đổi ý định và không muốn hủy đơn hàng nữa, hãy nhấn vào nút <b>"Hủy"</b>. <br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719552638/bba94a40-7982-4377-bd8e-dab0db280764.png'>
        <div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Sau khi bạn xác nhận trả hàng, đơn hàng sẽ được chuyển đến mục Trả hàng trong hệ thống. Tại đây, bạn có thể theo dõi tình trạng xử lý yêu cầu trả hàng của mình và thực hiện các bước tiếp theo nếu cần thiết. Bạn có thể tham khảo hướng dẫn Trả hàng <b>tại đây</b></div>
        \n<b>Ghi chú</b>
        \nKhi bạn chọn "Ghi chú" tại biểu tượng bánh răng, hệ thống sẽ hiển thị một khung để bạn nhập nội dung ghi chú cho đơn hàng. Tại đây, bạn có thể viết bất kỳ thông tin nào cần thiết mà bạn muốn ghi nhớ liên quan đến đơn hàng<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719553124/9b482637-afac-4264-b17d-f57b8d29f8f9.png'>
        \nNếu bạn hài lòng với nội dung ghi chú và muốn lưu lại, nhấn vào nút <b>"Hoàn tất"</b>. Việc này sẽ lưu ghi chú của bạn và liên kết nó với đơn hàng tương ứng.
        \n<b>Xuất hóa đơn</b>
        \n<b>Bước 1:</b> Chọn đơn hàng cần xuất hóa đơn
        \nXác định đơn hàng cần xuất hóa đơn sau đó, bạn có thể chọn vào biểu tượng bánh răng để hiển thị các tùy chọn, tại đây sẽ có tùy chọn xuất hóa đơn
        \n<b>Bước 2:</b> Xuất hóa đơn
        \nKhi bạn chọn "Xuất hóa đơn", hệ thống sẽ hiển thị một hộp thoại yêu cầu xác nhận việc phát hành hóa đơn. Hộp thoại này nhằm đảm bảo rằng bạn chắc chắn muốn thực hiện hành động này và hiểu rõ về các bước tiếp theo.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719553797/eee13d9e-b58d-4879-a86d-c1acbb0bddf6.png'>
        \n<b>Bước 3:</b> Thực hiện các thao tác sau khi xuất hóa đơn
        \nSau khi bạn đồng ý xuất hóa đơn, hệ thống sẽ cung cấp các tùy chọn để bạn có thể thực hiện thêm các thao tác liên quan đến hóa đơn đã xuất, bao gồm:
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719554113/c9b330ab-41c9-4e27-aa05-55f007d7ea71.png'>
        \n<b>Gửi email:</b> Bạn có thể gửi hóa đơn qua email cho khách hàng hoặc các bên liên quan.</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719554160/912a0e9c-4d93-40bc-b544-39eafa1e4c78.png'>
        \n<b>Xuất file PDF:</b> Bạn có thể xuất hóa đơn dưới dạng file PDF để lưu trữ hoặc in ra.
        \n<b>Xuất file ZIP:</b> Bạn có thể xuất hóa đơn dưới dạng file ZIP, bao gồm tất cả các tài liệu liên quan để dễ dàng quản lý và chia sẻ.
        `,
      },
    ],
  },
  {
    id: 10,
    link: 'huong-dan-su-dung-trang-don-hang',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG ĐƠN HÀNG',
    description: `Chào mừng bạn đến với hướng dẫn sử dụng chức năng Quản lý Đơn hàng. Trong bài viết này, chúng tôi sẽ cung cấp cho bạn các bước chi tiết để thực hiện các thao tác quan trọng trong quản lý đơn hàng. Chúng tôi hy vọng rằng hướng dẫn này sẽ giúp bạn quản lý đơn hàng một cách hiệu quả và dễ dàng hơn. Hãy cùng bắt đầu khám phá từng chức năng để tối ưu hóa quy trình quản lý và vận hành cửa hàng của bạn.
    `,
    steps: [
      {
        id: 91,
        label: '1. Tìm đơn hàng',
        description: `<b>Bước 1: Truy cập vào tính năng tìm kiếm</b>
        \nĐầu tiên, truy cập vào trang quản lý đơn hàng trên hệ thống.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718957074/Untitled41_ndtdcv.png' alt='Tìm kiếm đơn hàng'>
        \n<b>Bước 2: Nhập tiêu chí tìm kiếm</b>
        \n1. Nhấp vào ô tìm kiếm
        \n2. Nhập tiêu chí tìm kiếm, ví dụ như mã hóa đơn, tên sản phẩm, khách hàng hoặc các thông tin khác liên quan.<br/>
        <img src='' alt='Bị lỗi tìm kiếm đơn hàng nên chưa chụp hình được'>
        <b>Bước 3: Chọn kết quả tìm kiếm</b>
        \nHệ thống sẽ tự động lọc và hiển thị các kết quả phù hợp với tiêu chí tìm kiếm của bạn.
        \nChọn đơn hàng mà bạn muốn xem chi tiết hoặc thực hiện các thao tác khác.<br/>
        <img src='' alt='Bị lỗi tìm kiếm đơn hàng nên chưa chụp hình được'>
        \n<b>Bước 4: Xem và quản lý thông tin đơn hàng</b>
        \nSau khi tìm kiếm thành công, bạn có thể xem thông tin chi tiết của đơn hàng, bao gồm mã hóa đơn, tên sản phẩm, khách hàng, tổng tiền và các thông tin khác.<br/>
        <img src='' alt='Bị lỗi tìm kiếm đơn hàng nên chưa chụp hình được'>`,
      },
      {
        id: 92,
        label: '2. Tạo đơn hàng',
        description: `<b>Bước 1: Truy cập vào chức năng tạo đơn hàng mới</b>
        \nĐầu tiên, trên giao diện của trang quản lý đơn hàng, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718876390/Untitled40_coimaq.png' alt='Chọn biểu tượng để thêm khách hàng'>
        \n<b>Bước 2: Chọn thêm khách hàng</b>
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu cộng <b>+</b>.
        \nHệ thống sẽ mở ra một form thêm khách hàng mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718876599/Untitled40_kjpjhe.png' alt='Form thêm khách hàng mới'>
        \n<b>Bước 3: Nhập thông tin khách hàng</b>
        \nTrên form thêm khách hàng, bạn sẽ thấy các trường thông tin như:
        \nLoại khách hàng
        \nNhóm khách hàng
        \nHọ và tên
        \nGiới tính
        \nNgày sinh
        \nĐiện thoại
        \nNguồn kênh
        \nTrạng thái
        \nEmail
        \nĐịa chỉ
        \nTỉnh/thành phố
        \nQuận/huyện
        \nPhường/xã
        \nFacebook
        \nGhi chú (nếu cần)
        \nNhập thông tin khách hàng vào các trường tương ứng.
        \n<b>Bước 4: Hoàn tất thêm khách hàng</b>
        \nSau khi điền đầy đủ thông tin, nhấn vào nút "Hoàn tất" để lưu thông tin khách hàng mới.
        \nHệ thống sẽ xử lý và thông báo cập nhật thành công.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718876975/Untitled40_gukgqn.png' alt='Thêm khách hàng thành công'>`,
      },
      {
        id: 93,
        label: '3. Chỉnh sửa thông tin khách hàng',
        description: `<b>Bước 1: Chọn khách hàng cần chỉnh sửa</b>
        \nTruy cập vào danh sách khách hàng trên hệ thống.
        \nTìm và chọn khách hàng mà bạn cần chỉnh sửa thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718936604/Untitled41_vyfled.png' alt='Sửa thông tin khách hàng'>
        \n<b>Bước 2: Mở form chỉnh sửa</b>
        \nSau khi chọn khách hàng, nhấn vào biểu tượng cây <b>🖉</b> nằm bên phía bên phải để bắt đầu chỉnh sửa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718936967/Untitled41_skb6ni.png' alt='Sửa thông tin khách hàng'>
        \nHệ thống sẽ hiển thị form thông tin chi tiết của khách hàng đó.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718937225/Untitled41_iqzv74.png' alt='Sửa thông tin khách hàng'>
        \n<b>Bước 3: Cập nhật thông tin</b>
        \nTrong form chi tiết, cập nhật các thông tin mà bạn muốn thay đổi như họ tên, số điện thoại, địa chỉ email, hoặc bất kỳ thông tin nào khác.
        \nĐảm bảo rằng các thông tin mới được nhập chính xác và đầy đủ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718937683/Untitled41_w5oeql.png' alt='Sửa thông tin khách hàng'>
        \n<b>Bước 4: Lưu thay đổi</b>
        \nSau khi đã cập nhật xong thông tin, nhấn nút "Hoàn tất" để lưu các thay đổi.
        \nHệ thống sẽ xử lý và thông báo cập nhật thành công.<br/> 
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718937938/Untitled41_gahw7q.png' alt='Sửa thông tin khách hàng'>
        \n<b>Bước 5: Hủy chỉnh sửa (nếu cần)</b>
        \nNếu bạn quyết định không thực hiện thay đổi, bạn có thể nhấn nút "Hủy" để thoát khỏi form chỉnh sửa mà không lưu bất kỳ thay đổi nào.`,
      },
      {
        id: 94,
        label: '4. Xóa khách hàng',
        description: `<b>Bước 1: Chọn khách hàng cần xóa</b>
        \nTruy cập vào danh sách khách hàng trên hệ thống.
        \nTìm và chọn khách hàng mà bạn muốn xóa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718939421/Untitled41_axgjqa.png' alt='Xóa khách hàng'>
        \n<b>Bước 2: Mở menu tùy chọn</b>
        \nNhấn vào biểu tượng ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718939656/Untitled41_hyuixg.png' alt='Xóa khách hàng'>
        \n<b>Bước 3: Chọn biểu tượng thùng rác</b>
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa khách hàng.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718939890/Untitled41_xh5pn2.png' alt='Xóa khách hàng'>
        \n<b>Bước 4: Xác nhận xóa</b>
        \nHệ thống sẽ hiển thị thông báo: <b>"Bạn có muốn xóa ?"</b><br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718940128/Untitled41_aln3md.png' alt='Xóa khách hàng'>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo "Cập nhật thành công". Khách hàng sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718940210/Untitled41_l1rqba.png' alt='Xóa khách hàng'>
        \nNếu bạn chọn "Hủy", hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.`,
      },
      {
        id: 95,
        label: '5. Xem thông tin chi tiết của khách hàng',
        description: `<b>Bước 1: Chọn khách hàng cần xem</b>
        \nTruy cập vào danh sách khách hàng trên hệ thống.
        \nTìm và chọn khách hàng mà bạn muốn xem thông tin chi tiết.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718936604/Untitled41_vyfled.png' alt='Xem thông tin chi tiết của khách hàng'>
        \n<b>Bước 2: Chọn biểu tượng con mắt</b>
        \nSau khi chọn khách hàng, nhấn vào biểu tượng <b>👁️</b> nằm cạnh tên khách hàng để bắt đầu quá trình xem chi tiết.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718940929/Untitled41_qrfal6.png' alt='Xem thông tin chi tiết của khách hàng'>
        \n<b>Bước 3: Xem thông tin chi tiết</b>
        \nHệ thống sẽ hiển thị thông tin chi tiết của khách hàng mà bạn vừa chọn.
        \nBạn có thể xem các thông tin như họ tên, số điện thoại, địa chỉ email, địa chỉ, và các thông tin liên quan khác.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718941190/Untitled41_opnt4q.png' alt='Xem thông tin chi tiết của khách hàng'>`,
      },
      {
        id: 96,
        label: '6. Xem đơn hàng gần nhất',
        description: `<b>Bước 1: Chọn khách hàng cần xem</b>
        \nTruy cập vào danh sách khách hàng trên hệ thống.
        \nTìm và chọn khách hàng mà bạn muốn xem đơn hàng gần nhất.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718936604/Untitled41_vyfled.png' alt='Xem hóa đơn gần nhất của khách hàng'>
        \n<b>Bước 2: Chọn hóa đơn</b>
        \nSau khi chọn khách hàng, nhấn vào tùy chọn <b>#HĐ-xxxxx</b> để mở thông tin hóa đơn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718941838/Untitled41_gbqrhk.png' alt='Xem hóa đơn gần nhất của khách hàng'>
        \n<b>Bước 3: Xem thông tin chi tiết hóa đơn</b>
        \nHệ thống sẽ hiển thị thông tin chi tiết về hóa đơn gần nhất của khách hàng mà bạn vừa chọn.
        \nBạn sẽ thấy các thông tin như sản phẩm đã mua, số lượng, giá cả, ngày mua hàng và các chi tiết thanh toán khác.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1718941987/Untitled41_gg6f21.png' alt='Xem hóa đơn gần nhất của khách hàng'>`,
      },
    ],
  },
  {
    id: 11,
    link: 'gioi-thieu-ve-trang-doanh-thu',
    label: 'GIỚI THIỆU TRANG DOANH THU',
    description: `Chào mừng bạn đến với hướng dẫn sử dụng trang Doanh thu, nơi cung cấp cái nhìn toàn diện và chi tiết về tình hình kinh doanh của doanh nghiệp bạn. Trong bài viết này, chúng tôi sẽ giới thiệu các biểu đồ và số liệu thống kê quan trọng giúp bạn theo dõi doanh thu và hoạt động kinh doanh hàng ngày một cách trực quan. Bạn sẽ học cách sử dụng các công cụ lọc để phân tích dữ liệu theo nhiều khoảng thời gian khác nhau, từ đó so sánh và đưa ra những quyết định kinh doanh chính xác hơn. Ngoài ra, bạn sẽ được hướng dẫn cách tải xuống các biểu đồ dưới nhiều định dạng khác nhau như SVG, PNG và CSV để phục vụ cho các mục đích báo cáo, phân tích hoặc lưu trữ. Hãy cùng khám phá và tận dụng tối đa các tính năng của trang Doanh thu để nâng cao hiệu quả kinh doanh và đưa doanh nghiệp của bạn phát triển mạnh mẽ hơn.`,
    steps: [
      {
        id: 111,
        label: '1. Tổng quan',
        description: `Đây là trung tâm hiển thị các biểu đồ và số liệu thống kê quan trọng, cung cấp cho bạn cái nhìn chi tiết về hoạt động kinh doanh. Tại đây, bạn có thể theo dõi mức doanh thu hàng ngày và số lượng đơn hàng phát sinh qua từng ngày qua các biểu đồ trực quan, giúp bạn dễ dàng nhận biết xu hướng và tình hình kinh doanh hàng ngày.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719047541/Untitled42_kmr5ig.png' alt='Biểu đồ'>
        \nTrên trang tổng quan, bạn sẽ tìm thấy các mục hiển thị tổng doanh thu thuần từ các kênh bán hàng khác nhau, bao gồm cả kênh trực tuyến và kênh trực tiếp tại cửa hàng. Ngoài ra, trang tổng quan còn cung cấp danh sách các sản phẩm bán chạy nhất và top nhân viên bán hàng có doanh thu cao nhất. Những thông tin này giúp bạn nắm bắt được các sản phẩm đang được ưa chuộng và nhận diện những nhân viên có hiệu suất làm việc xuất sắc nhất.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719047736/Untitled42_xmrvck.png' alt='Biểu đồ'>
        \nĐể có cái nhìn cụ thể và chi tiết hơn về các số liệu thống kê, bạn có thể sử dụng chức năng lọc theo khoảng thời gian. Hệ thống cung cấp nhiều tùy chọn lọc khác nhau, bao gồm: 30 ngày trước, ngày hôm nay, ngày hôm qua, 7 ngày trước, trong tháng này và trong tháng trước. Điều này giúp bạn dễ dàng so sánh và phân tích dữ liệu theo các khoảng thời gian khác nhau, từ đó đưa ra những quyết định kinh doanh chính xác hơn. Việc sử dụng trang tổng quan để xem và phân tích số liệu không chỉ giúp bạn theo dõi hoạt động kinh doanh hàng ngày mà còn giúp bạn phát hiện ra các xu hướng quan trọng, từ đó điều chỉnh chiến lược kinh doanh một cách hiệu quả.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719047977/Untitled42_nbyknw.png' alt='Lựa chọn ngày để xem biểu đồ'>
        \nBạn có thể quan sát biểu đồ đường về doanh thu và số lượng sản phẩm bán ra theo từng ngày trên trang Báo cáo doanh thu. Biểu đồ này cung cấp cho bạn cái nhìn trực quan về sự biến động của doanh thu và số lượng sản phẩm bán ra trong một khoảng thời gian cụ thể. Các đường trên biểu đồ hiển thị sự thay đổi theo ngày, giúp bạn dễ dàng nhận biết các xu hướng tăng hoặc giảm, cũng như các đỉnh cao và đáy thấp trong doanh thu và số lượng sản phẩm bán ra.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719047541/Untitled42_kmr5ig.png' alt='Giải thích biểu đồ'>
        \nKhông chỉ dừng lại ở việc quan sát, hệ thống còn cung cấp tính năng tải xuống hình ảnh biểu đồ để phục vụ cho các mục đích báo cáo, phân tích hoặc lưu trữ. Bạn có thể tải hình ảnh biểu đồ dưới ba định dạng khác nhau: SVG, PNG và CSV. Định dạng SVG là định dạng vector, cho phép bạn phóng to hoặc thu nhỏ hình ảnh mà không làm giảm chất lượng, rất hữu ích khi sử dụng biểu đồ trong các tài liệu in ấn hoặc thuyết trình. Định dạng PNG là định dạng ảnh thông dụng, dễ dàng chèn vào các tài liệu hoặc chia sẻ qua email. Định dạng CSV cho phép bạn tải về dữ liệu gốc dưới dạng bảng, tiện lợi cho việc phân tích chi tiết hơn bằng các phần mềm bảng tính như Excel.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719048636/Untitled42_amiczt.png' alt='Tải biểu đồ'>
        \n<b>Tóm lại:</b>
        \nBằng cách cung cấp các công cụ này, hệ thống giúp bạn không chỉ theo dõi và phân tích dữ liệu một cách trực quan mà còn hỗ trợ việc lưu trữ và chia sẻ dữ liệu một cách thuận tiện và linh hoạt. Điều này rất hữu ích cho các báo cáo nội bộ, các cuộc họp phân tích kinh doanh, hoặc khi cần trình bày dữ liệu trước các đối tác hoặc nhà đầu tư. Khả năng tải biểu đồ về dưới nhiều định dạng khác nhau cũng giúp bạn dễ dàng tích hợp dữ liệu vào các tài liệu khác, đảm bảo rằng bạn luôn có sẵn thông tin cần thiết để ra quyết định kịp thời và chính xác.`,
      },
      {
        id: 112,
        label: '2. Báo cáo bán hàng',
        description: `<b>2.1. Dòng tiền bán hàng </b><br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719049550/Untitled42_ign09k.png' alt='Dòng tiền bán hàng'>
        \nTại trang Báo cáo dòng tiền bán hàng, bạn có thể xem tổng quan về dòng tiền theo từng ngày, với thời gian báo cáo tùy chỉnh theo nhu cầu phân tích cụ thể của bạn. Báo cáo cung cấp các thông tin quan trọng như số đơn hàng phát sinh trong ngày, doanh thu, số tiền giảm giá, doanh thu thuần, tổng hóa đơn, số tiền đã thu, số tiền đã hoàn trả, chi phí vận chuyển, số sản phẩm được bán ra và số sản phẩm trả lại. Những thông tin này giúp bạn có cái nhìn tổng thể về tình hình tài chính và hoạt động bán hàng hàng ngày của doanh nghiệp.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719049737/Untitled42_x7o8zl.png' alt='Trang chi tiết dòng tiền bán hàng'>
        \nĐể dễ dàng hơn trong việc tìm kiếm và phân tích dữ liệu, bạn có thể thêm các điều kiện lọc để tìm thông tin một cách chính xác và nhanh chóng hơn. Các điều kiện lọc bao gồm tên cửa hàng, trạng thái đơn hàng (không hủy/hủy), thông tin khách hàng, khoảng thời gian cụ thể (từ ngày - đến ngày), trạng thái thanh toán (thanh toán/công nợ), mã đơn hàng, kênh bán hàng (trực tiếp tại cửa hàng, online), và thương hiệu sản phẩm. Những điều kiện này cho phép bạn tinh chỉnh báo cáo để phân tích chi tiết theo các tiêu chí cụ thể, giúp việc quản lý trở nên hiệu quả hơn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719049920/Untitled42_gkyxhp.png' alt='Thêm điều kiện lọc'>
        \n<b>Chú ý:</b> Nếu bạn không thêm bất kỳ điều kiện lọc nào, hệ thống sẽ tự động hiển thị thông tin đơn hàng từ đầu tháng đến ngày hiện tại. Điều này rất hữu ích để có cái nhìn tổng quan về hoạt động kinh doanh trong tháng mà không cần thiết lập các điều kiện lọc cụ thể. Bạn có thể dễ dàng thấy được tổng số đơn hàng, doanh thu, số tiền giảm giá, doanh thu thuần và các thông tin tài chính khác trong khoảng thời gian từ ngày đầu tiên của tháng đến thời điểm hiện tại.
        \nTuy nhiên, để có thể so sánh số liệu giữa các tháng hoặc giữa các khoảng thời gian khác nhau, việc thêm điều kiện lọc cho thời gian là rất cần thiết. Bằng cách thiết lập các điều kiện lọc thời gian cụ thể, chẳng hạn như chọn từ ngày - đến ngày, bạn có thể xem và so sánh dữ liệu tài chính và kinh doanh giữa các tháng. Điều này giúp bạn phát hiện ra các xu hướng, đánh giá hiệu quả của các chiến lược kinh doanh trong các khoảng thời gian khác nhau, và từ đó có thể đưa ra các quyết định kinh doanh chính xác và kịp thời hơn.
        \n<b>Ví dụ,</b> nếu bạn muốn so sánh doanh thu của tháng này với tháng trước, bạn có thể thiết lập điều kiện lọc để xem dữ liệu của từng tháng riêng biệt. Bằng cách này, bạn sẽ thấy rõ ràng sự thay đổi về số lượng đơn hàng, doanh thu, và các chỉ số tài chính khác giữa hai tháng. Điều này không chỉ giúp bạn hiểu rõ hơn về hiệu suất kinh doanh trong từng khoảng thời gian mà còn giúp bạn điều chỉnh chiến lược kinh doanh để cải thiện hiệu quả và tăng doanh thu trong tương lai.
        \nViệc thêm điều kiện lọc thời gian cũng rất hữu ích khi bạn cần báo cáo hoặc phân tích chi tiết về một khoảng thời gian cụ thể. Chẳng hạn, nếu bạn muốn xem dữ liệu của một chiến dịch khuyến mãi diễn ra trong một tuần nhất định, bạn có thể thiết lập điều kiện lọc để chỉ xem dữ liệu trong khoảng thời gian đó. Điều này giúp bạn đánh giá hiệu quả của chiến dịch và rút ra những bài học kinh nghiệm cho các chiến dịch tương lai.
        \n<b>2.2. Doanh thu theo sản phẩm</b>
        \nTrên trang Báo cáo doanh thu theo sản phẩm, bạn có thể quan sát biểu đồ cột với chiều cao của các cột thể hiện doanh thu tương ứng với mỗi sản phẩm. Biểu đồ này giúp bạn dễ dàng so sánh doanh thu của từng sản phẩm, nhận diện những sản phẩm bán chạy nhất và những sản phẩm có doanh thu thấp hơn. Bằng cách nhìn vào chiều cao của các cột, bạn có thể trực quan hóa mức độ thành công của từng sản phẩm trong danh mục của mình.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719052635/Untitled42_xcsbvi.png' alt='Biểu đồ'>
        \nHệ thống cũng cung cấp tính năng tải biểu đồ về dưới ba dạng: SVG, PNG, và CSV. Định dạng SVG (Scalable Vector Graphics) là định dạng đồ họa vector, cho phép bạn phóng to hoặc thu nhỏ biểu đồ mà không làm giảm chất lượng hình ảnh, rất hữu ích khi bạn cần sử dụng biểu đồ trong các tài liệu in ấn hoặc thuyết trình. Định dạng PNG (Portable Network Graphics) là định dạng ảnh phổ biến, tiện lợi để chèn vào các tài liệu kỹ thuật số hoặc chia sẻ qua email. Định dạng CSV (Comma-Separated Values) cho phép bạn tải về dữ liệu biểu đồ dưới dạng bảng, thuận tiện cho việc phân tích chi tiết hơn bằng các phần mềm bảng tính như Excel.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719053410/Untitled42_h1pcwn.png' alt='Tải biểu đồ'>
        \nViệc có thể tải xuống biểu đồ dưới nhiều định dạng khác nhau không chỉ giúp bạn dễ dàng theo dõi và phân tích dữ liệu mà còn hỗ trợ việc lưu trữ và chia sẻ thông tin một cách thuận tiện. Điều này rất hữu ích cho các báo cáo nội bộ, các cuộc họp phân tích kinh doanh, hoặc khi cần trình bày dữ liệu trước các đối tác hoặc nhà đầu tư. Khả năng tích hợp dữ liệu vào các tài liệu khác cũng đảm bảo rằng bạn luôn có sẵn thông tin cần thiết để ra quyết định kịp thời và chính xác. Nhìn chung, những công cụ này giúp bạn quản lý và phân tích dữ liệu kinh doanh một cách hiệu quả, từ đó nâng cao khả năng cạnh tranh và phát triển doanh nghiệp.
        \nBên cạnh biểu đồ, hệ thống còn cung cấp bảng báo cáo chi tiết theo doanh thu cho từng sản phẩm. Bảng báo cáo này bao gồm nhiều thông tin quan trọng như tổng số lượng sản phẩm bán ra, doanh thu, số tiền giảm giá, doanh thu thuần, tổng số hóa đơn, số tiền đã thu, tổng giá vốn, tổng lợi nhuận, số lượt hoàn trả, số sản phẩm bị trả lại và số đơn hàng. Những thông tin này giúp bạn có cái nhìn toàn diện về hiệu quả kinh doanh của từng sản phẩm, từ đó đánh giá hiệu quả của các chiến lược kinh doanh và đưa ra các quyết định phù hợp để cải thiện doanh số.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719053734/Untitled42_qhm3u8.png' alt='Tải biểu đồ'>
        \nNgoài ra, hệ thống còn cho phép bạn thêm các điều kiện lọc để tìm kiếm thông tin một cách chính xác và nhanh chóng hơn. Các điều kiện lọc này giúp bạn thu hẹp phạm vi tìm kiếm và tập trung vào các dữ liệu cụ thể mà bạn quan tâm. Các điều kiện lọc bao gồm tên cửa hàng, cho phép bạn xem thông tin liên quan đến một cửa hàng cụ thể; trạng thái đơn hàng, giúp bạn phân biệt giữa các đơn hàng đã hủy và không hủy; thông tin khách hàng, giúp bạn xem chi tiết giao dịch của từng khách hàng.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719053883/Untitled42_hwbbqn.png' alt='Điều kiện lọc'>
        \nBên cạnh đó, bạn có thể thiết lập khoảng thời gian cụ thể để xem báo cáo dữ liệu trong một khung thời gian xác định, chẳng hạn như từ ngày bắt đầu đến ngày kết thúc. Điều này rất hữu ích khi bạn cần phân tích dữ liệu theo các giai đoạn cụ thể, chẳng hạn như trong các chiến dịch khuyến mãi hoặc các quý kinh doanh. Trạng thái thanh toán cũng là một điều kiện lọc quan trọng, cho phép bạn phân biệt giữa các đơn hàng đã thanh toán và các đơn hàng còn nợ.
        \nHơn nữa, bạn có thể lọc dữ liệu theo mã đơn hàng để tìm kiếm và phân tích các đơn hàng cụ thể, kênh bán hàng để xem doanh thu từ các kênh khác nhau như trực tiếp tại cửa hàng hoặc bán hàng online, và thương hiệu sản phẩm để phân tích hiệu quả kinh doanh của từng thương hiệu trong danh mục sản phẩm của bạn.
        \nViệc thêm các điều kiện lọc này không chỉ giúp bạn tìm kiếm thông tin một cách nhanh chóng và chính xác hơn mà còn giúp bạn phân tích dữ liệu chi tiết và có ý nghĩa hơn. Bạn có thể dễ dàng nhận ra các xu hướng, xác định các điểm mạnh và yếu trong hoạt động kinh doanh, và từ đó đưa ra các quyết định chiến lược dựa trên dữ liệu cụ thể và chính xác. Việc sử dụng các điều kiện lọc cũng giúp tiết kiệm thời gian và công sức, đặc biệt khi bạn phải xử lý một lượng lớn dữ liệu và cần tìm kiếm các thông tin cụ thể trong thời gian ngắn.
        \nTóm lại, các tính năng lọc đa dạng và linh hoạt của hệ thống báo cáo không chỉ cải thiện hiệu suất làm việc của bạn mà còn nâng cao chất lượng phân tích và quản lý kinh doanh. Điều này giúp bạn duy trì sự cạnh tranh trên thị trường và phát triển doanh nghiệp một cách bền vững.
        \n<b>2.3. Doanh thu theo khách hàng</b>
        \nBảng báo cáo doanh thu theo khách hàng cung cấp một cái nhìn tổng quát về hoạt động mua bán của từng khách hàng. Trên bảng này, bạn có thể xem chi tiết về số lượng đơn hàng mà khách hàng đã đặt, tổng doanh thu thu được, số tiền được giảm giá, doanh thu thuần sau khi loại bỏ các khoản giảm giá, tổng số sản phẩm đã mua, và các thông tin liên quan như tổng số hóa đơn, số tiền đã thanh toán, số tiền đã hoàn trả, và số sản phẩm đã trả lại.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719060902/Untitled43_uvjzpu.png' alt='Doanh thu theo khách hàng'>
        \nĐể làm cho báo cáo này dễ hiểu, bạn có thể áp dụng các điều kiện lọc như tên cửa hàng để xem hoạt động của khách hàng trong từng cửa hàng cụ thể, danh mục sản phẩm để phân tích dữ liệu theo từng loại sản phẩm, ngày để xem hoạt động kinh doanh trong khoảng thời gian nhất định, và thương hiệu để tìm hiểu hiệu quả của từng thương hiệu trong danh mục sản phẩm.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719061163/Untitled43_a8f0fg.png' alt='Doanh thu theo khách hàng'>
        \nViệc áp dụng các điều kiện lọc này giúp bạn tinh chỉnh báo cáo để phân tích chi tiết hơn và đưa ra các quyết định kinh doanh có căn cứ. Đặc biệt, việc phân tích theo từng khách hàng giúp bạn hiểu rõ hơn về mối quan hệ và xu hướng mua hàng của từng đối tượng khách hàng.
        \n<b>2.4. Chi nhánh bán hàng</b>
        \nBảng báo cáo này cho phép bạn xem tổng quan về hoạt động kinh doanh của hệ thống bán vàng với nhiều chi nhánh khác nhau. Bạn có thể theo dõi số lượng đơn hàng được tạo ra, tổng doanh thu thu được từ các giao dịch, số tiền được giảm giá, và các thông tin khác như doanh thu thuần sau khi loại bỏ các khoản giảm giá.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719062136/Untitled43_cfmkfz.png' alt='Doanh thu theo chi nhánh bán hàng'>
        \nĐiều này giúp bạn có cái nhìn rõ ràng về hiệu suất và hoạt động của từng chi nhánh, từ đó đưa ra các quyết định quản lý hiệu quả hơn. Việc theo dõi và so sánh các chỉ số này giữa các chi nhánh khác nhau cũng giúp bạn nhận ra các mô hình thành công và cơ hội cải thiện trong từng vị trí kinh doanh.
        \n<b>2.5. Nhân viên bán hàng</b>
        \nBảng báo cáo này cung cấp thông tin chi tiết về hoạt động bán hàng của nhân viên qua biểu đồ cột và bảng báo cáo. Biểu đồ cột thể hiện chiều cao tương ứng với tổng doanh thu từ các đơn hàng thành công của từng nhân viên. Bạn có thể tải biểu đồ này dưới ba định dạng khác nhau: SVG, PNG và CSV.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719062336/Untitled43_noliup.png' alt='Doanh thu theo nhân viên bán hàng'>
        \nBảng báo cáo cung cấp các thông tin như tổng số đơn hàng, tổng doanh thu, số tiền giảm giá, doanh thu thuần (doanh thu sau khi loại bỏ giảm giá), tổng số hóa đơn, số tiền đã thu, số tiền đã hoàn trả, tổng giá vốn, tổng lợi nhuận và chi phí vận chuyển. Bạn có thể áp dụng các điều kiện lọc như tên cửa hàng, danh mục sản phẩm, ngày và thương hiệu để tìm kiếm và phân tích dữ liệu cụ thể.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719062578/Untitled43_swje6f.png' alt='Doanh thu theo nhân viên bán hàng'>`,
      },
    ],
  },
  {
    id: 12,
    link: 'gioi-thieu-ve-trang-xuat-nhap-ton',
    label: 'GIỚI THIỆU TRANG XUẤT NHẬP TỒN',
    description: `Chức năng Xuất nhập tồn là công cụ quan trọng trong hệ thống quản lý kho của chúng tôi, giúp bạn dễ dàng theo dõi và điều phối tình hình của các sản phẩm trong kho hàng. Với tính năng này, bạn có thể xem tổng quan về số liệu tồn đầu kỳ, số lượng sản phẩm đã nhập vào kho, số lượng đã bán ra và số lượng tồn cuối kỳ một cách chi tiết và chính xác.`,
    steps: [
      {
        id: 121,
        label: '1. Xem chi tiết sản phẩm',
        description: `Nếu bạn cần xem chi tiết về một sản phẩm cụ thể, chỉ cần nhấp vào biểu tượng con mắt đi kèm với mỗi sản phẩm trong danh sách.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719063805/Untitled43_tow0kd.png' alt='Biểu tượng mắt để xem chi tiết sản phẩm'>
        \nHệ thống sẽ hiển thị các thông tin chi tiết như mã sản phẩm, số lượng hiện có, đơn vị đo lường, danh mục sản phẩm, thông tin về nhà cung cấp và lịch sử xuất nhập tồn. Thông tin chi tiết này cung cấp cho bạn cái nhìn rõ ràng và chi tiết về nguồn gốc, tình trạng và lịch sử chế tác của từng sản phẩm, từ đó hỗ trợ bạn trong việc quản lý kho và đưa ra các quyết định kinh doanh hiệu quả.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719064246/Untitled43_yvkrzl.png' alt='Thông tin chi tiết của sản phẩm'>`,
      },
      {
        id: 112,
        label: '2. Hủy hàng',
        description: `Tại trang chi tiết sản phẩm xuất nhập tồn, bạn không chỉ có thể xem thông tin chi tiết của từng sản phẩm mà còn có thể thực hiện thao tác hủy hàng. Thao tác này cho phép bạn loại bỏ sản phẩm không còn cần thiết khỏi kho hàng của mình một cách dễ dàng.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719064398/Untitled43_eupd4z.png' alt='Hủy hàng'>
        \nKhi bạn chọn tùy chọn Hủy hàng, hệ thống sẽ yêu cầu xác nhận để đảm bảo rằng bạn thực sự muốn xóa sản phẩm đó. Việc này giúp tránh những sự cố không mong muốn có thể ảnh hưởng đến các số liệu tồn kho và các báo cáo liên quan.`,
      },
    ],
  },
  {
    id: 13,
    link: 'huong-dan-su-dung-trang-tong-quan-khach-hang',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG TỔNG QUAN KHÁCH HÀNG',
    steps: [
      {
        id: 131,
        label: '1. Biểu đồ',
        description: `Trong phần tổng quan về khách hàng, hệ thống sẽ trình bày các biểu đồ minh họa về hành vi mua sắm của khách hàng, cung cấp thông tin chi tiết về tần suất mua hàng để bạn có thể theo dõi và phân tích. Ngoài ra, biểu đồ về số lượt mua hàng theo từng tỉnh thành sẽ giúp bạn hiểu rõ hơn về các khu vực có hoạt động mua bán sôi động, từ đó phát triển các chiến lược kinh doanh hiệu quả.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719065266/Untitled43_w4ck0u.png' alt='Biểu đồ theo tỉnh thành'>
        \nCác thống kê về lượt mua theo giới tính, độ tuổi và loại khách hàng (như VIP, khách quen, khách vãng lai) cũng được biểu diễn một cách trực quan. Nhờ vào việc phân tích này, bạn có thể nhận biết và phân loại khách hàng một cách chính xác hơn, từ đó xây dựng các chương trình khuyến mãi và dịch vụ chăm sóc khách hàng phù hợp.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719065494/Untitled43_w1katm.png' alt='Biểu đồ theo giới tính'>
        <div style='text-align:center;color:green'>Thống kê về lượt mua theo giới tính</div>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719065908/Untitled43_ckr9q4.png' alt='Biểu đồ theo độ tuổi'>
        <div style='text-align:center;color:green'>Thống kê về lượt mua theo độ tuổi</div>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719066032/Untitled43_d6wjxj.png' alt='Biểu đồ theo loại khách hàng'>
        <div style='text-align:center;color:green'>Thống kê về lượt mua theo loại khách hàng</div>
        \nViệc tối ưu hóa trải nghiệm khách hàng và nâng cao hiệu quả kinh doanh sẽ được thúc đẩy mạnh mẽ hơn thông qua sự hiểu biết sâu sắc về đối tượng khách hàng của bạn.`,
      },
    ],
  },
  {
    id: 14,
    link: 'huong-dan-su-dung-trang-nhom-khach-hang',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG NHÓM KHÁCH HÀNG',
    steps: [
      {
        id: 141,
        label: '1. Thêm nhóm khách hàng',
        description: `Để thêm một nhóm khách hàng mới, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Truy cập vào chức năng thêm nhóm khách hàng
        \nĐầu tiên, trên giao diện của trang nhóm khách hàng, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719067337/Untitled43_svkeoa.png' alt='Mở giao diện thêm nhóm khách hàng'>
        \n<b>Bước 2:</b> Chọn thêm nhóm khách hàng
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu <b>+</b>.
        \nHệ thống sẽ mở ra một form thêm nhóm khách hàng mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719067205/Untitled43_pwrylw.png' alt='Mở giao diện thêm nhóm khách hàng'>
        \n<b>Bước 3:</b> Nhập thông tin
        \nTại đây, bạn cần nhập các thông tin sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Tên: Đặt tên để dễ dàng nhận diện nhóm khách hàng này trong tương lai.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Trạng thái: Chọn trạng thái hoạt động của nhóm khách hàng như kích hoạt hoặc không kích hoạt.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Ghi chú (nếu có): Thêm bất kỳ thông tin bổ sung nào về nhóm khách hàng, như các đặc điểm đặc thù hoặc lưu ý quan trọng.
        \n<b>Bước 4:</b> Hoàn tất thêm nhóm khách hàng
        \nSau khi điền đầy đủ thông tin, nhấn vào nút <b>"Hoàn tất"</b> để lưu thông tin nhóm khách hàng mới.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719067901/Untitled43_fuqhhn.png' alt='Hoàn tất thêm nhóm khách hàng'>
        \n<b>Tổng kết</b>
        \nViệc thêm nhóm khách hàng mới sẽ giúp bạn phân loại khách hàng theo các tiêu chí cụ thể, quản lý hiệu quả hơn và phát triển các chiến lược kinh doanh phù hợp với từng nhóm. Hệ thống quản lý khách hàng sẽ lưu trữ và hiển thị thông tin về nhóm khách hàng một cách trực quan, giúp bạn dễ dàng theo dõi và điều chỉnh các chiến lược tiếp cận khách hàng khi cần thiết.`,
      },
      {
        id: 142,
        label: '2. Chỉnh sửa thông tin nhóm khách hàng',
        description: `Để chỉnh sửa thông tin một nhóm khách hàng, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn nhóm khách hàng cần chỉnh sửa
        \nTruy cập vào danh sách nhóm khách hàng trên hệ thống.
        \nTìm và chọn  nhóm khách hàng mà bạn cần chỉnh sửa thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719070183/Untitled43_mae7zb.png' alt='Chọn nhóm khách hàng cần chỉnh sửa thông tin'>
        \n<b>Bước 2:</b> Mở form chỉnh sửa
        \nSau khi chọn nhóm khách hàng, nhấn vào biểu tượng cây <b>🖉</b> nằm bên phía bên phải để bắt đầu chỉnh sửa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719070010/Untitled43_xkhmpw.png' alt='Chọn biểu tượng để thực hiện chỉnh thông tin nhóm khách hàng'>
        \nHệ thống sẽ hiển thị form thông tin chi tiết của nhóm khách hàng đó.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719070286/Untitled43_mujtcc.png' alt='Hệ thống hiển thị thông tin nhóm khách hàng được thiết lập ban đầu'>
        \n<b>Bước 3:</b>  Cập nhật thông tin
        \nTrong form chi tiết, cập nhật các thông tin mà bạn muốn thay đổi như tên, ghi chú, trạng thái.
        \nĐảm bảo rằng các thông tin mới được nhập chính xác và đầy đủ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719070447/Untitled43_obbwra.png' alt='Chỉnh sửa thông tin chi tiết của nhóm khách hàng'>
        \n<b>Bước 4:</b> Lưu thay đổi
        \nSau khi đã cập nhật xong thông tin, nhấn nút <b>"Hoàn tất"</b> để lưu các thay đổi.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719070577/Untitled43_iamu5a.png' alt='Chỉnh sửa thông tin chi tiết của nhóm khách hàng'>
        <b>Bước 5:</b> Hủy chỉnh sửa (nếu cần)
        \nNếu bạn quyết định không thực hiện thay đổi, bạn có thể nhấn nút <b>"Hủy"</b> để thoát khỏi form chỉnh sửa mà không lưu bất kỳ thay đổi nào.
        \n<b>Tổng kết</b>
        \nChức năng chỉnh sửa nhóm khách hàng giúp bạn dễ dàng và linh hoạt trong việc cập nhật thông tin, phản ánh đúng tình trạng và chiến lược của doanh nghiệp. Điều này cho phép bạn nhanh chóng thực hiện các điều chỉnh cần thiết, tối ưu hóa quy trình quản lý và chăm sóc khách hàng, và đảm bảo rằng dữ liệu luôn chính xác và phù hợp với thực tế kinh doanh. Nhờ đó, bạn có thể nâng cao hiệu quả quản lý, cải thiện dịch vụ khách hàng và đưa ra những quyết định chiến lược chính xác hơn.`,
      },
      {
        id: 143,
        label: '3. Xóa nhóm khách hàng',
        description: `Để xóa một nhóm khách hàng, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn nhóm khách hàng
        \nTruy cập vào danh sách nhóm khách hàng và xác định nhóm mà bạn muốn xóa. Tại đây, bạn sẽ thấy các ô chọn phía trước mỗi tên nhóm khách hàng. Hãy nhấp vào ô này để chọn nhóm khách hàng cần xóa. Bạn có thể chọn một hoặc nhiều nhóm khách hàng cùng lúc.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719068180/Untitled43_savhjz.png' alt='Chọn nhóm khách hàng cần xóa'>
        \n<b>Bước 2:</b> Mở menu tùy chọn
        \nNhấn vào biểu tượng dấu ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719069248/Untitled43_gtpooo.png' alt='Mở tùy chọn xóa nhóm khách hàng'>
        \n<b>Bước 3:</b> Chọn biểu tượng thùng rác
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa nhóm khách hàng.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719069719/Untitled43_wujs03.png' alt='Chọn biểu tượng thùng rác để bắt đầu xóa nhóm khách hàng'>
        \n<b>Bước 4:</b> Xác nhận xóa
        \nHệ thống sẽ hiển thị thông báo: "Bạn có muốn xóa ?"<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719069430/Untitled43_dxk7qe.png' alt='Chọn xác nhận để xóa nhóm khách hàng'>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>. Nhóm khách hàng sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719069587/Untitled43_tvjsvl.png' alt='Thông báo xóa nhóm khách hàng thành công'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn <b>"Hủy"</b>, hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.</div>`,
      },
    ],
  },
  {
    id: 15,
    link: 'gioi-thieu-trang-nhom-quyen',
    label: 'GIỚI THIỆU TRANG NHÓM QUYỀN',
    description:`Chức năng nhóm quyền trong hệ thống quản lý bán vàng là một công cụ quan trọng giúp kiểm soát và phân quyền người dùng một cách hiệu quả. Bằng cách tạo ra các nhóm quyền với các đặc quyền khác nhau, hệ thống đảm bảo rằng mỗi người dùng chỉ có thể truy cập và thực hiện các thao tác phù hợp với vai trò và trách nhiệm của họ. Điều này không chỉ nâng cao tính bảo mật mà còn tăng cường hiệu suất làm việc và giúp quản lý hệ thống dễ dàng hơn.`,
    steps: [
      {
        id: 151,
        label: 'I. DANH SÁCH CÁC QUYỀN',
        description: `<b>Quyền xem</b>
        \nCho phép người dùng truy cập và xem các dữ liệu trong hệ thống mà không thể chỉnh sửa hay xóa chúng. Đây là quyền cơ bản thường được áp dụng cho các vai trò cần giám sát thông tin mà không cần thực hiện các thay đổi trực tiếp.
        \n<b>Quyền thêm</b>
        \nCho phép người dùng tạo mới các dữ liệu trong hệ thống. Ví dụ, nhân viên có thể thêm mới khách hàng, sản phẩm, hoặc hóa đơn. Quyền này thường được cấp cho các vai trò có nhiệm vụ nhập liệu và cập nhật thông tin mới.
        \n<b>Quyền xóa</b>
        \nCho phép người dùng loại bỏ dữ liệu khỏi hệ thống. Việc này có thể bao gồm xóa khách hàng, sản phẩm, hoặc các giao dịch không cần thiết. Quyền này cần được kiểm soát chặt chẽ và chỉ cấp cho những người có thẩm quyền cao để tránh mất mát dữ liệu quan trọng.
        \n<b>Quyền sửa</b>
        \nCho phép người dùng chỉnh sửa các dữ liệu hiện có trong hệ thống. Điều này rất quan trọng để đảm bảo thông tin luôn được cập nhật và chính xác, nhưng cũng cần kiểm soát để tránh sai sót hoặc chỉnh sửa không phù hợp.
        \n<b>Quản lý khách hàng</b>
        \nLà công cụ toàn diện giúp kiểm soát và duy trì thông tin khách hàng hiệu quả. Bạn có thể thêm, sửa và xóa thông tin khách hàng, đảm bảo dữ liệu luôn cập nhật và chính xác. Hệ thống hỗ trợ quản lý sinh nhật khách hàng, giúp theo dõi và chăm sóc vào các dịp đặc biệt. Chức năng tổng quan khách hàng cho phép nắm bắt thông tin và hành vi mua hàng, từ đó đề ra chiến lược kinh doanh phù hợp. Bạn cũng có thể quản lý thẻ khách hàng, phân loại và nhóm khách hàng để tổ chức và phân tích dữ liệu dễ dàng. Hệ thống còn hỗ trợ quản lý nguồn kênh, theo dõi và phân tích hiệu quả các kênh tiếp cận khách hàng khác nhau.
        \n<b>Quản lý hóa đơn</b>
        \nLà công cụ mạnh mẽ giúp kiểm soát toàn bộ quy trình hóa đơn và giao dịch bán hàng. Bạn có thể thêm, sửa và xóa hóa đơn, đảm bảo thông tin giao dịch luôn chính xác. Quyền này cũng cho phép quản lý giao dịch cầm vàng, yêu cầu và xác nhận hủy hóa đơn, với hệ thống lưu trữ hóa đơn đã hủy và lịch sử giao dịch để dễ dàng tra cứu. Ngoài ra, các chức năng quản lý bảo hành và trả hàng giúp theo dõi cam kết bảo hành và xử lý trả hàng nhanh chóng, chính xác.
        \n<b>Quản lý kho hàng</b>
        \nLà công cụ toàn diện giúp kiểm soát và điều phối hiệu quả các hoạt động liên quan đến kho bãi và sản phẩm. Bạn có thể thêm, sửa và xóa kho sản phẩm, theo dõi quy trình mua sắm, và quản lý kho chế tác, gia công một cách linh hoạt. Ngoài ra, chức năng quản lý nhóm sản phẩm, danh mục, đơn vị và thương hiệu giúp tổ chức và phân loại hàng hóa dễ dàng. Quyền này cũng cho phép quản lý đề xuất mua hàng, nhà cung cấp, và các hoạt động nhập, xuất, chuyển, hủy hàng cùng lịch sử chi tiết, đảm bảo mọi biến động trong kho được theo dõi minh bạch.
        \n<b>Quản lý kế toán</b>
        \nLà tính năng quan trọng giúp kiểm soát và điều hành hiệu quả các hoạt động tài chính. Bạn có thể quản lý thu chi, theo dõi các khoản thu và chi của doanh nghiệp, đảm bảo sự minh bạch và chính xác trong ghi chép tài chính. Chức năng này cho phép thêm, sửa và xóa các giao dịch thu chi, giúp cập nhật, chỉnh sửa và loại bỏ các giao dịch không hợp lệ một cách dễ dàng.
        \n<b>Phân tích báo cáo</b>
        \nLà công cụ mạnh mẽ giúp theo dõi và đánh giá toàn diện hiệu quả kinh doanh. Chức năng này cung cấp các báo cáo chi tiết về doanh thu, công nợ, chi phí mua hàng, và xuất nhập tồn, giúp bạn quản lý tài chính và kho hàng hiệu quả. Báo cáo sản phẩm cung cấp số liệu về hiệu suất của từng mặt hàng, hỗ trợ tối ưu hóa kinh doanh. Thống kê tổng hợp cung cấp cái nhìn toàn cảnh về hoạt động kinh doanh, giúp đưa ra quyết định chiến lược chính xác và kịp thời.
        \n<b>Quản lý tài khoản người dùng</b>
        \nLà tính năng quan trọng giúp đảm bảo an ninh và hiệu quả hoạt động của doanh nghiệp. Chức năng này cho phép bạn thêm mới, chỉnh sửa và xóa tài khoản người dùng, kiểm soát truy cập và phân công nhiệm vụ chính xác cho từng nhân viên. Bạn cũng có thể quản lý nhóm quyền, tạo mới, chỉnh sửa và xóa nhóm quyền, thiết lập quyền truy cập và hành động phù hợp cho từng vai trò trong tổ chức.
        \n<b>Quản lý cửa hàng</b>
        \nLà chức năng thiết yếu giúp người dùng thực hiện quản lý toàn diện liên quan đến cửa hàng và kho hàng. Bạn có thể thêm mới, chỉnh sửa và xóa cửa hàng, dễ dàng cập nhật thông tin và duy trì cấu trúc hệ thống hiệu quả. Quản lý kho hàng bao gồm thêm, sửa và xóa kho, đảm bảo quản lý hàng tồn kho và lưu trữ hàng hóa chính xác. Chức năng này cũng cho phép quản lý loại cửa hàng, phân loại và tổ chức theo các tiêu chí cụ thể, và quản lý KPI để theo dõi và đánh giá hiệu quả hoạt động của cửa hàng.
        \n<b>Quản trị</b>
        \nLà tập hợp các chức năng quan trọng giúp người dùng điều hành hệ thống một cách hiệu quả. Bạn có thể quản lý thẻ quà tặng, điều chỉnh chương trình khuyến mãi và phần thưởng khách hàng. Chức năng vận chuyển giúp quản lý các tùy chọn giao nhận hàng hóa đúng kế hoạch. Hỗ trợ quản lý tích điểm và danh sách chặn, cùng với khả năng quản lý thông báo, nhật ký hoạt động và nhân viên bán hàng. Quản lý khu vực và sơ đồ, từ thêm mới đến chỉnh sửa và xóa, giúp tăng cường kiểm soát và điều hành của doanh nghiệp.`,
      },
      {
        id: 152,
        label: 'II. LỢI ÍCH',
        description: `Việc phân quyền cụ thể và rõ ràng giúp nâng cao tính bảo mật, đảm bảo rằng các thao tác quan trọng chỉ được thực hiện bởi những người có thẩm quyền. Đồng thời, nó cũng giúp tăng cường hiệu suất làm việc bằng cách xác định rõ vai trò và trách nhiệm của từng người dùng. Bằng cách sử dụng chức năng nhóm quyền, doanh nghiệp có thể quản lý hệ thống một cách hiệu quả, giảm thiểu rủi ro và tối ưu hóa các quy trình làm việc.
        \nChức năng nhóm quyền không chỉ giúp tổ chức công việc một cách logic và khoa học mà còn tạo nên một môi trường làm việc chuyên nghiệp và an toàn. Với sự phân quyền chính xác, doanh nghiệp có thể yên tâm rằng thông tin và dữ liệu của mình luôn được bảo vệ và quản lý tốt.`,
      },
    ],
  },
  {
    id: 16,
    link: 'huong-dan-su-dung-trang-nhom-quyen',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG NHÓM QUYỀN',
    description:`<iframe width="100%" height="400" src="https://www.youtube.com/embed/UdV4yCcgJIQ?start=12" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    steps: [
      {
        id: 161,
        label: '1. Thêm nhóm quyền cho người dùng',
        description: `<b>Bước 1:</b> Chọn thêm nhóm quyền
        \nTruy cập vào giao diện nhóm quyền của người dùng trên hệ thống.
        \nTại góc phải màn hình, nhấp vào biểu tượng dấu <b>☰</b> để mở các lựa chọn khác nhau.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719152955/Untitled44_yu7ybr.png' alt='Chọn dấu ☰ để mở chức năng thêm'>
        \nChọn tùy chọn "Thêm nhóm quyền" được ký hiệu bằng dấu <b>+</b> để tiến hành bước tiếp theo.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719153116/Untitled44_znyk5c.png' alt='Chọn dấu + để thực hiện chức năng thêm'>
        \n<b>Bước 2:</b> Nhập thông tin nhóm quyền
        \n&nbsp;Khi giao diện thêm nhóm quyền hiện ra, nhập các thông tin cần thiết:
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tên của nhóm quyền: Đặt tên cho nhóm quyền mới để dễ dàng nhận diện và quản lý sau này.
        \n&nbsp;&nbsp;&nbsp;&nbsp;Trạng thái (kích hoạt/không kích hoạt): Chọn trạng thái cho nhóm quyền này. Nếu nhóm quyền được kích hoạt, người dùng trong nhóm này sẽ có thể sử dụng các quyền đã được cấp. Nếu không, quyền của nhóm sẽ không có hiệu lực.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719153403/Untitled44_qddw0i.png' alt='Giao diện của chức năng thêm nhóm quyền'>
        \n&nbsp;Chọn các quyền cần thiết cho nhóm quyền từ danh sách quyền.
        \nChúng tôi đã giới thiệu về nhóm quyền ở phần trước. Nếu bạn chưa đọc vui lòng <b><a href='gioi-thieu-trang-nhom-quyen'>nhấn vào đây</a></b> để tìm hiểu về các nhóm quyền.
        \n&nbsp;Chọn vào ô vuông tương ứng với mỗi quyền mà bạn muốn nhóm quyền này có. Nếu muốn nhóm quyền này có đầy đủ các quyền, bạn có thể chọn tất cả các ô vuông.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719153660/Untitled44_wkftf9.png' alt='Giao diện của chức năng thêm nhóm quyền'>
        \n<b>Bước 3:</b> Hoàn tất
        \nSau khi đã nhập đầy đủ thông tin và chọn các quyền cần thiết, nhấn nút <b>"Hoàn tất"</b> để hoàn tất quá trình thêm nhóm quyền.
        \nNhóm quyền mới sẽ được tạo và thêm vào hệ thống, sẵn sàng để được gán cho các người dùng tương ứng.`,
      },
      {
        id: 162,
        label: '2. Xóa nhóm quyền',
        description: `<b>Bước 1:</b> Chọn nhóm quyền cần xóa
        \nTruy cập vào danh sách nhóm quyền trên hệ thống.
        \nTìm và chọn nhóm quyền mà bạn muốn xóa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719154449/Untitled44_qt5oyb.png' alt='Chọn nhóm quyền cần xóa'>
        \nBạn có thể chọn tất cả nhóm quyền bằng cách:<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719154682/Untitled44_cmqbpb.png' alt='Chọn nhóm quyền cần xóa'>
        <div style='text-align:center;color:green'>Hãy cân nhắc khi sử dụng chức năng này</div>
        \n<b>Bước 2:</b> Mở menu tùy chọn
        \nNhấn vào biểu tượng ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719154778/Untitled44_bzvsly.png' alt='Chọn dấu 3 gạch để mở chức năng xóa'>
        \n<b>Bước 3:</b> Chọn biểu tượng thùng rác
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa nhóm quyền.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719154921/Untitled44_tqbv5s.png' alt='Chọn biểu tượng thùng rác để sử dụng chức năng xóa'>
        \n<b>Bước 4:</b> Xác nhận xóa
        \nHệ thống sẽ hiển thị thông báo: "Bạn có muốn xóa ?"<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719155033/Untitled44_mik7zk.png' alt='Xác nhận xóa'>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>. Nhóm quyền sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719155172/Untitled44_zrpydn.png' alt='Thông báo xóa thành công'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn <b>"Hủy"</b>, hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.</div>`,
      },
      {
        id: 163,
        label: '3. Chỉnh sửa thông tin nhóm quyền',
        description: `<b>Bước 1:</b> Chọn nhóm quyền cần chỉnh sửa
        \nTruy cập vào danh sách nhóm quyền trên hệ thống.
        \nTìm và chọn nhóm quyền mà bạn cần chỉnh sửa thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719156014/Untitled44_y9hlj7.png' alt='Chọn nhóm quyền cần chỉnh sửa thông tin'>
        \n<b>Bước 2:</b> Mở form chỉnh sửa
        \nSau khi chọn nhóm quyền, nhấn vào biểu tượng cây <b>🖉</b> nằm bên phía bên phải để bắt đầu chỉnh sửa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719156135/Untitled44_zk8awk.png' alt='Chọn biểu tượng cây viết để chỉnh sửa thông tin'>
        \nHệ thống sẽ hiển thị form thông tin chi tiết của nhóm quyền đó.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719156262/Untitled44_mncctu.png' alt='Chọn biểu tượng cây viết để chỉnh sửa thông tin'>
        \n<b>Bước 3:</b> Cập nhật thông tin
        \nTrong form chi tiết, cập nhật các thông tin mà bạn muốn thay đổi như họ tên nhóm quyền, trạng thái, danh sách quyền.
        \nĐảm bảo rằng các thông tin mới được nhập chính xác và đầy đủ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719156442/Untitled44_u1jyhn.png' alt='Cập nhật thông tin cho nhóm quyền'>
        \n<b>Bước 4:</b> Lưu thay đổi
        \nSau khi đã cập nhật xong thông tin, nhấn nút <b>"Hoàn tất"</b> để lưu các thay đổi.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719156535/Untitled44_rtmr7e.png' alt='Cập nhật thông tin cho nhóm quyền thành công'>
        \n<b>Bước 5:</b> Hủy chỉnh sửa (nếu cần)
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn quyết định không thực hiện thay đổi, bạn có thể nhấn nút <b>"Hủy"</b> để thoát khỏi form chỉnh sửa mà không lưu bất kỳ thay đổi nào.</div>`,
      },
    ],
  },
  {
    id: 17,
    link: 'huong-dan-su-dung-trang-loai-cua-hang',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG LOẠI CỬA HÀNG',
    description:`<iframe width="100%" height="400" src="https://www.youtube.com/embed/KITv7aCsZmU?start=31" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    steps: [
      {
        id: 171,
        label: '1. Thêm loại cửa hàng', 
        description: `<b>Bước 1:</b> Truy cập vào chức năng thêm loại cửa hàng
        \nĐầu tiên, trên giao diện của trang quản lý loại cửa hàng, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719195167/Untitled45_zklgsn.png' alt='Mở giao diện để thêm loại cửa hàng'>
        \n<b>Bước 2:</b> Chọn thêm loại cửa hàng
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu cộng <b>+</b>.
        \nHệ thống sẽ mở ra một form thêm loại cửa hàng mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719471954/Untitled50_cdg4mv.png' alt='Giao diện hiển thị form để khách hàng thêm thông tin loại cửa hàng mới'>
        \n<b>Bước 3:</b> Hoàn tất thêm loại cửa hàng
        \nSau khi điền đầy đủ thông tin, nhấn vào nút <b>"Hoàn tất"</b> để lưu thông tin loại cửa hàng mới.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719196101/Untitled45_wvhat4.png' alt='Giao diện hiển thị thông báo thêm loại cửa hàng mới'>`,
      },
      {
        id: 172,
        label: '2. Chỉnh sửa thông tin loại cửa hàng',
        description: `<b>Bước 1:</b> Chọn loại cửa hàng cần chỉnh sửa
        \nTruy cập vào danh sách loại cửa hàng trên hệ thống.
        \nTìm và chọn loại cửa hàng mà bạn cần chỉnh sửa thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719196581/Untitled45_pkatv7.png' alt='Chọn loại cửa hàng cần sửa'>
        \n<b>Bước 2:</b> Mở form chỉnh sửa
        \nSau khi chọn loại cửa hàng, nhấn vào biểu tượng cây <b>🖉</b> nằm bên phía bên phải để bắt đầu chỉnh sửa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719196786/Untitled45_wauqhw.png' alt='Chọn biểu tượng cây viết để mở form chủnh'>
        \n<b>Bước 3:</b> Cập nhật thông tin
        \nTrong form chi tiết, cập nhật các thông tin mà bạn muốn thay đổi như tên, ghi chú, trạng thái.
        \nĐảm bảo rằng các thông tin mới được nhập chính xác và đầy đủ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719196999/Untitled45_ekflhc.png' alt='Nhập thông tin thay đổi vào form'>
        \n<b>Bước 4:</b> Lưu thay đổi
        \nSau khi đã cập nhật xong thông tin, nhấn nút <b>"Hoàn tất"</b> để lưu các thay đổi.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719196999/Untitled45_ekflhc.png' alt='Chọn '>
        \n<b>Bước 5:</b> Hủy chỉnh sửa (nếu cần)
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn quyết định không thực hiện thay đổi, bạn có thể nhấn nút <b>"Hủy"</b> để thoát khỏi form chỉnh sửa mà không lưu bất kỳ thay đổi nào.</div>`
        ,
      },
      {
        id: 173,
        label: '3. Xóa loại cửa hàng',
        description: `<b>Bước 1:</b> Chọn loại cửa hàng cần xóa
        \nTruy cập vào danh sách loại cửa hàng trên hệ thống.
        \nTìm và chọn loại cửa hàng mà bạn muốn xóa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719199383/Untitled45_nilby8.png' alt='Chọn loại cửa hàng cần xóa'>
        \n<b>Bước 2:</b> Mở menu tùy chọn
        \nNhấn vào biểu tượng ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719199576/Untitled45_vpg5gq.png' alt='Chọn loại biểu tượng để thực hiện xóa loại cửa hàng'>
        \n<b>Bước 3:</b> Chọn biểu tượng thùng rác
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa loại cửa hàng.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719199711/Untitled45_jcnxck.png' alt='Chọn loại biểu tượng thùng rác để thực hiện xóa loại cửa hàng'>
        \n<b>Bước 4:</b> Xác nhận xóa
        \nHệ thống sẽ hiển thị thông báo: "Bạn có muốn xóa ?"<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719199831/Untitled45_bulzfn.png' alt='Chọn loại biểu tượng thùng rác để thực hiện xóa loại cửa hàng'>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>. Loại cửa hàng sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719200200/Untitled45_ylkdjh.png' alt='Xóa loại cửa hàng thành công'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn <b>"Hủy"</b>, hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.</div>`,
      },
    ],
  },
  {
    id: 18,
    link: 'huong-dan-su-dung-trang-chan-truy-cap',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG CHẶN TRUY CẬP',
    description:``,
    steps: [
      {
        id: 181,
        label: '1. Thêm chặn truy cập',
        description: `<b>Bước 1:</b> Truy cập vào chức năng thêm chặn truy cập
        \nĐầu tiên, trên giao diện của trang quản lý chặn truy cập, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.     
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719204748/Untitled45_suykxf.png' alt='Mở giao diện để thêm chặn truy cập'>
        \n<b>Bước 2:</b> Chọn thêm chặn truy cập
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu cộng <b>+</b>.
        \nHệ thống sẽ mở ra một form thêm chặn truy cập mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719204869/Untitled45_ivlljf.png' alt='Mở giao diện để thêm chặn truy cập'>
        \n<b>Bước 3:</b> Nhập thông tin chặn truy cập
        \nTại đây, bạn cần nhập các thông tin sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • <b>Địa chỉ IP:</b> Nhập địa chỉ IP của thiết bị mà bạn muốn chặn truy cập. Địa chỉ IP này sẽ xác định chính xác thiết bị bị chặn
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • <b>Nội dung chặn (nếu có):</b> Bạn có thể thêm ghi chú hoặc nội dung liên quan đến lý do chặn truy cập. Đây là thông tin tùy chọn nhưng hữu ích để ghi lại chi tiết về lý do chặn.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • <b>Trạng thái:</b> Chọn trạng thái cho chặn truy cập, có thể là "Kích hoạt" nếu bạn muốn lệnh chặn có hiệu lực ngay lập tức hoặc "Không kích hoạt" nếu bạn muốn lưu nhưng không kích hoạt ngay.
        \n<b>Bước 4:</b> Hoàn tất thêm chặn truy cập
        \nSau khi điền đầy đủ thông tin, nhấn vào nút <b>"Hoàn tất"</b> để lưu thông tin chặn truy cập mới.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719205401/Untitled45_nk3dsw.png' alt='Mở giao diện để thêm loại cửa hàng'>`,
      },
      {
        id: 182,
        label: '2. Chỉnh sửa thông tin chặn truy cập',
        description: `Để chỉnh sửa thông tin chặn truy cập, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn IP bị chặn cần chỉnh sửa
        \nTruy cập vào danh sách chặn truy cập trên hệ thống.
        \nTìm và chọn IP bị chặn mà bạn cần chỉnh sửa thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719210512/Untitled45_at4t4h.png' alt='Chọn IP bị chặn cần sửa'>
        \n<b>Bước 2:</b> Mở form chỉnh sửa
        \nSau khi chọn IP bị chặn, nhấn vào biểu tượng cây <b>🖉</b> nằm bên phía bên phải để bắt đầu chỉnh sửa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719201756/Untitled45_rpwson.png' alt='Chọn biểu tượng cây viết để mở form chỉnh sửa'>
        \n<b>Bước 3:</b> Cập nhật thông tin
        \nTrong form chi tiết, cập nhật các thông tin mà bạn muốn thay đổi như IP, nội dung, trạng thái.
        \nĐảm bảo rằng các thông tin mới được nhập chính xác và đầy đủ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719211650/Untitled45_mmdcez.png' alt='Nhập thông tin thay đổi vào form'>
        \n<b>Bước 4:</b> Lưu thay đổi
        \nSau khi đã cập nhật xong thông tin, nhấn nút <b>"Hoàn tất"</b> để lưu các thay đổi.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719211729/Untitled45_fwvsgc.png' alt='Thông báo cập nhật thông tin thành công'>
        \n<b>Bước 5: Hủy chỉnh sửa (nếu cần)</b>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn quyết định không thực hiện thay đổi, bạn có thể nhấn nút <b>"Hủy"</b> để thoát khỏi form chỉnh sửa mà không lưu bất kỳ thay đổi nào.</div>`,
      },
      {
        id: 183,
        label: '3. Xóa IP bị chặn',
        description: `<b>Bước 1:</b> Chọn IP bị chặn cần xóa
        \nTruy cập vào danh sách chặn truy cập trên hệ thống.
        \nTìm và chọn IP bị chặn mà bạn muốn xóa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719212071/Untitled45_ptc1rw.png' alt='Chọn IP bị chặn cần xóa'>
        \n<b>Bước 2:</b> Mở menu tùy chọn
        \nNhấn vào biểu tượng ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719211901/Untitled45_bb1h0d.png' alt='Chọn loại biểu tượng để thực hiện xóa IP bị chặn'>
        \n<b>Bước 3:</b> Chọn biểu tượng thùng rác
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa IP bị chặn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719211957/Untitled45_biwm2f.png' alt='Chọn loại biểu tượng thùng rác để thực hiện xóa IP bị chặn'>
        \n<b>Bước 4:</b> Xác nhận xóa
        \nHệ thống sẽ hiển thị thông báo: "Bạn có muốn xóa ?"<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719212123/Untitled45_ndrd9w.png' alt='Hiển thị thông báo yêu cầu người dùng xác nhận xóa'>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>. IP bị chặn sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719203159/Untitled45_kn0bg5.png' alt='Xóa IP bị chặn thành công'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn <b>"Hủy"</b>, hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.</div>`,
      },
    ],
  },
  {
    id: 19,
    link: 'gioi-thieu-trang-thu-chi',
    label: 'GIỚI THIỆU TRANG THU CHI',
    description:`Chức năng quản lý thu chi là một phần không thể thiếu trong hệ thống quản lý tài chính của bất kỳ doanh nghiệp nào. Với hệ thống ECLO, việc quản lý thu chi trở nên dễ dàng và hiệu quả hơn, giúp doanh nghiệp kiểm soát tài chính, tối ưu hóa dòng tiền và đảm bảo tính minh bạch trong các giao dịch.
    \n<b>Quản Lý Thu Chi Hiệu Quả</b>
    \nKiểm soát tài chính: ECLO cung cấp công cụ quản lý thu chi toàn diện, giúp doanh nghiệp theo dõi và kiểm soát mọi giao dịch tài chính.
    \nTối ưu hóa dòng tiền: Hệ thống cho phép tối ưu hóa dòng tiền, đảm bảo rằng doanh nghiệp luôn có đủ nguồn lực để hoạt động và phát triển.
    \nĐảm bảo tính minh bạch: Tất cả các giao dịch đều được ghi nhận một cách minh bạch và chính xác, giúp doanh nghiệp duy trì sự tin cậy và tuân thủ các quy định pháp luật.`,
    steps: [
      {
        id: 191,
        label: '1. Quản lý giao dịch thu chi',
        description: `Ghi nhận và theo dõi tất cả các giao dịch thu chi.
        \nDễ dàng phân loại và tra cứu giao dịch theo thời gian, loại giao dịch, và nguồn gốc.`,
      },
      {
        id: 192,
        label: '2. Tích hợp hệ thống kế toán',
        description: `Tích hợp với các hệ thống kế toán hiện có để đồng bộ hóa dữ liệu.
        \nĐảm bảo sự chính xác và nhất quán trong việc quản lý tài chính.`,
      },
      {
        id: 193,
        label: '3. Quản lý ngân sách',
        description: `Theo dõi ngân sách một cách chi tiết.
        \nHỗ trợ doanh nghiệp duy trì sự kiểm soát và thực hiện các mục tiêu tài chính.`,
      },
      {
        id: 194,
        label: '4. Lợi ích',
        description: `&nbsp;&nbsp;&nbsp;&nbsp;• Tiết kiệm thời gian và chi phí: Giảm thiểu công việc thủ công, tiết kiệm thời gian và chi phí quản lý tài chính.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Nâng cao hiệu suất: Tăng cường hiệu suất làm việc của đội ngũ tài chính và kế toán.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Cải thiện quản lý: Cải thiện khả năng quản lý và đưa ra quyết định dựa trên dữ liệu chính xác và kịp thời.`,
      },
    ],
  },
  {
    id: 20,
    link: 'gioi-thieu-trang-loai-cua-hang',
    label: 'GIỚI THIỆU TRANG LOẠI CỬA HÀNG',
    description:`Hệ thống Eclo cung cấp một công cụ quản lý loại cửa hàng hiện đại và hiệu quả, giúp doanh nghiệp theo dõi và quản lý các loại cửa hàng một cách chi tiết và có hệ thống. Thông qua giao diện bảng thông tin chi tiết, hệ thống quản lý loại cửa hàng bao gồm ba cột chính: tên loại cửa hàng, ghi chú cho cửa hàng, và trạng thái hoạt động (kích hoạt/không kích hoạt).`,
    steps: [
      {
        id: 201,
        label: 'I. NỘI DUNG',
        description: `<b>Tên loại cửa hàng:</b>
        \nTên loại cửa hàng được liệt kê rõ ràng và chia thành các danh mục cụ thể như cửa hàng trang sức, cửa hàng nữ trang, và cửa hàng kim cương. Mỗi loại cửa hàng phục vụ các đối tượng khách hàng khác nhau, với các sản phẩm đặc trưng như:
        \n<b>Ví dụ:</b>
        \n&nbsp;&nbsp;&nbsp;&nbsp;• <b>Cửa hàng trang sức</b>: Cung cấp nhẫn, vòng cổ, và lắc tay.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• <b>Cửa hàng nữ trang:</b> Chuyên bán dây chuyền, vòng tay dành riêng cho phụ nữ.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• <b>Cửa hàng kim cương:</b> Tập trung vào các sản phẩm cao cấp như nhẫn cưới và bông tai gắn kim cương.
        \n<b>Ghi chú cho cửa hàng:</b>
        \nGhi chú là phần thông tin quan trọng, cung cấp các chi tiết cụ thể về từng cửa hàng. Chúng có thể bao gồm thông tin về bộ sưu tập mới nhất, chương trình khuyến mãi, dịch vụ hậu mãi, các sự kiện đặc biệt, đánh giá từ khách hàng, và các điểm nổi bật của cửa hàng. Những ghi chú này giúp quản lý nắm bắt tình hình và các hoạt động đặc thù của từng cửa hàng, từ đó theo dõi và đánh giá hiệu quả kinh doanh một cách dễ dàng.
        \n<b>Trạng thái hoạt động:</b>
        \nTrạng thái hoạt động của từng cửa hàng được ghi nhận rõ ràng trong bảng thông tin. Trạng thái "kích hoạt" cho biết cửa hàng đang hoạt động bình thường và phục vụ khách hàng, trong khi trạng thái "không kích hoạt" cho thấy cửa hàng đang tạm ngưng hoạt động hoặc đã đóng cửa. Việc xác định trạng thái hoạt động giúp quản lý nắm được số lượng cửa hàng đang thực sự hoạt động, phân bổ nguồn lực, và đưa ra các chiến lược kinh doanh và marketing phù hợp.`,
      },
      {
        id: 202,
        label: 'II. LỢI ÍCH',
        description: `Việc theo dõi và cập nhật thông tin trong bảng này thường xuyên giúp quản lý có cái nhìn tổng quan và chi tiết về tình hình hoạt động của các cửa hàng. Điều này không chỉ giúp ra quyết định nhanh chóng và chính xác mà còn hỗ trợ trong việc lập kế hoạch dài hạn cho việc phát triển và mở rộng kinh doanh. Quản lý có thể dễ dàng nhận ra xu hướng thị trường, đánh giá hiệu quả của các chiến lược hiện tại, và điều chỉnh kịp thời để đáp ứng nhu cầu của khách hàng và thị trường.
        \nHệ thống quản lý loại cửa hàng của ECLO là công cụ không thể thiếu để tối ưu hóa hiệu quả kinh doanh và đảm bảo tính minh bạch trong các hoạt động của doanh nghiệp. Hãy khám phá và trải nghiệm những lợi ích mà hệ thống mang lại cho việc quản lý cửa hàng của bạn!`,
      },
    ],
  },
  {
    id: 21,
    link: 'huong-dan-su-dung-trang-kho-san-pham',
    label: 'KHO SẢN PHẨM',
    description: `Quản lý kho sản phẩm là một chức năng quan trọng giúp các doanh nghiệp quản lý hiệu quả việc lưu trữ và vận chuyển sản phẩm. Hệ thống này bao gồm nhiều tính năng chính để hỗ trợ quá trình quản lý. Đầu tiên là chức năng tìm kiếm sản phẩm, cho phép bạn nhanh chóng tìm kiếm sản phẩm trong kho bằng cách nhập tên, mã sản phẩm hoặc các từ khóa liên quan vào ô tìm kiếm. Điều này giúp bạn dễ dàng truy cập thông tin của một sản phẩm cụ thể mà không cần duyệt qua toàn bộ danh sách.
        \nDanh sách sản phẩm trong kho hiển thị các thông tin chi tiết về sản phẩm, bao gồm hình ảnh sản phẩm để bạn có thể nhận diện dễ dàng, mã sản phẩm duy nhất để quản lý, tên sản phẩm, thương hiệu, số lượng tồn kho, danh mục phân loại sản phẩm, nhà cung cấp và trạng thái của sản phẩm. Trạng thái sản phẩm được quản lý thông qua nút bật/tắt, giúp bạn quyết định liệu sản phẩm có sẵn để bán hay không.
        \nNgoài ra, hệ thống còn có nút "Thêm điều kiện lọc" cho phép bạn lọc danh sách sản phẩm theo các tiêu chí cụ thể như đơn vị, danh mục, trạng thái, nhóm sản phẩm, và nhiều hơn nữa. Chức năng này giúp thu hẹp phạm vi tìm kiếm, làm cho việc quản lý sản phẩm trở nên hiệu quả và dễ dàng hơn. Nhờ vào hệ thống quản lý kho sản phẩm, doanh nghiệp có thể kiểm soát tốt hơn việc lưu trữ, truy xuất thông tin sản phẩm nhanh chóng và đưa ra các quyết định kinh doanh chính xác.</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719222344/945a268e-86cb-4d36-8f7a-0030d10359ed.png' alt=''
        `,
    steps: [
      {
        id: 211,
        label: '1. Thêm sản phẩm',
        description: `<b>Bước 1: Truy cập vào chức năng thêm sản phẩm</b>
        \nĐầu tiên, trên giao diện của trang quản lý kho sản phẩm, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719231418/7e14e1cf-4623-48df-970f-86869af083cf.png' alt=''>
        \n<b>Bước 2: Chọn thêm sản phẩm</b>
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu cộng <b>+</b>.
        \nHệ thống sẽ mở ra một form thêm sản phẩm mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719223664/8c6399e7-0e2d-4ef6-8162-9eeb6fb823b8.png' alt=''>
        \n<b>Bước 3: Nhập thông tin sản phẩm</b>
        \nTrên form thêm sản phẩm, bạn sẽ thấy các trường thông tin như:<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719231487/3c83134d-d27f-47ef-8ab9-16f58a9833dc.png' alt=''>
        \nNhập thông tin sản phẩm vào các trường tương ứng.
        \n<b>Bước 4: Hoàn tất thêm sản phẩm</b>
        \nSau khi điền đầy đủ thông tin, nhấn vào nút "Hoàn tất" để lưu thông tin sản phẩm mới.
        \nHệ thống sẽ xử lý và thông báo cập nhật thành công.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719231592/c7119c4f-e476-48e1-bab3-bdda96fbb8e3.png' alt=''>`,
       
      },
      {
        id: 212,
        label: '2. Xóa sản phẩm',
        description: `<b>Bước 1: Chọn sản phẩm cần xóa</b>
        \nTruy cập vào danh sách sản phẩm trên hệ thống.
        \nTìm và chọn sản phẩm mà bạn muốn xóa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719231989/0f8fd222-f436-4f90-8cb1-6c3bca591b45.png' alt=''>
        \nBạn có thể chọn tất cả các sản phẩm bằng cách:<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719232049/8bbf24a2-abe7-4d43-b0a3-50b2519ca05b.png' alt=''>
        <div style='text-align:center'>Hãy cân nhắc khi sử dụng chức năng này</div>
        \n<b>Bước 2: Mở menu tùy chọn</b>
        \nNhấn vào biểu tượng ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719232090/c1d42875-7e39-4370-bed8-c9262411e0d0.png' alt=''>
        \n<b>Bước 3: Chọn biểu tượng thùng rác</b>
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa sản phẩm.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719232136/96e5d2df-07bf-4516-a4b1-b7c70c4651de.png' alt=''>
        \n<b>Bước 4: Xác nhận xóa</b>
        \nHệ thống sẽ hiển thị thông báo: <b>"Bạn có muốn xóa ?"</b><br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719232184/260c349e-e3c4-4906-b0e6-1a4dad85e4e3.png' alt=''>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo "Cập nhật thành công". Sản phẩm sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719232237/66428adb-948a-41e1-9a73-2b0a1a9b9332.png' alt=''>
        \nNếu bạn chọn "Hủy", hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.`,
      },
      {
        id: 213,
        label: '3. Chỉnh sửa thông tin sản phẩm',
        description: `<b>Bước 1: Chọn sản phẩm cần chỉnh sửa</b>
        \nTruy cập vào danh sách sản phẩm trên hệ thống.
        \nTìm và chọn sản phẩm mà bạn cần chỉnh sửa thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719231989/0f8fd222-f436-4f90-8cb1-6c3bca591b45.png' alt=''>
        \n<b>Bước 2: Mở form chỉnh sửa</b>
        \nSau khi chọn sản phẩm, nhấn vào biểu tượng <b>...</b> nằm bên phía bên phải, sau đó chọn <b>Sửa</b> để bắt đầu chỉnh sửa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719232649/d2258128-df45-43d5-b26d-8fb7488ba529.png' alt=''>
        \nHệ thống sẽ hiển thị form thông tin chi tiết của sản phẩm đó.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719233034/76c40efe-3b97-4ef2-bf1e-ce11b59fcee6.png' alt=''>
        \n<b>Bước 3: Cập nhật thông tin</b>
        \nTrong form chi tiết, cập nhật các thông tin mà bạn muốn thay đổi như mã sản phẩm, tên sản phẩm, danh mục hoặc bất kỳ thông tin nào khác trong form.
        \nĐảm bảo rằng các thông tin mới được nhập chính xác và đầy đủ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719233105/a2061808-319e-455c-b40f-942f499b57ae.png' alt=''>
        \n<b>Bước 4: Lưu thay đổi</b>
        \nSau khi đã cập nhật xong thông tin, nhấn nút "Hoàn tất" để lưu các thay đổi.
        \nHệ thống sẽ xử lý và thông báo cập nhật thành công.<br/> 
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719233247/4ca65c52-5855-4d36-9dd5-c5df61f7b103.png' alt=''>
        \n<b>Bước 5: Hủy chỉnh sửa (nếu cần)</b>
        \nNếu bạn quyết định không thực hiện thay đổi, bạn có thể nhấn nút "Hủy" để thoát khỏi form chỉnh sửa mà không lưu bất kỳ thay đổi nào.`,
      },
      {
        id: 214,
        label: '4. BARCODE & QRCODE',
        description: `Hệ thống quản lý kho sản phẩm cung cấp chức năng tạo và in mã vạch (BARCODE) hoặc mã QR (QRCODE) cho mỗi sản phẩm, giúp nâng cao hiệu quả trong việc quản lý và bán hàng. Việc sử dụng mã vạch và mã QR giúp bạn dễ dàng theo dõi, nhận diện và kiểm tra thông tin sản phẩm một cách nhanh chóng và chính xác.</br>
        \nTìm và chọn sản phẩm mà bạn muốn xem mã vạch hoặc mã QR.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719231989/0f8fd222-f436-4f90-8cb1-6c3bca591b45.png' alt=''>
        \nSau khi chọn sản phẩm, nhấn vào biểu tượng <b>...</b> nằm bên phía bên phải, sau đó chọn <b> Mã BARCODE </b> hoặc <b>Mã QR</b> để xem.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719233927/030de589-9b26-46f4-acf9-182459e76337.png'>
        \nKhi sản phẩm được thêm vào hệ thống, bạn có thể tạo mã BARCODE hoặc QRCODE tương ứng, sau đó in chúng ra và dán lên sản phẩm hoặc bao bì. Mã vạch thường được sử dụng để quét nhanh thông tin sản phẩm tại điểm bán hàng, giúp giảm thiểu sai sót và tăng tốc độ giao dịch. Trong khi đó, mã QR cung cấp khả năng chứa nhiều thông tin hơn, bao gồm cả liên kết đến trang web, mô tả chi tiết hoặc thông tin bảo hành sản phẩm.</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719234333/73d54987-5d35-4855-bf05-f4d0f1fb4769.png'>
        <div style='text-align:center'><i>Mã BARCODE</i></div>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719234400/c41244ca-5551-470e-b97f-a69573364b52.png'>
        <div style='text-align:center'><i>Mã QR</i></div>
        \nChức năng này không chỉ giúp cải thiện quy trình quản lý kho, mà còn mang lại sự thuận tiện cho việc kiểm kê, kiểm tra tồn kho, và phục vụ khách hàng một cách chuyên nghiệp. Với mã BARCODE và QRCODE, doanh nghiệp có thể đảm bảo rằng thông tin sản phẩm luôn được cập nhật chính xác và dễ dàng truy cập khi cần.

        `,
      },
      {
        id: 215,
        label: '5. Chuyển kho',
        description: `Bạn có thể dễ dàng chuyển sản phẩm từ kho sản phẩm đến các kho khác dựa trên nhu cầu thực tế. Nếu sản phẩm bị lỗi hoặc cần chỉnh sửa theo yêu cầu của khách hàng, bạn có thể chuyển sản phẩm đó đến kho chế tác. Tại đây, sản phẩm sẽ được sửa chữa hoặc điều chỉnh để đáp ứng các tiêu chuẩn chất lượng hoặc yêu cầu cụ thể của khách hàng.
        \nNếu sản phẩm đã sẵn sàng để bán, bạn có thể chuyển nó đến kho cửa hàng. Tại đây, sản phẩm sẽ được trưng bày và sẵn sàng để bán cho khách hàng. Việc chuyển sản phẩm đến các kho khác nhau như kho chế tác, kho hàng chuyển và kho cửa hàng giúp bạn quản lý hàng hóa một cách linh hoạt và hiệu quả, đáp ứng nhanh chóng các yêu cầu kinh doanh và đảm bảo chất lượng dịch vụ.
        \n<b>Hướng dẫn chuyển hàng </b>
        \nNhấp vào "Chuyển kho chế tác" sau khi nhấn chọn “Nhập hàng” để chọn các sản phẩm cần chuyển đến kho chế tác hoặc kho cửa hàng.</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719238284/15d1f234-a3c1-4255-a400-bc086d8ac0f2.png'>
        \n<b>Bước 1:Chọn kho hàng chuyển</b>
        \nKho hàng chuyển có thể là kho cửa hàng hoặc kho chế tác tùy vào nhu cầu của bạn
        \n<b>Bước 2: Chọn sản phẩm cần chuyển</b>
        \nSố lượng sản phẩm chuyển phải nhỏ hơn hoặc bằng số lượng sản phẩm tồn kho</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719235091/b6c81917-fcae-41e5-8360-4f184e2293da.png'>
        \nSau khi chọn sản phẩm, hệ thống sẽ hiển thị thông tin chi tiết của sản phẩm như mã sản phẩm, tên sản phẩm, khối lượng vàng
        \n<b>Bước 3: Nhập nội dung</b>
        \nNhập thông tin thêm về lý do hoặc chi tiết của việc chuyển kho.
        \n<b>Bước 4: Hoàn tất chuyển kho</b>
        \nSau khi điền đầy đủ thông tin, bạn chọn "Hoàn tất" để hoàn tất quá trình chuyển hàng.
        \nHoặc có thể chọn "Hủy" để xóa bỏ các thay đổi và trở về giao diện trước đó mà không lưu lại thông tin.
        `,
      },
      {
        id: 216,
        label: '6. Nhập hàng',
        description: `<b>Nhập hàng thủ công</b>
        \nChức năng này cho phép bạn nhập thông tin sản phẩm và số lượng hàng hóa vào kho một cách thủ công, đảm bảo rằng dữ liệu luôn được cập nhật và phản ánh đúng thực trạng kho hàng.
        \n<b>Hướng dẫn nhập hàng thủ công</b>
        \nNhấp vào "Nhập hàng thủ công" sau khi nhấn chọn “Nhập hàng”.</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719239114/b976bc0d-4bdf-4df1-8989-adb4be4ffef4.png'>
        \n<b>Bước 1: Chọn sản phẩm </b>
        \nNhấp vào thanh tìm kiếm mục "Sản phẩm" hệ thống sẽ gợi ý các sản phẩm đã có trong hệ thống. Sau đó, nhấn chọn các sản phẩm mà bạn muốn nhập thêm hàng.
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719239294/073944f2-de12-4261-b7f9-6fdc4deaf38a.png'>
        \n<b>Bước 2: Cân</b>
        \nĐể biết được khối lượng tổng, khối lượng vật gắn, khối lượng vàng, bạn phải kết nối với cân. Hướng dẫn kết nối cân chi tiết bạn có thể đọc <b>tại đây</b>
        \n<b>Bước 3: Hoàn tất nhập hàng</b>
        \nSau khi nhập đầy đủ thông tin, bạn chọn "Hoàn tất" để hoàn tất quá trình nhập hàng.
        \nHoặc có thể chọn "Hủy" để xóa bỏ các thay đổi và trở về giao diện trước đó mà không lưu lại thông tin.
        \n<b>Nhập hàng từ chuyển hàng</b>
        \nKhi có các sản phẩm được chuyển đến từ kho khác, bạn có thể nhập hàng từ chuyển hàng.
        \n<b>Hướng dẫn nhập hàng từ chuyển hàng</b>
        \n<b>Bước 1: Chọn Nhập hàng từ chuyển hàng</b>
        \nNhấp vào "Nhập hàng từ chuyển hàng" sau khi nhấn chọn “Nhập hàng”.</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719284786/d25b46f5-973e-42ba-bd38-2e7eca2e194e.png'>
        \n<b>Bước 2: Chọn Nhập hàng</b>
        \nDanh sách các sản phẩm được chuyển đến từ cửa hàng khác sẽ được hiển thị trong mục "Nhập hàng từ chuyển hàng". Bạn có thể nhấn "Nhập hàng" để nhập hàng vào kho nhanh mà không cần phải chọn sản phẩm một cách thủ công.</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719284211/92e3285e-b9e9-4e26-98cd-139c75d58cf5.png'>
        \n<b>Bước 3: Nhập thông tin sản phẩm</b>
        \nBạn cần nhập thông tin về sản phẩm như tiền công, tiền vốn, tiền hột
        \nCác thông tin về khối lượng tổng, khối lượng vàng, khối lượng vật gắn để cân được khối lượng chính xác bạn cần kết nối với cân. Bạn hãy đọc hướng dẫn kết nối cân <b>tại đây</b></br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719285016/9f5d7f9a-ce0f-44c8-a7e1-86c3b754c64e.png'>
        \n<b>Bước 4: Hoàn tất nhập hàng</b>
        \nSau khi nhập đầy đủ thông tin, bạn chọn "Hoàn tất" để hoàn tất quá trình nhập hàng.
        \nSau khi hoàn tất nhập hàng, thông tin nhập hàng cũng sẽ được hiển thị ở trang Lịch sử nhập hàng với trạng thái "Đã nhập hàng".</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719288025/13930d15-a193-43ff-b7a7-7f7900d1b61b.png'>
        `,
      },
      {
        id: 217,
        label: '7. Chuyển hàng',
        description: `
        \n<b>Chuyển hàng</b>
        \nHỗ trợ việc di chuyển hàng hóa giữa các kho khác nhau trong hệ thống của bạn. Điều này hữu ích khi cần điều phối hàng hóa từ kho này sang kho khác để đảm bảo sự cân bằng tồn kho. Bạn có thể chuyển hàng giữa các kho cửa hàng, kho chế tác, hoặc kho hàng chuyển tùy thuộc vào nhu cầu kinh doanh của bạn.
        \n<b>Hướng dẫn chuyển hàng</b>
        \n<b>Bước 1: Chọn Chuyển hàng</b></br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719281793/2fb69e97-6cf3-4d49-9bee-b066cfad8a84.png'>
        \n<b>Bước 2: Chọn kho chuyển và kho nhận hàng</b></br>
        \nTrong phần “Kho hàng chuyển”, chọn kho mà hàng hóa sẽ được di chuyển từ đó. Sử dụng danh sách thả xuống để chọn kho chính xác.
        \nTrong phần “Chuyển đến cửa hàng”, chọn kho mà hàng hóa sẽ được di chuyển đến.Đảm bảo chọn đúng kho để tránh nhầm lẫn trong việc quản lý tồn kho</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719282394/7362d94a-3bd2-4aca-a617-00ab47affe9a.png'>
        \n<b>Bước 3: Chọn sản phẩm cần chuyển</b></br>
        \nNhấp vào thanh tìm kiếm mục "Sản phẩm" hệ thống sẽ gợi ý các sản phẩm đã có trong hệ thống. Sau đó, nhấn chọn các sản phẩm để thực hiện quy trình chuyển hàng.</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719282863/ff2da714-c8fe-437a-87a5-9674c74a0d2a.png'>
        \n<b>Bước 4: Hoàn tất chuyển hàng</b></br>
        \nSau khi nhập đủ thông tin và nhấn "Hoàn tất", hệ thống sẽ xử lý yêu cầu và hiển thị thông tin chuyển hàng trong lịch sử chuyển hàng với trạng thái "Chưa nhận hàng".</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719283717/632cce13-4248-43fc-a451-27f241748846.png'>
        \nSau khi chuyển hàng thành công bạn, thông tin chuyển hàng cũng sẽ được hiển thị ở trang Nhập hàng.</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719283844/1ed39fc3-27f3-439f-9854-4d0ef77495c1.png'>
        `,
      },
      {
        id: 218,
        label: '8. Xuất hàng',
        description: `
        \nBạn có thể chọn chức năng này khi muốn xuất hàng từ kho chế tác, kho cửa hàng hoặc kho thành phẩm đến khách hàng hoặc cửa hàng khác. Việc xuất hàng giúp bạn theo dõi và kiểm soát được lượng hàng hóa xuất khỏi kho.
        \n<b>Hướng dẫn xuất hàng</b>
        \n<b>Bước 1: Chọn Xuất hàng</b></br>
        \nNhấp vào "Xuất hàng" sau khi nhấn chọn “Nhập hàng”.</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719285757/40d15a6f-8e55-4229-ab92-1ce95c7c3317.png'>
        \n<b>Bước 2: Chọn kho hàng xuất</b>
        \nĐảm bảo chọn đúng kho hàng để xuất để tránh nhầm lẫn trong việc quản lý tồn kho.</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719286118/810cbd4e-dc6f-4c5b-bdc2-b5543459c61b.png'>
        \n<b>Bước 3: Chọn sản phẩm cần xuất</b>
        \nNhấp vào thanh tìm kiếm mục "Sản phẩm" hệ thống sẽ gợi ý các sản phẩm đã có trong cửa hàng. Sau đó, nhấn chọn các sản phẩm để thực hiện quy trình xuất hàng.</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719287296/53ae4da0-dbde-42d7-84f1-101bd5ce5c0e.png'>
        \n<b>Bước 4: Nhập nội dung xuất hàng</b>
        \n Bạn nhập nội dung về lý do hoặc chi tiết của việc xuất hàng.
        \n<b>Bước 5: Hoàn tất xuất hàng</b>
        \nSau khi nhập đủ thông tin và nhấn "Hoàn tất", hệ thống sẽ xử lý yêu cầu và hiển thị thông tin xuất hàng trong lịch sử xuất hàng với trạng thái "Đã xuất hàng".</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719287584/41d626cc-3a51-4a9f-a4d7-8f08480ac29b.png'>
        `,
      },
    ],
  },
  {
    id: 22,
    link: 'Huong-dan-su-dung-trang-nhom-san-pham',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG NHÓM SẢN PHẨM',
    steps: [
      {
        id: 221,
        label: '1. Thêm nhóm sản phẩm',
        description: `Để thêm một nhóm sản phẩm mới, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Truy cập vào chức năng thêm nhóm sản phẩm mới
        \nĐầu tiên, trên giao diện của trang nhóm sản phẩm, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719546928/Untitled51_xa7jaz.png'>
        \n<b>Bước 2:</b> Chọn thêm nhóm sản phẩm
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu <b>+</b>.
        \nHệ thống sẽ mở ra một form thêm nhóm sản phẩm mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719547021/Untitled51_xvvmgo.png'>
        \n<b>Bước 3:</b> Nhập thông tin
        \n&nbsp;&nbsp;Tại đây, bạn cần nhập các thông tin sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Tên: Đặt tên để dễ dàng nhận diện nhóm sản phẩm này trong tương lai.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Giá bán : Nhập vào giá bán của nhóm sản phẩm.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Giá mua : Nhập vào giá mua của nhóm sản phẩm.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Ghi chú: Nhập bất kỳ ghi chú nào liên quan đến nhóm sản phẩm này để dễ dàng quản lý và nhận biết sau này.(Có thể để trống)
        \n&nbsp;&nbsp;Chọn trạng thái cho nhóm sản phẩm:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Kích hoạt: Nhóm sản phẩm sẽ được sử dụng và hiển thị trong hệ thống ngay lập tức.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Không kích hoạt: Nhóm sản phẩm sẽ không được sử dụng hoặc hiển thị trong hệ thống, có thể kích hoạt sau.
        \nSau khi điền đầy đủ thông tin, nhấn vào nút <b>"Hoàn tất"</b> để lưu thông tin nhóm sản phẩm mới.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719547751/Untitled51_vhl5zc.png'>`,
      },
      {
        id: 222,
        label: '2. Chỉnh sửa thông tin nhóm sản phẩm',
        description: `Để chỉnh sửa thông tin nhóm sản phẩm, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn nhóm sản phẩm cần chỉnh sửa
        \nTruy cập vào danh sách nhóm sản phẩm trên hệ thống.
        \nTìm và chọn nhóm sản phẩm mà bạn cần chỉnh sửa thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719547917/Untitled51_m3wtkd.png'>
        \n<b>Bước 2:</b> Mở form chỉnh sửa
        \nSau khi chọn nhóm sản phẩm, nhấn vào biểu tượng cây <b>🖉</b> nằm bên phía bên phải để bắt đầu chỉnh sửa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719547994/Untitled51_zxpviw.png'>
        \nHệ thống sẽ hiển thị form thông tin chi tiết của nhóm sản phẩm đó.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719548056/Untitled51_stzrw7.png'>
        \n<b>Bước 3:</b> Cập nhật thông tin
        \nTrong form chi tiết, cập nhật các thông tin mà bạn muốn thay đổi như: tên, giá bán, giá mua, ghi chú, trạng thái.
        \nĐảm bảo rằng các thông tin mới được nhập chính xác và đầy đủ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719548146/Untitled51_agd2dz.png'>
        \n<b>Bước 4:</b> Lưu thay đổi
        \nSau khi đã cập nhật xong thông tin, nhấn nút <b>"Hoàn tất"</b> để lưu các thay đổi.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719548193/Untitled51_nvscf8.png'>
        \n<b>Bước 5: Hủy chỉnh sửa (nếu cần)</b>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn quyết định không thực hiện thay đổi, bạn có thể nhấn nút <b>"Hủy"</b> để thoát khỏi form chỉnh sửa mà không lưu bất kỳ thay đổi nào.</div>`,
      },
      {
        id: 223,
        label: '3. Xóa nhóm sản phẩm',
        description: `Để xóa nhóm sản phẩm, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn nhóm sản phẩm
        \nTruy cập vào danh sách nhóm sản phẩm và xác định nhóm sản phẩm mà bạn muốn xóa. Tại đây, bạn sẽ thấy các ô chọn phía trước mỗi nhóm sản phẩm. Hãy nhấp vào ô này để chọn nhóm sản phẩm cần xóa. Bạn có thể chọn một hoặc nhiều nhóm sản phẩm cùng lúc.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719548429/Untitled51_dd2rhc.png'>
        \n<b>Bước 2:</b> Mở menu tùy chọn
        \nNhấn vào biểu tượng dấu ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719548463/Untitled51_cywar2.png'>
        \n<b>Bước 3:</b> Chọn biểu tượng thùng rác
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa nhóm sản phẩm.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719548539/Untitled51_in7dif.png'>
        \n<b>Bước 4: Xác nhận xóa</b>
        \nHệ thống sẽ hiển thị thông báo: "Bạn có muốn xóa ?"<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719548581/Untitled51_d0yces.png'>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>. Nhóm sản phẩm sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719548646/Untitled51_i8rkjr.png'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn <b>"Hủy"</b>, hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.</div>`,
      },
    ],
  },
  {
    id: 23,
    link: 'huong-dan-su-dung-trang-cua-hang',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG CỬA HÀNG',
    description:`<iframe width="100%" height="400" src="https://www.youtube.com/embed/KITv7aCsZmU?start=90" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    steps: [
      {
        id: 231,
        label: '1. Thêm cửa hàng',
        description: `Để thêm một cửa hàng mới, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Truy cập vào chức năng thêm cửa hàng
        \nĐầu tiên, trên giao diện của trang cửa hàng, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719297410/Untitled46_i8wem6.png'>
        \n<b>Bước 2:</b> Chọn thêm cửa hàng
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu <b>+</b>.
        \nHệ thống sẽ mở ra một form thêm cửa hàng mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719298021/Untitled46_fov9wy.png'>
        \n<b>Bước 3:</b> Nhập thông tin
        \n&nbsp; Tại đây, bạn cần nhập các thông tin sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Loại cửa hàng: Mô tả chính xác về loại cửa hàng bạn đang thêm vào hệ thống.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Điện thoại: Nhập số điện thoại của cửa hàng.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Mã cửa hàng: Nhập mã cửa hàng.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Tên: Nhập tên cửa hàng.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Email: Nhập email của cửa hàng.
        \n&nbsp; Chọn trạng thái cho cửa hàng:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Kích hoạt: Cửa hàng sẽ hiển thị và sử dụng ngay lập tức trong hệ thống.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Không kích hoạt: Cửa hàng sẽ ẩn và không sử dụng ngay lập tức trong hệ thống.
        \n&nbsp; Nhập thông tin thêm:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Địa chỉ: Nhập địa chỉ chi tiết của cửa hàng.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Tỉnh thành: Nhập tỉnh/thành phố của cửa hàng.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Quận/huyện: Nhập quận/huyện của cửa hàng.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Phường/xã: Nhập phường/xã của cửa hàng.
        \n<b>Bước 4:</b> Hoàn tất thêm cửa hàng
        \nSau khi điền đầy đủ thông tin, nhấn vào nút <b>"Hoàn tất"</b> để lưu thông tin cửa hàng mới.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719298406/Untitled46_nyv9sv.png'>`,
      },
      {
        id: 232,
        label: '2. Chỉnh sửa thông tin cửa hàng',
        description: `Để chỉnh sửa thông tin cửa hàng, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn cửa hàng cần chỉnh sửa
        \nTruy cập vào danh sách cửa hàng trên hệ thống.
        \nTìm và chọn cửa hàng mà bạn cần chỉnh sửa thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719299501/Untitled46_hbqk1u.png'>
        \n<b>Bước 2:</b> Mở form chỉnh sửa
        \nSau khi chọn cửa hàng, nhấn vào biểu tượng cây <b>🖉</b> nằm bên phía bên phải để bắt đầu chỉnh sửa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719302147/Untitled46_r0i9ss.png'>
        \nHệ thống sẽ hiển thị form thông tin chi tiết của cửa hàng đó.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719299655/Untitled46_wutb27.png'>
        \n<b>Bước 3:</b> Cập nhật thông tin
        \nTrong form chi tiết, cập nhật các thông tin mà bạn muốn thay đổi như loại cửa hàng, điện thoại, mã cửa hàng, email, tên, thông tin thêm, ghi chú, trạng thái.
        \nĐảm bảo rằng các thông tin mới được nhập chính xác và đầy đủ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719299972/Untitled46_ytffg4.png'>
        \n<b>Bước 4:</b> Lưu thay đổi
        \nSau khi đã cập nhật xong thông tin, nhấn nút <b>"Hoàn tất"</b> để lưu các thay đổi.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719300116/Untitled46_ugy8qe.png'>
        \n<b>Bước 5:</b> Hủy chỉnh sửa (nếu cần)
        \nNếu bạn quyết định không thực hiện thay đổi, bạn có thể nhấn nút <b>"Hủy"</b> để thoát khỏi form chỉnh sửa mà không lưu bất kỳ thay đổi nào.`,
      },
      {
        id: 233,
        label: '3. Xóa cửa hàng',
        description: `Để xóa một cửa hàng, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn cửa hàng
        \nTruy cập vào danh sách cửa hàng và xác định cửa hàng mà bạn muốn xóa. Tại đây, bạn sẽ thấy các ô chọn phía trước mỗi tên cửa hàng. Hãy nhấp vào ô này để chọn cửa hàng cần xóa. Bạn có thể chọn một hoặc nhiều cửa hàng cùng lúc<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719300435/Untitled46_oqj8kr.png'>
        \n<b>Bước 2:</b> Mở menu tùy chọn
        \nNhấn vào biểu tượng dấu ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719300705/Untitled46_hvjxac.png'>
        \n<b>Bước 3:</b> Chọn biểu tượng thùng rác
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa cửa hàng.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719300896/Untitled46_zxmkay.png'>
        \n<b>Bước 4:</b> Xác nhận xóa
        \nHệ thống sẽ hiển thị thông báo: "Bạn có muốn xóa ?"<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719301588/Untitled46_yioqpo.png'>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>. Cửa hàng sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719301693/Untitled46_ltkgfx.png'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn <b>"Hủy"</b>, hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.</div>`,
      },
    ],
  },
  {
    id: 24,
    link: 'huong-dan-su-dung-trang-kpi',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG KPI',
    description:`<iframe width="100%" height="400" src="https://www.youtube.com/embed/KITv7aCsZmU?start=15" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    steps: [
      {
        id: 241,
        label: '1. Thêm KPI',
        description: `Để thêm một KPI mới, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Truy cập vào chức năng thêm KPI
        \nĐầu tiên, trên giao diện của trang KPI, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719302774/Untitled46_d4wu8e.png'>
        \n<b>Bước 2:</b> Chọn thêm KPI
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu <b>+</b>.
        \nHệ thống sẽ mở ra một form thêm KPI mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719302856/Untitled46_i8psms.png'>
        \n<b>Bước 3:</b> Nhập thông tin
        \n&nbsp;&nbsp;Tại đây, bạn cần nhập các thông tin sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Tên: Chọn tên cửa hàng từ CSDL có sẵn.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Năm: Chọn năm mục tiêu để thực hiện kpi.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• KPI: Nhập KPI mong muốn cửa hàng đạt được.
        \n&nbsp;&nbsp;Bạn cũng có thể bổ sung ghi chú để cung cấp thêm thông tin chi tiết về KPI này nếu cần thiết.
        \n&nbsp;&nbsp;Chọn trạng thái cho KPI:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Kích hoạt: KPI sẽ hiển thị và sử dụng ngay lập tức trong hệ thống.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Không kích hoạt: KPI sẽ ẩn và không sử dụng ngay lập tức trong hệ thống.
        \n<b>Bước 4:</b> Hoàn tất thêm KPI
        \nSau khi điền đầy đủ thông tin, nhấn vào nút <b>"Hoàn tất"</b> để lưu thông tin KPI mới.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719303100/Untitled46_pcik9x.png'>`,
      },
      {
        id: 242,
        label: '2. Chỉnh sửa thông tin KPI',
        description: `Để chỉnh sửa thông tin KPI, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn KPI cần chỉnh sửa
        \nTruy cập vào danh sách KPI trên hệ thống.
        \nTìm và chọn KPI mà bạn cần chỉnh sửa thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719303272/Untitled46_mrj2xj.png'>
        \n<b>Bước 2:</b> Mở form chỉnh sửa
        \nSau khi chọn KPI, nhấn vào biểu tượng cây <b>🖉</b> nằm bên phía bên phải để bắt đầu chỉnh sửa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719303326/Untitled46_ofpozw.png'>
        \nHệ thống sẽ hiển thị form thông tin chi tiết của KPI đó.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719303374/Untitled46_unsb64.png'>
        \n<b>Bước 3:</b> Cập nhật thông tin
        \nTrong form chi tiết, cập nhật các thông tin mà bạn muốn thay đổi như: cửa hàng, năm, KPI, ghi chú, trạng thái.
        \nĐảm bảo rằng các thông tin mới được nhập chính xác và đầy đủ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719303499/Untitled46_pdfgqm.png'>
        \n<b>Bước 4:</b> Lưu thay đổi
        \nSau khi đã cập nhật xong thông tin, nhấn nút <b>"Hoàn tất"</b> để lưu các thay đổi.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719303547/Untitled46_ekl52a.png'>
        \n<b>Bước 5:</b> Hủy chỉnh sửa (nếu cần)
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn quyết định không thực hiện thay đổi, bạn có thể nhấn nút <b>"Hủy"</b> để thoát khỏi form chỉnh sửa mà không lưu bất kỳ thay đổi nào.</div>`,
      },
      {
        id: 243,
        label: '3. Xóa KPI',
        description: `Để xóa một KPI, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn KPI
        \nTruy cập vào danh sách KPI và xác định KPI mà bạn muốn xóa. Tại đây, bạn sẽ thấy các ô chọn phía trước mỗi KPI. Hãy nhấp vào ô này để chọn KPI cần xóa. Bạn có thể chọn một hoặc nhiều KPI cùng lúc<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719303647/Untitled46_tbszr2.png'>
        \n<b>Bước 2:</b> Mở menu tùy chọn
        \nNhấn vào biểu tượng dấu ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719303707/Untitled46_bzwc9j.png'>
        \n<b>Bước 3:</b> Chọn biểu tượng thùng rác
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa KPI.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719303767/Untitled46_am8hzb.png'>
        \n<b>Bước 4:</b> Xác nhận xóa
        \nHệ thống sẽ hiển thị thông báo: "Bạn có muốn xóa ?"<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719303812/Untitled46_omoom7.png'>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>. KPI sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719303860/Untitled46_rqdgft.png'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn <b>"Hủy"</b>, hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.</div>`,
      },
    ],
  },
  {
    id: 25,
    link: 'huong-dan-su-dung-trang-the-khach-hang',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG THẺ KHÁCH HÀNG',
    steps: [
      {
        id: 251,
        label: '1. Thêm thẻ khách hàng',
        description: `Để thêm một thẻ khách hàng mới, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Truy cập vào chức năng thêm thẻ khách hàng
        \nĐầu tiên, trên giao diện của trang thẻ khách hàng, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719304135/Untitled46_lzeiha.png'>
        \n<b>Bước 2:</b> Chọn thêm thẻ khách hàng
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu <b>+</b>.
        \nHệ thống sẽ mở ra một form thêm thẻ khách hàng mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719304214/Untitled46_skvbfn.png'>
        \n<b>Bước 3:</b> Nhập thông tin
        \n&nbsp;&nbsp;Tại đây, bạn cần nhập các thông tin sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Lựa chọn khách hàng từ CSDL: Sử dụng danh sách để chọn khách hàng mà bạn muốn cấp thẻ từ cơ sở dữ liệu có sẵn.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Mã thẻ: Nhập mã thẻ cho khách hàng. Mã thẻ này phải là duy nhất và dễ nhận diện.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Giảm giá: Nhập số phần trăm (%) giảm giá mà thẻ sẽ áp dụng cho khách hàng. <b>Ví dụ:</b> 10% giảm giá.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Ghi chú: Nhập bất kỳ ghi chú nào cần thiết để mô tả hoặc cung cấp thông tin thêm về thẻ khách hàng này.
        \n&nbsp;&nbsp;Chọn trạng thái cho thẻ khách hàng:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Kích hoạt: Chọn trạng thái này nếu bạn muốn thẻ khách hàng có hiệu lực ngay lập tức.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Không kích hoạt: Chọn trạng thái này nếu bạn muốn làm ẩn thẻ khách hàng này để sử dụng sau.
        \n<b>Bước 4:</b> Hoàn tất thêm thẻ khách hàng
        \nSau khi điền đầy đủ thông tin, nhấn vào nút <b>"Hoàn tất"</b> để lưu thông tin thẻ khách hàng mới.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719304531/Untitled46_ayntix.png'>`,
      },
      {
        id: 252,
        label: '2. Chỉnh sửa thông tin thẻ khách hàng',
        description: `Để chỉnh sửa thông tin thẻ khách hàng, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn thẻ khách hàng cần chỉnh sửa
        \nTruy cập vào danh sách thẻ khách hàng trên hệ thống.
        \nTìm và chọn thẻ khách hàng mà bạn cần chỉnh sửa thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719304718/Untitled46_znql8z.png'>
        \n<b>Bước 2:</b> Mở form chỉnh sửa
        \nSau khi chọn thẻ khách hàng, nhấn vào biểu tượng cây <b>🖉</b> nằm bên phía bên phải để bắt đầu chỉnh sửa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719304775/Untitled46_cplp4i.png'>
        \nHệ thống sẽ hiển thị form thông tin chi tiết của thẻ khách hàng đó.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719304865/Untitled46_nitmwk.png'>
        \n<b>Bước 3:</b> Cập nhật thông tin
        \nTrong form chi tiết, cập nhật các thông tin mà bạn muốn thay đổi như: khách hàng, mã thẻ, giảm giá, ghi chú, trạng thái.
        \nĐảm bảo rằng các thông tin mới được nhập chính xác và đầy đủ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719304962/Untitled46_tipm7b.png'>
        \n<b>Bước 4:</b> Lưu thay đổi
        \nSau khi đã cập nhật xong thông tin, nhấn nút <b>"Hoàn tất"</b> để lưu các thay đổi.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719305012/Untitled46_nbt30t.png'>
        \n<b>Bước 5:</b> Hủy chỉnh sửa (nếu cần)
        \nNếu bạn quyết định không thực hiện thay đổi, bạn có thể nhấn nút <b>"Hủy"</b> để thoát khỏi form chỉnh sửa mà không lưu bất kỳ thay đổi nào.`,
      },
      {
        id: 253,
        label: '3. Xóa thẻ khách hàng',
        description: `Để xóa một thẻ khách hàng, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn thẻ khách hàng
        \nTruy cập vào danh sách thẻ khách hàng và xác định thẻ khách hàng mà bạn muốn xóa. Tại đây, bạn sẽ thấy các ô chọn phía trước mỗi thẻ khách hàng. Hãy nhấp vào ô này để chọn thẻ khách hàng cần xóa. Bạn có thể chọn một hoặc nhiều thẻ khách hàng cùng lúc<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719305204/Untitled46_q4odak.png'>
        \n<b>Bước 2:</b> Mở menu tùy chọn
        \nNhấn vào biểu tượng dấu ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719305247/Untitled46_zgc2k9.png'>
        \n<b>Bước 3:</b> Chọn biểu tượng thùng rác
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa thẻ khách hàng.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719305309/Untitled46_oxunng.png'>
        \n<b>Bước 4:</b> Xác nhận xóa
        \nHệ thống sẽ hiển thị thông báo: <b>"Bạn có muốn xóa ?"</b><br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719305347/Untitled46_wawq5v.png'>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>. Thẻ khách hàng sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719305392/Untitled46_pgqfsq.png'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn <b>"Hủy"</b>, hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.</div>`,
      },
    ],
  },
  {
    id: 26,
    link: 'huong-dan-su-dung-trang-nguon-kenh',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG NGUỒN KÊNH',
    steps: [
      {
        id: 261,
        label: '1. Thêm nguồn kênh',
        description: `Để thêm một nguồn kênh mới, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Truy cập vào chức năng thêm nguồn kênh mới
        \nĐầu tiên, trên giao diện của trang nguồn kênh, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719321397/Untitled47_ztihmp.png'>
        \n<b>Bước 2:</b> Chọn thêm nguồn kênh
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu <b>+</b>.
        \nHệ thống sẽ mở ra một form thêm nguồn kênh mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719321604/Untitled47_panx5v.png'>
        \n<b>Bước 3:</b> Nhập thông tin
        \n&nbsp;&nbsp;Tại đây, bạn cần nhập các thông tin sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Tên: Điền tên cho nguồn kênh khách hàng mới vào ô tương ứng. Đây là tên sẽ dùng để nhận diện nguồn kênh trong hệ thống.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Ghi chú: Nhập các ghi chú liên quan đến nguồn kênh này, nếu cần thiết. Ghi chú có thể bao gồm thông tin chi tiết về nguồn kênh, mục đích sử dụng, hoặc bất kỳ thông tin bổ sung nào.
        \n&nbsp;&nbspChọn trạng thái cho nguồn kênh:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Kích hoạt: Nguồn kênh sẽ được sử dụng và hiển thị trong hệ thống ngay lập tức.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Không kích hoạt: Nguồn kênh sẽ không được sử dụng hoặc hiển thị trong hệ thống, có thể kích hoạt sau.
        \n<b>Bước 4:</b> Hoàn tất thêm nguồn kênh
        \nSau khi điền đầy đủ thông tin, nhấn vào nút <b>"Hoàn tất"</b> để lưu thông tin nguồn kênh mới.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719321874/Untitled47_ugfzyh.png'>`,
      },
      {
        id: 262,
        label: '2. Chỉnh sửa thông tin nguồn kênh',
        description: `Để chỉnh sửa thông tin nguồn kênh, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn nguồn kênh cần chỉnh sửa
        \nTruy cập vào danh sách nguồn kênh trên hệ thống.
        \nTìm và chọn nguồn kênh mà bạn cần chỉnh sửa thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719321984/Untitled47_iivlaz.png'>
        \n<b>Bước 2:</b> Mở form chỉnh sửa
        \nSau khi chọn nguồn kênh, nhấn vào biểu tượng cây <b>🖉</b> nằm bên phía bên phải để bắt đầu chỉnh sửa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719322170/Untitled47_w9yotu.png'>
        \nHệ thống sẽ hiển thị form thông tin chi tiết của nguồn kênh đó.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719322264/Untitled47_kxe4yw.png'>
        \n<b>Bước 3:</b> Cập nhật thông tin
        \nTrong form chi tiết, cập nhật các thông tin mà bạn muốn thay đổi như: tên, ghi chú, trạng thái.
        \nĐảm bảo rằng các thông tin mới được nhập chính xác và đầy đủ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719322342/Untitled47_fsdvps.png'>
        \n<b>Bước 4:</b> Lưu thay đổi
        \nSau khi đã cập nhật xong thông tin, nhấn nút <b>"Hoàn tất"</b> để lưu các thay đổi.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719322473/Untitled47_anof9c.png'>
        \n<b>Bước 5:</b> Hủy chỉnh sửa (nếu cần)
        \nNếu bạn quyết định không thực hiện thay đổi, bạn có thể nhấn nút <b>"Hủy"</b> để thoát khỏi form chỉnh sửa mà không lưu bất kỳ thay đổi nào.`,
      },
      {
        id: 263,
        label: '3. Xóa nguồn kênh',
        description: `Để xóa một nguồn kênh, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn nguồn kênh
        \nTruy cập vào danh sách nguồn kênh và xác định nguồn kênh mà bạn muốn xóa. Tại đây, bạn sẽ thấy các ô chọn phía trước mỗi nguồn kênh. Hãy nhấp vào ô này để chọn nguồn kênh cần xóa. Bạn có thể chọn một hoặc nhiều nguồn kênh cùng lúc.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719322751/Untitled47_xxccsg.png'>
        \n<b>Bước 2:</b> Mở menu tùy chọn
        \nNhấn vào biểu tượng dấu ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719322786/Untitled47_xiwi04.png'>
        \n<b>Bước 3:</b> Chọn biểu tượng thùng rác
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa nguồn kênh.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719322839/Untitled47_njhimu.png'>
        \n<b>Bước 4:</b> Xác nhận xóa
        \nHệ thống sẽ hiển thị thông báo: "Bạn có muốn xóa ?"<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719322898/Untitled47_o6a9rh.png'>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>. Nguồn kênh sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719322949/Untitled46_yvwqp5.png'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn <b>"Hủy"</b>, hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.</div>`,
      },
    ],
  },
  {
    id: 27,
    link: 'Huong-dan-su-dung-trang-don-vi',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG ĐƠN VỊ',
    steps: [
      {
        id: 271,
        label: '1. Thêm đơn vị',
        description: `Để thêm một đơn vị mới, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Truy cập vào chức năng thêm đơn vị mới
        \nĐầu tiên, trên giao diện của trang đơn vị, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719323419/Untitled47_jyd850.png'>
        \n<b>Bước 2:</b> Chọn thêm đơn vị
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu <b>+</b>.
        \nHệ thống sẽ mở ra một form thêm đơn vị mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719323575/Untitled47_wltptn.png'>
        \n<b>Bước 3:</b> Nhập thông tin
        \n&nbsp;Tại đây, bạn cần nhập các thông tin sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Tên: Điền tên đơn vị vào ô "Tên". <b>Ví dụ:</b> chiếc, cái, vòng,…
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Ghi chú: Bổ sung ghi chú nếu cần thiết để cung cấp thêm thông tin chi tiết về đơn vị này. Việc này giúp cho việc quản lý và sử dụng đơn vị trở nên thuận tiện và hiệu quả hơn.
        \n&nbsp;Chọn trạng thái cho đơn vị:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Kích hoạt: Đơn vị sẽ được sử dụng và hiển thị trong hệ thống ngay lập tức.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Không kích hoạt: Đơn vị sẽ không được sử dụng hoặc hiển thị trong hệ thống, có thể kích hoạt sau.
        \n<b>Bước 4:</b> Hoàn tất thêm đơn vị
        \nSau khi điền đầy đủ thông tin, nhấn vào nút <b>"Hoàn tất"</b> để lưu thông tin đơn vị mới.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719323795/Untitled47_k6sqmt.png'>`,
      },
      {
        id: 272,
        label: '2. Chỉnh sửa thông tin đơn vị',
        description: `Để chỉnh sửa thông tin đơn vị, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn đơn vị cần chỉnh sửa
        \nTruy cập vào danh sách đơn vị trên hệ thống.
        \nTìm và chọn đơn vị mà bạn cần chỉnh sửa thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719323961/Untitled47_nxmalx.png'>
        \n<b>Bước 2:</b> Mở form chỉnh sửa
        \nSau khi chọn đơn vị, nhấn vào biểu tượng cây <b>🖉</b> nằm bên phía bên phải để bắt đầu chỉnh sửa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719324016/Untitled47_bq3ogb.png'>
        \nHệ thống sẽ hiển thị form thông tin chi tiết của đơn vị đó.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719324068/Untitled47_qjyewv.png'>
        \n<b>Bước 3:</b> Cập nhật thông tin
        \nTrong form chi tiết, cập nhật các thông tin mà bạn muốn thay đổi như: tên, ghi chú, trạng thái.
        \nĐảm bảo rằng các thông tin mới được nhập chính xác và đầy đủ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719324129/Untitled47_jeqhrq.png'>
        \n<b>Bước 4:</b> Lưu thay đổi
        \nSau khi đã cập nhật xong thông tin, nhấn nút <b>"Hoàn tất"</b> để lưu các thay đổi.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719324175/Untitled47_xp9ooz.png'>
        \n<b>Bước 5:</b> Hủy chỉnh sửa (nếu cần)
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn quyết định không thực hiện thay đổi, bạn có thể nhấn nút <b>"Hủy"</b> để thoát khỏi form chỉnh sửa mà không lưu bất kỳ thay đổi nào.</div>`,
      },
      {
        id: 273,
        label: '3. Xóa đơn vị',
        description: `Để xóa một đơn vị, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn đơn vị
        \nTruy cập vào danh sách đơn vị và xác định đơn vị mà bạn muốn xóa. Tại đây, bạn sẽ thấy các ô chọn phía trước mỗi đơn vị. Hãy nhấp vào ô này để chọn đơn vị cần xóa. Bạn có thể chọn một hoặc nhiều đơn vị cùng lúc.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719324400/Untitled47_rtgz3g.png'>
        \n<b>Bước 2:</b> Mở menu tùy chọn
        \nNhấn vào biểu tượng dấu ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719324493/Untitled47_wlqrz6.png'>
        \n<b>Bước 3:</b> Chọn biểu tượng thùng rác
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa đơn vị.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719324584/Untitled47_qth8wc.png'>
        \n<b>Bước 4:</b> Xác nhận xóa
        \nHệ thống sẽ hiển thị thông báo: "Bạn có muốn xóa ?"<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719324628/Untitled47_zp0hpz.png'>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>. Đơn vị sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719324685/Untitled47_cxqsr0.png'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn <b>"Hủy"</b>, hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.</div>`,
      },
    ],
  },
  {
    id: 28,
    link: 'Huong-dan-su-dung-trang-nha-cung-cap',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG NHÀ CUNG CẤP',
    steps: [
      {
        id: 281,
        label: '1. Thêm nhà cung cấp',
        description: `Để thêm một nhà cung cấp mới, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Truy cập vào chức năng thêm nhà cung cấp mới
        \nĐầu tiên, trên giao diện của trang nhà cung cấp, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719325427/Untitled47_kejtmb.png'>
        \n<b>Bước 2:</b> Chọn thêm nhà cung cấp
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu <b>+</b>.
        \nHệ thống sẽ mở ra một form thêm nhà cung cấp mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719325482/Untitled47_phs6sz.png'>
        \n<b>Bước 3:</b> Nhập thông tin
        \nTại đây, bạn cần nhập các thông tin sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Tên: Điền tên nhà cung cấp. <b>Ví dụ:</b> PNJ, SCJ,...
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Mã số thuế: Nhập mã số thuế của nhà cung cấp.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Điện thoại: Nhập số điện thoại liên hệ của nhà cung cấp.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• CCCD: Nhập số căn cước công dân của người đại diện nhà cung cấp.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Email: Nhập địa chỉ email của nhà cung cấp. 
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Ngân hàng: Nhập tên ngân hàng mà nhà cung cấp sử dụng.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Địa chỉ: Nhập địa chỉ cụ thể của nhà cung cấp. 
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Fax: Nhập số fax của nhà cung cấp. 
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Website: Nhập địa chỉ website của nhà cung cấp.
        \n&nbsp;&nbsp;&nbsp;• Ghi chú: Bổ sung ghi chú nếu cần thiết để cung cấp thêm thông tin chi tiết về nhà cung cấp này. Việc này giúp cho việc quản lý và sử dụng nhà cung cấp trở nên thuận tiện và hiệu quả hơn.
        \n2. Chọn trạng thái cho nhà cung cấp:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Kích hoạt: Nhà cung cấp sẽ được sử dụng và hiển thị trong hệ thống ngay lập tức.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Không kích hoạt: Nhà cung cấp sẽ không được sử dụng hoặc hiển thị trong hệ thống, có thể kích hoạt sau.
        \n<b>Bước 4:</b> Hoàn tất thêm nhà cung cấp
        \nSau khi điền đầy đủ thông tin, nhấn vào nút <b>"Hoàn tất"</b> để lưu thông tin nhà cung cấp mới.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719326395/Untitled47_qx3cwg.png'>`,
      },
      {
        id: 282,
        label: '2. Chỉnh sửa thông tin nhà cung cấp',
        description: `Để chỉnh sửa thông tin nhà cung cấp, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn nhà cung cấp cần chỉnh sửa
        \nTruy cập vào danh sách nhà cung cấp trên hệ thống.
        \nTìm và chọn nhà cung cấp mà bạn cần chỉnh sửa thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719326917/Untitled47_f1sc8d.png'>
        \n<b>Bước 2:</b> Mở form chỉnh sửa
        \nSau khi chọn nhà cung cấp, nhấn vào biểu tượng cây <b>🖉</b> nằm bên phía bên phải để bắt đầu chỉnh sửa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719326984/Untitled47_ongwh5.png'>
        \nHệ thống sẽ hiển thị form thông tin chi tiết của nhà cung cấp đó.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719327036/Untitled47_zdftlg.png'>
        \n<b>Bước 3:</b> Cập nhật thông tin
        \nTrong form chi tiết, cập nhật các thông tin mà bạn muốn thay đổi như: tên, mã số thuế, điện thoại, CCCD, Email, ngân hàng, địa chỉ, fax, website, ghi chú, trạng thái.
        \nĐảm bảo rằng các thông tin mới được nhập chính xác và đầy đủ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719327169/Untitled47_xoubtz.png'>
        \n<b>Bước 4:</b> Lưu thay đổi
        \nSau khi đã cập nhật xong thông tin, nhấn nút <b>"Hoàn tất"</b> để lưu các thay đổi.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719327220/Untitled47_l3igyz.png'>
        \n<b>Bước 5:</b> Hủy chỉnh sửa (nếu cần)
        \nNếu bạn quyết định không thực hiện thay đổi, bạn có thể nhấn nút "Hủy" để thoát khỏi form chỉnh sửa mà không lưu bất kỳ thay đổi nào.`,
      },
      {
        id: 283,
        label: '3. Xóa nhà cung cấp',
        description: `Để xóa một nhà cung cấp, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn nhà cung cấp
        \nTruy cập vào danh sách nhà cung cấp và xác định nhà cung cấp mà bạn muốn xóa. Tại đây, bạn sẽ thấy các ô chọn phía trước mỗi nhà cung cấp. Hãy nhấp vào ô này để chọn nhà cung cấp cần xóa. Bạn có thể chọn một hoặc nhiều nhà cung cấp cùng lúc.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719327332/Untitled47_c9cplr.png'>
        \n<b>Bước 2:</b> Mở menu tùy chọn
        \nNhấn vào biểu tượng dấu ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719327418/Untitled47_b1gzzr.png'>
        \n<b>Bước 3:</b> Chọn biểu tượng thùng rác
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa nhà cung cấp.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719327470/Untitled47_cyjipo.png'>
        \n<b>Bước 4:</b> Xác nhận xóa
        \nHệ thống sẽ hiển thị thông báo: "Bạn có muốn xóa ?"<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719327563/Untitled47_oezogw.png'>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>. Nhà cung cấp sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719327611/Untitled47_n0i3pj.png'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn <b>"Hủy"</b>, hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.</div>`,
      },
    ],
  },
  {
    id: 29,
    link: 'huong-dan-su-dung-trang-tich-diem',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG TÍCH ĐIỂM ',
    steps: [
      {
        id: 291,
        label: 'Bước 1: Truy cập chức năng tích điểm',
        description: `Đăng nhập vào hệ thống quản lý Tiệm vàng.
        \nĐiều hướng đến phần "Tích điểm" trong giao diện của hệ thống.<br/>`,
      },
      {
        id: 292,
        label: 'Bước 2: Thiết lập thanh trạng thái',
        description: `&nbsp;&nbsp;&nbsp;&nbsp;• Kích hoạt: Chọn tùy chọn này nếu bạn muốn bắt đầu áp dụng chức năng tích điểm cho khách hàng.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Không kích hoạt: Chọn tùy chọn này nếu bạn không muốn áp dụng chức năng tích điểm hoặc tạm thời ngừng sử dụng.`,
      },
      {
        id: 293,
        label: 'Bước 3: Chọn loại tích điểm',
        description: `&nbsp;&nbsp;&nbsp;&nbsp;• Sản phẩm: Chọn tùy chọn này nếu bạn muốn tích điểm dựa trên các sản phẩm cụ thể mà khách hàng mua.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Hóa đơn: Chọn tùy chọn này nếu bạn muốn tích điểm dựa trên tổng giá trị hóa đơn của khách hàng.`,
      },
      {
        id: 294,
        label: 'Bước 4: Thiết lập tỷ lệ quy đổi điểm',
        description: `Nhập tỷ lệ quy đổi điểm từ giá trị tiền tệ sang điểm. <b>Ví dụ:</b> nếu bạn muốn 12.000 VND được quy đổi thành 12 điểm, hãy nhập "12 = 12".`,
      },
      {
        id: 295,
        label: 'Bước 5: Thiết lập thanh toán',
        description: `&nbsp;&nbsp;&nbsp;&nbsp;• Cho phép thanh toán bằng điểm: Tích chọn nếu bạn muốn cho phép khách hàng sử dụng điểm để thanh toán.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Tỷ lệ quy đổi điểm thành tiền: Nhập tỷ lệ quy đổi điểm từ điểm sang giá trị tiền tệ. 
        \n<b>Ví dụ:</b> nếu bạn muốn 12 điểm được quy đổi thành 12 VND, hãy nhập "12 = 12".
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Thanh toán bằng điểm sau bao lần mua: Nhập số lần mua hàng mà khách hàng cần đạt được để có thể sử dụng điểm. 
        \n<b>Ví dụ:</b> nếu bạn muốn khách hàng có thể thanh toán bằng điểm sau 12 lần mua hàng, hãy nhập "12".
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Thanh toán bằng điểm khi tổng điểm bằng: Nhập số điểm tối thiểu mà khách hàng cần tích lũy để có thể sử dụng điểm cho thanh toán. 
        \n<b>Ví dụ:</b> nếu bạn muốn khách hàng có thể thanh toán bằng điểm khi họ tích lũy được 12 điểm, hãy nhập "12".`,
      },
      {
        id: 296,
        label: 'Bước 6: Thiết lập các tính năng khác',
        description: `<b>Tích chọn hoặc không tích ở các mục:</b>
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Không tích điểm hóa đơn giảm giá: Tích chọn nếu bạn không muốn khách hàng tích điểm cho các hóa đơn có áp dụng giảm giá.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Không tích điểm khi thanh toán bằng điểm: Tích chọn nếu bạn không muốn khách hàng tích điểm khi họ sử dụng điểm để thanh toán.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Không tích điểm hóa đơn có thẻ quà tặng: Tích chọn nếu bạn không muốn khách hàng tích điểm cho các hóa đơn có sử dụng thẻ quà tặng.`,
      },
      {
        id: 297,
        label: 'Bước 7: Lưu cài đặt',
        description: `Sau khi hoàn tất việc thiết lập, nhấn nút "Hoàn tất" để lưu lại các cài đặt tích điểm.
        \nHệ thống sẽ xử lý và áp dụng các cài đặt tích điểm mà bạn đã cấu hình.`,
      },
    ],
  },
  {
    id: 30,
    link: 'huong-dan-su-dung-trang-kho-hang',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG KHO HÀNG',
    description:`<iframe width="100%" height="400" src="https://www.youtube.com/embed/KITv7aCsZmU?start=62" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    steps: [
      {
        id: 301,
        label: '1. Thêm kho hàng',
        description: `Để thêm một kho hàng mới, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Truy cập vào chức năng thêm kho hàng mới
        \nĐầu tiên, trên giao diện của trang kho hàng, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719366439/Untitled48_meyfj8.png'>
        \n<b>Bước 2:</b> Chọn thêm kho hàng
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu <b>+</b>.
        \nHệ thống sẽ mở ra một form thêm kho hàng mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719366653/Untitled48_u5trmt.png'>
        \n<b>Bước 3:</b> Nhập thông tin
        \n&nbsp;&nbsp; Tại đây, bạn cần nhập các thông tin sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Tên cửa hàng: Chọn cửa hàng muốn tạo kho hàng mới.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Mã kho: Mỗi kho đều mang một mã kho riêng biệt.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Tên kho hàng: Đặt tên cho kho hàng, đây sẽ là tên chính thức trong hệ thống.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Loại: Tùy chọn được bán / không được bán.
        \n&nbsp;&nbsp;&nbsp;• Ghi chú: Bổ sung ghi chú nếu cần thiết để cung cấp thêm thông tin chi tiết về kho hàng này. Việc này giúp cho việc quản lý và sử dụng kho hàng trở nên thuận tiện và hiệu quả hơn.
        \n&nbsp;&nbsp; Chọn trạng thái cho kho hàng:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Kích hoạt: Kho hàng sẽ được sử dụng và hiển thị trong hệ thống ngay lập tức.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Không kích hoạt: Kho hàng sẽ không được sử dụng hoặc hiển thị trong hệ thống, có thể kích hoạt sau.
        \n<b>Bước 4:</b> Hoàn tất thêm kho hàng
        \nSau khi điền đầy đủ thông tin, nhấn vào nút <b>"Hoàn tất"</b> để lưu thông tin kho hàng mới.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719367028/Untitled48_qhrof9.png'>`,
      },
      {
        id: 302,
        label: '2. Chỉnh sửa thông tin kho hàng',
        description: `Để chỉnh sửa thông tin kho hàng, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn kho hàng cần chỉnh sửa
        \nTruy cập vào danh sách kho hàng trên hệ thống.
        \nTìm và chọn kho hàng mà bạn cần chỉnh sửa thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719367130/Untitled48_xcaffh.png'>
        \n<b>Bước 2:</b> Mở form chỉnh sửa
        \nSau khi chọn kho hàng, nhấn vào biểu tượng cây <b>🖉</b> nằm bên phía bên phải để bắt đầu chỉnh sửa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719326984/Untitled47_ongwh5.png'>
        \nHệ thống sẽ hiển thị form thông tin chi tiết của kho hàng đó.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719367330/Untitled48_syj9md.png'>
        \n<b>Bước 3:</b> Cập nhật thông tin
        \nTrong form chi tiết, cập nhật các thông tin mà bạn muốn thay đổi như: cửa hàng, mã kho, tên, loại, ghi chú, trạng thái.
        \nĐảm bảo rằng các thông tin mới được nhập chính xác và đầy đủ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719367455/Untitled48_w5w5mr.png'>
        \n<b>Bước 4:</b> Lưu thay đổi
        \nSau khi đã cập nhật xong thông tin, nhấn nút <b>"Hoàn tất"</b> để lưu các thay đổi.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b><br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719367500/Untitled48_szn7c7.png'>
        \n<b>Bước 5:</b> Hủy chỉnh sửa (nếu cần)
        \nNếu bạn quyết định không thực hiện thay đổi, bạn có thể nhấn nút <b>"Hủy"</b> để thoát khỏi form chỉnh sửa mà không lưu bất kỳ thay đổi nào.`,
      },
      {
        id: 303,
        label: '3. Xóa kho hàng',
        description: `Để xóa một kho hàng, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn kho hàng
        \nTruy cập vào danh sách kho hàng và xác định kho hàng mà bạn muốn xóa. Tại đây, bạn sẽ thấy các ô chọn phía trước mỗi kho hàng. Hãy nhấp vào ô này để chọn kho hàng cần xóa. Bạn có thể chọn một hoặc nhiều kho hàng cùng lúc.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719367639/Untitled48_lwxyzc.png'>
        \n<b>Bước 2:</b> Mở menu tùy chọn
        \nNhấn vào biểu tượng dấu ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719367682/Untitled48_ttijrx.png'>
        \n<b>Bước 3:</b> Chọn biểu tượng thùng rác
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa kho hàng.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719367728/Untitled48_riijy0.png'>
        \n<b>Bước 4:</b> Xác nhận xóa
        \nHệ thống sẽ hiển thị thông báo: "Bạn có muốn xóa ?"<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719367777/Untitled48_jolxtq.png'>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>. Kho hàng sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719367828/Untitled48_ux4ci0.png'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn <b>"Hủy"</b>, hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.</div>`,
      },
    ],
  },
  {
    id: 31,
    link: 'huong-dan-su-dung-trang-tai-khoan',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG TÀI KHOẢN',
    description:`<iframe width="100%" height="400" src="https://www.youtube.com/embed/UdV4yCcgJIQ?start=62" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    steps: [
      {
        id: 311,
        label: '1. Thêm tài khoản',
        description: `Để thêm một tài khoản mới, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Truy cập vào chức năng thêm tài khoản mới
        \nĐầu tiên, trên giao diện của trang tài khoản, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719368775/Untitled48_m2j7d8.png'>
        \n<b>Bước 2:</b> Chọn thêm tài khoản
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu <b>+</b>.
        \nHệ thống sẽ mở ra một form thêm tài khoản mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719370622/Untitled48_jnqn5v.png'>
        \n<b>Bước 3:</b> Nhập thông tin
        \n&nbsp;Tại đây, bạn cần nhập các thông tin sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Họ và tên: Nhập đầy đủ họ và tên của người dùng.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Hình đại diện: Tải lên hình ảnh đại diện cho tài khoản.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Điện thoại: Cung cấp số điện thoại của người dùng sẽ dùng để đăng nhập vào hệ thống.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Sinh nhật: Nhập ngày sinh của người dùng.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Email: Nhập địa chỉ email của người dùng.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Giới tính: Chọn giới tính của người dùng.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Mật khẩu: Đặt mật khẩu để sử dụng khi đăng nhập vào hệ thống.
        \n&nbsp;&nbsp;&nbsp;• Nhóm quyền: Chọn nhóm quyền để phân quyền cho người dùng.
        \n&nbsp;&nbsp;&nbsp;• Cửa hàng: Chọn tên của cửa hàng của người dùng làm việc.
        \n&nbsp;Chọn trạng thái cho tài khoản:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Kích hoạt: Tài khoản sẽ được sử dụng và hiển thị trong hệ thống ngay lập tức.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Không kích hoạt: Tài khoản sẽ không được sử dụng hoặc hiển thị trong hệ thống, có thể kích hoạt sau.
        \n<b>Bước 4:</b> Hoàn tất thêm tài khoản
        \nSau khi điền đầy đủ thông tin, nhấn vào nút <b>"Hoàn tất"</b> để lưu thông tin tài khoản mới.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719369235/Untitled48_wggne6.png'>`,
      },
      {
        id: 312,
        label: '2. Chỉnh sửa thông tin tài khoản',
        description: `Để chỉnh sửa thông tin tài khoản, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn tài khoản cần chỉnh sửa
        \nTruy cập vào danh sách tài khoản trên hệ thống.
        \nTìm và chọn tài khoản mà bạn cần chỉnh sửa thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719369825/Untitled48_n7vsgj.png'>
        \n<b>Bước 2:</b> Mở form chỉnh sửa
        \nSau khi chọn tài khoản, nhấn vào biểu tượng cây <b>🖉</b> nằm bên phía bên phải để bắt đầu chỉnh sửa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719369878/Untitled48_lxj5rr.png'>
        \nHệ thống sẽ hiển thị form thông tin chi tiết của tài khoản đó.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719370069/Untitled48_u3u06j.png'>
        \n<b>Bước 3:</b> Cập nhật thông tin
        \nTrong form chi tiết, cập nhật các thông tin mà bạn muốn thay đổi như: họ và tên, hình đại diện, điện thoại, sinh nhật, email, giới tính, trạng thái, mật khẩu, nhóm quyền, cửa hàng.
        \nĐảm bảo rằng các thông tin mới được nhập chính xác và đầy đủ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719370151/Untitled48_gykboj.png'>
        \n<b>Bước 4:</b>Lưu thay đổi
        \nSau khi đã cập nhật xong thông tin, nhấn nút <b>"Hoàn tất"</b> để lưu các thay đổi.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719370197/Untitled48_edncjr.png'>
        \n<b>Bước 5:</b> Hủy chỉnh sửa (nếu cần)
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn quyết định không thực hiện thay đổi, bạn có thể nhấn nút <b>"Hủy"</b> để thoát khỏi form chỉnh sửa mà không lưu bất kỳ thay đổi nào.</div>`,
      },
      {
        id: 313,
        label: '3. Xóa tài khoản',
        description: `Để xóa một tài khoản, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn tài khoản
        \nTruy cập vào danh sách tài khoản và xác định tài khỏan mà bạn muốn xóa. Tại đây, bạn sẽ thấy các ô chọn phía trước mỗi tài khoản. Hãy nhấp vào ô này để chọn tài khoản cần xóa. Bạn có thể chọn một hoặc nhiều tài khoản cùng lúc.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719370329/Untitled48_tnzpuq.png'>
        \n<b>Bước 2:</b> Mở menu tùy chọn
        \nNhấn vào biểu tượng dấu ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719370364/Untitled48_lbvwkw.png'>
        \n<b>Bước 3:</b> Chọn biểu tượng thùng rác
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa tài khoản.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719370435/Untitled48_ewpshy.png'>
        \n<b>Bước 4:</b> Xác nhận xóa
        \nHệ thống sẽ hiển thị thông báo: "Bạn có muốn xóa ?"<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719370475/Untitled48_p1w28f.png'>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>. Tài khoản sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719370518/Untitled48_f4n8u6.png'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn <b>"Hủy"</b>, hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.</div>`,
      },
    ],
  },
  {
    id: 32,
    link: 'gioi-thieu-trang-tai-khoan',
    label: 'GIỚI THIỆU TRANG TÀI KHOẢN',
    description:'Chức năng "Tài khoản" trong hệ thống quản lý Bán vàng đóng vai trò quan trọng, giúp quản trị viên kiểm soát và điều chỉnh các tài khoản người dùng một cách hiệu quả. Đây là nơi trung tâm để quản lý thông tin người dùng, quyền hạn và trạng thái hoạt động của họ trong hệ thống. Dưới đây là tổng quan về các chức năng và vai trò chính của giao diện quản lý tài khoản này.',
    steps: [
      {
        id: 321,
        label: 'I. NỘI DUNG',
        description: `<b>1. Quản lý thông tin người dùng:</b>
        \n&nbsp;&nbsp;&nbsp;&nbsp;• <b>Họ & tên:</b> Hiển thị tên của người dùng hoặc tên tài khoản, giúp nhận diện dễ dàng các tài khoản trong danh sách.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• <b>Tài khoản:</b> Số điện thoại hoặc tên đăng nhập của người dùng, một phần thông tin quan trọng để đăng nhập và liên lạc.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• <b>Email:</b> Địa chỉ email liên kết, thường được sử dụng để gửi thông báo hoặc khôi phục mật khẩu.
        \n<b>2. Phân loại và điều hướng quyền hạn:</b>
        \n&nbsp;&nbsp;&nbsp;&nbsp;• <b>Nhóm quyền:</b> Chỉ định vai trò của người dùng, giúp phân biệt và quản lý quyền truy cập của họ. Điều này đảm bảo mỗi người dùng chỉ có quyền thực hiện các hành động phù hợp với vai trò của mình.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• <b>Trạng thái hoạt động:</b> Công tắc bật/tắt cho phép quản trị viên nhanh chóng kích hoạt hoặc vô hiệu hóa tài khoản. Điều này rất hữu ích trong việc quản lý tính sẵn sàng và bảo mật của hệ thống, giúp kiểm soát ai có thể truy cập vào hệ thống bất kỳ lúc nào.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• <b>Cột cửa hàng:</b> Liên kết tài khoản với một cửa hàng hoặc chi nhánh cụ thể, giúp dễ dàng quản lý người dùng theo khu vực hoặc đơn vị kinh doanh.`,
      },
      {
        id: 322,
        label: 'II. TỔNG KẾT',
        description: `Với các chức năng trên, giao diện quản lý tài khoản trong hệ thống giúp tạo điều kiện thuận lợi cho việc giám sát và điều hành các tài khoản người dùng, đảm bảo an toàn và hiệu quả trong hoạt động của hệ thống.`,
      },
    ],
  },
  {
    id: 33,
    link: 'huong-dan-su-dung-trang-thu-chi',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG THU CHI',
    steps: [
      {
        id: 331,
        label: '1. Thêm thu chi',
        description: `Để thêm một thu chi mới, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b>  Truy cập vào chức năng thêm thu chi mới
        \nĐầu tiên, trên giao diện của trang thu chi, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719548991/Untitled51_u26rbd.png'>
        \n<b>Bước 2:</b> Chọn thêm thu chi
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu <b>+</b>.
        \nHệ thống sẽ mở ra một form thêm thu chi mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719549065/Untitled51_q6vb2r.png'>
        \n<b>Bước 3:</b> Nhập thông tin
        \n&nbsp;&nbsp;Tại đây, bạn cần nhập các thông tin sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Loại giao dịch: Chọn giữa khoản thu hay khoản chi
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Ngày tháng giao dịch: Ngày mà giao dịch thu hoặc chi diễn ra.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Số tiền: Số tiền của giao dịch.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Số phiếu: là một mã số duy nhất được gán cho mỗi giao dịch thu hoặc chi. Nó giúp phân biệt mỗi giao dịch với các giao dịch khác, đặc biệt hữu ích trong hệ thống quản lý có nhiều giao dịch hàng ngày.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Diễn giải: Trình bày nội dung mục đích từng khoản thu, chi.
        \n&nbsp;&nbsp;&nbsp;&nbsp;•	Khách hàng: Cho phép bạn tìm kiếm và chọn khách hàng từ danh sách đã có sẵn trong hệ thống quản lý.
        \n&nbsp;&nbsp;&nbsp;&nbsp;•	Hóa đơn: Sử dụng hóa đơn trong chức năng thêm thu chi của doanh nghiệp có vai trò quan trọng để xác nhận và chứng minh các giao dịch thu chi. Hóa đơn cung cấp bằng chứng rõ ràng về tính chính xác và hợp lệ của các chi tiêu hoặc thu nhập, bảo vệ pháp lý cho doanh nghiệp và hỗ trợ quản lý chi phí, đối chiếu thông tin, thống kê và lập báo cáo tài chính một cách hiệu quả.
        \n&nbsp;&nbsp;&nbsp;•	Nhân viên: Chọn nhân viên thực hiện giao dịch có sẵn trong hệ thống. 
        \n&nbsp;&nbsp;&nbsp;•	Nhà cung cấp: Việc chọn nhà cung cấp trong chức năng thêm thu chi giúp doanh nghiệp xác định nguồn gốc chi tiêu, quản lý quan hệ đối tác và phân bổ chi phí một cách chính xác. 
        \n&nbsp;&nbsp;&nbsp;•	Thêm ghi chú (nếu có)
        \nSau khi điền đầy đủ thông tin, nhấn vào nút <b>"Hoàn tất"</b> để lưu thông tin thu chi mới.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719374139/Untitled48_mohafs.png'>`,
      },
      {
        id: 332,
        label: '2. Chỉnh sửa thông tin thu chi',
        description: `Để chỉnh sửa thông tin thu chi, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn thu chi cần chỉnh sửa
        \nTruy cập vào danh sách thu chi trên hệ thống.
        \nTìm và chọn thu chi mà bạn cần chỉnh sửa thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719549230/Untitled51_snknco.png'>
        \n<b>Bước 2: Mở form chỉnh sửa</b>
        \nSau khi chọn thu chi, nhấn vào biểu tượng cây <b>🖉</b> nằm bên phía bên phải để bắt đầu chỉnh sửa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719549292/Untitled51_wkbdu0.png'>
        \nHệ thống sẽ hiển thị form thông tin chi tiết của thu chi đó.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719374548/Untitled48_oqbqbb.png'>
        \n<b>Bước 3:</b> Cập nhật thông tin
        \nTrong form chi tiết, cập nhật các thông tin mà bạn muốn thay đổi như: loại, ngày, số tiền, số phiếu, diễn giải, khách hàng, hóa đơn, nhân viên, nhà cung cấp, hóa đơn mua hàng, ghi chú.
        \nĐảm bảo rằng các thông tin mới được nhập chính xác và đầy đủ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719374690/Untitled48_b0p2xb.png'>
        \n<b>Bước 4:</b> Lưu thay đổi
        \nSau khi đã cập nhật xong thông tin, nhấn nút <b>"Hoàn tất"</b> để lưu các thay đổi.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719374906/Untitled48_lxlfzs.png'>
        \n<b>Bước 5:</b> Hủy chỉnh sửa (nếu cần)
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn quyết định không thực hiện thay đổi, bạn có thể nhấn nút <b>"Hủy"</b> để thoát khỏi form chỉnh sửa mà không lưu bất kỳ thay đổi nào.</div>`,
      },
      {
        id: 333,
        label: '3. Xóa thu chi',
        description: `Để xóa thu chi, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn thu chi
        \nTruy cập vào danh sách thu chi và xác định thu chi mà bạn muốn xóa. Tại đây, bạn sẽ thấy các ô chọn phía trước mỗi thu chi. Hãy nhấp vào ô này để chọn thu chi cần xóa. Bạn có thể chọn một hoặc nhiều thu chi cùng lúc.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719375021/Untitled48_b8txcq.png'>
        \n<b>Bước 2:</b> Mở menu tùy chọn
        \nNhấn vào biểu tượng dấu ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719375083/Untitled48_qdnsya.png'>
        \n<b>Bước 3:</b> Chọn biểu tượng thùng rác
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa thu chi.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719375149/Untitled48_g4lkw3.png'>
        \n<b>Bước 4:</b> Xác nhận xóa
        \nHệ thống sẽ hiển thị thông báo: "Bạn có muốn xóa ?"<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719375202/Untitled48_zz7fih.png'>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>. Thu chi sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719375264/Untitled48_n93cme.png'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn <b>"Hủy"</b>, hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.</div>`,
      },
    ],
  },
  {
    id: 34,
    link: 'Huong-dan-su-dung-trang-thuong-hieu',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG THƯƠNG HIỆU',
    steps: [
      {
        id: 341,
        label: '1. Thêm thương hiệu',
        description: `Để thêm một thương hiệu mới, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Truy cập vào chức năng thêm thương hiệu mới
        \nĐầu tiên, trên giao diện của trang thương hiệu, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719376383/Untitled48_nentbu.png'>
        \n<b>Bước 2:</b> Chọn thêm thương hiệu
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu <b>+</b>.
        \nHệ thống sẽ mở ra một form thêm thương hiệu mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719376570/Untitled48_utsenj.png'>
        \n<b>Bước 3:</b> Nhập thông tin
        \n&nbsp;Tại đây, bạn cần nhập các thông tin sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Tên thương hiệu: Nhập tên của thương hiệu.
        \n&nbsp;Chọn trạng thái cho thương hiệu:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Kích hoạt: Thương hiệu sẽ được sử dụng và hiển thị trong hệ thống ngay lập tức.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Không kích hoạt: Thương hiệu sẽ không được sử dụng hoặc hiển thị trong hệ thống, có thể kích hoạt sau.
        \nSau khi điền đầy đủ thông tin, nhấn vào nút <b>"Hoàn tất"</b> để lưu thông tin thương hiệu mới.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719376751/Untitled48_cvy37l.png'>`,
      },
      {
        id: 342,
        label: '2. Chỉnh sửa thông tin thương hiệu',
        description: `Để chỉnh sửa thông tin thương hiệu, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn thương hiệu cần chỉnh sửa
        \nTruy cập vào danh sách thương hiệu trên hệ thống.
        \nTìm và chọn thương hiệu mà bạn cần chỉnh sửa thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719376857/Untitled48_h9qx3g.png'>
        \n<b>Bước 2:</b> Mở form chỉnh sửa
        \nSau khi chọn thương hiệu, nhấn vào biểu tượng cây <b>🖉</b> nằm bên phía bên phải để bắt đầu chỉnh sửa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719376910/Untitled48_ugkvvw.png'>
        \nHệ thống sẽ hiển thị form thông tin chi tiết của thương hiệu đó.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719376974/Untitled48_unl1l3.png'>
        \n<b>Bước 3:</b> Cập nhật thông tin
        \nTrong form chi tiết, cập nhật các thông tin mà bạn muốn thay đổi như: tên, trạng thái.
        \nĐảm bảo rằng các thông tin mới được nhập chính xác và đầy đủ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719377040/Untitled48_sddlpw.png'>
        \n<b>Bước 4:</b> Lưu thay đổi
        \nSau khi đã cập nhật xong thông tin, nhấn nút <b>"Hoàn tất"</b> để lưu các thay đổi.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719377079/Untitled48_d2fbmq.png'>
        \n<b>Bước 5:</b> Hủy chỉnh sửa (nếu cần)
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn quyết định không thực hiện thay đổi, bạn có thể nhấn nút <b>"Hủy"</b> để thoát khỏi form chỉnh sửa mà không lưu bất kỳ thay đổi nào.</div>`,
      },
      {
        id: 343,
        label: '3. Xóa thương hiệu',
        description: `Để xóa thương hiệu, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn thương hiệu
        \nTruy cập vào danh sách thương hiệu và xác định thương hiệu mà bạn muốn xóa. Tại đây, bạn sẽ thấy các ô chọn phía trước mỗi thương hiệu. Hãy nhấp vào ô này để chọn thương hiệu cần xóa. Bạn có thể chọn một hoặc nhiều thương hiệu cùng lúc.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719377293/Untitled48_tvia6w.png'>
        \n<b>Bước 2:</b> Mở menu tùy chọn
        \nNhấn vào biểu tượng dấu ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719377325/Untitled48_z4jrdt.png'>
        \n<b>Bước 3:</b> Chọn biểu tượng thùng rác
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa thương hiệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719377375/Untitled48_wh7qb2.png'>
        \n<b>Bước 4:</b> Xác nhận xóa
        \nHệ thống sẽ hiển thị thông báo: "Bạn có muốn xóa ?"<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719377413/Untitled48_wes7st.png'>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>. Thương hiệu sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719377460/Untitled48_uqdkp9.png'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn <b>"Hủy"</b>, hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.</div>`,
      },
    ],
  },
  {
    id: 35,
    link: 'Huong-dan-su-dung-trang-danh-muc',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG DANH MỤC',
    steps: [
      {
        id: 351,
        label: '1. Thêm danh mục',
        description: `Để thêm một danh mục mới, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Truy cập vào chức năng thêm danh mục mới
        \nĐầu tiên, trên giao diện của trang danh mục, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719377885/Untitled48_qawpwd.png'>
        \n<b>Bước 2:</b> Chọn thêm danh mục
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu <b>+</b>.
        \nHệ thống sẽ mở ra một form thêm danh mục mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719377947/Untitled48_i1qnw2.png'>
        \n<b>Bước 3:</b> Nhập thông tin
        \nTại đây, bạn cần nhập các thông tin sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Danh mục chính: Chọn danh mục từ cơ sở dữ liệu.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Mã danh mục: Bạn cần nhập mã danh mục, đây là mã định danh duy nhất để phân biệt danh mục này với các danh mục khác trong hệ thống.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Tên: Bạn cần điền vào tên cụ thể cho danh mục mà bạn muốn tạo, đây là tên mà sẽ hiển thị trong hệ thống.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Bạn cũng có thể bổ sung ghi chú để cung cấp thêm thông tin chi tiết về danh mục này nếu cần thiết.
        \nChọn trạng thái cho danh mục:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Kích hoạt: Danh mục sẽ được sử dụng và hiển thị trong hệ thống ngay lập tức.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Không kích hoạt: Danh mục sẽ không được sử dụng hoặc hiển thị trong hệ thống, có thể kích hoạt sau.
        \nSau khi điền đầy đủ thông tin, nhấn vào nút <b>"Hoàn tất"</b> để lưu thông tin danh mục mới.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719387103/Untitled48_zrxocz.png'>`,
      },
      {
        id: 352,
        label: '2. Chỉnh sửa thông tin danh mục',
        description: `Để chỉnh sửa thông tin danh mục, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn danh mục cần chỉnh sửa
        \nTruy cập vào danh sách danh mục trên hệ thống.
        \nTìm và chọn danh mục mà bạn cần chỉnh sửa thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719387217/Untitled48_ibbjyc.png'>
        \n<b>Bước 2:</b> Mở form chỉnh sửa
        \nSau khi chọn danh mục, nhấn vào biểu tượng cây <b>🖉</b> nằm bên phía bên phải để bắt đầu chỉnh sửa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719387259/Untitled48_pfypfu.png'>
        \nHệ thống sẽ hiển thị form thông tin chi tiết của danh mục đó.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719387320/Untitled48_hdf9fb.png'>
        \n<b>Bước 3:</b> Cập nhật thông tin
        \nTrong form chi tiết, cập nhật các thông tin mà bạn muốn thay đổi như: danh mục chính, mã danh mục, tên, ghi chú, trạng thái.
        \nĐảm bảo rằng các thông tin mới được nhập chính xác và đầy đủ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719387489/Untitled48_atibjn.png'>
        \n<b>Bước 4:</b> Lưu thay đổi
        \nSau khi đã cập nhật xong thông tin, nhấn nút <b>"Hoàn tất"</b> để lưu các thay đổi.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719387551/Untitled48_rntvjb.png'>
        \n<b>Bước 5: Hủy chỉnh sửa (nếu cần)</b>
        \nNếu bạn quyết định không thực hiện thay đổi, bạn có thể nhấn nút <b>"Hủy"</b> để thoát khỏi form chỉnh sửa mà không lưu bất kỳ thay đổi nào.`,
      },
      {
        id: 353,
        label: '3. Xóa danh mục',
        description: `Để xóa danh mục, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn danh mục
        \nTruy cập vào danh sách danh mục và xác định danh mục mà bạn muốn xóa. Tại đây, bạn sẽ thấy các ô chọn phía trước mỗi danh mục. Hãy nhấp vào ô này để chọn danh mục cần xóa. Bạn có thể chọn một hoặc nhiều danh mục cùng lúc.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719387688/Untitled48_etwgsq.png'>
        \n<b>Bước 2:</b> Mở menu tùy chọn
        \nNhấn vào biểu tượng dấu ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719387742/Untitled48_jjnewz.png'>
        \n<b>Bước 3:</b> Chọn biểu tượng thùng rác
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa danh mục.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719387798/Untitled48_qpm6sp.png'>
        \n<b>Bước 4:</b> Xác nhận xóa
        \nHệ thống sẽ hiển thị thông báo: "Bạn có muốn xóa ?"<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719387847/Untitled48_aib3ij.png'>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>. Danh mục sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719387907/Untitled48_o4njev.png'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn <b>"Hủy"</b>, hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.</div>`,
      },
    ],
  },
  {
    id: 36,
    link: 'huong-dan-su-dung-trang-loai-khach-hang',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG LOẠI KHÁCH HÀNG',
    steps: [
      {
        id: 361,
        label: '1. Thêm loại khách hàng',
        description: `Để thêm một loại khách hàng mới, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Truy cập vào chức năng thêm loại khách hàng mới
        \nĐầu tiên, trên giao diện của trang loại khách hàng, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719388519/Untitled48_x02ewm.png'>
        \n<b>Bước 2:</b> Chọn thêm loại khách hàng
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu <b>+</b>.
        \nHệ thống sẽ mở ra một form thêm loại khách hàng mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719388740/Untitled48_zufyi0.png'>
        \n<b>Bước 3:</b> Nhập thông tin
        \n&nbsp;&nbsp;Tại đây, bạn cần nhập các thông tin sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Tên: Bạn cần nhập tên cụ thể cho loại khách hàng mới. <b>Ví dụ:</b> Khách hàng thân thiết hoặc khách hàng VIP.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Bạn cũng có thể bổ sung ghi chú để cung cấp thêm thông tin chi tiết về loại khách hàng này nếu cần thiết.
        \n&nbsp;&nbsp;Chọn trạng thái cho loại khách hàng:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Kích hoạt: Loại khách hàng sẽ được sử dụng và hiển thị trong hệ thống ngay lập tức.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Không kích hoạt: Loại khách hàng sẽ không được sử dụng hoặc hiển thị trong hệ thống, có thể kích hoạt sau.
        \nSau khi điền đầy đủ thông tin, nhấn vào nút <b>"Hoàn tất"</b> để lưu thông tin loại khách hàng mới.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719389676/Untitled48_h1py21.png'>`,
      },
      {
        id: 362,
        label: '2. Chỉnh sửa thông tin loại khách hàng',
        description: `Để chỉnh sửa thông tin loại khách hàng, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn loại khách hàng cần chỉnh sửa
        \nTruy cập vào danh sách loại khách hàng trên hệ thống.
        \nTìm và chọn loại khách hàng mà bạn cần chỉnh sửa thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719389831/Untitled48_wnnkgf.png'>
        \n<b>Bước 2:</b> Mở form chỉnh sửa
        \nSau khi chọn loại khách hàng, nhấn vào biểu tượng cây <b>🖉</b> nằm bên phía bên phải để bắt đầu chỉnh sửa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719389884/Untitled48_jx4os9.png'>
        \nHệ thống sẽ hiển thị form thông tin chi tiết của loại khách hàng đó.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719389947/Untitled48_lbw2pv.png'>
        \n<b>Bước 3:</b> Cập nhật thông tin
        \nTrong form chi tiết, cập nhật các thông tin mà bạn muốn thay đổi như: tên, ghi chú, trạng thái.
        \nĐảm bảo rằng các thông tin mới được nhập chính xác và đầy đủ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719390057/Untitled48_hs7si8.png'>
        \n<b>Bước 4:</b> Lưu thay đổi
        \nSau khi đã cập nhật xong thông tin, nhấn nút <b>"Hoàn tất"</b> để lưu các thay đổi.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719390125/Untitled48_jucrw7.png'>
        \n<b>Bước 5:</b> Hủy chỉnh sửa (nếu cần)
        \nNếu bạn quyết định không thực hiện thay đổi, bạn có thể nhấn nút <b>"Hủy"</b> để thoát khỏi form chỉnh sửa mà không lưu bất kỳ thay đổi nào.`,
      },
      {
        id: 363,
        label: '3. Xóa loại khách hàng',
        description: `Để xóa loại khách hàng, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn loại khách hàng
        \nTruy cập vào danh sách loại khách hàng và xác định loại khách hàng mà bạn muốn xóa. Tại đây, bạn sẽ thấy các ô chọn phía trước mỗi loại khách hàng. Hãy nhấp vào ô này để chọn loại khách hàng cần xóa. Bạn có thể chọn một hoặc nhiều loại khách hàng cùng lúc.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719387688/Untitled48_etwgsq.png'>
        \n<b>Bước 2:</b> Mở menu tùy chọn
        \nNhấn vào biểu tượng dấu ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719387742/Untitled48_jjnewz.png'>
        \n<b>Bước 3:</b> Chọn biểu tượng thùng rác
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa loại khách hàng.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719390491/Untitled48_samcgb.png'>
        \n<b>Bước 4:</b> Xác nhận xóa
        \nHệ thống sẽ hiển thị thông báo: "Bạn có muốn xóa ?"<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719390551/Untitled48_fpkabu.png'>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>. Loại khách hàng sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719390606/Untitled48_v3wqzr.png'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn <b>"Hủy"</b>, hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.</div>`,
      },
    ],
  },
  {
    id: 37,
    link: 'huong-dan-su-dung-trang-sinh-nhat-khach-hang',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG SINH NHẬT KHÁCH HÀNG',
    description: `Chức năng theo dõi sinh nhật khách hàng trong hệ thống quản lý bán hàng được thiết kế để giúp doanh nghiệp quản lý và chúc mừng sinh nhật khách hàng một cách hiệu quả. Đây là một phần quan trọng của quản lý quan hệ khách hàng (CRM), giúp duy trì và củng cố mối quan hệ tốt đẹp với khách hàng. Chức năng này cung cấp tổng quan về các tính năng và thông tin sau:
    \n&nbsp;&nbsp;• <b>Hiển thị danh sách khách hàng có sinh nhật trong các khoảng thời gian khác nhau:</b> Điều này giúp doanh nghiệp dễ dàng theo dõi và chuẩn bị những lời chúc mừng đặc biệt, tạo ấn tượng tốt đẹp và tăng cường sự gắn kết với khách hàng.`,
    steps: [
      {
        id: 371,
        label: '1. Sử dụng chức năng lọc để tìm kiếm sinh nhật khách hàng',
        description: `&nbsp;&nbsp;&nbsp;&nbsp;• <b>Hôm nay:</b> Hiển thị danh sách khách hàng có sinh nhật vào ngày hiện tại.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• <b>Trong tuần:</b> Hiển thị danh sách khách hàng có sinh nhật trong tuần hiện tại.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• <b>Trong tháng:</b> Hiển thị danh sách khách hàng có sinh nhật trong tháng hiện tại.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• <b>Tháng sau: </b>Hiển thị danh sách khách hàng có sinh nhật vào tháng tới.
        \n&nbsp;&nbsp;&nbsp;• <b>Thêm điều kiện lọc:</b> Cho phép người dùng lọc sinh nhật khách hàng theo các tiêu chí khác nhau như: loại khách hàng, thời điểm (tháng), tỉnh thành, nguồn kênh khách hàng, trạng thái.`,
      },
      {
        id: 372,
        label: '2. Xem thông tin chi tiết của khách hàng',
        description: `Để khai thác toàn diện thông tin liên quan đến khách hàng, hệ thống quản lý Tiệm vàng cung cấp một chức năng đặc biệt: biểu tượng mắt nằm ở cuối mỗi mục. Chỉ cần nhấp vào biểu tượng này, bạn có thể truy cập sâu hơn vào các chi tiết phong phú như đơn hàng, lịch sử quà tặng, doanh thu tích lũy và giá trị trung bình của đơn hàng.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719392561/Untitled48_l8ijfu.png'>
        <div style='text-align:center;color:green'>Biểu tượng mắt để xem thông tin chi tiết về khách hàng</div>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719392707/Untitled48_toddo1.png'>
        <div style='text-align:center;color:green'>Thông tin chi tiết về khách hàng</div>
        `,
      },
    ],
  },
  {
    id: 38,
    link: 'Huong-dan-su-dung-trang-de-xuat-mua-hang',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG ĐỀ XUẤT MUA HÀNG',
    steps: [
      {
        id: 381,
        label: '1. Tạo đề xuất',
        description: `Để tạo một đề xuất mới, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Truy cập vào chức năng tạo đề xuất mới
        \nĐầu tiên, trên giao diện của trang đề xuất mua hàng, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719393976/Untitled48_w42ima.png'>
        \n<b>Bước 2:</b> Chọn tạo đề xuất mới
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu <b>+</b>.
        \nHệ thống sẽ mở ra một form tạo đề xuất mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719394168/Untitled48_tf5nqg.png'>
        \n<b>Bước 3:</b> Nhập thông tin
        \nTại đây, bạn cần nhập các thông tin sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• <b>Cửa hàng: </b>Trước tiên, hãy chọn cửa hàng mà bạn đang đề xuất mua hàng cho nó. Thông tin cửa hàng này sẽ giúp xác định rõ ràng nơi sẽ tiếp nhận và xử lý đề xuất của bạn.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• <b>Sản phẩm đề xuất mua:</b> Tiếp theo, bạn cần liệt kê các sản phẩm mà bạn muốn đề xuất mua. Để làm điều này, hãy nhấp vào biểu tượng dấu <b>+</b>. Một khung nhập thông tin sẽ xuất hiện, cho phép bạn nhập các thông tin chi tiết về từng sản phẩm. Các thông tin cần thiết bao gồm:
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <b>Tên sản phẩm:</b> Nhập tên sản phẩm mà bạn muốn đề xuất mua.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <b>Số lượng:</b> Nhập số lượng sản phẩm mà bạn muốn mua.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <b>Khối lượng tổng:</b> Nhập khối lượng tổng của sản phẩm.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <b>Khối lượng vật gắn:</b> Nhập khối lượng của các vật gắn kèm sản phẩm (nếu có).
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <b>Khối lượng vàng:</b> Nhập khối lượng vàng.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <b>Đơn giá:</b> Nhập giá của mỗi đơn vị sản phẩm.
        <br/>
        <div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn cần thêm nhiều sản phẩm vào đề xuất, bạn có thể tiếp tục nhấp vào dấu <b>+</b> để thêm các khung nhập thông tin mới cho các sản phẩm khác.</div>
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <b>Nội dung đề xuất:</b> Cuối cùng, bạn cần nhập các thông tin bổ sung liên quan đến đề xuất mua hàng của bạn. Đây có thể là lý do tại sao bạn đề xuất mua sản phẩm này, hoặc bất kỳ thông tin nào khác mà bạn cho là cần thiết.
        \nSau khi điền đầy đủ thông tin, nhấn vào nút <b>"Hoàn tất"</b> để lưu thông tin đề xuất mới.
        \nHệ thống sẽ xử lý và lưu vào CSDL.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719395243/Untitled48_zpojpn.png'>
        <br/>
        <div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'><span style="color: red;">Chú ý :</span> Sau khi đã nhập đầy đủ thông tin cần thiết, bạn chọn "Hoàn tất" để gửi đề xuất mua hàng đến kho mua hàng. Khi bạn hoàn tất việc gửi đề xuất, thông tin của đề xuất sẽ được lưu trữ trong danh sách đề xuất với trạng thái "Công nợ". Điều này có nghĩa là đề xuất của bạn đã được ghi nhận và sẽ được xem xét, xử lý bởi kho mua hàng. Để thanh toán cho công nợ này bạn có thể tham khảo hướng dẫn <b><a href='Huong-dan-su-dung-trang-de-xuat-mua-hang#383'>Thanh toán</a></b> bên dưới.</div>`,
      },
      {
        id: 382,
        label: '2. Xóa đề xuất mua hàng',
        description: `Để xóa đề xuất mua hàng, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn đề xuất mua hàng
        \nTruy cập vào danh sách đề xuất và xác định đề xuất mua hàng mà bạn muốn xóa. Tại đây, bạn sẽ thấy các ô chọn phía trước mỗi đề xuất. Hãy nhấp vào ô này để chọn đề xuất cần xóa. Bạn có thể chọn một hoặc nhiều đề xuất cùng lúc.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719395771/Untitled48_zeazpl.png'>
        \n<b>Bước 2:</b> Mở menu tùy chọn
        \nNhấn vào biểu tượng dấu ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719395829/Untitled48_abryxm.png'>
        \n<b>Bước 3:</b> Chọn biểu tượng thùng rác
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa đề xuất.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719395876/Untitled48_aoj6oy.png'>
        \n<b>Bước 4:</b> Xác nhận xóa
        \nHệ thống sẽ hiển thị thông báo: "Bạn có muốn xóa ?"<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719396121/Untitled48_ouqitf.png'>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>. Đề xuất sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719396158/Untitled48_mxokpk.png'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn <b>"Hủy"</b>, hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.</div>`,
      },
      {
        id: 383,
        label: '3. Thanh toán',
        description: `Để thanh toán đề xuất mua hàng, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn đề xuất mua hàng cần thanh toán
        \nKhi bạn đã thêm thành công một đề xuất mua hàng, trạng thái của đề xuất này sẽ hiển thị là <b>"Công nợ"</b>. Điều này có nghĩa là khoản tiền mua hàng này vẫn chưa được thanh toán. Để bắt đầu quá trình thanh toán, bạn cần chọn biểu tượng có hình dấu <b>$</b> nằm phía sau mỗi đề xuất trong danh sách. Biểu tượng này đại diện cho thao tác thanh toán.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719409184/Untitled49_ur1qg1.png'>
        \n<b>Bước 2:</b> Nhập thông tin và hoàn tất thanh toán
        \nSau khi chọn biểu tượng <b>$</b>, bạn sẽ được dẫn đến một trang hoặc một cửa sổ mới để nhập thông tin thanh toán. Tại đây, bạn cần nhập số tiền mà bạn sẽ thanh toán cho đề xuất mua hàng này. Sau khi nhập số tiền thanh toán, hãy nhấp vào nút <b>"Hoàn tất"</b> để xác nhận việc thanh toán.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719409581/Untitled49_e9a8jn.png'>
        <div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Khi bạn đã thanh toán đủ số tiền cần thiết, hệ thống sẽ tự động cập nhật trạng thái của đề xuất từ <b>"Công nợ"</b> sang <b>"Đã thanh toán"</b>. Điều này cho biết rằng toàn bộ khoản tiền cho đề xuất mua hàng đã được thanh toán đầy đủ, và không còn khoản nợ nào liên quan đến đề xuất này.</div>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719410385/Untitled49_gnuet5.png'>
        <div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu số tiền bạn thanh toán nhỏ hơn tổng số tiền phải thanh toán cho đề xuất, trạng thái của đề xuất sẽ vẫn giữ là <span style="color: red;">"Công nợ"</span>. Hệ thống sẽ cập nhật cột "Đã thanh toán" với số tiền bạn đã trả và cột "Còn lại" sẽ hiển thị số tiền còn lại mà bạn cần thanh toán. Điều này giúp bạn dễ dàng theo dõi và quản lý các khoản thanh toán chưa hoàn tất.</div>
       `,
      },
    ],
  },
  {
    id: 39,
    link: 'huong-dan-su-dung-trang-nhan-vien-ban-hang',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG NHÂN VIÊN BÁN HÀNG',
    description:`<iframe width="100%" height="400" src="https://www.youtube.com/embed/KhK4N9LnIJQ?start=67" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    steps: [
      {
        id: 391,
        label: '1. Thêm nhân viên bán hàng',
        description: `Để thêm một nhân viên bán hàng mới, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1: </b> Truy cập vào chức năng thêm nhân viên bán hàng mới
        \nĐầu tiên, trên giao diện của trang nhân viên bán hàng, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719411582/Untitled49_blcuko.png'>
        \n<b>Bước 2:</b> Chọn thêm nhân viên bán hàng
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu <b>+</b>.
        \nHệ thống sẽ mở ra một form thêm nhân viên bán hàng mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719411748/Untitled49_mdu6ep.png'>
        \n<b>Bước 3:</b> Nhập thông tin
        \n&nbsp;&nbsp;Tại đây, bạn cần nhập các thông tin sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Mã nhân viên: Mã nhân viên là một chuỗi ký tự hoặc số duy nhất để xác định mỗi nhân viên trong hệ thống. Điều này giúp dễ dàng quản lý và tìm kiếm nhân viên. Hãy tạo một mã số hoặc sử dụng mã tự động sinh bởi hệ thống, đảm bảo rằng mã này không trùng lặp với bất kỳ nhân viên nào khác.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Email: Nhập địa chỉ email công việc của nhân viên. Email này sẽ được sử dụng cho tất cả các liên lạc nội bộ, cập nhật từ hệ thống và các thông báo quan trọng. Hãy đảm bảo rằng email được nhập đúng định dạng và không có lỗi chính tả.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Tên: Nhập họ và tên đầy đủ của nhân viên.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Cửa hàng: Chọn cửa hàng nơi nhân viên sẽ làm việc. Thông tin này giúp xác định chính xác vị trí làm việc của nhân viên và dễ dàng phân bổ nhiệm vụ hoặc theo dõi hoạt động của họ.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Điện thoại: Cung cấp số điện thoại di động hoặc số điện thoại cố định của nhân viên. Đảm bảo rằng số điện thoại được nhập chính xác để có thể dễ dàng liên hệ khi cần thiết. Số điện thoại này sẽ là kênh liên lạc chính giữa hệ thống và nhân viên.
        \n&nbsp;&nbsp;Chọn trạng thái cho nhân viên bán hàng:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Kích hoạt: Nhân viên bán hàng sẽ được sử dụng và hiển thị trong hệ thống ngay lập tức.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Không kích hoạt: Nhân viên bán hàng sẽ không được sử dụng hoặc hiển thị trong hệ thống, có thể kích hoạt sau.
        \n&nbsp;&nbsp;Ngoài ra, nếu muốn nắm thông tin chi tiết hơn về nhân viên có thể lưu trữ thêm về địa chỉ, nơi cư trú.
        \nSau khi điền đầy đủ thông tin, nhấn vào nút <b>"Hoàn tất"</b> để lưu thông tin nhân viên bán hàng mới.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719412584/Untitled49_wxsuh5.png'>`,
      },
      {
        id: 392,
        label: '2. Chỉnh sửa thông tin nhân viên bán hàng',
        description: `Để chỉnh sửa thông tin nhân viên bán hàng, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn nhân viên bán hàng cần chỉnh sửa
        \nTruy cập vào danh sách nhân viên bán hàng trên hệ thống.
        \nTìm và chọn nhân viên bán hàng mà bạn cần chỉnh sửa thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719412722/Untitled49_mgtvwn.png'>
        \n<b>Bước 2:</b> Mở form chỉnh sửa
        \nSau khi chọn nhân viên bán hàng, nhấn vào biểu tượng cây <b>🖉</b> nằm bên phía bên phải để bắt đầu chỉnh sửa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719412660/Untitled49_clvrbf.png'>
        \nHệ thống sẽ hiển thị form thông tin chi tiết của nhân viên bán hàng đó.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719412768/Untitled49_hzyhkz.png'>
        \n<b>Bước 3:</b> Cập nhật thông tin
        \nTrong form chi tiết, cập nhật các thông tin mà bạn muốn thay đổi như: mã nhân viên, email, tên, cửa hàng, điện thoại, trạng thái, thông tin thêm.
        \nĐảm bảo rằng các thông tin mới được nhập chính xác và đầy đủ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719412813/Untitled49_xrzcbn.png'>
        \n<b>Bước 4:</b> Lưu thay đổi
        \nSau khi đã cập nhật xong thông tin, nhấn nút <b>"Hoàn tất"</b> để lưu các thay đổi.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719412867/Untitled49_wt451o.png'>
        \n<b>Bước 5:</b> Hủy chỉnh sửa (nếu cần)
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn quyết định không thực hiện thay đổi, bạn có thể nhấn nút <b>"Hủy"</b> để thoát khỏi form chỉnh sửa mà không lưu bất kỳ thay đổi nào.</div>`,
      },
      {
        id: 393,
        label: '3. Xóa nhân viên bán hàng',
        description: `Để xóa nhân viên bán hàng, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn nhân viên bán hàng
        \nTruy cập vào danh sách nhân viên bán hàng và xác định nhân viên mà bạn muốn xóa. Tại đây, bạn sẽ thấy các ô chọn phía trước mỗi nhân viên. Hãy nhấp vào ô này để chọn nhân viên cần xóa. Bạn có thể chọn một hoặc nhiều nhân viên cùng lúc.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719413059/Untitled49_zhtaei.png'>
        \n<b>Bước 2:</b> Mở menu tùy chọn
        \nNhấn vào biểu tượng dấu ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719413094/Untitled49_suogq2.png'>
        \n<b>Bước 3:</b> Chọn biểu tượng thùng rác
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa nhân viên bán hàng.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719413197/Untitled49_yzphgg.png'>
        \n<b>Bước 4:</b> Xác nhận xóa
        \nHệ thống sẽ hiển thị thông báo: "Bạn có muốn xóa ?"<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719413248/Untitled49_wwpibu.png'>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>. Nhân viên bán hàng sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719413294/Untitled49_xjhupk.png'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn <b>"Hủy"</b>, hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.</div>`,
      },
    ],
  },
  {
    id: 40,
    link: 'huong-dan-su-dung-trang-the-qua-tang',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG THẺ QUÀ TẶNG',
    steps: [
      {
        id: 401,
        label: '1. Thêm thẻ quà tặng',
        description: `Để thêm một thẻ quà tặng mới, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Truy cập vào chức năng thêm thẻ quà tặng mới
        \nĐầu tiên, trên giao diện của trang thẻ quà tặng, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719451936/Untitled50_fimnws.png'>
        \n<b>Bước 2:</b> Chọn thêm thẻ quà tặng
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu <b>+</b>.
        \nHệ thống sẽ mở ra một form thêm thẻ quà tặng mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719452102/Untitled50_e0fbve.png'>
        \n<b>Bước 3:</b> Nhập thông tin
        \n&nbsp;&nbsp;Tại đây, bạn cần nhập các thông tin sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Loại: Chọn loại thẻ quà tặng mà bạn muốn thêm. Các lựa chọn có thể bao gồm phần trăm giảm giá, số tiền giảm giá cố định, hoặc trừ tiền thẻ tùy theo thiết lập của hệ thống.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Ngày bắt đầu: Chọn ngày mà thẻ quà tặng sẽ bắt đầu có hiệu lực.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Tên: Nhập tên của thẻ quà tặng. Tên này sẽ giúp bạn dễ dàng nhận diện thẻ.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Ngày kết thúc: Chọn ngày mà thẻ quà tặng sẽ hết hạn sử dụng.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Mã thẻ: Nhập mã của thẻ quà tặng. Đây là mã mà khách hàng sẽ sử dụng khi họ muốn áp dụng thẻ quà tặng này.
        \n&nbsp;&nbsp;&nbsp;• Số lần sử dụng: Nhập số lần mà thẻ quà tặng có thể được sử dụng.( Có thể nhập số cụ thể từ bàn phím hoặc sử dụng nhấp chuột vào mũi tên lên xuống để tăng giảm số lần như mong muốn)
        \n&nbsp;&nbsp;&nbsp;• Số tiền: Nếu bạn đã chọn loại thẻ là giảm giá theo số tiền, nhập số tiền giảm giá vào đây.
        \n&nbsp;&nbsp;Chọn trạng thái cho thẻ quà tặng:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Kích hoạt: Thẻ quà tặng sẽ được sử dụng và hiển thị trong hệ thống ngay lập tức.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Không kích hoạt: Thẻ quà tặng sẽ không được sử dụng hoặc hiển thị trong hệ thống, có thể kích hoạt sau.
        \n&nbsp;&nbsp;Áp dụng chung cho nhiều thẻ khác: Tích chọn nếu bạn muốn thẻ này có thể được áp dụng cùng với các thẻ quà tặng khác.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Danh mục: Chọn danh mục sản phẩm mà thẻ này sẽ áp dụng. Bạn có thể để trống nếu thẻ áp dụng cho tất cả các danh mục.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Sản phẩm: Chọn sản phẩm cụ thể mà thẻ này áp dụng, hoặc để trống nếu áp dụng cho tất cả các sản phẩm.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Khách hàng: Chọn đối tượng khách hàng cụ thể nếu thẻ này chỉ áp dụng cho một hoặc một số khách hàng nhất định.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Ghi chú: Nhập bất kỳ ghi chú nào liên quan đến thẻ quà tặng này để dễ dàng quản lý và nhận biết sau này.(Có thể để trống)
        \nSau khi điền đầy đủ thông tin, nhấn vào nút <b>"Hoàn tất"</b> để lưu thông tin thẻ quà tặng mới.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719453706/Untitled50_ep0tjy.png'>`,
      },
      {
        id: 402,
        label: '2. Chỉnh sửa thông tin thẻ quà tặng',
        description: `Để chỉnh sửa thông tin thẻ quà tặng, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn thẻ quà tặng cần chỉnh sửa
        \nTruy cập vào danh sách thẻ quà tặng trên hệ thống.
        \nTìm và chọn thẻ quà tặng mà bạn cần chỉnh sửa thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719453888/Untitled50_awpy0r.png'>
        \n<b>Bước 2:</b> Mở form chỉnh sửa
        \nSau khi chọn thẻ quà tặng, nhấn vào biểu tượng cây <b>🖉</b> nằm bên phía bên phải để bắt đầu chỉnh sửa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719453942/Untitled50_xee9pg.png'>
        \nHệ thống sẽ hiển thị form thông tin chi tiết của thẻ quà tặng đó.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719454022/Untitled50_wfvuct.png'>
        \n<b>Bước 3:</b> Cập nhật thông tin
        \nTrong form chi tiết, cập nhật các thông tin mà bạn muốn thay đổi như: loại, ngày bắt đầu, tên, ngày kết thúc, mã thẻ, số lần sử dụng, số tiền, trạng thái, danh mục, sản phẩm, khách hàng, ghi chú.
        \nĐảm bảo rằng các thông tin mới được nhập chính xác và đầy đủ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719454278/Untitled50_oqrazr.png'>
        \n<b>Bước 4:</b> Lưu thay đổi
        \nSau khi đã cập nhật xong thông tin, nhấn nút <b>"Hoàn tất"</b> để lưu các thay đổi.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719454341/Untitled50_jeaw9j.png'>
        \n<b>Bước 5: Hủy chỉnh sửa (nếu cần)</b>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn quyết định không thực hiện thay đổi, bạn có thể nhấn nút <b>"Hủy"</b> để thoát khỏi form chỉnh sửa mà không lưu bất kỳ thay đổi nào.</div>`,
      },
      {
        id: 403,
        label: '3. Xóa thẻ quà tặng',
        description: `Để xóa thẻ quà tặng, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn thẻ quà tặng
        \nTruy cập vào danh sách thẻ quà tặng và xác định thẻ quà tặng mà bạn muốn xóa. Tại đây, bạn sẽ thấy các ô chọn phía trước mỗi thẻ quà tặng. Hãy nhấp vào ô này để chọn thẻ quà tặng cần xóa. Bạn có thể chọn một hoặc nhiều thẻ quà tặng cùng lúc.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719454471/Untitled50_rd9tjr.png'>
        \n<b>Bước 2:</b> Mở menu tùy chọn
        \nNhấn vào biểu tượng dấu ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719454500/Untitled50_ocvsas.png'>
        \n<b>Bước 3:</b> Chọn biểu tượng thùng rác
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa thẻ quà tặng.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719454738/Untitled50_amdse9.png'>
        \n<b>Bước 4: Xác nhận xóa</b>
        \nHệ thống sẽ hiển thị thông báo: "Bạn có muốn xóa ?"<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719454814/Untitled50_y8xsfz.png'>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>. Thẻ quà tặng sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719454853/Untitled50_yerf5u.png'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn <b>"Hủy"</b>, hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.</div>`,
      },
    ],
  },
  {
    id: 41,
    link: 'huong-dan-su-dung-trang-bao-hanh',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG BẢO HÀNH',
    steps: [
      {
        id: 411,
        label: '1. Thêm bảo hành',
        description: `Để thêm bảo hành mới, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Truy cập vào chức năng thêm bảo hành mới
        \nĐầu tiên, trên giao diện của trang bảo hành, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719455999/Untitled50_lfkjur.png'>
        \n<b>Bước 2:</b> Chọn thêm phiếu bảo hành
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu <b>+</b>.
        \nHệ thống sẽ mở ra một form thêm phiếu bảo hành mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719456084/Untitled50_zhqph6.png'>
        \n<b>Bước 3:</b> Nhập thông tin
        \nTại đây, bạn cần nhập các thông tin sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Mã hóa đơn: Chọn mã hóa đơn có trong CSDL. Việc tham chiếu mã hóa đơn trong phiếu bảo hành giúp cải thiện quy trình quản lý, giám sát và theo dõi các hoạt động bảo hành một cách hiệu quả.
        \n&nbsp;&nbsp;&nbsp;• Từ ngày: Đây là ngày mà bảo hành bắt đầu có hiệu lực. Thông thường, ngày này là ngày mà sản phẩm được giao cho khách hàng hoặc ngày mà khách hàng ký nhận sản phẩm.
        \n&nbsp;&nbsp;&nbsp;• Đến ngày: Đây là ngày cuối cùng mà bảo hành có hiệu lực. Thông thường, ngày này là ngày kết thúc của thời gian bảo hành quy định.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Sản phẩm bảo hành: Tiếp theo, bạn cần liệt kê các sản phẩm mà bạn muốn bảo hành. Để làm điều này, hãy nhấp vào biểu tượng dấu <b>+</b>. Một khung nhập thông tin sẽ xuất hiện, cho phép bạn nhập các thông tin chi tiết về từng sản phẩm. Các thông tin cần thiết bao gồm:
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Tên sản phẩm: Nhập tên sản phẩm bảo hành.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Số lượng: Nhập số lượng sản phẩm bảo hành.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Đơn vị: Nhập đơn vị của sản phẩm bảo hành.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Nhà cung cấp: Nhập nhà cung cấp của sản phẩm bảo hành.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Đơn giá: Nhập đơn giá của sản phẩm bảo hành.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719457060/Untitled50_j4jqiq.png'>
        \n<b>Hướng dẫn thêm mục giảm giá, giảm trừ, phụ thu trong phiếu bảo hành</b>
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Giảm giá: Điền tỷ lệ phần trăm giảm giá vào ô tương ứng. <b>Ví dụ: </b> nếu bạn muốn áp dụng giảm giá 10%, hãy nhập "10" có thể thay đổi bằng các nhấp chuột vào biểu tượng tăng giảm bên cạnh.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719457546/Untitled50_bj5uwh.png'>
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Giảm trừ: Nhập số tiền của khoản giảm trừ và ngày áp dụng.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719457640/Untitled50_sa76lb.png'>
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Phụ thu: Nhập số tiền cụ thể của khoản phụ thu. Đây có thể là một khoản phí cố định hoặc dựa trên các yếu tố khác như dịch vụ ngoài giờ, vận chuyển, hoặc bảo trì đặc biệt.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719457945/Untitled50_avgqhi.png'>
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Nội dung: Nhập các nội dung quan trọng liên quan đến phiếu bảo hành.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Trạng thái bảo hành: 
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Chọn "Đang bảo hành" khi sản phẩm vẫn được bảo trì.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Chọn "Hoàn tất bảo hành" khi thời gian bảo hành đã kết thúc.
        \n&nbsp;&nbsp;&nbsp;• Hình thức thanh toán: Chọn các hình thức thanh toán theo yêu cầu của khách hành bao gồm: Visa, chuyển khoản, COD, thanh toán bằng thẻ. 
        \n&nbsp;&nbsp;&nbsp;• Trạng thái: Chọn trạng thái thanh toán (Đã thanh toán/ Công nợ).
        \n&nbsp;&nbsp;&nbsp;• Khách hàng: Bạn có thể sử dụng tính năng tìm kiếm trên thanh công cụ tìm kiếm. Sau khi nhập các kí tự liên quan đến thông tin tìm kiếm, danh sách khách hàng có sẵn sẽ xuất hiện. Bạn có thể chọn khách hàng phù hợp từ danh sách này.
        \nSau khi điền đầy đủ thông tin, nhấn vào nút <b>"Hoàn tất"</b> để lưu thông tin bảo hành.
        \nHệ thống sẽ xử lý và hiển thị hóa đơn bảo hành.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719458842/Untitled50_slpvcz.png'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'><b>Chú ý:</b> Người dùng có thể lựa chọn <b>"In"</b> hoặc <b><span style="color: red;">"Yêu cầu hủy"</span></b>.</div
        `,
      },
      {
        id: 412,
        label: '2. Xóa phiếu bảo hành',
        description: `Để xóa phiếu bảo hành, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn phiếu bảo hành
        \nTruy cập vào danh sách bảo hành và xác định phiếu bảo hành mà bạn muốn xóa. Tại đây, bạn sẽ thấy các ô chọn phía trước mỗi phiếu bảo hành. Hãy nhấp vào ô này để chọn phiếu bảo hành cần xóa. Bạn có thể chọn một hoặc nhiều phiếu bảo hành cùng lúc.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719459426/Untitled50_yqdk2s.png'>
        \n<b>Bước 2:</b> Mở menu tùy chọn
        \nNhấn vào biểu tượng dấu ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719459484/Untitled50_kj6sbs.png'>
        \n<b>Bước 3:</b> Chọn biểu tượng thùng rác
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa phiếu bảo hành.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719459531/Untitled50_n0ppya.png'>
        \n<b>Bước 4:</b> Xác nhận xóa
        \nHệ thống sẽ hiển thị thông báo: "Bạn có muốn xóa ?"<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719459569/Untitled50_fltobx.png'>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>. Phiếu bảo hành sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719459675/Untitled50_tng84k.png'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn <b>"Hủy"</b>, hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.<div/>`,
      },
    ],
  },
  {
    id: 42,
    link: 'gioi-thieu-trang-kho-hang',
    label: 'GIỚI THIỆU TRANG KHO HÀNG',
    description:`Hệ thống quản lý kho hàng của chúng tôi được thiết kế với giao diện trực quan và tiện lợi, giúp người dùng dễ dàng thực hiện các thao tác quản lý kho hàng. Với các tính năng tìm kiếm, lọc, thêm, chỉnh sửa và xóa kho hàng, hệ thống đảm bảo việc quản lý thông tin và trạng thái của các kho hàng một cách hiệu quả. Điều này góp phần quan trọng trong việc đảm bảo hoạt động suôn sẻ của hệ thống kho vận và bán hàng của doanh nghiệp`,
    steps: [
      {
        id: 421,
        label: '1. Tính năng nổi bật',
        description: `Bảng danh sách kho hàng hiển thị một cách rõ ràng và đầy đủ các thông tin cần thiết để quản lý kho hàng hiệu quả. Các cột thông tin bao gồm:
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Cột cửa hàng: Hiển thị tên của cửa hàng liên quan đến kho hàng.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Cột mã: Mã định danh duy nhất cho từng kho hàng, giúp dễ dàng phân biệt và quản lý.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Cột tên: Tên của kho hàng, cung cấp thông tin cụ thể về từng kho hàng trong hệ thống.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Cột trạng thái bán: Cho phép điều chỉnh trạng thái bán hàng của từng kho hàng thuộc cửa hàng. Người dùng có thể dễ dàng cập nhật trạng thái bán hàng theo nhu cầu.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Cột ghi chú: Ghi chú thêm bất kỳ thông tin bổ sung nào liên quan đến kho hàng, giúp quản lý chi tiết và chính xác hơn.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Cột trạng thái: Điều chỉnh trạng thái hoạt động cho từng kho hàng, giúp dễ dàng theo dõi và quản lý tình trạng của từng mục kho hàng trong hệ thống.`,
      },
      {
        id: 422,
        label: '2. Lợi ích của hệ thống',
        description: `&nbsp;&nbsp;&nbsp;&nbsp; • Hiệu quả quản lý: Hệ thống giúp quản lý thông tin kho hàng một cách rõ ràng và có tổ chức, giúp tối ưu hóa quy trình quản lý kho vận và bán hàng.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Tiết kiệm thời gian: Với các chức năng tìm kiếm và lọc, người dùng có thể nhanh chóng tìm thấy thông tin cần thiết mà không tốn nhiều thời gian.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Dễ dàng sử dụng: Giao diện trực quan và thân thiện với người dùng, giúp người dùng dễ dàng thao tác và quản lý kho hàng một cách thuận tiện.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Tính linh hoạt cao: Hệ thống cho phép người dùng thêm, chỉnh sửa và xóa các kho hàng một cách dễ dàng, phù hợp với nhu cầu quản lý thay đổi theo thời gian.`,
      },
    ],
  },
  {
    id: 43,
    link: 'huong-dan-su-dung-trang-tra-hang',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG TRẢ HÀNG',
    description: `<iframe width="100%" height="400" src="https://www.youtube.com/embed/swSwagImShk?start=67" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    steps: [
      {
        id: 431,
        label: '1. Danh sách trả hàng',
        description: `Tại giao diện Quản lý trả hàng, bạn sẽ thấy các đơn hàng đã được yêu cầu hủy.
        \nĐể xem chi tiết từng đơn hàng, bạn có thể nhấp vào mã của hóa đơn cụ thể. Thông tin chi tiết sẽ bao gồm: thông tin sản phẩm, thông tin khách hàng, thông tin thanh toán, thông tin giao hàng, và số tiền phải thanh toán.</br>    
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719555077/e3008421-799f-4ce4-93a6-331a9031de18.png'>
        \nNgoài ra, bạn cũng có thể chọn biểu tượng bánh răng và sau đó chọn <b>"Xem"</b> để truy cập vào trang chi tiết của đơn hàng.</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719555191/2536b271-9011-4ab0-b1e9-03abfc88923b.png'>
        \n
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719555261/fe7cb128-7344-4ef3-87f5-ab4a8fe47780.png'>
        <div style='text-align:center'>Chi tiết đơn hàng</div>
        <div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Tại trang chi tiết, bạn có thể thực hiện các thao tác như in hóa đơn hoặc yêu cầu hủy đơn hàng.</div>
        `,
      },
      {
        id: 432,
        label: '2. Yêu cầu hủy trả hàng',
        description: `Để yêu cầu hủy, có hai cách:
        \nChọn biểu tượng bánh răng ở cuối mỗi đơn hàng để hiển thị tùy chọn <b>"Yêu cầu hủy"</b>.</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719555676/fb305739-b7f5-4252-96bb-8e32d841a786.png'>
        \nTrên trang chi tiết của đơn hàng, chọn nút <b>"Yêu cầu hủy"</b> ở góc phải màn hình.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719555628/922ec733-c561-43dd-be0c-2e211962ae88.png'>
        \nKhi chọn yêu cầu hủy, hệ thống sẽ hiển thị một khung yêu cầu nhập lý do hủy.</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719555799/b3827ddb-196b-4d5f-a8c6-4c9ba4fb7807.png'>
        \nBạn nhập lý do hủy vào khung và sau đó chọn <b>"Hoàn tất"</b> để gửi yêu cầu. Nếu bạn không muốn tiếp tục hủy, có thể chọn <b>"Hủy"</b> để thoát khỏi quy trình này.
        `,
      },
      {
        id: 433,
        label: '3. Xác nhận hủy trả hàng',
        description: `Sau khi gửi yêu cầu hủy, biểu tượng bánh răng của đơn hàng sẽ hiển thị thêm tùy chọn <b>"Xác nhận hủy"</b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719556253/e035e58c-2d74-46fc-8151-b51801f10e08.png'>
        \nQuản lý cửa hàng sẽ chọn <b>"Xác nhận hủy"</b>. Sau khi xác nhận, đơn hàng trả sẽ được xóa khỏi danh sách trả hàng.`,
      },
      {
        id: 434,
        label: '4. Ghi chú cho trả hàng',
        description: `Trên giao diện quản lý Trả hàng, mỗi đơn hàng sẽ có một biểu tượng bánh răng hiển thị phía sau. Biểu tượng này cho phép bạn truy cập vào các tùy chọn quản lý đơn hàng khác nhau. Trước hết, bạn cần xác định đơn hàng mà bạn muốn thêm ghi chú.</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719556448/b969c13b-200a-4c34-ad04-074208be90d8.png'>
        \nKhi bạn chọn <b>"Ghi chú"</b>, hệ thống sẽ hiển thị một khung để bạn nhập nội dung ghi chú cho đơn hàng. Tại đây, bạn có thể viết bất kỳ thông tin nào cần thiết mà bạn muốn ghi nhớ liên quan đến đơn hàng.</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719556528/25a272a0-3247-4a6a-a3d8-69a3cf5e7287.png'>
        \nNếu bạn hài lòng với nội dung ghi chú và muốn lưu lại, nhấn vào nút <b>"Hoàn tất"</b>. Việc này sẽ lưu ghi chú của bạn và liên kết nó với đơn hàng tương ứng.
        \nNếu bạn thay đổi ý định và không muốn thêm ghi chú nữa, nhấn vào nút <b>"Hủy"</b>. Việc này sẽ đưa bạn trở lại giao diện quản lý đơn hàng mà không lưu lại nội dung ghi chú đã nhập.`,
      },
    ],
  },
  {
    id: 44,
    link: 'huong-dan-su-dung-trang-tem',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG TEM',
    description:`<iframe width="100%" height="400" src="https://www.youtube.com/embed/KhK4N9LnIJQ?start=46" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    steps: [
      {
        id: 441,
        label: '1. Thêm tem',
        description: `Để thêm một tem mới, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Truy cập vào chức năng thêm tem mới
        \nĐầu tiên, trên giao diện của trang tem, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719540661/Untitled51_pzrpfg.png'>
        \n<b>Bước 2:</b> Chọn thêm tem
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu <b>+</b>.
        \nHệ thống sẽ mở ra một form thêm thẻ quà tặng mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719540831/Untitled51_bbh3zw.png'>
        \n<b>Bước 3:</b> Nhập thông tin
        \n&nbsp;&nbsp;Tại đây, bạn cần nhập các thông tin sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Tên tem: Bạn cần nhập tên để dễ dàng phân biệt và quản lý các tem khác nhau
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Chiều dài: Nhập độ dài của tem, thông tin này quan trọng để xác định kích thước của tem, <b><span style="color: red;">chiều dài nên sử dụng là 2.85</span></b>.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Chiều rộng: Nhập độ rộng của tem, thông tin này giúp hoàn chỉnh kích thước của tem,  <b><span style="color: red;">chiều rộng nên sử dụng là 0.86</span></b>.  
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Số lượng: Nhập số lượng tem, thông tin này giúp xác định số lượng tem cần sử dụng.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Khoảng cách: Nhập khoảng cách giữa các tem, thông tin này cũng là bắt buộc để đảm bảo bố trí tem hợp lý.
        \n&nbsp;&nbsp;Chọn trạng thái cho tem:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Kích hoạt: Tem sẽ được sử dụng và hiển thị trong hệ thống ngay lập tức.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Không kích hoạt: Tem sẽ không được sử dụng hoặc hiển thị trong hệ thống, có thể kích hoạt sau.
        \nSau khi điền đầy đủ thông tin, nhấn vào nút <b>"Hoàn tất"</b> để lưu thông tin thẻ quà tặng mới.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719541874/Untitled51_kcx5rh.png'>`,
      },
      {
        id: 442,
        label: '2. Chỉnh sửa thông tin tem',
        description: `Để chỉnh sửa thông tin tem, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn tem cần chỉnh sửa
        \nTruy cập vào danh sách tem trên hệ thống.
        \nTìm và chọn tem mà bạn cần chỉnh sửa thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719541999/Untitled51_l8y8di.png'>
        \n<b>Bước 2:</b> Mở form chỉnh sửa
        \nSau khi chọn tem, nhấn vào biểu tượng cây <b>🖉</b> nằm bên phía bên phải để bắt đầu chỉnh sửa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719542057/Untitled51_yisffw.png'>
        \nHệ thống sẽ hiển thị form thông tin chi tiết của tem đó.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719542124/Untitled51_senc1k.png'>
        \n<b>Bước 3:</b> Cập nhật thông tin
        \nTrong form chi tiết, cập nhật các thông tin mà bạn muốn thay đổi như: tên, chiều dài, chiều rộng, số lượng, khoảng cách, trạng thái.
        \nĐảm bảo rằng các thông tin mới được nhập chính xác và đầy đủ.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719542278/Untitled51_kfoao7.png'>
        \n<b>Bước 4:</b> Lưu thay đổi
        \nSau khi đã cập nhật xong thông tin, nhấn nút <b>"Hoàn tất"</b> để lưu các thay đổi.
        \nHệ thống sẽ xử lý và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719542322/Untitled50_b1gmzj.png'>
        \n<b>Bước 5: Hủy chỉnh sửa (nếu cần)</b>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn quyết định không thực hiện thay đổi, bạn có thể nhấn nút <b>"Hủy"</b> để thoát khỏi form chỉnh sửa mà không lưu bất kỳ thay đổi nào.</div>`,
      },
      {
        id: 443,
        label: '3. Xóa tem',
        description: `Để xóa tem, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn tem
        \nTruy cập vào danh sách tem và xác định tem mà bạn muốn xóa. Tại đây, bạn sẽ thấy các ô chọn phía trước mỗi tem. Hãy nhấp vào ô này để chọn tem cần xóa. Bạn có thể chọn một hoặc nhiều tem cùng lúc.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719542426/Untitled51_izuyd0.png'>
        \n<b>Bước 2:</b> Mở menu tùy chọn
        \nNhấn vào biểu tượng dấu ba gạch ngang <b>≡</b> bên dưới góc phải để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719542464/Untitled51_z5ktmk.png'>
        \n<b>Bước 3:</b> Chọn biểu tượng thùng rác
        \nTrong menu tùy chọn, nhấn vào biểu tượng thùng rác <b>🗑</b> để bắt đầu quá trình xóa tem.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719542513/Untitled51_ichpms.png'>
        \n<b>Bước 4: Xác nhận xóa</b>
        \nHệ thống sẽ hiển thị thông báo: "Bạn có muốn xóa ?"<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719542559/Untitled51_d0jwiz.png'>
        \nNếu bạn chọn <b>"Đồng ý"</b>, hệ thống sẽ xử lý yêu cầu và thông báo <b><span style="color: green;">"Cập nhật thành công"</span></b>. Tem sẽ được xóa khỏi cơ sở dữ liệu.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719542612/Untitled51_fb8u8b.png'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Nếu bạn chọn <b>"Hủy"</b>, hệ thống sẽ quay trở lại trang ban đầu mà không thực hiện xóa.</div>`,
      },
    ],
  },
  {
    id: 45,
    link: 'huong-dan-su-dung-trang-cau-hinh',
    label: 'HƯỚNG DẪN SỬ DỤNG TRANG CẤU HÌNH',
    description:`<iframe width="100%" height="400" src="https://www.youtube.com/embed/KhK4N9LnIJQ?start=14" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    steps: [
      {
        id: 451,
        label: 'I. NỘI DUNG',
        description: `<img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719545171/Untitled51_uvovfb.png'>
        1. Tên hệ thống
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Mô tả: Tên hệ thống là tên gọi bạn muốn đặt cho hệ thống của mình.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Cách nhập: Gõ tên hệ thống vào ô nhập liệu.
        \n2. Số dữ liệu trên một trang
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Mô tả: Số lượng dữ liệu hiển thị trên mỗi trang.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Ví dụ: 10, 20, 50,...
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Cách nhập: Nhập số lượng dữ liệu bạn muốn hiển thị trên mỗi trang vào ô nhập liệu.
        \n3. Số điện thoại liên hệ
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Mô tả: Số điện thoại dùng để liên hệ.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Cách nhập: Nhập số điện thoại vào ô nhập liệu theo định dạng chuẩn (ví dụ: 0xx-xxxxxxx).
        \n4. Số kí tự tài khoản
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Mô tả: Độ dài của tài khoản người dùng.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Cách nhập: Nhập số kí tự tối đa mà tài khoản người dùng có thể có.
        \n5. Địa chỉ
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Mô tả: Địa chỉ của công ty.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Cách nhập: Nhập địa chỉ cụ thể vào ô nhập liệu.
        \n6. Định dạng ngày
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Mô tả: Định dạng ngày tháng năm.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Cách nhập: Chọn định dạng ngày theo chuẩn d/m/Y.
        \n7. Giờ làm việc
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Mô tả: Khung giờ làm việc trong ngày.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Ví dụ: từ 8:00am đến 9:00pm.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Cách nhập: Nhập giờ làm việc vào các ô nhập liệu tương ứng.
        \n8. Định dạng giờ
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Mô tả: Định dạng giờ phút giây.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Cách nhập: Nhập định dạng giờ theo chuẩn HH:II:SS.
        \n9. Nội dung
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Mô tả: Nội dung chi tiết liên quan đến hệ thống hoặc công ty.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Cách nhập: Nhập nội dung cụ thể vào ô nhập liệu.
        \n<b><span style="color: red;">10. Hóa đơn điện tử(Quan trọng)</span></b>
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Mô tả: Nhà cung cấp dịch vụ hóa đơn điện tử.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Tùy chọn: Viettel, EasyInvoice.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Cách nhập: Chọn nhà cung cấp từ danh sách.
        \n<b><span style="color: red;">11. Mã số thuế của công ty (quan trọng)</span></b>
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Mô tả: Mã số thuế của công ty.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Cách nhập: Nhập mã số thuế vào ô nhập liệu.
        \n<b><span style="color: red;">12. Ký hiệu hóa đơn (quan trọng)</span></b>
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Mô tả: Ký hiệu của hóa đơn.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Cách nhập: Nhập ký hiệu hóa đơn vào ô nhập liệu.
        \n<b><span style="color: red;">13. Mẫu số Seri (quan trọng)</span></b>
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Mô tả: Mẫu số seri của hóa đơn.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Cách nhập: Nhập mẫu số seri vào ô nhập liệu.
        \n14. Email của công ty
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Mô tả: Địa chỉ email của công ty.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Cách nhập: Nhập email của công ty vào ô nhập liệu.
        \n<b><span style="color: red;">15. Tài khoản và mật khẩu (được cấp bởi bên hóa đơn điện tử)</span></b>
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Mô tả: Tài khoản và mật khẩu do bên cung cấp hóa đơn điện tử cấp.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Cách nhập: 
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • Nhập tài khoản vào ô "Tài khoản".
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; • Nhập mật khẩu vào ô "Mật khẩu".
        \n16. Logo công ty
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Mô tả: Hình ảnh logo của công ty.
        \n&nbsp;&nbsp;&nbsp;&nbsp; • Cách nhập: Nhấn nút "Chọn file" và chọn file hình ảnh từ máy tính để upload.`,
      },
      {
        id: 452,
        label: 'II. TỔNG KẾT',
        description: `Qua hướng dẫn trên, bạn đã nắm được cách chọn và nhập các thông tin cần thiết để cấu hình hệ thống một cách hiệu quả. Việc nhập đúng và đủ các thông tin như tên hệ thống, số dữ liệu trên một trang, số điện thoại liên hệ, địa chỉ, và các định dạng ngày giờ sẽ giúp hệ thống của bạn hoạt động trơn tru và đáp ứng tốt nhu cầu sử dụng. Đồng thời, việc chọn nhà cung cấp hóa đơn điện tử, mã số thuế của công ty, và các thông tin liên quan khác sẽ đảm bảo quá trình xử lý hóa đơn diễn ra một cách chính xác và chuyên nghiệp. Hãy luôn kiểm tra và đảm bảo mọi thông tin được nhập đúng để tối ưu hóa hoạt động của hệ thống.`,
      },
    ],
  },
  {
    id: 47,
    link: 'Huong-dan-su-dung-trang-kho-che-tac',
    label: 'HƯỚNG DẪN SỬ DỤNG KHO CHẾ TÁC',
    description: `Bạn sẽ chịu trách nhiệm xác nhận yêu cầu chuyển kho từ kho mua hàng và kho sản phẩm, cũng như nhập sản phẩm vào kho chế tác. Quá trình này bắt đầu từ việc bạn truy cập vào trang Kho chế tác, nơi bạn sẽ thấy danh sách các sản phẩm hiện có. Để dễ dàng tìm kiếm và lựa chọn sản phẩm, bạn có thể sử dụng công cụ tìm kiếm trên trang này, cho phép bạn tìm kiếm sản phẩm theo tên. Bạn cần thực hiện các bước sau để đảm bảo quy trình diễn ra suôn sẻ và chính xác.
    `,
    steps: [
      {
        id: 471,
        label: '1. Nhập hàng từ kho sản phẩm',
        description: `Khi nhận được yêu cầu chuyển kho từ kho sản phẩm. Tại kho chế tác bạn tiến hành xác nhận yêu cầu nhập hàng này
        \n<b>Bước 1:</b> Chọn nhập hàng từ kho sản phẩm
        \nBạn cần truy cập vào trang quản lý kho chế tác. Tại đây, bạn sẽ thấy một tùy chọn có tên <b>"Nhập hàng"</b>. Hãy nhấn vào <b>"Nhập hàng"</b> và sau đó chọn <b>"Nhập hàng từ kho sản phẩm"</b>. Điều này sẽ giúp bạn bắt đầu quá trình chuyển sản phẩm từ kho sản phẩm sang kho chế tác.</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719556954/4201d227-c4f4-46eb-9c24-c521d4a0b5f7.png'>
        \n<b>Bước 2:</b> Chọn nhập hàng
        \nSau khi chọn <b>"Nhập hàng từ kho sản phẩm"</b>, trang "Nhập hàng từ kho sản phẩm" sẽ hiển thị tất cả các yêu cầu nhập hàng cần duyệt. Bạn sẽ thấy một danh sách các phiếu nhập hàng. Hãy chọn một phiếu cụ thể và nhấp vào <b>"Nhập hàng"</b> để xem chi tiết thông tin của phiếu nhập hàng đó. </br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719557127/ab848cdc-2802-49c6-bd47-137be02496b1.png'>
        <div style='text-align:center'>Nút nhập hàng</div>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719557390/d660fb40-6b9c-43b6-b508-35851388bd4a.png'>
        <div style='text-align:center'>Chi tiết phiếu nhập hàng</div>
        \n<b>Bước 3:</b> Xác nhận nhập hàng
        \nSau khi kiểm tra kỹ lưỡng tất cả các thông tin trong phiếu nhập hàng và đảm bảo mọi thông tin đều chính xác, bạn sẽ tiến hành bước cuối cùng là nhấp vào <b>"Hoàn tất"</b> để hoàn thành quá trình nhập sản phẩm vào kho chế tác. Hệ thống sẽ cập nhật thông tin và sản phẩm sẽ được chính thức nhập vào kho chế tác.</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719557695/a745c642-092b-4b09-9a7d-19e49cb1f07f.png'>
        <div style='text-align:center'>Sản phẩm đã được thêm vào kho chế tác</div>`,
      },
      {
        id: 472,
        label: '2. Nhập hàng từ mua hàng',
        description: `\nKhi nhận được yêu cầu chuyển kho từ mua hàng. Tại kho chế tác bạn có thể tiến hành xác nhận yêu cầu nhập hàng này
        \n<b>Bước 1:</b> Chọn nhập hàng từ mua hàng
        \nBạn cần truy cập vào trang quản lý kho chế tác. Tại đây, bạn sẽ thấy một tùy chọn có tên <b>"Nhập hàng"</b>. Hãy nhấp vào <b>"Nhập hàng"</b> và sau đó chọn <b>"Nhập hàng từ mua hàng"</b>. Điều này sẽ giúp bạn bắt đầu quá trình chuyển sản phẩm từ kho mua hàng sang kho chế tác.</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719557976/8b1f24a4-2908-481d-b85a-299eb36e224b.png'>
        \n<b>Bước 2:</b> Chọn nhập hàng
        \nSau khi chọn <b>"Nhập hàng từ mua hàng"</b>, trang này sẽ hiển thị tất cả các yêu cầu nhập hàng cần duyệt. Bạn sẽ thấy một danh sách các phiếu nhập hàng. Hãy chọn một phiếu cụ thể và nhấp vào <b>"Nhập hàng"</b> để xem chi tiết thông tin của phiếu nhập hàng đó. </br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719558095/b61040d5-cfe7-41ac-9e78-3aab63010e0f.png'>
        <div style='text-align:center'>Nút nhập hàng</div>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719558137/4d0556a1-e78a-4780-85a6-9f0fb26daffe.png'>
        <div style='text-align:center'>Chi tiết phiếu nhập hàng</div>
        \n<b>Bước 3:</b> Xác nhận nhập hàng
        \nSau khi kiểm tra kỹ lưỡng tất cả các thông tin trong phiếu nhập hàng và đảm bảo mọi thông tin đều chính xác, bạn sẽ tiến hành bước cuối cùng là nhấp vào <b>"Hoàn tất"</b> để hoàn thành quá trình nhập sản phẩm vào kho chế tác. Hệ thống sẽ cập nhật thông tin và sản phẩm sẽ được chính thức nhập vào kho chế tác.</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719558204/2e0a9be7-4359-49ce-b5a3-aea924cf3856.png'>
        <div style='text-align:center'>Sản phẩm đã được thêm vào kho chế tác</div>
        `,
      },
    ],
  },
  {
    id: 48,
    link: 'Huong-dan-su-dung-trang-kho-gia-cong',
    label: 'HƯỚNG DẪN SỬ DỤNG KHO GIA CÔNG',
    description: `Bạn sẽ chịu trách nhiệm xuất sản phẩm từ kho gia công sang kho thành phẩm. Quá trình này bắt đầu từ việc bạn truy cập vào trang Kho gia công, nơi bạn sẽ thấy danh sách các sản phẩm hiện có. Để dễ dàng tìm kiếm và lựa chọn sản phẩm, bạn có thể sử dụng công cụ tìm kiếm trên trang này, cho phép bạn tìm kiếm sản phẩm theo tên. Bạn cần thực hiện các bước sau để đảm bảo quy trình diễn ra suôn sẻ và chính xác.
    `,
    steps: [
      {
        id: 481,
        label: '1. Giới thiệu',
        description: `Trong hệ thống quản lý kho gia công, danh sách các sản phẩm được lưu trữ bao gồm các thông tin chi tiết như: hình ảnh, mã sản phẩm, tên sản phẩm, thương hiệu, số lượng tồn kho, danh mục, nhà cung cấp, và trạng thái của từng sản phẩm. Hệ thống này giúp bạn quản lý và theo dõi tình trạng từng sản phẩm một cách hiệu quả.</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719659732/51d0cecd-1a49-43e3-b968-474d2e72cf48.png'>
        <div style='text-align:center'>Danh sách sản phẩm trong kho gia công</div> `,
      },
      {
        id: 482,
        label: '2. Thêm sản phẩm',
        description: `Để thêm một sản phẩm mới, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b>  Truy cập vào chức năng thêm sản phẩm
        \nĐầu tiên, trên giao diện của trang quản lý kho gia công, bạn nhìn vào phần dưới cùng bên phải giao diện để tìm thấy biểu tượng <b>≡</b>.
        \nNhấp vào biểu tượng này để mở menu tùy chọn.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719659906/86c765fc-110a-4145-ba72-3a65c69f2257.png'>
        \n<b>Bước 2:</b> Chọn thêm sản phẩm
        \nTrong menu tùy chọn, bạn nhấp vào biểu tượng dấu <b>+</b>.
        \nHệ thống sẽ mở ra một form thêm sản phẩm mới để bạn điền thông tin.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719659706/5731786b-499e-4be8-85ae-d578e3b0ab90.png'>
        \n<b>Bước 3:</b> Nhập thông tin
        \nTại đây, bạn cần nhập các thông tin sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Số lượng chế tác:</b> Số lượng sản phẩm sẽ được chế tác.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Tên sản phẩm:</b> Tên của sản phẩm cần được nhập vào kho chế tác.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Thương hiệu:</b> Thương hiệu của sản phẩm đó.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Nhà cung cấp:</b> Tên của nhà cung cấp đã cung cấp nguyên vật liệu hoặc sản phẩm cho bạn.
        \n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Khối lượng vàng:</b> Trọng lượng vàng được sử dụng trong sản phẩm (nếu có).
        \n&nbsp;&nbsp;&nbsp;&nbsp;<b>Khối lượng vật gắn:</b> Trọng lượng của các vật liệu khác gắn vào sản phẩm, chẳng hạn như đá quý, kim loại khác, hoặc vật liệu trang trí khác.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719659992/fc64cb49-d4d5-4168-8045-0319fd9b60f7.png'>
        \n<b>Bước 4:</b> Hoàn tất thêm sản phẩm
        \nSau khi điền đầy đủ thông tin, nhấn vào nút <b><span style="color: green;">"Hoàn tất"</span></b> để lưu thông tin sản phẩm mới.
        \nHệ thống sẽ xử lý và cập nhật sản phẩm vào kho gia công.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719661969/146518c2-17ef-4835-afd7-bbf07b36494c.png'>
        <div style='text-align:center'>Sản phẩm đã được thêm vào kho gia công</div>`,
      },
      {
        id: 483,
        label: '3. Nhập kho thành phẩm',
        description: `Để nhập sản phẩm đã gia công vào kho thành phẩm, bạn hãy thực hiện theo các bước sau đây:
        \n<b>Bước 1:</b> Chọn nhập hàng
        \nĐầu tiên, trên giao diện của trang quản lý kho gia công, bạn nhìn vào phần trên cùng bên phải giao diện để tìm thấy nút "Nhập hàng".
        \nNhấp vào "Nhập hàng" này để mở menu tùy chọn, chọn <b>"Nhập kho thành phẩm"</b>.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719660676/feac5360-fff1-4406-884f-3d3f0ee42bfd.png'>
        \n<b>Bước 2:</b> Nhập thông tin
        \nSau khi chọn "Nhập kho thành phẩm", hệ thống sẽ hiển thị một form nhập thông tin sản phẩm.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719660775/d64d0fa1-279a-46a5-9115-051faa20fdd5.png'>
        \nBạn chỉ cần chọn sản phẩm cần nhập vào kho thành phẩm từ danh sách có sẵn. Hệ thống sẽ tự động điền các thông tin liên quan đến sản phẩm đó, bao gồm: nhà cung cấp, giá vốn, số lượng (mặc định là 1) và số lượng tồn kho hiện tại. Điều này giúp tiết kiệm thời gian và giảm thiểu sai sót trong quá trình nhập liệu thủ công.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719661031/98daa582-33b1-42ec-85be-357ed804b541.png'>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Điều quan trọng cần lưu ý là số lượng sản phẩm có thể xuất kho chế tác để nhập vào kho thành phẩm phải nhỏ hơn hoặc bằng số lượng tồn kho hiện tại. </div>
        \nSau khi chọn sản phẩm và xác nhận số lượng, bạn sẽ cần chọn cửa hàng mà bạn muốn nhập thành phẩm vào. Đây có thể là cửa hàng chính hoặc một trong các chi nhánh, tùy thuộc vào hệ thống phân phối của doanh nghiệp bạn. 
        \nCuối cùng, bạn nhập ghi chú để ghi lại các thông tin bổ sung hoặc các lưu ý quan trọng liên quan đến đợt nhập hàng này.
        \n<b>Bước 3:</b> Hoàn tất nhập hàng
        \nSau khi kiểm tra và đảm bảo rằng tất cả các thông tin đã chính xác, bạn nhấn nút <b><span style="color: green;">"Hoàn tất"</span></b> để tiến hành nhập sản phẩm vào kho thành phẩm.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719661361/3adecb43-c0c6-4c31-9314-6c3e546c6eac.png'>
        \nHệ thống sẽ xử lý yêu cầu, sản phẩm sẽ được nhập vào kho thành phẩm và sẵn sàng cho việc bán hàng hoặc giao cho khách hàng.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719661437/b76a32b4-ef5c-41c1-94f0-9d2aa704aba8.png'>
        <div style='text-align:center'>Sản phẩm đã được nhập vào kho thành phẩm</div>`,
      },
    ],
  },
  {
    id: 49,
    link: 'Huong-dan-su-dung-trang-kho-mua-hang',
    label: 'HƯỚNG DẪN SỬ DỤNG KHO MUA HÀNG',
    description: `Bạn sẽ chịu trách nhiệm nhập hàng và quản lý việc chuyển hàng vào kho sản phẩm và kho chế tác. Quá trình này bắt đầu từ việc bạn truy cập vào trang mua hàng, nơi bạn sẽ thấy danh sách các sản phẩm được đề xuất mua hiện có. Để dễ dàng tìm kiếm và lựa chọn sản phẩm, bạn có thể sử dụng công cụ tìm kiếm trên trang này, cho phép bạn tìm kiếm sản phẩm theo tên.
    `,
    steps: [
      {
        id: 491,
        label: '1. Chuyển kho sản phẩm',
        description: `\n<b>Bước 1:</b> Chọn chuyển kho sản phẩm
        \nBạn cần truy cập vào trang quản lý kho mua hàng. Tại đây, bạn sẽ thấy một tùy chọn có tên "Nhập hàng". Hãy nhấp vào "Nhập hàng" và sau đó chọn "Chuyển kho sản phẩm". Điều này sẽ giúp bạn bắt đầu quá trình chuyển sản phẩm từ kho mua hàng sang kho sản phẩm.</br>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719729671/31e38390-e7fc-4a34-b493-456f785ee98f.png'>
        \n<b>Bước 2:</b> Nhập thông tin
        \nSau khi chọn "Chuyển kho sản phẩm", một biểu mẫu sẽ hiện ra yêu cầu bạn nhập các thông tin chi tiết về sản phẩm và quá trình chuyển kho. Bạn cần cung cấp các thông tin sau: 
        \n<b>Cửa hàng chuyển:</b> Chọn cửa hàng mà bạn muốn chuyển sản phẩm từ đó.
        \n<b>Chọn sản phẩm:</b> Bắt đầu nhập tên sản phẩm vào ô tìm kiếm. Hệ thống sẽ tự động hiển thị danh sách các sản phẩm gợi ý dựa trên những gì bạn đã nhập. Khi bạn thấy sản phẩm mình cần, hãy chọn sản phẩm đó.
        \n<b>Thông tin sản phẩm:</b> Sau khi chọn sản phẩm, bạn cần nhập thêm các chi tiết sau:
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Mã sản phẩm: Mã số duy nhất để nhận diện sản phẩm.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Danh mục: Nhóm hoặc loại sản phẩm mà sản phẩm đó thuộc về.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Thương hiệu: Nhãn hiệu hoặc tên công ty sản xuất sản phẩm.
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Đơn vị: Đơn vị tính của sản phẩm (ví dụ: cái, chiếc, chỉ...).
        \n&nbsp;&nbsp;&nbsp;&nbsp;• Nhà cung cấp: Tên nhà cung cấp sản phẩm
        \n<b>Nội dung chuyển kho:</b> Mô tả hoặc lý do chuyển kho.Sau khi nhập đầy đủ thông tin, bạn chọn Hoàn tất để tiến hành nhập sản phẩm vào kho sản phẩm<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719729856/c9b71c4a-7f1e-46a1-8f63-fd33fca4b2cd.png'>
        \n<b>Bước 3:</b> Hoàn tất chuyển kho
        \nKhi bạn đã nhập đầy đủ và chính xác tất cả các thông tin yêu cầu, hãy kiểm tra lại một lần nữa để đảm bảo không có sai sót. Sau đó, nhấp vào nút "Hoàn tất" để hoàn thành quá trình chuyển kho. Hệ thống sẽ tiến hành nhập sản phẩm vào kho sản phẩm của bạn và thông tin nhập hàng sẽ được cập nhật trong lịch sử nhập hàng.<br/>
        `,
      },
      {
        id: 492,
        label: '2. Chuyển kho chế tác',
        description: `
        \n<b>Bước 1:</b>  Chọn chuyển kho chế tác
        \nBạn cần truy cập vào trang quản lý kho mua hàng. Tại đây, bạn sẽ thấy một tùy chọn có tên "Nhập hàng". Hãy nhấp vào "Nhập hàng" và sau đó chọn "Chuyển kho chế tác". Điều này sẽ giúp bạn bắt đầu quá trình chuyển sản phẩm từ kho mua hàng sang kho chế tác.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719730393/8713f653-5021-4ec7-a538-3a9041f6f26b.png'>
        \n<b>Bước 2:</b> Nhập thông tin
        \nSau khi chọn "Chuyển kho chế tác", một biểu mẫu sẽ hiện ra yêu cầu bạn nhập các thông tin chi tiết về sản phẩm và quá trình chuyển kho. Bạn cần cung cấp các thông tin sau: 
        \n<b>Cửa hàng chuyển:</b> Chọn cửa hàng mà bạn muốn chuyển sản phẩm từ đó.
        \n<b>Chọn sản phẩm:</b> Bắt đầu nhập tên sản phẩm vào ô tìm kiếm. Hệ thống sẽ tự động hiển thị danh sách các sản phẩm gợi ý dựa trên những gì bạn đã nhập. Khi bạn thấy sản phẩm mình cần, hãy chọn sản phẩm đó. 
        \n<b>Thông tin sản phẩm:</b> Sau khi chọn sản phẩm, các thông tin như số lượng sẽ hiển thị mặc định là 1. Bạn có thể thay đổi số lượng theo nhu cầu kinh doanh. Ngoài ra, các thông tin khác như khối lượng tổng, khối lượng vật gắn, và khối lượng vàng được hiển thị cố định không thể thay đổi.
        \n<b>Nội dung chuyển kho:</b> Mô tả hoặc lý do chuyển kho.Sau khi nhập đầy đủ thông tin, bạn chọn Hoàn tất để tiến hành nhập sản phẩm vào kho chế tác<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719729856/c9b71c4a-7f1e-46a1-8f63-fd33fca4b2cd.png'>
        \n<b>Bước 3:</b> Hoàn tất chuyển kho
        \nKhi bạn đã nhập đầy đủ và chính xác tất cả các thông tin yêu cầu, hãy kiểm tra lại một lần nữa để đảm bảo không có sai sót. Sau đó, nhấp vào nút "Hoàn tất" để hoàn thành quá trình chuyển kho. Hệ thống sẽ thêm yêu cầu chuyển kho vào kho chế tác. <br/>
        \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'>Tại kho chế tác bạn có thể xác nhận việc nhập sản phẩm vào kho, bạn có thể tham khảo hướng dẫn Nhập hàng từ mua hàng <b><a href='Huong-dan-su-dung-trang-kho-che-tac'>tại đây</a></b></div>`,
      },
    ],
  },
  {
    id: 50,
    link: 'huong-dan-ket-noi-can',
    label: 'HƯỚNG DẪN KẾT NỐI CÂN',
    steps: [
      {
        id: 501,
        label: '1. Thiết bị kết nối',
        description: `Kết nối cân điện tử cân vàng với máy tính có thể được thực hiện qua cổng USB hoặc RS232. 
        \n<b>Cổng USB:</b> nhiều loại cân điện tử hiện đại hỗ trợ kết nối trực tiếp. Bạn chỉ cần cắm cáp USB từ cân vào máy tính. Máy tính sẽ tự động nhận diện thiết bị mới và cài đặt driver. Nếu việc này không xảy ra, bạn có thể cần cài đặt driver từ nhà sản xuất cân. Sau khi kết nối thành công, bạn có thể sử dụng phần mềm quản lý cân do nhà sản xuất cung cấp hoặc các phần mềm quản lý dữ liệu khác để đọc dữ liệu từ cân.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719734675/34c8c087-9e4b-4c42-a149-c9d155ab2490.png'>
        \n<b>Cổng RS232:</b> một số cân sử dụng cổng này để kết nối với máy tính. Bạn sẽ cần một cáp RS232 để thực hiện kết nối. Nếu máy tính không có cổng RS232, bạn có thể sử dụng bộ chuyển đổi RS232 sang USB. Sau khi kết nối, bạn có thể cần cài đặt driver cho bộ chuyển đổi và sử dụng phần mềm giao tiếp serial như HyperTerminal, Tera Term, hoặc phần mềm do nhà sản xuất cung cấp để nhận dữ liệu từ cân.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719736021/469d7a3c-7ccc-4132-89df-5e2130ef0b80.png'>
        `,
      },
      {
        id: 502,
        label: '2. Hướng dẫn kết nối với Device Manager',
        description: `<b>Bước 1:</b>  Mở Device Manager trên máy tính
        \nNhấn tổ hợp phím Windows + X và chọn Device Manager từ menu xuất hiện. Bạn cũng có thể nhấn Windows + R, gõ devmgmt.msc, và nhấn Enter để mở Device Manager.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719735492/ab2fd2f7-5fa5-4d96-a538-922d83bb5b54.png'>
        \n<b>Bước 2:</b> Xác định thiết bị kết nối
        \nSau khi mở Device Manager, tìm kiếm mục Ports (COM & LPT) nếu kết nối qua cổng RS232 hoặc mục Universal Serial Bus controllers nếu kết nối qua USB. Thiết bị mới sẽ xuất hiện trong danh sách. Nếu không thấy thiết bị, bạn có thể thử rút và cắm lại cáp kết nối.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719735706/1d29227c-1867-432c-a407-a59add23e503.png'>
        \n<b>Bước 3:</b> Cài đặt driver (nếu cần)
        \nNếu máy tính không tự động nhận diện và cài đặt driver, bạn cần tải driver từ trang web của nhà sản xuất cân. Nhấp chuột phải vào thiết bị chưa nhận diện trong Device Manager (có thể hiển thị dưới dạng Unknown device hoặc với biểu tượng cảnh báo màu vàng). Chọn Update driver và làm theo hướng dẫn để cài đặt driver từ tệp đã tải.
        \n<b>Bước 4:</b> Kiểm tra kết nối và thiết lập cổng COM 
        \nSau khi cài đặt driver, thiết bị sẽ được nhận diện và hiển thị đúng tên trong Device Manager. Trong cửa sổ Properties, chọn tab Details. Ở mục Property, thay đổi giá trị thành Hardware Ids từ danh sách thả xuống. Sau đó, chọn OK để xác nhận và xem các Hardware Ids của thiết bị. Việc này giúp bạn xác định chính xác thiết bị và kiểm tra xem driver đã được cài đặt đúng cách hay chưa.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719735901/19dc65f6-b095-468c-90a6-d1f0ae366017.png'>
        \n<b>Bước 5:</b>Sử dụng phần mềm để quản lý và đọc dữ liệu từ cân
        \nMở phần mềm quản lý cân do nhà sản xuất cung cấp hoặc phần mềm giao tiếp serial (như HyperTerminal hoặc Tera Term). Trong phần mềm, chọn đúng cổng COM và thiết lập các thông số kết nối (baud rate, parity, data bits, stop bits) theo hướng dẫn của nhà sản xuất cân. Sau khi cấu hình đúng, phần mềm sẽ bắt đầu nhận dữ liệu từ cân.
        `,
      },
    ],
  },
  {
    id: 51,
    link: 'huong-dan-cau-hinh-can',
    label: 'HƯỚNG DẪN CẤU HÌNH CÂN',
    steps: [
      {
        id: 511,
        label: 'Bước 1: Chọn cấu hình cân',
        description: `Tại Kho mua hàng, khi chọn Nhập hàng thủ công, bạn sẽ thấy nút Cấu hình cân. Nhấn vào nút này để bắt đầu quá trình cấu hình cân.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719736406/d978c4be-c4ea-478a-9953-619fc6d6fe05.png'>
        
        `,
      },
      {
        id: 512,
        label: 'Bước 2: Nhập thông tin',
        description: `Bạn cần nhập thêm thông tin ID cân và tốc độ cân. Thông tin này thường được nhập trong phần cài đặt hoặc cấu hình thiết bị của phần mềm. ID cân là ID duy nhất của cân và thường được in trên cân hoặc cung cấp trong tài liệu hướng dẫn. Tốc độ cân có thể là tốc độ cập nhật dữ liệu hoặc một thông số khác liên quan đến cân và cũng thường được cung cấp trong tài liệu hướng dẫn của cân.<br/>
        <img src='https://res.cloudinary.com/dzh4pimvj/image/upload/v1719736334/10a2c6fc-ab0d-41d6-8b22-c0aea4d224df.png'>
         \n<div style='color:black;border-left: 2px solid green; margin-top: 3px; padding-left: 15px;'><b>Ví dụ cấu hình trong Tera Term:</b> Mở Tera Term và chọn đúng cổng COM, vào menu Setup > Serial Port, chọn cổng COM (ví dụ: COM3) và thiết lập các thông số: Baud rate 9600, Data 8 bit, Parity None, Stop 1 bit, Flow control None. Sau đó nhấn OK. Nếu phần mềm yêu cầu, bạn có thể nhập lệnh hoặc thiết lập trong phần mềm để đặt ID cân và tốc độ cân, ví dụ: gửi lệnh cấu hình qua giao tiếp serial (thường được mô tả trong hướng dẫn của cân) như "SET ID=1234" và "SET SPEED=9600".</div>
        \nSau khi đã cấu hình đúng các thông số, phần mềm sẽ bắt đầu nhận dữ liệu từ cân. Bạn có thể kiểm tra và theo dõi dữ liệu trong thời gian thực hoặc lưu trữ để phân tích sau này. Nếu gặp vấn đề trong quá trình cấu hình, hãy tham khảo thêm hướng dẫn sử dụng của cân hoặc liên hệ với bộ phận hỗ trợ kỹ thuật của nhà sản xuất.`,
      },
    ],
  },
];
