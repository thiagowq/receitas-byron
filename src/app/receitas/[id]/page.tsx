import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { recipes } from "@/lib/data";
import InfoPill from "@/components/InfoPill/inde";
import PreparationStep from "@/components/PreparatoinStep";

interface RecipePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ReceitaPage({ params }: RecipePageProps) {
  const { id } = await params;

  const recipe = recipes.find((recipe) => recipe.id === id);

  if (!recipe) {
    return notFound();
  }

  return (
    <main className="py-8">
      <div className="container mx-auto">
        <Link
          className="flex text-orange-500 hover:text-orange-700 mb-6"
          href="/receitas"
        >
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
            <div className="flex gap-4">
              <InfoPill title="Preparo" info={recipe.prepTime} />
              <InfoPill title="Cozimento" info={recipe.cookTime} />
              <InfoPill title="Porções" info={recipe.servings} />
              <InfoPill title="Categoria" info={recipe.category} />
            </div>

            <div>{/* Colunas */}</div>
            <div className="grid grid-cols-2">
              {/* Coluna dos ingredientes */}
              <div>
                <h2 className="text-xl font-bold mb-4">ingredientes</h2>
                <ul className="list-disc list-inside space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li
                      key={ingredient}
                      className="marker: text-orange-500 text-black"
                    >
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coluna do modo de preparo */}
              <div>
                <h2>Modo de preparo</h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <PreparationStep
                      key={instruction}
                      index={index + 1}
                      description={instruction}
                    />
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
