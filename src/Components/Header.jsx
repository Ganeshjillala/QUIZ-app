import logoimg from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <header>
      <img src={logoimg} alt="quiz logo" />
      <h2>QUIZ APP</h2>
    </header>
  );
}
