export default function Logo() {
  return (
    <div className="flex items-center h-full md:pl-10 pt-4 cursor-pointer">
      <a href="/">
        <h3 className="text-4xl font-bold text-gray-800">
          City <span className="text-blue-500">Bikes</span>
        </h3>
      </a>
    </div>
  );
}
