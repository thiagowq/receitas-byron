import { ChevronRight } from "lucide-react";
import Link from "next/link";
import {recipes} from "@/lib/data";
import RecipeCard from "@/components/ReceipeCard";

export default function Home() {

  const featureRecipes = recipes.slice(0, 3);

  return (
    <main className="flex-grow">

        {/* seção hero */}  
        <section className="bg-orange-50 py-12">
          <div className="container mx-auto flex flex-col gap-6 items-center">
            <h1 className="text-5xl font-bold">Receitas Deliciosas</h1>
            <p className="text-xl">Descubra receitas simples e deliciosas para todas as ocasiões</p>

            <Link className="bg-orange-500 hover:bg-orange-700 transition-colors text-white font-bold rounded-lg px-3 py-2" href="/receitas">
              Ver todas as receitas
            </Link>
          </div> 
        </section>

        {/* seção receitas em destaque */}
        <section className="py-12">
          <div className="flex flex-col items-center container mx-auto gap-8">
            <h2 className="text-lg font-bold">Receitas em destaque</h2>

            <div className="flex w-full gap-8">
              {featureRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>

            <Link className="flex text-orange-400 hover:text-orange-700 transition-colors " href="/receitas">
              Ver todas as receitas
              <ChevronRight />
            </Link>
          </div>
        </section>
    </main>
  );
}
