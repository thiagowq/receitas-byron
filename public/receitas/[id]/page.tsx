import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ReceitaPage() {
    return (
        <main className="flex-grow py-8">
            <div className="container mx-auto">
                <Link className="flex text-orange-500 hover:text-orange-700" href="receitas">
                    <ChevronLeft />
                    Voltar para receitas
                </Link>
            

                <section>
                    {/* Imagem de capa da receita */}
                    <div className="relative h-96 w-full">
                        <Image 
                        src="" 
                        fill 
                        alt="Titulo da receita" />
                    </div>

                    {/* Descrição da receita */}
                    <div>
                        <h1>Título da Receita</h1>
                        <p>Descrição</p>

                        {/* Infos de preparo */}
                        <div>
                            {/* TODO: componentes de info*/}
                        </div>

                        <div>
                            {/* Colunas */}
                        </div>
                        <div>
                            {/* Coluna dos ingredientes */}
                            <div>

                            </div>

                            {/* Coluna do preparo */}
                            <div>
                                {/* TODO: componente de passo de preparo */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}