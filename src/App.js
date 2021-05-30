import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/food.jpg"; // Tell webpack this JS file uses this image

function App() {
  const recipeAuthor = "Kodluyoruz";
  const recipeItem = {
    title: "Musakka",
    date: "28 Mayıs 2021 Cuma",
    image: "https://cdn.yemek.com/mncrop/940/625/uploads/2015/01/patlican-musakka-yemekcom.jpg",
    description:
      "Türk mutfağının belli başlı sebze yemeklerinden biridir. Aynı zamanda birçok Orta Doğu ve Balkan ülkelerinin mutfaklarında da yer almaktadır. Birkaç hazırlanış türü bulunmaktadır; patlıcan musakka, kabak musakka, karnabahar musakka ve patates musakka gibi.",
  };

  const likeCount = 193;
  const isLiked = false;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          /* prop ismi = { değişken } */
          author={recipeAuthor}
          author={recipeAuthor}
          title={recipeItem.title}
          date={recipeItem.date}
          image={recipeItem.image}
          description={recipeItem.description}
          likeCount={likeCount}
          isLiked={isLiked}
        />
      </header>
    </div>
  );
}

export default App;
