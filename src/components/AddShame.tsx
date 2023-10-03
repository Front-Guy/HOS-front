import AddShameForm from "./AddShameForm.tsx";
interface IAddShame {
    openModal : string
    setOpenModal : Function
    setReFetchToggle : Function
}
const AddShame = ({openModal, setOpenModal, setReFetchToggle} : IAddShame) => {
    return (
        <div className={`addShame-modal ${openModal}`} onClick={()=> setOpenModal('')}>
            <AddShameForm setReFetchToggle={setReFetchToggle}/>
        </div>
    );
};

export default AddShame;