import { useForm } from "react-hook-form";
import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogDescription } from "../ui/dialog";
import { RecipeFormData, recipeSchema } from "@/lib/formValidationSchemas/recipeSchema";
import { yupResolver } from "@hookform/resolvers/yup";

interface RecipeFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function RecipeFormModal({ isOpen, onClose }: RecipeFormModalProps) {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm<RecipeFormData>({
        resolver: yupResolver(recipeSchema),
        mode: "onSubmit"
    })

    const onSubmit = (data: RecipeFormData) => {
        console.log(data)
        reset()
        onClose()
    }

    const inputStyle = "p-2 border border-zinc-200 rounded-md"

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle>Nova receita</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
                    <div className="grid grid-cols-2">
                        {/* Título */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="title">Título</label>
                            <input className={inputStyle} type="text" id="title" {...register("title")} />
                            {errors.title && <span className="text-sm text-red-500">{errors.title.message}</span>}
                        </div>

                        {/* Categoria */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="category">Categoria</label>
                            <input className={inputStyle} type="text" id="title" {...register("category")} />
                            {errors.category && <span className="text-sm text-red-500">{errors.category.message}</span>}
                        </div>
                    </div>

                    {/* Descrição */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="description">Descrição</label>
                        <textarea className={inputStyle} id="description" {...register("descrition")} />
                        {errors.descrition && <span className="text-sm text-red-500">{errors.descrition.message}</span>}
                    </div>

                    {/* URL da imagem */}
                    <div className="flex flex-col gap-1">
                        <label htmlFor="imageUrl">URL da imagem</label>
                        <textarea typeof="text" className={inputStyle} id="imageUrl" placeholder="/placeholder.svg" {...register("imageURL")} />
                        {errors.imageURL && <span className="text-sm text-red-500">{errors.imageURL.message}</span>}
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        {/* Tempo de praparo */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="prepTime">Tempo de preparo</label>
                            <input className={inputStyle} type="text" id="prepTime" placeholder="15 minutos" {...register("prepTime")} />
                            {errors.prepTime && <span className="text-sm text-red-500">{errors.prepTime.message}</span>}
                        </div>

                        {/* Tempo de cozimento */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="cookTime">Tempo de cozimento</label>
                            <input className={inputStyle} type="text" id="cookTime" placeholder="30 minutos" {...register("cookTime")} />
                            {errors.cookTime && <span className="text-sm text-red-500">{errors.cookTime.message}</span>}
                        </div>

                        {/* Porções */}
                        <div className="flex flex-col gap-1">
                            <label htmlFor="servings">Porções</label>
                            <input className={inputStyle} type="number" id="servings" defaultValue={1} {...register("servings")} />
                            {errors.servings && <span className="text-sm text-red-500">{errors.servings.message}</span>}
                        </div>
                    </div>

                    <div className="flex gap-2 self-end">
                        <button type="button" onClick={onClose} className="bg-white border border-zinc-300 rounded-md hover:bg-gray-100 transition-colors px-4 py-2 font-medium">Cancelar</button>
                        <button type="submit" className="bg-black rounded-md text-white hover:bg-gray-800 transition-colors px-4 py-2 font-medium">Criar receita</button>
                    </div>

                </form>

            </DialogContent>
        </Dialog>
    )
}