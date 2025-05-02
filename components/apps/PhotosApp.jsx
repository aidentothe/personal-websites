"use client"

import { useState, useRef } from "react"
import { ChevronRight, Search, ZoomIn, ZoomOut, Plus } from "lucide-react"

const PhotosApp = () => {
  const [photos, setPhotos] = useState([
    { id: 1, src: "/placeholder.svg?height=200&width=300" },
    { id: 2, src: "/placeholder.svg?height=200&width=200" },
    { id: 3, src: "/placeholder.svg?height=200&width=300" },
    { id: 4, src: "/placeholder.svg?height=200&width=300" },
    { id: 5, src: "/placeholder.svg?height=200&width=200" },
    { id: 6, src: "/placeholder.svg?height=200&width=200" },
    { id: 7, src: "/placeholder.svg?height=200&width=300" },
    { id: 8, src: "/placeholder.svg?height=200&width=300" },
    { id: 9, src: "/placeholder.svg?height=200&width=200" },
    { id: 10, src: "/placeholder.svg?height=200&width=200" },
    { id: 11, src: "/placeholder.svg?height=200&width=300" },
    { id: 12, src: "/placeholder.svg?height=200&width=300" },
  ])
  const fileInputRef = useRef(null)

  const handleUpload = (e) => {
    const files = Array.from(e.target.files)
    const newPhotos = files.map((file, index) => {
      const url = URL.createObjectURL(file)
      return {
        id: photos.length + index + 1,
        src: url,
      }
    })
    setPhotos([...newPhotos, ...photos])
  }

  const triggerFileInput = () => {
    fileInputRef.current.click()
  }

  return (
    <div className="h-full bg-gray-900 text-white overflow-hidden p-4">
      {/* Photos grid only */}
      <div className="grid grid-cols-4 gap-2 h-full overflow-auto">
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.src}
            alt={`Photo ${photo.id}`}
            className="w-full h-40 object-cover rounded"
          />
        ))}
      </div>

      {/* Floating upload button */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleUpload}
        className="hidden"
        multiple
        accept="image/*,video/*"
      />
      <button
        onClick={triggerFileInput}
        className="absolute bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        <Plus size={24} />
      </button>
    </div>
  )
}

export default PhotosApp
