import {FaPoop} from "react-icons/fa6";
import {Fragment, useState} from "react";
import AddShame from "./AddShame.tsx";

interface IHeader{
    setReFetchToggle : Function
}
const Header = ({setReFetchToggle} : IHeader) => {
    const [openModal, setOpenModal] = useState<string>("")
    return (
        <Fragment>
            <div className={"header"}>
                <h1 className={"header__title"}>
                    Hall of Shame
                </h1>
                <div className={"header__addShame"} onClick={()=> setOpenModal("open")}>
                    Ajouter un scandale
                    <FaPoop/>
                </div>
            </div>
            <AddShame openModal={openModal} setOpenModal={setOpenModal} setReFetchToggle={setReFetchToggle}/>
        </Fragment>
    );
};

export default Header;