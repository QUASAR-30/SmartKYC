// src/components/DocumentStatusTable.tsx
interface Document {
  name: string;
  status: 'validé' | 'en cours' | 'rejeté';
  lastUpdated: string;
  action: string;
  comment?: string;
}

const DocumentStatusTable: React.FC = () => {
  const documents: Document[] = [
    { name: 'RCCM', status: 'validé', lastUpdated: 'il y a 2 jours', action: 'Voir' },
    { name: 'NIF', status: 'en cours', lastUpdated: 'Soumis aujourd’hui', action: 'Suivre' },
    { name: 'CNI Gérant', status: 'rejeté', lastUpdated: 'Commentaire admin : photo floue', action: 'Re-soumettre', comment: 'photo floue' },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
      <h3 className="text-lg font-semibold mb-4">État des Documents</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dernière mise à jour</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {documents.map((doc, idx) => (
              <tr key={idx}>
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{doc.name}</td>
                <td className="px-4 py-3 text-sm">
                  {doc.status === 'validé' && <span className="text-green-500">✔ Validé</span>}
                  {doc.status === 'en cours' && <span className="text-yellow-500">⏳ En cours</span>}
                  {doc.status === 'rejeté' && <span className="text-red-500">❌ Rejeté</span>}
                </td>
                <td className="px-4 py-3 text-sm text-gray-500">{doc.lastUpdated}</td>
                <td className="px-4 py-3 text-sm">
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    {doc.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentStatusTable;