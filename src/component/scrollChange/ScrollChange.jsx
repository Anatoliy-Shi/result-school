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
        const one = document.querySelector(".one").getBoundingClientRect().height
        const two = document.querySelector(".two").getBoundingClientRect().height
        const three = document.querySelector(".three").getBoundingClientRect().height
        const four = document.querySelector(".four").getBoundingClientRect().height
        const five = document.querySelector(".five").getBoundingClientRect().height
        const visibleWindow = window.innerHeight
        const pageEnd = document.querySelector(".section").getBoundingClientRect().height
        //сумма размеров секций
        const sum = one + two + three + four + five + ((visibleWindow - pageEnd) /2) - 150
        setTotalPadding(sum)
        const handeScroll = () => {
            if (window.scrollY >= totalPadding) {
                setCheck(true)
            } else {
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
                 className="section mt-[89px] w-[1860px] h-[640px] bg-[#0F1214] rounded-[20px] m-0 m-auto text-[#FFF] text-center">
            <h3 className="text-[54px] leading-[70.2px] font-[700] pt-[123px]">Что тебе даст прохождение
                курса?</h3>
            <div className="text-[24px] font-[600] leading-[130%] mt-[40px] flex justify-center">
                <p className={check ? "mr-[40px] opacity-[50%]" : "mr-[40px]"}> SKILLS UPGRADE</p>
                <p className={!check ? "opacity-[50%]" : null}>STRONG HARD SKILLS</p>
            </div>
            <div className="flex flex-nowrap justify-center">
                {check && <div
                    className="flex pt-[108px] justify-evenly">
                    <div className="flex items-center flex-col animate-strongUp">
                        <img src={code} alt="react"/>
                        <p className="pt-[30px] w-[440px] text-[22px] font-[500] leading-[130%]">Научишься понимать
                            терминологию, документацию и писать код на уровне востребованных разработчиков</p>
                    </div>
                    <div className="flex items-center flex-col animate-strongUp">
                        <img src={nano} alt="nodejs"/>
                        <p className="pt-[30px] w-[440px] text-[22px] font-[500] leading-[130%]">твои знания превратятся
                            в
                            систему, ты не просто изучишь технологии, но и поймешь как развиваться дальше </p>
                    </div>
                    <div className="flex items-center flex-col animate-strongUp">
                        <img src={fullstack} alt="nano"/>
                        <p className="pt-[30px]  w-[407px] text-[22px] font-[500] leading-[130%]">Создашь Fullstack
                            приложение, которое покажет что твои навыки выше чем у стандартного junior </p>
                    </div>
                </div>}
                {!check && <div
                    className="flex pt-[108px] justify-evenly">
                    <div className="flex items-center flex-col animate-skillUp">
                        <img src={react} alt="react"/>
                        <p className="pt-[30px] w-[440px] text-[22px] font-[500] leading-[130%]">Создаёте с помощью
                            фреймворка React визуальную часть приложения:
                            элементы, анимация</p>
                    </div>
                    <div className="flex items-center flex-col animate-skillUp">
                        <img src={node} alt="nodejs"/>
                        <p className="pt-[30px] w-[440px] text-[22px] font-[500] leading-[130%]">Изучишь NodeJS на
                            достаточном уровне чтобы связывать frontend и backend</p>
                    </div>
                    <div className="flex items-center flex-col animate-skillUp">
                        <img src={nano} alt="nano"/>
                        <p className="pt-[30px]  w-[407px] text-[22px] font-[500] leading-[130%]">Овладеешь базой, от
                            которого можно отталкиваться и учить любую технологию на JavaScript</p>
                    </div>
                </div>}
            </div>
        </section>
    )
}