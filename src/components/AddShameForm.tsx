import {useForm} from "react-hook-form"
import axios from 'axios';

type Inputs = {
    name: string
    author: string
    content: string
    description: string
}

interface IAddShameForm {
    setReFetchToggle : Function
}
const AddShameForm = ({setReFetchToggle} : IAddShameForm) => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<Inputs>({mode: "onTouched"})

    const onSubmit = async (values: any) => {
        const data = {
            author : values.author,
            name: values.name,
            description: values.description,
            content: values.content,
        }

        await axios.post(`${process.env.REACT_APP_APP_URL}api/shames`, data)
        reset();
        setReFetchToggle((prev : boolean)=> !prev)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={"addShame-modal__content"}
              onClick={(e) => e.stopPropagation()} >

            <div className={"input-container"}>
                <input placeholder={"Titre"} className={"input"} {...register("name", {required: true})} />
                {errors.name && <span>Le field est required</span>}
            </div>

            <div className={"input-container"}>
                <input placeholder={"Auteur"} className={"input"} {...register("author", {required: true})} />
                {errors.author && <span>Le field est required</span>}
            </div>

            <div className={"input-container"}>
                <input placeholder={"Commentaire"} className={"input"} {...register("description", {required: true})} />
                {errors.description && <span>Le field est required</span>}
            </div>

            <div className={"input-container"}>
                <textarea placeholder={"Lache le scandale"} className={"input"} {...register("content", {required: true})} />
                {errors.content && <span>Le field est required</span>}
            </div>

            <button className={"sendShame"} type="submit">EEEEENNNNVOYEEEERR</button>
        </form>
    );
};

export default AddShameForm;