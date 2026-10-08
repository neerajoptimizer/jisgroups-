import { PageHero } from "./sections";

export function LegalPage({
  title,
  path,
  updated,
  sections,
}: {
  title: string;
  path: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <>
      <PageHero title={title} subtitle={`Last updated: ${updated}`} crumbs={[{ name: title, path }]}>
        <span />
      </PageHero>
      <section className="section">
        <div className="container-x prose-jis max-w-3xl">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              {s.body.map((b) => (
                <p key={b.slice(0, 40)}>{b}</p>
              ))}
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
