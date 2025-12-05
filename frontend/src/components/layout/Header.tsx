import React, { useState, useEffect } from "react";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, read: false, message: 'Nouveau message reçu de Jean Dupont' },
    { id: 2, read: true, message: 'Votre document a été approuvé' },
    { id: 3, read: false, message: 'Réunion programmée à 15h' },
  ]);

  // Calculer le nombre de notifications non lues
  const unreadCount = notifications.filter(notif => !notif.read).length;

  const handleClick = () => {
    if (!showModal) {
      // Simuler le chargement seulement si on ouvre le modal
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
    setShowModal(prev => !prev);
  };

  // Fermer le modal quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (showModal && !event.target.closest('.notification-container')) {
        setShowModal(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showModal]);

  // Marquer toutes les notifications comme lues
  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  return (
    <div className="w-full h-30 border-b bg-white border-gray-200 fixed flex justify-between items-center px-3 md:px-6 lg:px-8 z-40">
      {/* Logo - responsive */}
      <div className="flex-shrink-0">
        <img
          src="/Logo.png"
          alt="SmartKYC App"
          className="w-28 md:w-32 lg:w-40 h-10 md:h-12 lg:h-14 object-contain"
          style={{height: "90px"}}
        />
      </div>
      
      {/* Conteneur des icônes - responsive */}
      <div className="flex items-center space-x-3 md:space-x-4 lg:space-x-6">
        {/* Notification */}
        <div className="notification-container relative">
          <button 
            onClick={handleClick}
            className="relative p-1 md:p-1.5 hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Notifications"
          >
            {/* Badge du nombre de messages non lus */}
            {unreadCount > 0 && (
              <div className="absolute -top-2 -right-0 md:-top-2 md:-right-2 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 md:h-5 md:w-5 flex items-center justify-center">
                <span className="text-xs md:text-xs">{unreadCount > 9 ? '9+' : unreadCount}</span>
              </div>
            )}
            
            {/* Icône de cloche - taille responsive */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 md:h-6 md:w-6 text-gray-700" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
              />
            </svg>
          </button>
          
          {/* Modal des notifications - responsive */}
          {showModal && (
           <div className="absolute right-0 mt-2 w-72 sm:w-80 md:w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
  {/* Header du modal */}
  <div className="p-3 md:p-4 border-b border-gray-100 flex justify-between items-center">
    <h3 className="font-semibold text-gray-800 text-sm md:text-base">Notifications</h3>
    <div className="flex items-center space-x-2 sm:space-x-3">
      {notifications.length > 0 && (
        <>
          {/* Compteur de notifications non lues - visible sur tous les écrans */}
          <span className="text-xs text-gray-500">
            {unreadCount} non lu{unreadCount > 1 ? 's' : ''}
          </span>
          {/* Séparateur visible seulement sur mobile */}
          <span className="text-gray-300 sm:hidden">|</span>
        </>
      )}
      {unreadCount > 0 && (
        <button 
          onClick={markAllAsRead}
          className="text-xs text-blue-600 hover:text-blue-800 font-medium px-1 sm:px-0"
        >
          Tout lire
        </button>
      )}
    </div>
  </div>

  {/* Liste des notifications */}
  <div className="max-h-60 xs:max-h-64 sm:max-h-72 md:max-h-80 lg:max-h-96 overflow-y-auto">
    {loading ? (
      // Skeleton loader - responsive
      [...Array(3)].map((_, index) => (
        <div key={index} className="p-3 md:p-4 border-b border-gray-100">
          <div className="animate-pulse flex items-center space-x-2 md:space-x-3">
            {/* Avatar skeleton */}
            <div className="rounded-full bg-gray-200 h-6 w-6 xs:h-8 xs:w-8 md:h-10 md:w-10 flex-shrink-0"></div>
            {/* Contenu skeleton */}
            <div className="flex-1 space-y-1.5 md:space-y-2">
              <div className="h-3 xs:h-3.5 md:h-4 bg-gray-200 rounded w-full xs:w-3/4"></div>
              <div className="h-2 xs:h-2.5 md:h-3 bg-gray-200 rounded w-1/3 xs:w-1/4"></div>
            </div>
          </div>
        </div>
      ))
    ) : notifications.length > 0 ? (
      // Liste des notifications - responsive
      notifications.map(notification => (
        <div
          key={notification.id}
          className={`p-3 md:p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150 ${
            !notification.read ? 'bg-blue-50/50' : ''
          }`}
        >
          <div className="flex items-start space-x-2 md:space-x-3">
            {/* Icône de notification */}
            <div className={`flex-shrink-0 h-6 w-6 xs:h-8 xs:w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center ${
              !notification.read ? 'bg-blue-100' : 'bg-gray-100'
            }`}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-3 w-3 xs:h-4 xs:w-4 md:h-5 md:w-5 ${
                  !notification.read ? 'text-blue-600' : 'text-gray-400'
                }`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
                />
              </svg>
            </div>
            
            {/* Contenu de la notification */}
            <div className="flex-1 min-w-0">
              <p className="text-xs xs:text-sm md:text-sm text-gray-800 break-words leading-relaxed">
                {notification.message}
              </p>
              {!notification.read && (
                <div className="flex items-center space-x-2 mt-1 xs:mt-1.5 md:mt-2">
                  <span className="inline-block h-1.5 w-1.5 xs:h-2 xs:w-2 bg-blue-500 rounded-full"></span>
                  <span className="text-xs text-blue-600 font-medium">Non lu</span>
                </div>
              )}
            </div>
            
            {/* Option de suppression (mobile seulement) */}
            <button className="text-gray-400 hover:text-red-500 md:hidden flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Timestamp (desktop seulement) */}
          <div className="mt-1 text-xs text-gray-500 hidden md:block">
            Il y a 2 min
          </div>
        </div>
      ))
    ) : (
      // État vide - responsive
      <div className="p-4 xs:p-6 md:p-8 text-center">
        <div className="mx-auto w-12 h-12 xs:w-16 xs:h-16 md:w-20 md:h-20 flex items-center justify-center bg-gray-100 rounded-full mb-3 xs:mb-4 md:mb-6">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 xs:h-8 xs:w-8 md:h-10 md:w-10 text-gray-400" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1} 
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
            />
          </svg>
        </div>
        <p className="text-gray-700 text-sm xs:text-base md:text-lg font-medium mb-1">
          Aucune notification
        </p>
        <p className="text-gray-500 text-xs xs:text-sm md:text-base">
          Vous êtes à jour
        </p>
        <p className="text-gray-400 text-xs mt-2 hidden xs:block">
          Vous serez notifié ici des nouvelles activités
        </p>
      </div>
    )}
  </div>

  {/* Footer du modal */}
  {notifications.length > 0 && (
    <div className="p-2 xs:p-3 border-t border-gray-100 bg-gray-50/50">
      <button className="w-full text-center text-blue-600 hover:text-blue-800 font-medium text-xs xs:text-sm py-1.5 xs:py-2 rounded-md hover:bg-blue-50 transition-colors duration-150">
        <span className="flex items-center justify-center space-x-1">
          <span>Voir toutes les notifications</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 xs:h-4 xs:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </button>
    </div>
  )}
</div>
          )}
        </div>

        {/* Photo de profil - responsive */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-yellow-600 to-black rounded-full flex items-center justify-center text-white font-semibold text-sm md:text-base">
            JD
          </div>
          {/* Nom caché sur mobile, visible sur tablette et desktop */}
          <div className="hidden sm:flex space-x-1">
            <p className="font-semibold text-gray-800 text-sm md:text-base">Jean</p>
            <p className="text-gray-500 text-sm md:text-base">Tagne</p>
          </div>
          {/* Version mobile - seulement initiales si espace limité */}
          <div className="sm:hidden">
            <p className="font-semibold text-gray-800 text-sm">J. Tagne</p>
          </div>
        </div>
      </div>
    </div>
  );
}