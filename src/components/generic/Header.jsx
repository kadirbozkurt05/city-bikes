import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className="flex bg-orange-100 border-b-2 border-blue-500 pb-2">
      <Logo />
      <Nav />
    </div>
  );
}
