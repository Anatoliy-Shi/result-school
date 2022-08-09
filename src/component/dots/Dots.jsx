import {nanoid} from "nanoid";

export const Dots = ({color, position}) => {

    const x = [1,2,3,4,5,6,7,8,9,10]

    return (
        <>
            <div className={`${position} flex `}>
            {x.map( el => {
               return <div key={nanoid()}>
                    {x.map(el => {
                        return <div key={nanoid()} className={`${color} flex w-[6px] h-[6px] rounded-[50%] mr-[8px] mb-[8px]`}></div>
                    })}
                </div>

            })}
            </div>
        </>
    )
}