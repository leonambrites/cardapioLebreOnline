
import React from 'react';
import Icon from './Icon';

interface ImageModalProps {
  isOpen: boolean;
  imageUrl: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, imageUrl, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-[200] flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <style>{`
        @keyframes zoom-in {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
      <div
        className="relative max-w-3xl max-h-[90vh] rounded-lg overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
        style={{ animation: 'zoom-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards' }}
      >
        <img src={imageUrl} alt="Enlarged view" className="w-full h-auto object-contain max-h-[90vh]" />
        <button
          onClick={onClose}
          aria-label="Fechar imagem"
          className="absolute top-4 right-4 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 transition-colors"
        >
          <Icon name="close" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
