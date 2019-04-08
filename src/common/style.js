import styled from 'styled-components';

export const NavLeftWrapper = styled.div`
    height: 100vh;
    background-color: #001529;
    color: #fff;
`;
export const Logo = styled.div`
    line-height: 90px;
    padding-left: 20px;
    img {
        height: 35px;
        vertical-align: middle;
        margin-right: 10px;
    }
    h1 {
        color: #fff;
        display: inline-block;
    }
`;
export const HeaderWrapper = styled.div`
    font-size: 14px;
`;
export const Welcome = styled.div`
    text-align: right;
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    border-bottom: 1px solid #f9c700;
`;
export const UserInfo = styled.span`
    margin-right: 40px;
`;
export const LogOut = styled.a`
    color: #333;
`;
export const Breadcrumb = styled.div`
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    .bread-title{
        text-align: center;
    }
    .weather {
        text-align: right;
        .date {
            margin-right: 20px;
        }
        .weather-detail {
            
            img {
                height: 15px;
                margin-right: 10px;
                vertical-align: sub;
            }
        }
    }
`;
