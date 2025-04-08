"use client"

export default function Header(props) {
    const nombreTachesComplétées = props.nombreTachesComplétées;
    return (
        <header className="bg-gradient-to-r from-blue-900 to-indigo-900 py-8 relative overflow-hidden">
            {/* Effets lumineux d'arrière-plan */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-500/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
            </div>
            <div className="container mx-auto px-4 relative">
                <h1 className="text-4xl font-bold text-white text-center tracking-wide animate-glow mb-4">
                    To Do List
                </h1>
                <div className="flex justify-center">
                    <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full 
                        border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300
                        hover:scale-105 hover:shadow-blue-500/20">
                        <p className="text-xl font-semibold text-white tracking-wide animate-glow">
                            {nombreTachesComplétées} {nombreTachesComplétées <= 1 ? 'tâche complétée' : 'tâches complétées'}
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
} 