import  React, {useState, useEffect } from 'react';
import Axios from '../../axios';
import Utils from '../../utils/utils';
import { Row, Col } from 'antd';
import { HeaderWrapper, Welcome, UserInfo, LogOut, Breadcrumb } from '../style';

function Header() {
    const [sysTime, setSysTime] = useState(Utils.formatDate(new Date().getTime()));
    const [weather, setWeather] = useState({imgUrl:'',weatherDetail:''});
    useEffect(() => {
        setInterval(() => {
            const time = Utils.formatDate(new Date().getTime());
            setSysTime(time);
        }, 1000);
    })

    useEffect(() => {
        getWehterData();
    }, [weather.imgUrl])

    function getWehterData(){
        let city = '西安';
        Axios.jsonp({
            url: `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=OjLT49V74HOuV8rLlHnD20MvtGzKSB6p`
        }).then((res) => {
            console.log(res);
            const weatherObj = res.results[0].weather_data[0];
            const { nightPictureUrl, weather } = weatherObj;
            setWeather({
                imgUrl: nightPictureUrl,
                weatherDetail: weather
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <HeaderWrapper>
            <Welcome>
                <UserInfo>欢迎，klaus</UserInfo>
                <LogOut>退出</LogOut>
            </Welcome>
            <Breadcrumb>
                <Row>
                    <Col className="bread-title" span={4}>首页</Col>
                    <Col className="weather" span={20}>
                        <span className="date">{sysTime}</span>
                        <span className="weather-detail">
                            <img src={weather.imgUrl} alt=""/>
                            <span>{weather.weatherDetail}</span>
                        </span>
                    </Col>
                </Row>
            </Breadcrumb>
        </HeaderWrapper>
    )
}

export default Header;