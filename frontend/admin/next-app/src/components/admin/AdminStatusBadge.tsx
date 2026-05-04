type StatusTone = "pending" | "approved" | "rejected" | "open" | "processing";

const toneClassMap: Record<StatusTone, string> = {
  pending: "pending",
  approved: "approved",
  rejected: "rejected",
  open: "open",
  processing: "processing",
};

export function AdminStatusBadge({
  label,
  tone,
  dotColor,
}: {
  label: string;
  tone: StatusTone;
  dotColor?: string;
}) {
  return (
    <span className={`admin-status-badge ${toneClassMap[tone]}`}>
      {dotColor ? (
        <span className="admin-status-dot" style={{ background: dotColor }} />
      ) : null}
      {label}
    </span>
  );
}
