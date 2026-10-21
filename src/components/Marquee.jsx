import React from 'react';
import MarqueeText from 'react-marquee-text';

const Marquee = async () => {

    const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products');
    const data = await res.json();
    //console.log(data);

    return (
        <div className='bg-base-100 shadow p-3'>

           <MarqueeText duration={25} direction="right">
{data.map((item) => (

                <div key={item.id} className="mx-2 flex shrink-0 items-center gap-2 whitespace-nowrap">
                    <div>
                    <span>{item.image}</span>
                    <span>{item.nameBn}</span>
                    <span> {item.today.toLocaleString("bn-BD")}/{item.unit === "kg" ? "কেজি" : item.unit === "litre" ? "লিটার" : item.unit}</span>
                    <span
                        className={item.change.dir === "up" ? "text-emerald-500" : "text-red-500"}
                    >
                        {item.change.dir === "up" ? "▲" : "▼"}
                    </span>
                    <span>{Math.abs(item.change.pct).toLocaleString("bn-BD")}%</span>
                    </div>
                    

                </div>

            ))}

           </MarqueeText>

            

        </div>
    );
};

export default Marquee;