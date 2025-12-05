export default function Step1() {
  return (
    <div className="p-8 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold">Informations de l'entreprise</h2>

      <form className="mt-6 space-y-4">
        <input
          type="text"
          className="w-full border p-3 rounded"
          placeholder="RCCM"
        />

        <input
          type="text"
          className="w-full border p-3 rounded"
          placeholder="Nom de l'entreprise"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Suivant →
        </button>
      </form>
    </div>
  );
}
