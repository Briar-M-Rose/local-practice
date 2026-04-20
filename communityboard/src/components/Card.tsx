import "../App.css";

type Props = {
  src: string;
  name: string;
  period: string;
  link: string;
};

function Card(props: Props) {
  return (
    <>
      <div className="card">
        <img className="card-img" src={props.src} alt={props.name} />
        <h2>{props.name}</h2>
        <h3>{props.period}</h3>
        <button className="learn">
          <a className="link" href={props.link}>
            {props.name}?
          </a>
        </button>
      </div>
    </>
  );
}

export default Card;
