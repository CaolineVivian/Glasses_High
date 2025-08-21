import React from "react";

export default function InfoBox({ title, text, buttons = [], link }) {
  return (
    <div className="col-12 col-md-4 info-box text-start">
      <h5><strong>{title}</strong></h5>

      {/* Optional buttons */}
      {buttons.length > 0 && (
        <div className="mb-2">
          {buttons.map((btn, idx) => (
            <button
              key={idx}
              className="btn btn-sm btn-custom me-2"
              onClick={btn.onClick}
            >
              {btn.label}
            </button>
          ))}
        </div>
      )}

      <p>{text}</p>

      {/* Optional link */}
      {link && (
        <a href={link.href} className="btn btn-custom mt-2">
          {link.label}
        </a>
      )}
    </div>
  );
}
