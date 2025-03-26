const BreadcrumbSection = () => {
  return (
    <div>
      <nav className="bg-gray-100 py-4 px-24">
        <ol className="flex text-sm">
          <li>
            <a href="#" className="text-blue-500">
              Podsumowanie
            </a>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <a href="#" className="text-blue-500">
              Dostawa
            </a>
          </li>
          <li>
            <span>Płatność</span>
          </li>
        </ol>
      </nav>
    </div>
  );
};
export default BreadcrumbSection;
