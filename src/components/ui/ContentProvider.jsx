const ContentProvider = ({ children }) => {
  return (
    <div
      className={`min-h-screen transition-colors
      bg-primary-bg text-primary-text duration-300
      dark:bg-black dark:text-white
    `}
    >
      {children}
    </div>
  )
}

export default ContentProvider
