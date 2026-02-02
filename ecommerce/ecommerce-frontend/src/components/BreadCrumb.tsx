// let count: number = 1200;

// let person: { name: string } = { name: "ram" };

// function BreadCrumb(props: { title: string }) {

function BreadCrumb({ title }: { title: string }) {
  return (
    <header className="bg-slate-50">
      <div className="container py-10">
        <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
        <p className="mt-1 text-sm text-slate-500">
          Home . <span className="text-secondary">{title}</span>
        </p>
      </div>
    </header>
  );
}

export default BreadCrumb;
