
const ArticleLoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-[#2b1a5a] via-[#3b1f7a] to-[#1f1b4d]">
      
      <div className="text-center space-y-6">
        
        {/* Logo / Brand */}
        <h1 className="text-4xl font-bold text-white tracking-wide">
          <span className="bg-linear-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Code</span>Byte
        </h1>

        {/* Loading animation */}
        <div className="flex justify-center gap-2">
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
        </div>

        {/* Text */}
        <p className="text-gray-300 text-sm tracking-wide">
          Loading content...
        </p>

      </div>
    </div>
  )
}

export default ArticleLoadingScreen
