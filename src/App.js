import './App.css';
import {Dots} from "./component/dots/Dots";
import ava from "./assets/avatar.png"
import vector from "./assets/Vector22.png"
import vect from "./assets/Vector.png"

function App() {
    const colorWhite = "bg-[#E9E6F0]"
    const whitePosition = "absolute top-[693px] left-[114px] z-[-3]"

    const colorPurple = "bg-[#9088FF]"
    const purplePosition = "absolute top-[48px] left-[962px] z-[1]"


    return (
        <>
                <Dots color={colorWhite} position={whitePosition}/>
                <div className="w-[396px] h-[166px] absolute top-[688px] left-[1058px] bg-[#FFF] rounded-[24px] z-20 flex items-center justify-center shadow-md">
                    <img className="absolute bottom-[139px] left-[62px] z-30 bg-[#7F76FF] p-[18px] rounded-[24px]"
                         src={vect} alt="vect"/>
                    <p className="font-normal tracking-[0.005em] text-[16px] leading-[150%] w-[348px] h-[96px]">
                        <span className="text-[#ED7138]">Обучение</span> для тех, <span className="text-[#9e9e9e]">кто готов учиться 10 часов в неделю</span>, <span
                        className="text-[#ED7138]">чтобы получить результат</span>. Мы даем <span
                        className="text-[#9e9e9e]">необходимые навыки</span> на продвинутом уровне, <span
                        className="text-[#9e9e9e]">убирая все лишнее</span>
                    </p>
                </div>
                <div className="bg-[#7B72FE] max-w-[1760px] h-[680px] z[-1] mt-[99px] ml-[160px]  rounded-l-[40px] overflow-hidden">
                    <div className="flex relative">
                        <Dots color={colorPurple} position={purplePosition}/>
                        <div className="w-[340px] h-[340px] rounded-[50%] bg-[#746BF4] z-[1] absolute bottom-[-31px] left-[146px]"></div>
                        <div className="w-[340px] h-[340px] rounded-[50%] bg-[#746BF4] z-[1] absolute bottom-[-31px] left-[496px]"></div>
                        <div className="w-[340px] h-[340px] rounded-[50%] bg-[#746BF4] z-[1] absolute bottom-[-31px] left-[846px]"></div>
                        <div className="flex">
                        <div className="text pt-[67px] pl-[95px] z-[2]">
                            <h3 className="w-[763px] leading-[130%] font-semibold text-[#fff] text-[54px] tracking-widest">
                                Профессия <br/> Frontend — разработчик
                            </h3>
                            <p className="w-[740px] pt-[40px] leading-[140%] text-[30px] font-semibold text-[#fff] tracking-[0.005em]">
                                Стань с нуля продвинутым Junior разработчиком за 7 месяцев с знанием технологий больше,
                                чем
                                у других кандидатов
                            </p>
                            <p className="w-[699px] pt-[26px] font-normal tracking-[0.005em] leading-[150%] text-[18px] text-[#fff]">
                                Начиная с основ изучишь JavaScript, разберешься с самыми популярными технологиями,
                                научишься
                                писать Frontend на фреймворке и связывать его с Backend. Навыки после курса оцениваются
                                от
                                100 т.р.
                            </p>
                            <button type="button"
                                    className="cursor-pointer w-[325px] h-[74px] mt-[60px] bg-[#ED7138] rounded-[51px] text-[#fff] leading-[100%] font-normal text-[18px] ">Задать
                                вопрос об обучении
                            </button>
                        </div>
                        <div className="mt-[95px] ml-[150px] w-[831px] h-[601px] bg-[#FFF] z-10 rounded-tl-[15px]">
                            <div className="mt-[12px] mb-[30px] flex items-center justify-between">
                                <div className="flex">
                                    <div
                                        className="w-[12px] h-[12px] mr-[4px] bg-[#E6E9EC] rounded-[50%] ml-[22px] "></div>
                                    <div className="w-[12px] h-[12px] mr-[4px] bg-[#E6E9EC] rounded-[50%] "></div>
                                    <div className="w-[12px] h-[12px] mr-[4px] bg-[#E6E9EC] rounded-[50%] "></div>
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
                                    <img src={vector} alt="vector" className="ml-[18px] mr-[16px] cursor-pointer"/>
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
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] text-[#37797B]">
                                                <div
                                                    className="border-solid rounded border-2 border-[#37797B] border-opacity-25 w-[40px] py-1 px-1 text-center">
                                                    тег 1
                                                </div>
                                            </p>
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Доктор</p>
                                            <p className=" w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] mr-[30px]">13</p>
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">4</p>
                                            <p className="w-[117px] text-[10px] leading-[10px] tracking-[0.005em] color-[#0F1214] font-[400]">Добавить
                                                в избанное</p>
                                        </div>
                                        <div className="flex justify-between mb-[12px] items-center">
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Username2</p>
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] text-[#ED7138]">
                                                <div
                                                    className="border-solid rounded border-2 border-[#ED7138]  border-opacity-25 w-[40px] py-1 px-1 text-center">
                                                    тег 3
                                                </div>
                                            </p>
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Физик </p>
                                            <p className=" w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] mr-[30px]">56</p>
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">5</p>
                                            <p className="w-[117px] text-[10px] leading-[10px] tracking-[0.005em] color-[#0F1214] font-[400]">Добавить
                                                в избанное</p>
                                        </div>
                                        <div className="flex justify-between mb-[12px] items-center">
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Username5</p>
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] text-[#ED7138]">
                                                <div
                                                    className="border-solid rounded border-2 border-[#ED7138] border-opacity-25 w-[40px] py-1 px-1 text-center">
                                                    тег 3
                                                </div>
                                            </p>
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Официант</p>
                                            <p className=" w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] mr-[30px]">2</p>
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">5</p>
                                            <p className="w-[117px] text-[10px] leading-[10px] tracking-[0.005em] color-[#0F1214] font-[400]">Добавить
                                                в избанное</p>
                                        </div>
                                        <div className="flex justify-between mb-[12px] items-center">
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Username12</p>
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] text-[#37797B] ">
                                                <div
                                                    className="border-solid rounded border-2 border-[#37797B] border-opacity-25 w-[40px] py-1 px-1 text-center">
                                                    тег 1
                                                </div>
                                            </p>
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Доктор</p>
                                            <p className=" w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] mr-[30px]">9</p>
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">3</p>
                                            <p className="w-[117px] text-[10px] leading-[10px] tracking-[0.005em] color-[#0F1214] font-[400]">Добавить
                                                в избанное</p>
                                        </div>
                                        <div className="flex justify-between mb-[12px] items-center">
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Username9</p>
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] text-[#ED7138]">
                                                <div
                                                    className="border-solid rounded border-2 border-[#ED7138] border-opacity-25 w-[40px] py-1 px-1 text-center">
                                                    тег 3
                                                </div>
                                            </p>
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Официант</p>
                                            <p className=" w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] mr-[30px]">3</p>
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">3</p>
                                            <p className="w-[117px] text-[10px] leading-[10px] tracking-[0.005em] color-[#0F1214] font-[400]">Добавить
                                                в избанное</p>
                                        </div>
                                        <div className="flex justify-between mb-[12px] items-center">
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Username6</p>
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] text-[#ED7138]">
                                                <div
                                                    className="border-solid rounded border-2 border-[#ED7138] border-opacity-25 w-[40px] py-1 px-1 text-center">
                                                    тег 3
                                                </div>
                                            </p>
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Физик</p>
                                            <p className=" w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] mr-[30px]">11</p>
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">4</p>
                                            <p className="w-[117px] text-[10px] leading-[10px] tracking-[0.005em] color-[#0F1214] font-[400]">Добавить
                                                в избанное</p>
                                        </div>
                                        <div className="flex justify-between mb-[12px] items-center">
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Username8</p>
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] text-[#37797B]">
                                                <div
                                                    className="border-solid rounded border-2 border-[#37797B] border-opacity-25 w-[40px] py-1 px-1 text-center">
                                                    тег 1
                                                </div>
                                            </p>
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Актер</p>
                                            <p className=" w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] mr-[30px]">2</p>
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">5</p>
                                            <p className="w-[117px] text-[10px] leading-[10px] tracking-[0.005em] color-[#0F1214] font-[400]">Добавить
                                                в избанное</p>
                                        </div>
                                        <div className="flex justify-between mb-[12px] items-center">
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Username7</p>
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] text-[#ED7138]">
                                                <div
                                                    className="border-solid rounded border-2 border-[#ED7138]  border-opacity-25 w-[40px] py-1 px-1 text-center">
                                                    тег 3
                                                </div>
                                            </p>
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Доктор</p>
                                            <p className=" w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] mr-[30px]">9</p>
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">3</p>
                                            <p className="w-[117px] text-[10px] leading-[10px] tracking-[0.005em] color-[#0F1214] font-[400]">Добавить
                                                в избанное</p>
                                        </div>
                                        <div className="flex justify-between mb-[12px] items-center">
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600]">Username1</p>
                                            <p className="w-[90px] text-[11px] leading-[100%] tracking-[0.005em] color-[#0F1214] font-[600] text-[#ED7138]">
                                                <div
                                                    className="border-solid rounded border-2 border-[#ED7138] border-opacity-25 w-[40px] py-1 px-1 text-center">
                                                    тег 3
                                                </div>
                                            </p>
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


            <div>
                <p>hello</p>
                <h4>hello</h4>
            </div>
            <div>
                <p>hello</p>
                <h4>hello</h4>
            </div>
            <div>
                <p>hello</p>
                <h4>hello</h4>
            </div>

        </>
    );
}

export default App;
