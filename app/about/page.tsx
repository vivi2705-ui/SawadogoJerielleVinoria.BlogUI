"use client"
import Link from "next/link";
import Navbar2 from "@/component/Navbar2";

const AboutPage = () => {
  return (
    <div>
      <Navbar2/>
      <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div
        className="hero min-h-[40vh]"
        style={{
          backgroundImage:
            "url(https://cdn.shopify.com/s/files/1/2509/9970/files/top-meilleurs-anime-2020.png?v=1609099552)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold mb-4">À Propos</h1>
            <p className="text-lg">Bienvenue dans l'univers otaku 🎌</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {/* Who we are */}
        <section className="flex flex-col md:flex-row gap-8 items-center">
          <div className="text-6xl">⛩️</div>
          <div>
            <h2 className="text-3xl font-bold mb-3">Qui sommes-nous ?</h2>
            <p className="text-base-content/70 leading-relaxed">
              Nous sommes une communauté passionnée par la culture japonaise sous toutes ses formes.
              Mangas, animés, cosplay, figurines… notre mission est de partager notre amour pour
              cet univers unique avec tous les fans, débutants comme confirmés.
            </p>
          </div>
        </section>

        <div className="divider"></div>

        {/* What we offer */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Ce que nous proposons</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="card bg-base-200 shadow-md">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-2">📚</div>
                <h3 className="card-title">Mangas</h3>
                <p className="text-base-content/70 text-sm">
                  Découvrez nos articles sur les shonen, shojo, seinen et bien plus encore.
                </p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-md">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-2">🎬</div>
                <h3 className="card-title">Animés</h3>
                <p className="text-base-content/70 text-sm">
                  Suivez les nouveautés des saisons en cours et nos tops des meilleurs animés.
                </p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-md">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-2">🎭</div>
                <h3 className="card-title">Culture Otaku</h3>
                <p className="text-base-content/70 text-sm">
                  Cosplay, figurines, événements… tout ce qui fait vibrer la communauté.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        {/* Our values */}
        <section className="flex flex-col md:flex-row gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-3">Nos valeurs</h2>
            <p className="text-base-content/70 leading-relaxed">
              Nous croyons en une communauté bienveillante, inclusive et passionnée. Que tu sois
              un otaku de longue date ou que tu découvres tout juste cet univers, tu as ta place ici.
              Partage, échange, et célèbre avec nous la richesse de la culture japonaise.
            </p>
          </div>
          <div className="text-6xl">🌸</div>
        </section>

        <div className="divider"></div>

        {/* Contact */}
        <section id="contact">
  <h2 className="text-3xl font-bold mb-8 text-center">Nous contacter</h2>
  <div className="flex flex-col md:flex-row bg-base-200 rounded-2xl shadow-md overflow-hidden max-w-4xl mx-auto">

    {/* Image Side */}
    <div className="hidden md:block md:w-1/2 relative">
      <img
        src="https://www.manga-world.fr/wp-content/uploads/2016/02/manga-world-mix.jpeg"
        alt="Manga histoire"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-secondary/30 flex flex-col items-center justify-center text-white p-8">
        <span className="text-5xl mb-3">🌸</span>
        <p className="text-xl text-white/80 font-bold text-center">On est à ton écoute !</p>
        
      </div>
    </div>

    {/* Form Side */}
    <div className="w-full md:w-1/2 p-8 flex flex-col gap-4">
      <div>
        <label className="label"><span className="label-text font-semibold">Nom</span></label>
        <input type="text" placeholder="Ton nom" className="input input-bordered w-full" />
      </div>
      <div>
        <label className="label"><span className="label-text font-semibold">Email</span></label>
        <input type="email" placeholder="ton@email.com" className="input input-bordered w-full" />
      </div>
      <div>
        <label className="label"><span className="label-text font-semibold">Message</span></label>
        <textarea
          className="textarea textarea-bordered w-full h-32"
          placeholder="Ton message..."
        />
      </div>
      <button
        className="btn btn-primary w-full"
        onClick={() => alert("Votre avis a bien été pris en compte! ")}
      >
        Envoyer ✉️
      </button>
    </div>
  </div>
</section>

        {/* Back to home */}
        <div className="text-center pt-4">
          <Link href="/Accueil" className="btn btn-ghost">
            ← Retour à l'accueil
          </Link>
        </div>

      </div>
    </div>

    </div>
    
  );
};

export default AboutPage;