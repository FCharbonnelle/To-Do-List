"use client"

import { useState } from "react";

export default function List(props) {
    const [editingTask, setEditingTask] = useState(null);
    const [editText, setEditText] = useState("");

    const playCheckSound = () => {
        const audio = new Audio('/Check.mp3');
        audio.play();
    };

    const playUncheckSound = () => {
        const audio = new Audio('/Uncheck.mp3');
        audio.play();
    };

    // Séparation des tâches actives et complétées
    const tachesActives = props.taches.filter(tache => !tache.coche);
    const tachesComplétées = props.taches.filter(tache => tache.coche);

    // Fonction pour rendre une tâche (utilisée pour les deux listes)
    const renderTache = (tache) => (
        <li key={tache.nom}
            className="bg-white/90 backdrop-blur rounded-lg p-4 
            flex items-center justify-between 
            transition-all duration-300 
            hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] 
            hover:-translate-y-0.5 
            hover:bg-gradient-to-r hover:from-white hover:to-blue-50">
            <div className="flex items-center space-x-4 flex-1">
                <input
                    type="checkbox"
                    checked={tache.coche}
                    onChange={() => {
                        tache.coche ? playUncheckSound() : playCheckSound();
                        props.onToggle(tache.nom);
                    }}
                    className="w-5 h-5 rounded border-blue-500 text-blue-600 
                    focus:ring-blue-500 transition-shadow
                    hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                />
                {editingTask === tache.nom ? (
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                props.onEdit(tache.nom, editText);
                                setEditingTask(null);
                            }
                            if (e.key === "Escape") {
                                setEditingTask(null);
                            }
                        }}
                        className="flex-1 p-2 border border-blue-300 rounded 
                        focus:ring-2 focus:ring-blue-500 focus:border-transparent
                        shadow-[0_0_10px_rgba(59,130,246,0.1)]
                        transition-all duration-300 text-black"
                        autoFocus
                    />
                ) : (
                    <span className={`flex-1 text-lg transition-all duration-300 
                        ${tache.coche ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                        {tache.nom}
                    </span>
                )}
            </div>
            <div className="flex space-x-2">
                {!editingTask && !tache.coche && (
                    <button
                        onClick={() => {
                            setEditingTask(tache.nom);
                            setEditText(tache.nom);
                        }}
                        className="px-4 py-2 bg-blue-600 text-white rounded 
                        transition-all duration-300
                        hover:bg-blue-700 
                        hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]
                        active:transform active:scale-95"
                    >
                        Modifier
                    </button>
                )}
                <button
                    onClick={() => props.onDelete(tache.nom)}
                    className="px-4 py-2 bg-red-600 text-white rounded 
                    transition-all duration-300
                    hover:bg-red-700 
                    hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]
                    active:transform active:scale-95"
                >
                    Supprimer
                </button>
            </div>
        </li>
    );

    return (
        <div className="container mx-auto px-4 py-8 relative">
            {/* Effet de gradient animé */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-violet-500/5 animate-gradient"></div>
            
            {/* Section des tâches actives */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 
                    bg-clip-text text-transparent bg-gradient-to-r 
                    from-blue-600 to-violet-600 animate-gradient">
                    Tâches à faire
                </h2>
                {tachesActives.length > 0 ? (
                    <ul className="space-y-4 relative">
                        {tachesActives.map(renderTache)}
                    </ul>
                ) : (
                    <p className="text-gray-500 italic">Aucune tâche à faire. Bravo !</p>
                )}
            </div>
            
            {/* Section des tâches complétées */}
            {tachesComplétées.length > 0 && (
                <div className="mt-12 pt-8 border-t border-blue-200/30">
                    <h2 className="text-2xl font-semibold mb-4 
                        bg-clip-text text-transparent bg-gradient-to-r 
                        from-green-600 to-teal-600 animate-gradient">
                        Tâches complétées
                    </h2>
                    <ul className="space-y-4 relative opacity-80">
                        {tachesComplétées.map(renderTache)}
                    </ul>
                </div>
            )}
        </div>
    )
} 