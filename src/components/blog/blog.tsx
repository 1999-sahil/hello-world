function Blog() {
  return (
    <div className="animate-pulse w-full h-[300px] rounded-md bg-neutral-300/50 dark:bg-neutral-900/50 relative overflow-hidden">
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent">
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-2">
        <h2 className="font-semibold font-poppins text-2xl md:text-3xl animate-pulse text-[#111] dark:text-white">
            Coming Soon
        </h2>
        <p className="text-sm font-mono whitespace-nowrap text-neutral-500 dark:text-neutral-400">
            I am working on it. Stay tuned!
        </p>
      </div>
    </div>
  );
}

export default Blog;
