const SpotifyApp = () => {
  return (
    <div className="h-full bg-black">
      <iframe
        src="https://open.spotify.com/embed/playlist/1FoxaGGHw1A2TVOXiraVzo?utm_source=generator"
        width="100%"
        height="100%"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
        title="Spotify Player"
        style={{ borderRadius: 0 }} // Remove border-radius for square corners
      ></iframe>
    </div>
  )
}

export default SpotifyApp
