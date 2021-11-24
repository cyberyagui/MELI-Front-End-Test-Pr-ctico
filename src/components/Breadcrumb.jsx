export function Breadcrumb({ categories }) {
  return (
    <ol className="breadcrumb">
      {categories.map((category, i) => {
        return (
          <li className="breadcrumbItem" key={i}>
            {` ${category}`}
          </li>
        );
      })}
    </ol>
  );
}
