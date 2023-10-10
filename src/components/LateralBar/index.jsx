import "../../styles/styles.scss";

export const LateralBar = () => {
    const numbers = Array.from({ length: 99 }, (_, index) => index + 1);

  return (
    <div className="bar__container">
      {numbers.map((number) => {
        return <p key={number} className="lateral__bar">{number}</p>;
      })}
    </div>
  );
};
