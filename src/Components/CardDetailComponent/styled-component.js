import styled from "styled-components";
import { randomNumbers } from "../../Utils";
import L1 from '../../assets/locations/L1.jpg'
import L2 from '../../assets/locations/L2.jpg'
import L3 from '../../assets/locations/L3.jpg'
import L4 from '../../assets/locations/L4.jpg'
import L5 from '../../assets/locations/L5.jpg'
import L6 from '../../assets/locations/L6.jpg'
import L7 from '../../assets/locations/L7.jpg'
import L8 from '../../assets/locations/L8.jpg'
import L9 from '../../assets/locations/L9.png'

const randomImg = [
    L1,
    L2,
    L3,
    L4,
    L5,
    L6,
    L7,
    L8,
    L9,
]

const setRandom = randomImg[randomNumbers(0, 8, 1)]

export const ContainerCardDetail = styled.div`
    height: 100%;
    background-image: ${(props) =>
        `radial-gradient(circle at 0% 50%, rgba(30, 43, 85, 1) 45%, rgba(63, 81, 181, 0) 100%),
        url(${setRandom})`};
    padding: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    border-radius: 18px;
    @media (max-width: 768px) {
        flex-direction: column;
        background-image: ${(props) =>
            `linear-gradient(0deg, rgba(30, 43, 85, 1) 33%, rgba(63, 81, 181, 0) 100%),
            url(${setRandom})`};
        border-radius: 0;
    }
`

export const ContainerCardDetailImg = styled.div` 
    height: 100%;
    margin-right: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        object-fit: cover;
        width:100%;
        height: auto;
        object-position: center center;
        border-radius: 15px;
    }
    @media (max-width: 768px) {
        height: auto;
        width: 70%;
        margin: 0 0 16px 0;
    }
`
export const ContainerCardDetailInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    @media (max-width: 768px) {
        width: 100%;
        margin: 0;
        justify-content: flex-start;
        align-items: center;
    }
`
export const ContainerCardDetailInfoTitle = styled.div`
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        height: auto;
        margin: 0;
        width: 100%;
    }
`
export const ParagraphCardDetailInfoTitleAndStatus = styled.p`
    color: white;
    font-size: 48px;
    font-weight: bold;
    margin: 0;
    text-align: center;
`

export const ContainerCardDetailInfoDetails = styled.div`
    height: 75%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    @media (max-width: 768px) {
        flex-wrap: nowrap;
        align-items: center;
        height: auto;
    }
`

export const ContainerCardDetailInfoDetailsTitleAndInfo = styled.div`
    display: flex;
    margin: 16px 0;

`
export const ParagraphCardDetailDataInfoTitle = styled.p`
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin: 0;
`
export const ParagraphCardDetailDataInfo = styled.p`
    color: white;
    font-size: 24px;
    font-weight: 300;
    margin: 0 8px;
`