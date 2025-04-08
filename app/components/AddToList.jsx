"use client"

export default function AddToList(props) {
    function handleform(e) {
        e.preventDefault();
        props.setTaches(e.target.text.value);
        e.target.reset();
    }

    return (
        <div className="bg-gray-50/80 py-8 relative overflow-hidden">
            {/* Effet de lumière radiale */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-[600px] h-[200px] bg-gradient-to-r from-blue-500/10 to-violet-500/10 
                    rounded-full blur-[80px] animate-pulse"></div>
            </div>
            <form onSubmit={handleform} className="container mx-auto px-4 max-w-2xl relative">
                <div className="bg-white/90 backdrop-blur rounded-lg p-6
                    transition-all duration-300 
                    hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                    <h2 className="text-2xl font-semibold mb-4 
                        bg-clip-text text-transparent bg-gradient-to-r 
                        from-blue-600 to-violet-600 animate-gradient">
                        Nouvelle tâche
                    </h2>
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            id="new-todo-input"
                            name="text"
                            autoComplete="off"
                            className="flex-1 p-3 border border-blue-300 rounded-lg 
                            transition-all duration-300 text-black
                            focus:ring-2 focus:ring-blue-500 focus:border-transparent
                            hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]
                            placeholder-blue-300"
                            placeholder="Entrez une nouvelle tâche..."
                        />
                        <button
                            type="submit"
                            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 
                            text-white font-semibold rounded-lg 
                            transition-all duration-300
                            hover:from-blue-700 hover:to-violet-700 
                            hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]
                            active:transform active:scale-95"
                        >
                            Ajouter
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
} 