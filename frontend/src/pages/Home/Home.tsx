export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* --- HERO SECTION --- */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-24">
        
        {/* LEFT TEXT CONTENT */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-yellow-600 text-4xl font-semibold tracking-wide">
            Bienvenue sur SmartKYC
          </h2>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mt-3 text-gray-900">
            Analysez, Vérifiez et  
            <br />
            Renforcez la Confiance  
            <span className="text-yellow-600"> de Vos Clients</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Votre solution intelligente pour évaluer automatiquement la crédibilité 
            des entreprises, détecter les fraudes, analyser les documents et sécuriser 
            vos prises de décision.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="/verify"
              className="bg-yellow-600 text-white px-6 py-3 rounded-md font-medium shadow-md hover:bg-green-700 transition"
            >
              Commencer →
            </a>

            <a
              href="/explore"
              className="bg-white border border-yellow-600 text-yellow-600 px-6 py-3 rounded-md font-medium hover:bg-black transition"
            >
              En savoir plus
            </a>
          </div>
        </div>

        {/* IMAGE ON THE RIGHT */}
        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <img 
            src="/Logo.png" 
            alt="SmartKYC App" 
            className="w-64 md:w-80 lg:w-96 "
          />
        </div>

      </section>

      {/* --- FEATURE CARDS SECTION --- */}
      <section className="px-6 md:px-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="p-6 rounded-xl border border-yellow-600 shadow-lg bg-white hover:shadow-2xl transition">
            <h3 className="font-bold text-xl mb-2">Analyse Automatique</h3>
            <p className="text-gray-600">
              Analyse intelligente des documents KYC, extraction des données et vérification 
              instantanée de leur authenticité.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-6 rounded-xl border border-yellow-600 shadow-lg bg-white hover:shadow-2xl transition">
            <h3 className="font-bold text-xl mb-2">Scoring de Crédibilité</h3>
            <p className="text-gray-600">
              Générez un score basé sur les données financières, historiques de transactions 
              et comportements commerciaux.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-6 rounded-xl border border-yellow-600 shadow-lg bg-white hover:shadow-2xl transition">
            <h3 className="font-bold text-xl mb-2">Détection de Fraude</h3>
            <p className="text-gray-600">
              Systèmes avancés pour signaler automatiquement les anomalies, modifications 
              suspectes et risques potentiels.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
