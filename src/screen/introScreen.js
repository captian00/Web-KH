import React, { Component } from 'react';
import '../style/styleIntro.css'

import header from '../images/header.png';

export default class Intro extends Component{
    render(){
        return(
            <div className="intro-margin">            
                    <img src={header} alt= "header" ></img>
                    <div className="intro">
                        <div className="sub">
                            <h2 style={{textAlign: "center"}}>GIỚI THIỆU VINTRANS</h2>
                            <h3>02. GIỚI THIỆU VỀ VINTRANS</h3>
                            <p>
                                VITRANS là hệ thống vận chuyển hàng hòa tại Việt Nam, với hệ thống vận chuyển của chúng tôi có thể giúp Quý khách hàng :
                            </p>
                            <ul>
                                <li>Quý khách có thể gửi các loại hàng hoá (nằm trong danh sách các loại hàng được phép) trên lãnh thổ nước Việt Nam.</li>
                                <li>Hệ thống VITRANS sẽ giúp việc mua và gửi hàng hoá trở nên đơn giản hơn bao giờ hết.</li>
                            </ul>

                            <h3>03. SỨ MỆNH VÀ TẦM NHÌN</h3>
                            <ul>
                                <li>Nâng cao chất lượng tiêu dùng Việt Nam bằng những sản phẩm chất lượng thế giới bán tại các quốc gia phát triển như Nhật, Mỹ… Xây dựng kênh mua sắm xuyên quốc gia, tạo nên sàn giao dịch thương mại điện tử toàn cầu cho tiêu dùng Việt Nam, thực hiện sứ mệnh "Vươn xa tầm với Việt".</li>
                                <li>Mục tiêu sau 5 năm hàng hoá chất lượng từ các nước sở tại Nhật, Mỹ, châu Âu được dễ dàng mua sắm đối với người tiêu dùng Việt Nam trên sàn thương mại điện từ toàn cầu giống như mua hàng trên các hệ thống thương mại điện tử trong nước.</li>
                                <li>Nâng cao chất lượng tiêu dùng Việt Nam bằng những sản phẩm chất lượng thế giới bán tại các quốc gia phát triển như Nhật, Mỹ… Xây dựng kênh mua sắm xuyên quốc gia, tạo nên sàn giao dịch thương mại điện tử toàn cầu cho tiêu dùng Việt Nam, thực hiện sứ mệnh "Vươn xa tầm với Việt".</li>
                                <li>Mục tiêu sau 5 năm hàng hoá chất lượng từ các nước sở tại Nhật, Mỹ, châu Âu được dễ dàng mua sắm đối với người tiêu dùng Việt Nam trên sàn thương mại điện từ toàn cầu giống như mua hàng trên các hệ thống thương mại điện tử trong nước.</li>
                            </ul>
                        </div>
                    </div>
            </div>
        )
    }
}