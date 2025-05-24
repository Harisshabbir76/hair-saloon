import React from 'react'

export default function Location() {
  return (
    <div>
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 mb-16 h-96">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215209132576!2d-73.98784492452562!3d40.74844047138969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjQiTiA3M8KwNTknMTEuNiJX!5e0!3m2!1sen!2sus!4v1623862347218!5m2!1sen!2sus" 
                        width="100%" 
                        height="140%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy"
                        className="rounded-lg"
                    ></iframe>
                </div>
    </div>
  )
}
