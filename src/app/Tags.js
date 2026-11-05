export default function Tags({ items, big = false }) {
  return (
    <ul className="flex flex-wrap gap-2 text-sm">
      {items.map((t) => (
        <li
          key={t}
          className={
            big
              ? "rounded border border-line bg-panel px-2.5 py-1 text-ink"
              : "rounded border border-line px-2 py-0.5 text-xs text-muted"
          }
        >
          {t}
        </li>
      ))}
    </ul>
  );
}