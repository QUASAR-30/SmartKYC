
// const TrustBadgeSection: React.FC = () => {
//   const badgeUrl = 'smartkyc.com/marchand/kouassi88';

//   return (
//     <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
//       <h3 className="text-lg font-semibold mb-4">Badge de Confiance</h3>
//       <div className="flex flex-col md:flex-row items-center gap-6">
//         <div className="bg-yellow-50 p-4 rounded-lg">
//           <div className="text-3xl font-bold text-yellow-800">🏆 GOLD</div>
//         </div>
//         <div className="flex flex-col items-center">
//           <QRCode value={badgeUrl} size={100} />
//           <p className="mt-2 text-xs text-gray-500">Scannez pour voir le profil public</p>
//         </div>
//         <div className="flex-1">
//           <p className="text-sm text-gray-600 mb-2">Lien partageable :</p>
//           <div className="flex">
//             <input
//               type="text"
//               value={badgeUrl}
//               readOnly
//               className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md text-sm"
//             />
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md text-sm hover:bg-blue-700">
//               Copier
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="mt-4">
//         <a href={badgeUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
//           ➡️ Aperçu public du profil
//         </a>
//       </div>
//     </div>
//   );
// };

// export default TrustBadgeSection;