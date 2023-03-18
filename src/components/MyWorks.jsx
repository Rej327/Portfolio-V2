import ClyBlog from "./ClyBlog";
import Regavana from "./Regavana";
import Solar from "./solar";

export default function MyWorks() {
  return (
    <div className="w-full mt-10">
      <p className="header">MY WORKS</p>
      <div className="w-full">
        <Solar />
        <ClyBlog />
        <Regavana />
      </div>
    </div>
  );
}
