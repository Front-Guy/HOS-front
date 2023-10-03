import {useForm} from "react-hook-form"
import {useState} from "react";
import axios from 'axios';

type Inputs = {
    name: string
    author: string
    image: any
    description: string
}

interface IAddShameForm {
    setReFetchToggle : Function
}
const AddShameForm = ({setReFetchToggle} : IAddShameForm) => {

    const [file, setFile] = useState<any>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<Inputs>({mode: "onTouched"})

    const onSubmit = async (values: any) => {
        const data = new FormData()
        data.append("image", file!)
        data.append("name", values.name)
        data.append("author", values.author)
        data.append("description", values.description)

        await axios.post(`${import.meta.env.VITE_APP_URL}api/shames`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
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

                    <input
                        name={"image"}
                        type="file"
                        accept={'.png, .jpg'}
                        required={true}
                        onChange={(event) => {
                            const selectedFile = event.target.files![0];
                            setFile(selectedFile);
                        }}
                    />

            <button className={"sendShame"} type="submit">EEEEENNNNVOYEEEERR</button>
        </form>
    );
};

export default AddShameForm;