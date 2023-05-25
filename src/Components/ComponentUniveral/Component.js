import React from 'react';
import {useState, useEffect } from 'react';

import "./Component.css"

export default function Component({info,titel,context}){
    
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    const [isActive6, setIsActive6] = useState(false);
    const [isActive7, setIsActive7] = useState(false);
    const [isActive8, setIsActive8] = useState(false);
    const [isActive9, setIsActive9] = useState(false);
    const [isActive10, setIsActive10] = useState(false);
    
    
    const handleClick1=()=>{ // Debo de hacer un handel por cada img que queiero mostrar 
    setIsActive1(!isActive1)
    }
    
    const handleClick2=()=>{ 
        setIsActive2(!isActive2)
        }
    

     const handleClick3=()=>{ 
        setIsActive3(!isActive3)
        }
 
    const handleClick4=()=>{ 
        setIsActive4(!isActive4)
        }
    
    const handleClick5=()=>{ 
        setIsActive5(!isActive5)
        }
    
    const handleClick6=()=>{ 
        setIsActive6(!isActive6)
        }
        
    const handleClick7=()=>{ 
        setIsActive7(!isActive7)
        }
        
    const handleClick8=()=>{ 
        setIsActive8(!isActive8)
        }
        
    const handleClick9=()=>{ 
        setIsActive9(!isActive9)
        }
        
    const handleClick10=()=>{ 
        setIsActive10(!isActive10)
        }
        
    
        
        
        
    // hacen refer a las img del robert    
   let img1 = info[0].img_src,
       img2 = info[12].img_src,
       img3 = info[2].img_src,
       img4 = info[3].img_src,
       img5 = info[4].img_src,
       img6 = info[51].img_src,
       img7 = info[6].img_src,
       img8 = info[57].img_src,
       img9 = info[8].img_src,
       img10 = info[39].img_src;
       
       
    let info1 = info[0],
        info2 = info[12],
        info3 = info[2],
        info4 = info[3],
        info5 = info[4],
        inof6 = info[15],
        info7 = info[6],
        info8 = info[7],
        info9 = info[8],
        info10 = info[9];
      // console.log("Img1",img1)
      // console.log("Img2",img2)
    
console.log(info[0])

    const InfoPhoto=({data})=>{
        return(     // Aca debo de colocar la info que hace referencia ala api
            <div className='InfoPhoto'>
                <ul>
                    <li>Photografy : {data.rover.name}</li>
                    <li>Fecha de Despge :{data.rover.launch_date}</li>
                    <li>Fecha de Aterrisaje :{data.rover.landing_date}</li>
                    <li>Sol Maricao : Nº {data.sol}</li>
                </ul>
            </div>
        )
    }

return(
    <div id='miniRoot' className='container-photos'>
        <h1>{titel}</h1>
        <p>{context}</p>
        <hr/>
        
        <div className='container-img'>
            
            <div className="card-container">
                    <img className={isActive1?"active":""} src={img1}/>
                 <button onClick={handleClick1} className='btn'>{isActive1 ?"X":"Detalle"}</button>
                    {isActive1 && <InfoPhoto data={info1}/>}
                    
             </div>
               
            
            
            <div className="card-container">
            <img className={isActive2?"active":""} src={img2}/>
            <button onClick={handleClick2} className='btn'>{isActive2 ?"X":"Detalle"}</button>
                    {isActive2 && <InfoPhoto data={info2}/>}
            </div>
            
            <div className="card-container">
            <img className={isActive3?"active":""} src={img3}/>
                 <button onClick={handleClick3} className='btn'>{isActive3 ?"X":"Detalle"}</button>
                    {isActive3 && <InfoPhoto data={info3}/>}
            </div>
            
            <div className="card-container">
            <img className={isActive4?"active":""} src={img4}/>
                 <button onClick={handleClick4} className='btn'>{isActive4 ?"X":"Detalle"}</button>
                    {isActive4 && <InfoPhoto data={info4}/>}
            </div>
            
            <div className="card-container">
            <img className={isActive5?"active":""} src={img5}/>
                 <button onClick={handleClick5} className='btn'>{isActive5 ?"X":"Detalle"}</button>
                    {isActive5 && <InfoPhoto data={info5}/>}
            </div>
            
            <div className="card-container">
            <img className={isActive6?"active":""} src={img6}/>
                 <button onClick={handleClick6} className='btn'>{isActive6 ?"X":"Detalle"}</button>
                    {isActive6 && <InfoPhoto data={inof6}/>}
            </div>
            
            <div className="card-container">
            <img className={isActive7?"active":""} src={img7}/>
                 <button onClick={handleClick7} className='btn'>{isActive7 ?"X":"Detalle"}</button>
                    {isActive7 && <InfoPhoto data={info7}/>}
            </div>
            
            <div className="card-container">
            <img className={isActive8?"active":""} src={img8}/>
                 <button onClick={handleClick8} className='btn'>{isActive8 ?"X":"Detalle"}</button>
                    {isActive8 && <InfoPhoto data={info8}/>}
            </div>
            
            <div className="card-container">
            <img className={isActive9?"active":""} src={img9}/>
                 <button onClick={handleClick9} className='btn'>{isActive9 ?"X":"Detalle"}</button>
                    {isActive9 && <InfoPhoto data={info9}/>}
            </div>
            
            <div className="card-container">
            <img className={isActive10?"active":""} src={img10}/>
                 <button onClick={handleClick10} className='btn'>{isActive10 ?"X":"Detalle"}</button>
                    {isActive10 && <InfoPhoto data={info10}/>}
            </div>
            
           
            
        </div>
    </div>
)
}