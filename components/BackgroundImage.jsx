const BackgroundImage = ({ wallpaperUrl }) => {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center blur-sm brightness-80 transition-all duration-300 scale-105"
      style={{ backgroundImage: `url(${wallpaperUrl})`, filter: 'blur(4px) brightness(0.8)' }}
    />
  )
}

export default BackgroundImage