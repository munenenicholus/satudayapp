import React from "react";

function Card(props) {
  const cardData = [
    {
      title: "Card 1 title",
      content: "Content for Card 1",
      button: "Read more",
      bgColor: "orange",
    },
    {
      title: "Card 2 title",
      content: "Content for Card 2",
      button: "Discounted price",
      bgColor: "lightblue",
    },
    {
      title: "Card 3 title",
      content: "Content for Card 3",
      button: "Discounted price",
      bgColor: "gray",
    },
  ];

  const cardContainerStyle = {
    display: "flex", // Apply flexbox to the parent container
    flexWrap: "wrap", // Allow cards to wrap to the next row
    justifyContent: "space-between", // Adjust the spacing between cards
  };

  const cardStyle = {
    width: "18rem",
    margin: "10px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  };

  const cardTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
  };

  const cardTextStyle = {
    fontSize: "1rem",
  };

  const cardButtonStyle = {
    textDecoration: "none",
    color: "blue",
    fontWeight: "bold",
  };

  return (
    <div className="cards-container" style={cardContainerStyle}>
      {cardData.map((card, index) => (
        <div className="card" style={{ ...cardStyle, backgroundColor: card.bgColor }} key={index}>
          <div className="card-body">
            <h5 className="card-title" style={cardTitleStyle}>
              {card.title}
            </h5>
            <p className="card-text" style={cardTextStyle}>
              {card.content}
            </p>
          </div>
          <div className="card-body">
            <a href="#" className="card-link" style={cardButtonStyle}>
              {card.button}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
