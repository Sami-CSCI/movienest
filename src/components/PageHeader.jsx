function PageHeader({ label, title, text }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="text-sm font-semibold text-brand-secondary">{label}</p>
      <h1 className="mt-2 text-3xl font-bold text-primary md:text-4xl">{title}</h1>
      <p className="mt-3 text-lg text-tertiary">{text}</p>
    </div>
  );
}

export default PageHeader;
