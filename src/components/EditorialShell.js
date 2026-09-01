export default function EditorialShell({ children, wide = false, pad = true }) {
  return (
    <section className={pad ? 'editorial-shell' : 'editorial-shell editorial-shell--nopad'}>
      <div className="editorial-shell-inner" data-wide={wide ? 'true' : 'false'}>
        {children}
      </div>
    </section>
  );
}
