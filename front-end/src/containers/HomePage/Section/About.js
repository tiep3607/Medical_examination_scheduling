import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';





class About extends Component {

    render() {



        return (
            <div className='section-share section-about'>
                <div className='section-about-header'>
                    Giới Thiệu
                </div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        <iframe width="100%" height="500px" src="https://www.youtube.com/embed/EqtySP0hxDs" title="Y tế vượt khó trong cơ chế | VTV24" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className='content-right'>
                        <p>
                            Y tế đóng vai trò quan trọng trong xã hội, ảnh hưởng trực tiếp đến sức khỏe và chất lượng cuộc sống của người dân. Bài viết này sẽ tập trung khám phá tình hình y tế Việt Nam hiện nay, cơ cấu hệ thống y tế, chính sách y tế, những thách thức đang đối diện và các giải pháp để phát triển y tế trong tương lai.
                        </p>
                        <p>
                            Y tế cơ sở là nền tảng của hệ thống y tế, tiếp nhận và cung cấp dịch vụ y tế cơ bản tại cấp xã, phường, quận, thị trấn. Các cơ sở y tế cơ bản này bao gồm trạm y tế và bệnh viện huyện, đảm bảo tiếp cận dịch vụ y tế dễ dàng cho dân cư địa phương với chi phí thấp nhất và hiệu quả nhất.

                            Các trường đào tạo y tế đóng góp quan trọng vào việc đào tạo nhân lực y tế chất lượng cao. Những nhân viên y tế này không chỉ được đào tạo kiến thức chuyên môn sâu rộng mà còn được trang bị kỹ năng và tư duy cần thiết để đáp ứng các thách thức y tế phức tạp.

                            Ngoài ra, các trường đào tạo y tế còn cập nhật kiến thức y học mới nhất, áp dụng các phương pháp và công nghệ tiên tiến trong giảng dạy, và tạo điều kiện thuận lợi cho sinh viên và học viên tiếp cận các trường học thực hành chất lượng.

                            Các trường đào tạo y tế cũng đóng góp trong việc xây dựng một đội ngũ y tế đa dạng và phong phú. Điều này bao gồm việc khuyến khích và hỗ trợ các sinh viên và học viên đến từ các vùng sâu, vùng xa, và các dân tộc thiểu số tham gia ngành y tế.
                        </p>

                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
