const Navbar = () => {
  return (
    <>
      <div className="flex flex-row justify-between pt-2 px-5 bg-[#457b9d]">
        <div>
          <a href="/" className="text-[#e63946] font-epic text-3xl pl-8 justify-center">M <br />M</a>
        </div>
        <div className="flex justify-evenly w-[40rem] items-center font-mono">
          <a href="/battle-ground" className="text-[#e63946] text-xl font-semibold hover:border-b-2 hover:border-[#e63946]">Battle Ground</a>
          <a href="/preferred-movies" className="text-[#e63946] text-xl font-semibold hover:border-b-2 hover:border-[#e63946]">What to watch</a>
          <a href="/create-battle" className="text-[#e63946] text-xl font-semibold hover:border-b-2 hover:border-[#e63946]">Create Battle's</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
