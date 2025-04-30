// Import necessary modules and types
import type { Flashcard } from "../types"; 

// Define the Props interface
interface Props {
  card: Flashcard; // The flashcard data object to display
  showBack: boolean; // A flag indicating whether to show the back side or '???'
}

function FlashcardDisplay({ card, showBack }: Props) {
  return (
    <div className="flashcard">
      {/* Front of the card */}
      <div className="flashcard-front">{card.front}</div>
      
      {/* Divider line */}
      <div className="flashcard-divider"></div>
      
      {/* Back of card (shown conditionally) */}
      <div className={`flashcard-back ${!showBack ? 'flashcard-hidden' : ''}`}>
        {showBack ? card.back : "???"}
      </div>
      
      {/* Display tags if available */}
      {card.tags && card.tags.length > 0 && (
        <div className="flashcard-tags">
          {card.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default FlashcardDisplay;