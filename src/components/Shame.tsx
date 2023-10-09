import React, {Fragment, useState} from "react";
import ShameClicked from "./ShameClicked.tsx";
import {FaPoop, FaSkullCrossbones} from "react-icons/fa6";
import axios from 'axios';
import SyntaxHighlighter from 'react-syntax-highlighter';

interface IShame{
    item : any
    setReFetchToggle : Function
}

const Shame = ({item, setReFetchToggle}: IShame) => {
    const [shameClicked, setShameClicked] = useState<string>("")

    const count = async (uuid : string)=>{
        await axios.patch(`${process.env.REACT_APP_APP_URL}api/shames/${uuid}`, {
            count : item.count + 1
        })
        setReFetchToggle((prev : boolean)=> !prev)
    }

    const deleteShame = async (uuid : string)=>{
        await axios.delete(`${process.env.REACT_APP_APP_URL}api/shames/${uuid}`)
        setReFetchToggle((prev : boolean)=> !prev)
    }

    return (
        <Fragment>
            <div className={"content__shame"} onClick={() => setShameClicked("clicked")}>
                <div className={"content__shame__title"}>
                    <div
                        className={"content__shame__count"}
                        onClick={(e) => {
                            e.stopPropagation()
                            return count(item._id)
                        }}
                    >
                        <p>La note scandale : <span>{item.count}</span></p>
                        <FaPoop/>
                    </div>
                    <h2>
                        {item.name} par
                        <span> {item.author}</span>
                        <FaSkullCrossbones
                            onClick={(e : React.ChangeEvent<HTMLInputElement>)=> {
                                e.stopPropagation()
                                return deleteShame(item._id)
                            }}
                        />
                    </h2>
                </div>

                <div className={"content__shame__description"}>
                    <p>{item.description}</p>
                    <SyntaxHighlighter language="javascript" >
                        {item.content}
                    </SyntaxHighlighter>
                </div>
            </div>
            <ShameClicked item={item} clicked={shameClicked} setClicked={setShameClicked}/>
        </Fragment>
    );
};

export default Shame;