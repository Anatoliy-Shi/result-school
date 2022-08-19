import './App.css';
import {Dots} from "./component/dots/Dots";
import ava from "./assets/avatar.png"
import vector from "./assets/Vector22.png"
import vect from "./assets/Vector.png"
import img161 from "./assets/image161.png"

import {ScrollChange} from "./component/scrollChange/ScrollChange";

function App() {
    const colorWhite = "bg-[#E9E6F0]"
    const whitePosition = "absolute top-[-87px] left-[114px] xl:left-[-46px] mxl:left-[-46px] lg:left-[-46px] md:hidden sm:hidden z-[-3]"

    const colorPurple = "bg-[#9088FF]"
    const purplePosition = "absolute top-[48px] left-[962px] z-[1] lg:left-[775px] lg:top-[23px] md:top-[23px] md:left-[310px] sm:left-[251px] sm:top-[-86px]"


    return (
        <>
            <div className="max-w-[1920px] m-0 m-auto lg:overflow-hidden md:overflow-hidden sm:overflow-hidden" >
                <section className="mt-[99px] lg:mt-[20px] md:mt-[20px] sm:mt-[20px] ml-[160px] lg:ml-0 mxl:ml-0 md:ml-0 sm:ml-0">
                    <div
                        className="bg-black max-w-[1760px] h-[680px] mxl:h-[1160px] lg:h-[970px] lg:h-[1050px] md:h-[1120px] sm:h-[600px] z[-1] rounded-l-[40px] overflow-hidden">
                        <div className="flex relative justify-items-center">
                            <Dots color={colorPurple} position={purplePosition}/>
                            <div
                                className="w-[340px] h-[340px] rounded-[50%] bg-[#746BF4] z-[1] absolute mxl:top-[423px] bottom-[-31px] left-[146px]"></div>
                            <div
                                className="w-[340px] h-[340px] rounded-[50%] bg-[#746BF4] z-[1] absolute mxl:top-[423px] bottom-[-31px] left-[496px]"></div>
                            <div
                                className="w-[340px] h-[340px] rounded-[50%] bg-[#746BF4] z-[1] absolute mxl:top-[423px] bottom-[-31px] left-[846px]"></div>
                            <div className="flex mxl:flex-wrap lg:flex-wrap md:flex-wrap sm:flex-wrap mxl:justify-center m-0 m-auto">
                                <div className="text pt-[67px] sm:ml-[1px] sm:pl-[5px] sm:pr-[5px] sm:pt-[20px] mxl:pl-0 mxl:m-0 mxl:m-auto sm:m-[5px] lg:m-0 lg:m-auto lg:pt-[23px] pl-[95px] lg:pl-[40px] md:m-auto z-[2]">
                                    <h3 className="w-[763px] leading-[130%] font-semibold text-[#fff] text-[54px] lg:text-[38px] md:text-[26px] sm:text-[18px] sm:w-[290px] tracking-widest">
                                        Профессия <br/> Frontend — разработчик
                                    </h3>
                                    <p className="w-[740px] md:w-[340px] sm:w-[290px] pt-[40px] md:pt-[30px] lg:pt-[20px] leading-[140%] text-[30px] lg:text-[24px] md:text-[19px] sm:text-[14px] font-semibold text-[#fff] tracking-[0.005em]">
                                        Стань с нуля продвинутым Junior разработчиком за 7 месяцев с знанием технологий
                                        больше,
                                        чем
                                        у других кандидатов
                                    </p>
                                    <p className="w-[699px] md:w-[340px] sm:w-[290px] pt-[26px] lg:pt-[20px] font-normal tracking-[0.005em] leading-[150%] text-[18px] sm:text-[12px] lg:text-[14px] text-[#fff]">
                                        Начиная с основ изучишь JavaScript, разберешься с самыми популярными
                                        технологиями,
                                        научишься
                                        писать Frontend на фреймворке и связывать его с Backend. Навыки после курса
                                        оцениваются
                                        от
                                        100 т.р.
                                    </p>
                                    <button type="button"
                                            className="cursor-pointer w-[325px] sm:w-[290px] h-[74px] mt-[60px] mxl:mt-[25px] sm:mt-[25px] sm:ml-[-8px] lg:mt-[25px] bg-[#ED7138] rounded-[51px] text-[#fff] leading-[100%] font-normal text-[18px] ">Задать
                                        вопрос об обучении
                                    </button>
                                </div>
                                <div
                                    className="sm:hidden mt-[95px] mxl:mt-[50px] lg:mt-[50px] lg:m-0 lg:m-auto  mxl:m-0 mxl:m-auto ml-[150px] w-[831px] h-[601px] bg-[#FFF] z-10 rounded-tl-[15px] font-[600] md:ml-0 sm:m-0 sm:m-auto sm:mt-[15px]">
                                    <div className="mt-[12px] mb-[30px] flex items-center justify-between">
                                        <div className="flex">
                                            <div
                                                className="w-[12px] h-[12px] mr-[4px] bg-[#E6E9EC] rounded-[50%] ml-[22px] "></div>
                                            <div
                                                className="w-[12px] h-[12px] mr-[4px] bg-[#E6E9EC] rounded-[50%] "></div>
                                            <div
                                                className="w-[12px] h-[12px] mr-[4px] bg-[#E6E9EC] rounded-[50%] "></div>
                                        </div>
                                        <div className="text-center leading-[150%] text-[13px]">Safari</div>
                                        <div></div>
                                    </div>
                                    <header className="flex justify-between justify-between mr-[65px]">
                                        <nav className="flex align-baseline ">
                                            <p className="cursor-pointer pl-[24px] leading-[21px] text-[14px]">Main</p>
                                            <p className="cursor-pointer pl-[20px] leading-[21px] text-[14px]">Users</p>
                                        </nav>
                                        <div className="profile flex items-center">
                                            <p className="leading-[21px] text-[14px] mr-[14px]">Kirill Babich</p>
                                            <img src={ava} alt="avatar"/>
                                            <img src={vector} alt="vector"
                                                 className="ml-[18px] mr-[16px] cursor-pointer"/>
                                        </div>
                                    </header>
                                    <div className="mt-[20px] flex">
                                        <aside>
                                            <ul>
                                                <li className="cursor-pointer flex items-center pl-[16px] w-[140px] h-[40px] mb-[2px] bg-[#F2F5F9] text-[#0F1214] leading-[150%] text-[13px]">Физик</li>
                                                <li className="cursor-pointer flex items-center pl-[16px] w-[140px] h-[40px] mb-[2px] bg-[#F2F5F9] text-[#0F1214] leading-[150%] text-[13px]">Доктор</li>
                                                <li className="cursor-pointer flex items-center pl-[16px] w-[140px] h-[40px] mb-[2px] bg-[#F2F5F9] text-[#0F1214] leading-[150%] text-[13px]">Официант</li>
                                                <li className="cursor-pointer flex items-center pl-[16px] w-[140px] h-[40px] mb-[2px] bg-[#F2F5F9] text-[#0F1214] leading-[150%] text-[13px]">Инженер</li>
                                                <li className="cursor-pointer flex items-center pl-[16px] w-[140px] h-[40px] mb-[2px] bg-[#F2F5F9] text-[#0F1214] leading-[150%] text-[13px]">Актер</li>
                                                <li className="cursor-pointer flex items-center pl-[16px] w-[140px] h-[40px] mb-[2px] bg-[#F2F5F9] text-[#0F1214] leading-[150%] text-[13px]">Повар</li>
                                                <button
                                                    className="cursor-pointer mt-[8px] w-[140px] h-[29px] bg-[#F2F5F9] text-[11px] leading-[100%] text-[#4C545E]">Очистить
                                                </button>
                                            </ul>
                                        </aside>
                                        <main className="ml-[30px]">
                                            <div
                                                className="text-[18px] leading-[27px] font-semibold leading-[150%] text-[18px] tracking-[0.005em]">17
                                                человек в списке
                                            </div>
                                            <div className="search">
                                                <input
                                                    className="mt-[10px] mb-[23px] pl-[12px] cursor-text tracking-[0.005em] text-[12px] leading-[100%] color-[#0F1214] opacity-50 bg-[#F2F5F9] w-[579px] h-[32px] rounded-[4px]"
                                                    type="text" placeholder="Поиск"/>
                                            </div>
                                            <div className="users">
                                                <div className="flex justify-between mb-[24px] items-center">
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-semibold">Имя</p>
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-semibold">Качества</p>
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-semibold">Профессия</p>
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-semibold mr-[30px]">Встретился,
                                                        раз</p>
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-semibold">Оценка</p>
                                                    <p className="w-[117px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-semibold">Избранное</p>
                                                </div>
                                                <div className="flex justify-between mb-[12px] items-center">
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Username</p>
                                                    <div className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] text-[#37797B]">
                                                        <p
                                                            className="border-solid rounded border-2 border-[#37797B] border-opacity-25 w-[40px] py-1 px-1 text-center">
                                                            тег 1
                                                        </p>
                                                    </div>
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Доктор</p>
                                                    <p className=" w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] mr-[30px]">13</p>
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">4</p>
                                                    <p className="w-[117px] text-[10px] leading-[10px] tracking-[0.005em] color-[#0F1214] font-[400]">Добавить
                                                        в избанное</p>
                                                </div>
                                                <div className="flex justify-between mb-[12px] items-center">
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Username2</p>
                                                    <div className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] text-[#ED7138]">
                                                        <p
                                                            className="border-solid rounded border-2 border-[#ED7138]  border-opacity-25 w-[40px] py-1 px-1 text-center">
                                                            тег 3
                                                        </p>
                                                    </div>
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Физик </p>
                                                    <p className=" w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] mr-[30px]">56</p>
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">5</p>
                                                    <p className="w-[117px] text-[10px] leading-[10px] tracking-[0.005em] color-[#0F1214] font-[400]">Добавить
                                                        в избанное</p>
                                                </div>
                                                <div className="flex justify-between mb-[12px] items-center">
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Username5</p>
                                                    <div className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] text-[#ED7138]">
                                                        <p
                                                            className="border-solid rounded border-2 border-[#ED7138] border-opacity-25 w-[40px] py-1 px-1 text-center">
                                                            тег 3
                                                        </p>
                                                    </div>
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Официант</p>
                                                    <p className=" w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] mr-[30px]">2</p>
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">5</p>
                                                    <p className="w-[117px] text-[10px] leading-[10px] tracking-[0.005em] color-[#0F1214] font-[400]">Добавить
                                                        в избанное</p>
                                                </div>
                                                <div className="flex justify-between mb-[12px] items-center">
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Username12</p>
                                                    <div className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] text-[#37797B] ">
                                                        <p
                                                            className="border-solid rounded border-2 border-[#37797B] border-opacity-25 w-[40px] py-1 px-1 text-center">
                                                            тег 1
                                                        </p>
                                                    </div>
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Доктор</p>
                                                    <p className=" w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] mr-[30px]">9</p>
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">3</p>
                                                    <p className="w-[117px] text-[10px] leading-[10px] tracking-[0.005em] color-[#0F1214] font-[400]">Добавить
                                                        в избанное</p>
                                                </div>
                                                <div className="flex justify-between mb-[12px] items-center">
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Username9</p>
                                                    <div className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] text-[#ED7138]">
                                                        <p
                                                            className="border-solid rounded border-2 border-[#ED7138] border-opacity-25 w-[40px] py-1 px-1 text-center">
                                                            тег 3
                                                        </p>
                                                    </div>
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Официант</p>
                                                    <p className=" w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] mr-[30px]">3</p>
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">3</p>
                                                    <p className="w-[117px] text-[10px] leading-[10px] tracking-[0.005em] color-[#0F1214] font-[400]">Добавить
                                                        в избанное</p>
                                                </div>
                                                <div className="flex justify-between mb-[12px] items-center">
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Username6</p>
                                                    <div className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] text-[#ED7138]">
                                                        <p
                                                            className="border-solid rounded border-2 border-[#ED7138] border-opacity-25 w-[40px] py-1 px-1 text-center">
                                                            тег 3
                                                        </p>
                                                    </div>
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Физик</p>
                                                    <p className=" w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] mr-[30px]">11</p>
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">4</p>
                                                    <p className="w-[117px] text-[10px] leading-[10px] tracking-[0.005em] color-[#0F1214] font-[400]">Добавить
                                                        в избанное</p>
                                                </div>
                                                <div className="flex justify-between mb-[12px] items-center">
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Username8</p>
                                                    <div className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] text-[#37797B]">
                                                        <p
                                                            className="border-solid rounded border-2 border-[#37797B] border-opacity-25 w-[40px] py-1 px-1 text-center">
                                                            тег 1
                                                        </p>
                                                    </div>
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Актер</p>
                                                    <p className=" w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] mr-[30px]">2</p>
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">5</p>
                                                    <p className="w-[117px] text-[10px] leading-[10px] tracking-[0.005em] color-[#0F1214] font-[400]">Добавить
                                                        в избанное</p>
                                                </div>
                                                <div className="flex justify-between mb-[12px] items-center">
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Username7</p>
                                                    <div className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] text-[#ED7138]">
                                                        <p
                                                            className="border-solid rounded border-2 border-[#ED7138]  border-opacity-25 w-[40px] py-1 px-1 text-center">
                                                            тег 3
                                                        </p>
                                                    </div>
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Доктор</p>
                                                    <p className=" w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] mr-[30px]">9</p>
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">3</p>
                                                    <p className="w-[117px] text-[10px] leading-[10px] tracking-[0.005em] color-[#0F1214] font-[400]">Добавить
                                                        в избанное</p>
                                                </div>
                                                <div className="flex justify-between mb-[12px] items-center">
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Username1</p>
                                                    <div className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] text-[#ED7138]">
                                                        <p
                                                            className="border-solid rounded border-2 border-[#ED7138] border-opacity-25 w-[40px] py-1 px-1 text-center">
                                                            тег 3
                                                        </p>
                                                    </div>
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Официант</p>
                                                    <p className=" w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] mr-[30px]">3</p>
                                                    <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">3</p>
                                                    <p className="w-[117px] text-[10px] leading-[10px] tracking-[0.005em] color-[#0F1214] font-[400]">Добавить
                                                        в избанное</p>
                                                </div>
                                            </div>
                                        </main>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative">
                    <Dots color={colorWhite} position={whitePosition}/>
                    <div
                        className="w-[396px] sm:w-[290px] h-[166px] sm:h-[180px] absolute top-[-90px] left-[1061px] xl:left-[901px] mxl:left-[621px] mxl:top-[-567px] lg:left-[325px] lg:top-[-505px] md:left-[50px] md:top-[-469px] sm:top-[-136px] sm:left-[4px] bg-[#FFF] rounded-[24px] z-20 flex items-center justify-center shadow-md">
                        <img className="absolute bottom-[139px] sm:bottom-[163px] left-[62px] z-30 bg-[#7F76FF] p-[18px] rounded-[24px]"
                             src={vect} alt="vect"/>
                        <p className="font-normal tracking-[0.005em] text-[16px] leading-[150%] w-[348px] h-[96px] sm:h-[150px]">
                            <span className="text-[#ED7138]">Обучение</span> для тех, <span className="text-[#9e9e9e]">кто готов учиться 10 часов в неделю</span>, <span
                            className="text-[#ED7138]">чтобы получить результат</span>. Мы даем <span
                            className="text-[#9e9e9e]">необходимые навыки</span> на продвинутом уровне, <span
                            className="text-[#9e9e9e]">убирая все лишнее</span>
                        </p>
                    </div>
                    <div className="pt-[95px] lg:pt-[30px] md:pt-[30px] sm:pt-[65px] flex justify-evenly flex-wrap lg:flex-col md:flex-col lg:m-0 lg:m-auto lg:items-center md:m-auto md:items-center">
                        <div className="flex items-center lg:w-[400px] md:w-[320px] sm:w-[290px] md:mb-[10px] lg:mb-[15px] sm:mb-[5px]">
                            <div className="mr-[20px]  bg-[#E0E6E9] text-[34px] w-[9px] h-[9px] rounded-[50%] mxl:hidden"></div>
                            <div className="mr-[16px]  number text-[#ED7138] tracking-[0.01em] text-[72px] sm:text-[54px] mxl:text-[56px] leading-[78px] font-[600]">293
                            </div>
                            <div className="w-[225px] tracking-[0.005em] text-[16px] leading-[150%] font-[400]">HD
                                видеоурока длительностью 3 - 15 минут
                            </div>
                        </div>
                        <div className="flex items-center lg:w-[400px] md:w-[320px] sm:w-[290px] md:mb-[10px] lg:mb-[15px] sm:mb-[5px]">
                            <div className="mr-[20px] bg-[#E0E6E9] text-[34px] w-[9px] h-[9px] rounded-[50%] mxl:hidden "></div>
                            <div
                                className="mr-[16px] number text-[#ED7138] tracking-[0.01em] text-[72px] sm:text-[54px] mxl:text-[56px] leading-[78px] font-[600]">6
                            </div>
                            <div className="w-[279px] tracking-[0.005em] text-[16px] leading-[150%] font-[400]">Мероприятий на курсе (Хакатоны, мастер классы,
                                разборы и т.д.)
                            </div>
                        </div>
                        <div className="flex items-center lg:w-[400px] md:w-[320px] sm:w-[290px]">
                            <div className="mr-[20px] bg-[#E0E6E9] text-[34px] w-[9px] h-[9px] rounded-[50%] mxl:hidden"></div>
                            <div
                                className="mr-[16px]  number text-[#ED7138] tracking-[0.01em] text-[72px] sm:text-[54px] mxl:text-[56px] leading-[78px] font-[600]">193
                            </div>
                            <div className="w-[149px] tracking-[0.005em] text-[16px] leading-[150%] font-[400]">заданий и тестов для закрепления</div>
                        </div>
                    </div>
                </section>
                <section className="mb-[60px]">
                    <div className="flex justify-center mt-[155px] lg:mt-[50px] md:mt-[50px] sm:mt-[50px] items-center mb-[40px]">
                        <p className="mr-[31px] mxl:mr-[18px] sm:mr-[12px] sm:ml-[15px] lg:mr-[14px] rounded-[50%] bg-[#7B72FE] text-white w-[26px] h-[26px] text-[18px] text-center">?
                        </p>
                        <h3 className="text-[#0F1214] font-[700] text-[54px] mxl:text-[48px] lg:text-[35px] md:text-[20px] sm:text-[20px] leading-[130%]">Как именно ты станешь
                            разработчиком</h3>
                    </div>
                    <p className="m-0 m-auto w-[970px] lg:w-[767px] md:w-[460px] sm:w-[290px] text-center text-[24px] lg:text-[20px] md:text-[18px] sm:text-[18px] font-[400] leading-[33.6px]">На курсе ты
                        не просто изучаешь теоретический материал. в процессе изучения ты повторяете за действующим
                        разработчиком, после чего <span><b>закрепляешь знания на заданиях и проектах.</b></span></p>
                </section>
                <section className="flex justify-center flex-wrap w-[1410px] mxl:w-auto m-0 m-auto lg:w-auto md:w-auto sm:w-auto">
                    <div className="w-[806px] h-[37px] bg-[#F2F2F1] flex items-center relative rounded-t-[20px]">
                        <div className="flex align-middle mt-[3px]">
                            <div className="w-[12px] h-[12px] mr-[4px] bg-[#D3D3CB] rounded-[50%] ml-[18px] "></div>
                            <div className="w-[12px] h-[12px] mr-[4px] bg-[#D3D3CB] rounded-[50%] "></div>
                            <div className="w-[12px] h-[12px] mr-[4px] bg-[#D3D3CB] rounded-[50%] "></div>
                        </div>
                        <div
                            className="w-[342px] h-[288px] bg-[#fff] rounded-[20px] shadow-md border-[1px] border-[#947EFF] pt-[20px] pl-[24px] absolute top-[112px] left-[-315px] mxl:left-[-100px] lg:left-[5px] md:top-[-35px] md:left-[52px] sm:w-[293px] sm:h-[322px] sm:left-[4px] sm:top-[-43px]">
                            <h4 className="text-[#9088FF] text-[14px] leading-[18.2px] font-[600] uppercase mb-[14px]">
                                2 Командных проекта
                            </h4>
                            <p className="text-[14px] font-[400] leading-[23.8px] text-[#0F1214]">
                                Симуляция комерческого проекта - получаете ТЗ и организовываете командную разработку.
                                Прокачивая навыки для будущей работы. <br/><br/>
                                <b>Проекты на тему:</b> <br/>- JavaScript плагин "Контекстное меню"<br/>- Cайт на React,
                                презентующий команду участников
                            </p>
                        </div>
                        <div
                            className="left w-[390px] h-[416px] bg-[#fff] rounded-[20px] shadow-md border-[1px] border-[#947EFF] pt-[20px] pl-[24px] absolute top-[215px] left-[706px] mxl:left-[510px] lg:top-[165px] lg:left-[350px] md:top-[274px] md:left-[29px] sm:w-[293px] sm:h-[322px] sm:left-[4px] sm:top-[252px] sm:h-[480px]">
                            <h4 className="text-[#9088FF] text-[14px] leading-[18.2px] font-[600] uppercase mb-[14px]">
                                Индивидуальные проекты
                            </h4>
                            <p className="text-[14px] font-[400] leading-[23.8px] text-[#0F1214]">
                                Чтобы свободно чуствовать себя на позиции junior необходим опыт разработки.
                                Вы создадите 3 проекта изучая материал от простого к сложному: <br/><br/> 1. Проект
                                корзина с товарами для интернет-магазина <br/> 2. Социальная сеть для поиска и
                                знакомств <br/> 3.Дипломный проект на выбранную вами тему: <br/>
                                - Учет доходов и рассходов <br/>
                                - Бронирование отелей <br/> - Интернет-магазин или схожий по сложности проект, которым
                                вы выберети и утвердите с куратором
                            </p>
                        </div>
                    </div>
                    <img className="z-[-1]" src={img161} alt="img161"/>
                </section>
                <section>
                <h5 className="text-[13px] font-[400] leading-[19.5px] text-center mt-[40px] md:mt-[345px] sm:mt-[500px]">Проекты учеников</h5>
                </section>
                <ScrollChange/>
            </div>
        </>
    );
}

export default App;
