function Modal({handleShowHeroModal}) {
    return (
      <div className="fixed inset-0 z-40 flex items-center justify-center min-h-screen" onClick={handleShowHeroModal}>
        <div className="fixed inset-0 bg-black opacity-35"></div>
        <div className="bg-white p-0 md:p-6 z-10 w-full max-w-3xl mx-auto">
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <iframe
              title="Video"
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/3h0_v1cdUIA"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
  
  export default Modal;
  