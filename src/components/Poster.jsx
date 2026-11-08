function Poster({ title, year, colors }) {
  return (
    <div
      className="flex aspect-[2/3] w-full flex-col justify-end rounded-xl p-4 text-white shadow-md"
      style={{ background: `linear-gradient(160deg, ${colors[0]}, ${colors[1]})` }}
    >
      <p className="text-xs font-medium opacity-80">{year}</p>
      <h3 className="text-lg font-bold leading-tight">{title}</h3>
    </div>
  );
}

export default Poster;
