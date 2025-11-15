import "./PageHeader.css";

export default function PageHeader({ title }) {
  return (
    <section className="page-header">
      <h1>{title}</h1>
    </section>
  );
}
