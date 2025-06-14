import React from "react";

function MapSec() {
  return (
    <div className="w-full h-[600px] mt-32">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d65566.00781879642!2d31.251190199999996!3d30.018764799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2seg!4v1749935356042!5m2!1sar!2seg"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg shadow-md"
      ></iframe>
    </div>
  );
}

export default MapSec;
