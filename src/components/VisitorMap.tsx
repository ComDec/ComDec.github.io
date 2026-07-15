export function VisitorMap() {
  return (
    <section className="visitor-map" aria-labelledby="visitor-map-title">
      <div className="visitor-map__heading">
        <p id="visitor-map-title">Visitors</p>
        <a
          href="https://mapmyvisitors.com/b/policy"
          target="_blank"
          rel="noreferrer"
        >
          Privacy
        </a>
      </div>
      <iframe
        className="visitor-map__embed"
        title="Map of recent website visitors"
        src="/visitor-map.html"
        sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation"
        referrerPolicy="strict-origin-when-cross-origin"
      />
      <p className="visitor-map__note">Approximate visitor locations</p>
    </section>
  );
}
