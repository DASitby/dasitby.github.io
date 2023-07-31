export default function Window({ isVisible, handleHideWindow, name, text }) {
  // Use isVisible prop to control the visibility of the window
  return isVisible ? (
    <div className="window-overlay">
      <div className="window-content">
        {/* Add your window content here */}
        <h1>{name}</h1>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          {text}
        </p>
        <button onClick={handleHideWindow}>Close Window</button>
      </div>
    </div>
  ) : null;
}