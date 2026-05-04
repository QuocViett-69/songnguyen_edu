import type { CSSProperties } from "react";

import { AdminPanel } from "@/components/admin/AdminPanel";
import { AdminIcon } from "@/components/admin/AdminIcon";
import { AdminStatusBadge } from "@/components/admin/AdminStatusBadge";
import {
  dashboardActivities,
  dashboardKpis,
  dashboardSystemHealth,
  dashboardTasks,
  dashboardTopTutors,
} from "@/features/admin/mockData";

export default function DashboardPage() {
  const donutStyle = { "--progress": "73%" } as CSSProperties;

  return (
    <div className="admin-page admin-dashboard">
      <section className="dashboard-kpi-grid">
        {dashboardKpis.map((kpi) => (
          <article className="dashboard-kpi-card" key={kpi.label}>
            <span
              className="dashboard-kpi-accent"
              style={{ background: kpi.accent }}
            />

            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "0.6rem",
              }}
            >
              <p className="dashboard-kpi-label">{kpi.label}</p>
              <AdminStatusBadge label={kpi.badge} tone={kpi.tone} />
            </div>

            <div>
              <p className="dashboard-kpi-value">{kpi.value}</p>
              <p className="dashboard-kpi-meta">{kpi.meta}</p>
            </div>
          </article>
        ))}
      </section>

      <div className="dashboard-columns">
        <AdminPanel
          title="Việc cần làm hôm nay"
          actions={<AdminStatusBadge label="4 việc còn lại" tone="pending" />}
        >
          <div className="dashboard-task-list">
            {dashboardTasks.map((task, index) => {
              const isDone = index === dashboardTasks.length - 1;

              return (
                <div
                  className="dashboard-task-item"
                  key={task.title}
                  style={isDone ? { opacity: 0.56 } : undefined}
                >
                  <div className="dashboard-task-main">
                    <input
                      aria-label={`Đánh dấu ${task.title}`}
                      type="checkbox"
                      checked={isDone}
                      readOnly={isDone}
                    />
                    <div>
                      <p
                        className="dashboard-task-label"
                        style={
                          isDone
                            ? {
                                textDecoration: "line-through",
                                color: "#64748b",
                              }
                            : undefined
                        }
                      >
                        {task.title}
                      </p>
                      <p className="dashboard-task-sub">
                        <span style={{ color: task.tone, fontWeight: 700 }}>
                          {task.priority}
                        </span>{" "}
                        • {task.status}
                      </p>
                    </div>
                  </div>

                  <AdminIcon
                    className="dashboard-task-arrow"
                    name="arrow_forward_ios"
                  />
                </div>
              );
            })}
          </div>
        </AdminPanel>

        <AdminPanel title="Hoạt động gần đây">
          <div className="dashboard-timeline">
            {dashboardActivities.map((activity) => (
              <article
                className="dashboard-timeline-item"
                key={`${activity.time}-${activity.detail}`}
                style={{ color: activity.color }}
              >
                <span className="dashboard-timeline-dot" />
                <p className="dashboard-timeline-time">{activity.time}</p>
                <p
                  className="dashboard-timeline-text"
                  style={{ color: "#191c1d" }}
                >
                  {activity.detail}
                </p>
              </article>
            ))}
          </div>
        </AdminPanel>
      </div>

      <div className="dashboard-bottom-grid">
        <AdminPanel title="Tỷ lệ ghép lớp">
          <div className="dashboard-donut-wrap">
            <div
              className="dashboard-donut"
              data-value="73%"
              style={donutStyle}
            />
          </div>

          <div className="dashboard-legend">
            <div className="dashboard-legend-item">
              <span className="dashboard-legend-label">
                <span
                  className="dashboard-legend-dot"
                  style={{ background: "#0058be" }}
                />
                Thành công
              </span>
              <strong>127</strong>
            </div>

            <div className="dashboard-legend-item">
              <span className="dashboard-legend-label">
                <span
                  className="dashboard-legend-dot"
                  style={{ background: "#ba1a1a" }}
                />
                Thất bại
              </span>
              <strong>28</strong>
            </div>

            <div className="dashboard-legend-item">
              <span className="dashboard-legend-label">
                <span
                  className="dashboard-legend-dot"
                  style={{ background: "#924700" }}
                />
                Đang xử lý
              </span>
              <strong>19</strong>
            </div>
          </div>
        </AdminPanel>

        <AdminPanel title="Top Gia sư">
          <div className="dashboard-tutor-list">
            {dashboardTopTutors.map((tutor) => (
              <div className="dashboard-tutor-item" key={tutor.rank}>
                <div className="dashboard-tutor-left">
                  <div
                    className="dashboard-rank"
                    style={{ background: tutor.rankColor, color: "#fff" }}
                  >
                    {tutor.rank}
                  </div>
                  <div className="dashboard-avatar">
                    {tutor.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.84rem",
                        fontWeight: 700,
                      }}
                    >
                      {tutor.name}
                    </p>
                    <p className="dashboard-caption">{tutor.subjects}</p>
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <p className="dashboard-metric">{tutor.lessons}</p>
                  <p className="dashboard-caption">Buổi</p>
                </div>
              </div>
            ))}
          </div>
        </AdminPanel>

        <AdminPanel title="Trạng thái Hệ thống">
          <div className="dashboard-health-list">
            {dashboardSystemHealth.map((service) => (
              <div className="dashboard-health-item" key={service.service}>
                <div className="dashboard-health-left">
                  <AdminIcon name="hub" style={{ color: "#64748b" }} />
                  <div>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.84rem",
                        fontWeight: 700,
                      }}
                    >
                      {service.service}
                    </p>
                    <p className="dashboard-caption">{service.status}</p>
                  </div>
                </div>

                <p className="dashboard-caption" style={{ margin: 0 }}>
                  {service.ratio}
                </p>
              </div>
            ))}
          </div>
        </AdminPanel>
      </div>
    </div>
  );
}
