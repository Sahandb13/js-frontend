import "./PageHeader.css";

export default function PageHeader({ title }) {
  return (
    <section className="page-header">
      <div className="page-header-inner">
        <h1>{title}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
    </section>
  );
}
