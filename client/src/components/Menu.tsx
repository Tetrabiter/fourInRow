import { Link } from "react-router";
import { GeometricBackground } from "./Background";
import ButtonBase from "./ui/Button";

const Menu = () => {
  return (
    <section className="max-w-lg h-screen mx-auto pt-[15%]">
        <GeometricBackground />
        <div className="w-xl h-3/5 flex flex-col gap-8 justify-center items-center bg-blue-600 text-white rounded-lg text-xl font-bold">
          <Link to={"game"}>
            <ButtonBase>Play Online</ButtonBase>
          </Link>
          <Link to={"game"}>
            <ButtonBase>Play Offline</ButtonBase>
          </Link>
          <Link to={"https://Github.com/Tetrabiter"}>
            <ButtonBase>Github repo</ButtonBase>
          </Link>
        </div>
    </section>
  );
};

export default Menu;
