import "./App.css";
import Card from "./components/Card";
import Byzantine from "./assets/Byzantine.webp";
import Romanesque from "./assets/Romanesque.jpeg";
import Gothic from "./assets/Gothic.jpg";
import Renaissance from "./assets/Renaissance.jpeg";
import Mannerism from "./assets/Mannerism.jpg";
import Baroque from "./assets/Baroque.jpg";
import Rococo from "./assets/Rococo.jpg";
import Classicism from "./assets/Classicism.jpg";
import Romanticism from "./assets/Romanticism.webp";
import Realism from "./assets/Realism.jpg";

function App() {
  return (
    <>
      <h1 className="heading">
        Art Movements<br></br>
        <em>Throughout History</em>
      </h1>
      <div className="card-holder">
        <Card
          name="The Byzantine Era"
          period="330-1453"
          src={Byzantine}
          link="https://artincontext.org/art-periods/#The_Byzantine_Era_330_%E2%80%93_1453_Eastern_Roman_Empire_and_Christianization"
        />
        <Card
          name="The Romanesque Era"
          period="1000-1300"
          src={Romanesque}
          link="https://artincontext.org/art-periods/#The_Romanesque_Period_1000_%E2%80%93_1300_Sharing_Information_Through_Art"
        />
        <Card
          name="The Gothic Era"
          period="1100-1500"
          src={Gothic}
          link="https://artincontext.org/art-periods/#The_Gothic_Era_1100_%E2%80%93_1500_Freedom_and_Fear_Unite"
        />
        <Card
          name="The Renaissance Era"
          period="1420-1520"
          src={Renaissance}
          link="https://artincontext.org/art-periods/#The_Renaissance_Era_1420_%E2%80%93_1520_The_Revival_of_Humanism"
        />
        <Card
          name="Mannerism"
          period="1520-1600"
          src={Mannerism}
          link="https://artincontext.org/art-periods/#Mannerism_1520_%E2%80%93_1600_A_Window_into_the_Future_of_Kitsch"
        />
        <Card
          name="The Baroque Period"
          period="1590-1760"
          src={Baroque}
          link="https://artincontext.org/art-periods/#The_Baroque_Era_1590_%E2%80%93_1760_The_Glorification_of_Power_and_the_Deception_of_the_Eye"
        />
        <Card
          name="The Rococo Era"
          period="1725-1780"
          src={Rococo}
          link="https://artincontext.org/art-periods/#The_Rococo_Art_Period_1725_%E2%80%93_1780_French_Aristocracyn"
        />
        <Card
          name="Classicism"
          period="1725-1780"
          src={Classicism}
          link="https://artincontext.org/art-periods/#Classicism_1770_%E2%80%93_1840_A_Throwback_to_Classicism"
        />
        <Card
          name="Romanticism"
          period="1790-1850"
          src={Romanticism}
          link="https://artincontext.org/art-periods/#Romanticism_1790_%E2%80%93_1850_Adding_More_Feeling_to_Art"
        />
        <Card
          name="Realism"
          period="1850-1925"
          src={Realism}
          link="https://artincontext.org/art-periods/#Realism_1850_%E2%80%93_1925_Objectivity_over_Subjectivity"
        />
      </div>
    </>
  );
}

export default App;
