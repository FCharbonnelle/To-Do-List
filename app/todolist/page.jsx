"use client"

import { useState, useEffect } from "react";
import Header from "../components/Header";
import AddToList from "../components/AddToList";
import List from "../components/List";

export default function Todolist() {
    const [taches, setTaches] = useState([]);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            try {
                const savedTaches = localStorage.getItem('todolist-tasks');
                if (savedTaches) {
                    setTaches(JSON.parse(savedTaches));
                }
                setIsInitialized(true);
            } catch (error) {
                console.error('Erreur lors du chargement des tâches:', error);
                setIsInitialized(true);
            }
        }
    }, []);

    useEffect(() => {
        if (!isInitialized) return;

        if (typeof window !== 'undefined') {
            try {
                localStorage.setItem('todolist-tasks', JSON.stringify(taches));
            } catch (error) {
                console.error('Erreur lors de la sauvegarde des tâches:', error);
            }
        }

    }, [taches, isInitialized]);

    function handleAddtaches(tache) {
        setTaches([...taches, { nom: tache, coche: false }]);
    }
    
    function handleEdit(ancienNom, nouveauNom) {
        setTaches(taches.map(tache =>
            tache.nom === ancienNom
                ? { ...tache, nom: nouveauNom }
                : tache
        ));
    }
    
    function handleDelete(nomTache) {
        setTaches(taches.filter(tache => tache.nom !== nomTache));
    }

    function handleToggle(nomTache) {
        setTaches(taches.map(tache =>
            tache.nom === nomTache
                ? { ...tache, coche: !tache.coche }
                : tache
        ));
    }

    const nombreTachesComplétées = taches.filter(tache => tache.coche).length;

    return (
        <div className="min-h-screen bg-gray-100 relative overflow-hidden">
            {/* Effet de particules fluides */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute w-[500px] h-[500px] top-0 -left-48 
                    bg-gradient-to-r from-blue-500/10 to-violet-500/10 
                    rounded-full blur-[100px] mix-blend-multiply 
                    animate-float-slow">
                </div>
                <div className="absolute w-[400px] h-[400px] top-1/4 right-0 
                    bg-gradient-to-l from-indigo-500/10 to-purple-500/10 
                    rounded-full blur-[100px] mix-blend-multiply 
                    animate-float-medium">
                </div>
                <div className="absolute w-[300px] h-[300px] bottom-0 left-1/3 
                    bg-gradient-to-t from-purple-500/10 to-pink-500/10 
                    rounded-full blur-[100px] mix-blend-multiply 
                    animate-float-fast">
                </div>
            </div>

            <Header nombreTachesComplétées={nombreTachesComplétées} />
            <AddToList setTaches={handleAddtaches} />
            <List 
                taches={taches} 
                onToggle={handleToggle} 
                onDelete={handleDelete} 
                onEdit={handleEdit} 
            />
        </div>
    );
}