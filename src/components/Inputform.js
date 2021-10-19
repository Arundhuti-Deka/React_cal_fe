import React, { useState } from 'react'
// import './Inputform.css'

const Inputform = () => {

    const [result, setResult]=useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }

    const clear = () => {
        setResult("");
    }
    const backspace = () => {
        // setResult(result.slice(0, result.length - 1));
        setResult(result.slice(0, -1));
    }
    const calculate = () => {
        try{
            setResult(eval(result).toString());             
        }catch(err){
            setResult("Error")
        }
               
    }


    return (
        <div className="flex justify-center items-center py-32 ">
            <div className=" h-80  object-center text-center border-8 border-black rounded-md bg-gray-400">
                <form>
                    <input className="h-16 w-60	bg-black border-0 text-white text-right text-base font-medium tracking-widest" type="text" value={result} />
                </form>

                <div className="grid grid-cols-4 auto-rows-fr h-60">
            
                    <button className="bg-gray-600 text-white m-0.5 border-none rounded cursor-pointer font-medium col-span-2 row-span-1" onClick={clear} id="clear">Clear</button>
                    <button className="bg-gray-600 text-white m-0.5 border-none rounded cursor-pointer font-medium" onClick={backspace} id="backspace">C</button>
                    <button className="bg-gray-600 text-white m-0.5 border-none rounded cursor-pointer font-medium" name="/" onClick={handleClick}>&divide;</button>
                    <button className="bg-gray-600 text-white m-0.5 border-none rounded cursor-pointer font-medium" name="7" onClick={handleClick}>7</button>
                    <button className="bg-gray-600 text-white m-0.5 border-none rounded cursor-pointer font-medium" name="8" onClick={handleClick}>8</button>
                    <button className="bg-gray-600 text-white m-0.5 border-none rounded cursor-pointer font-medium" name="9" onClick={handleClick}>9</button>
                    <button className="bg-gray-600 text-white m-0.5 border-none rounded cursor-pointer font-medium" name="*" onClick={handleClick}>&times;</button>
                    <button className="bg-gray-600 text-white m-0.5 border-none rounded cursor-pointer font-medium" name="4" onClick={handleClick}>4</button>
                    <button className="bg-gray-600 text-white m-0.5 border-none rounded cursor-pointer font-medium" name="5" onClick={handleClick}>5</button>
                    <button className="bg-gray-600 text-white m-0.5 border-none rounded cursor-pointer font-medium" name="6" onClick={handleClick}>6</button>
                    <button className="bg-gray-600 text-white m-0.5 border-none rounded cursor-pointer font-medium" name="-" onClick={handleClick}>&ndash;</button>
                    <button className="bg-gray-600 text-white m-0.5 border-none rounded cursor-pointer font-medium " name="1" onClick={handleClick}>1</button>
                    <button className="bg-gray-600 text-white m-0.5 border-none rounded cursor-pointer font-medium" name="2" onClick={handleClick}>2</button>
                    <button className="bg-gray-600 text-white m-0.5 border-none rounded cursor-pointer font-medium" name="3" onClick={handleClick}>3</button>
                    <button className="bg-gray-600 text-white m-0.5 border-none rounded cursor-pointer font-medium" name="+" onClick={handleClick}>+</button>
                    <button className="bg-gray-600 text-white m-0.5 border-none rounded cursor-pointer font-medium" name="0" onClick={handleClick}>0</button>
                    <button className="bg-gray-600 text-white m-0.5 border-none rounded cursor-pointer font-medium" name="." onClick={handleClick}>.</button>
                    <button className="bg-gray-600 text-white m-0.5 border-none rounded cursor-pointer font-medium col-span-2 row-span-1" onClick={calculate} id="result">=</button>
                    
                </div>
            </div>
        </div>
    )
}

export default Inputform


