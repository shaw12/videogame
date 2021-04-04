import React, { useContext, useState } from 'react'
import { GameContext } from '../GameContext';
import {IoMdArrowDown, IoMdArrowDropdown} from 'react-icons/io'
import {IoMdArrowUp} from 'react-icons/io'

function FilterPage() {

    const {games, name, setName, score, setScore, setGamesPerPage, isActive, setIsActive, isVisible, setIsVisible, selected, setSelected, values, setValues} = useContext(GameContext)

    
    const handleChange = e => {
        var { name, value } = e.target;
        setSelected(value)
        
        setValues({
            isDate: false,
            isScore: false,
            isName: false,
            [name]: !values.name
        })                          
    }   

    const handleSubmit = (e) =>{
        e.preventDefault();
        setName('')
        setScore('')
        setGamesPerPage(100)
        setSelected("Release Date")
        setValues({
            isDate: true,
            isScore: false,
            isName: false,
        })   
        setIsActive(true)
    }

    const handleSort = () => {
        setIsActive(!isActive)
    }

    return (
        <div className="filter">
            <h3>Filter Results</h3>
            <form onSubmit={handleSubmit}>
                <label>Name(contains)</label>
                <input 
                    type="text"
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    placeholder="Text string"
                />
                
                <div className="form__break">
                    <div className="break__fields">
                        <label>Minimum Score</label>
                        <input 
                            type="number"
                            value={score}
                            onChange={e => setScore(e.target.value)} 
                            placeholder="1 - 10"
                            min="1"
                            max="10"
                        />
                    </div>

                    <div className="break__fields">
                        <label>Order By</label>
                        <div className="lastfield">
                            <div className="arrow__icon" onClick={handleSort}>
                                <IoMdArrowUp className={`${isActive ? 'visible' : 'not-visible'}`} />
                                <IoMdArrowDown className={`${isActive ? 'not-visible' : 'visible'}`} />
                            </div>
                            <div className="select">
                                <div className="selected" onClick={() => setIsVisible(!isVisible)}>{selected} <span className="dropdown__icon"><IoMdArrowDropdown /></span></div>
                                <div className={`dropdown ${isVisible ? "visible": "not-visible"}`} >
                                    <input name="isDate" value="Release Date" onClick={handleChange} className={`${values.isDate ? "not-visible" : "visible"}`} />
                                    <input name="isScore" value="Score" onClick={handleChange} className={`${values.isScore ? "not-visible" : "visible"}`}/>
                                    <input name="isName" value="Name" onClick={handleChange} className={`${values.isName ? "not-visible" : "visible"}`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                

                    <input type="submit" value="Clear" className="submit" />
                
                </div>
                
            </form>
        </div>
    )
}

export default FilterPage
