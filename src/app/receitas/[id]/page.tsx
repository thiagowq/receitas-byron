import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { recipes } from "@/lib/data";

interface RecipePageProps{
    params: {
        id: string;
    }
}

export default function ReceitaPage( {params}: RecipePageProps ) {
    
    const recipe = recipes.find((recipe) => recipe.id === params.id)

    if (!recipe){
        return notFound()
    }

    return (
        <main className="flex-grow py-8">
            <div className="container mx-auto">
                <Link className="flex text-orange-500 hover:text-orange-700 mb-6" href="/receitas">
                    <ChevronLeft />
                    Voltar para receitas
                </Link>
            
                <section className="rounded-lg overflow-hidden shadow-md">
                    {/* Imagem de capa da receita */}
                    <div className="relative h-96 w-full">
                        <Image 
                        src={recipe.image} 
                        fill 
                        alt={recipe.title} 
                        className="object-cover"
                        />
                    </div>

                    {/* Descrição da receita */}
                    <div className="flex flex-col gap-6 p-6">
                        {/* Título e descrição */}
                        <div>
                            <h1 className="text-3x font-bold">{recipe.title}</h1>
                            <p>{recipe.description}</p>
                        </div>

                        {/* Infos de preparo */}
                        <div className="">
                            {/* TODO: componentes de info*/}
                        </div>

                        <div>
                            {/* Colunas */}
                        </div>
                        <div className="grid grid-cols-2">
                            {/* Coluna dos ingredientes */}
                            <div>
                                <h2 className="text-xl font-bold mb-4">ingredientes</h2>
                                <ul className="list-disc list-inside space-y-2">
                                    {recipe.ingredients.map((ingredient, index) => ( 
                                    <li className="marker: text-orange-500" key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Coluna do modo de preparo */}
                            <div>
                                <h2>Modo de preparo</h2>
                                {/* TODO: componente de passo de preparo */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}