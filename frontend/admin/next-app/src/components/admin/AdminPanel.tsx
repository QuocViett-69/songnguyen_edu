import type { ReactNode } from "react";

function getPanelClassName(soft: boolean, className?: string) {
  return `admin-panel${soft ? " soft" : ""}${className ? ` ${className}` : ""}`;
}

export function AdminPanel({
  title,
  subtitle,
  actions,
  soft = false,
  className,
  children,
}: {
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
  soft?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={getPanelClassName(soft, className)}>
      {title ? (
        <div className="admin-page-header">
          <div>
            <h3 className="admin-panel-title">{title}</h3>
            {subtitle ? (
              <p className="admin-panel-subtitle">{subtitle}</p>
            ) : null}
          </div>
          {actions ? <div className="admin-page-actions">{actions}</div> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
