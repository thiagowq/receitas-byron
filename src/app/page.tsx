import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-grow">

        {/* Seção Hero */}  
        <section className="bg-orange-50 py-10">
          <div className="container mx-auto flex flex-col gap-4 items-center">
            <h1 className="text-5xl font-bold">Receitas Deliciosas</h1>
            <p className="text-xl">Descubra receitas simples e deliciosas para todas as ocasiões</p>

            <Link className="bg-orange-500 text-white font-bold rounded-lg px-3 py-2" href="/receitas">
              Ver todas as receitas
            </Link>
          </div> 
        </section>
    </main>
  );
}
