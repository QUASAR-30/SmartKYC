export default function Home() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold">SmartKYC</h1>
      <p className="mt-2 text-gray-600">
        Vérifiez la crédibilité d’une entreprise en quelques minutes.
      </p>

      <a
        href="/verify"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Commencer la Vérification
      </a>
    </div>
  );
}
