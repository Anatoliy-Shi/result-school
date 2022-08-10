import react from "../../assets/react.png";
import node from "../../assets/node.png";
import nano from "../../assets/nanotech.png";
import code from "../../assets/code.png";
import fullstack from "../../assets/fullstack.png";
import {useEffect, useState} from "react";

export const ScrollChange = () => {

    const [check, setCheck] = useState(false)
    const [totalPadding, setTotalPadding] = useState(0)

    useEffect(() => {
        const visibleWindow = window.innerHeight
        const blockHeight = document.querySelector(".section").getBoundingClientRect().height
        const pageEndY = document.querySelector(".section").getBoundingClientRect().y
        //какой отступ нужен сверху для анимации
        const paddingToTop =  ((visibleWindow - blockHeight) /2)

        const handeScroll = () => {
            if (paddingToTop >= pageEndY) {
                setTotalPadding(pageEndY)
                setCheck(true)
            } else {
                setTotalPadding(pageEndY)
                setCheck(false)
            }
        }
        window.addEventListener('scroll', handeScroll)
        return (()=> {
            window.removeEventListener('scroll', handeScroll)
        })
    }, [check, totalPadding])



    return (
        <section
                 className="section ml-[5px] mr-[7px] mt-[89px] lg:mt-[40px] max-w-[1860px] h-[640px] lg:h-[900px] md:h-[1050px] sm:h-[1050px] bg-[#0F1214] rounded-[20px] m-0 m-auto text-[#FFF] text-center">
            <h3 className="text-[54px] sm:text-[36px] lg:text-[38px] leading-[70.2px] font-[700] pt-[123px] lg:pt-[50px] md:pt-[50px] sm:pt-[50px]">Что тебе даст прохождение
                курса?</h3>
            <div className="text-[24px] sm:text-[18px] font-[600] leading-[130%] mt-[40px] flex justify-center">
                <p className={check ? "mr-[40px] opacity-[50%]" : "mr-[40px]"}> SKILLS UPGRADE</p>
                <p className={!check ? "opacity-[50%]" : null}>STRONG HARD SKILLS</p>
            </div>
                {check && <div
                    className="flex pt-[108px] sm:pt-[50px] lg:pt-[50px] md:pt-[50px] cm:pt-[50px] justify-evenly lg:flex-col md:flex-col sm:flex-col " >
                    <div className="flex items-center flex-col animate-scrollMove lg:pb-[50px]  md:pb-[50px] sm:pb-[50px]">
                        <img src={code} alt="react"/>
                        <p className="pt-[30px] w-[440px] sm:w-[280px] mxl:w-[330px] text-[22px] mxl:text-[16px] sm:text-[14px] font-[500] leading-[130%]">Научишься понимать
                            терминологию, документацию и писать код на уровне востребованных разработчиков</p>
                    </div>
                    <div className="flex items-center flex-col animate-scrollMove lg:pb-[50px]  md:pb-[50px] sm:pb-[50px] ">
                        <img src={nano} alt="nodejs"/>
                        <p className="pt-[30px] w-[440px] sm:w-[280px] mxl:w-[330px] text-[22px] mxl:text-[16px] sm:text-[14px] font-[500] leading-[130%]">твои знания превратятся
                            в
                            систему, ты не просто изучишь технологии, но и поймешь как развиваться дальше </p>
                    </div>
                    <div className="flex items-center flex-col animate-scrollMove ">
                        <img src={fullstack} alt="nano"/>
                        <p className="pt-[30px]  w-[407px] sm:w-[280px] mxl:w-[330px] text-[22px] mxl:text-[16px] sm:text-[14px] font-[500] leading-[130%]">Создашь Fullstack
                            приложение, которое покажет что твои навыки выше чем у стандартного junior </p>
                    </div>
                </div>}
                {!check && <div
                    className="flex pt-[108px] lg:pt-[50px] md:pt-[50px] sm:pt-[50px] justify-evenly lg:flex-col md:flex-col sm:flex-col " >
                    <div className="flex items-center flex-col animate-scrollMove lg:pb-[50px] md:pb-[50px] sm:pb-[50px]">
                        <img src={react} alt="react"/>
                        <p className="pt-[30px] w-[440px] sm:w-[280px] mxl:w-[330px] text-[22px] sm:text-[14px] mxl:text-[16px] font-[500] leading-[130%]">Создаёте с помощью
                            фреймворка React визуальную часть приложения:
                            элементы, анимация</p>
                    </div>
                    <div className="flex items-center flex-col animate-scrollMove lg:pb-[50px] md:pb-[50px] sm:pb-[50px]">
                        <img src={node} alt="nodejs"/>
                        <p className="pt-[30px] w-[440px] sm:w-[280px] mxl:w-[330px] text-[22px] sm:text-[14px] mxl:text-[16px] font-[500] leading-[130%]">Изучишь NodeJS на
                            достаточном уровне чтобы связывать frontend и backend</p>
                    </div>
                    <div className="flex items-center flex-col animate-scrollMove ">
                        <img src={nano} alt="nano"/>
                        <p className="pt-[30px]  w-[407px] sm:w-[280px] mxl:w-[330px] text-[22px] sm:text-[14px] mxl:text-[16px] font-[500] leading-[130%]">Овладеешь базой, от
                            которого можно отталкиваться и учить любую технологию на JavaScript</p>
                    </div>
                </div>}
        </section>
    )
}