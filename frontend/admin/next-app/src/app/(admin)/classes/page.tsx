import { AdminStatusBadge } from "@/components/admin/AdminStatusBadge";
import { AdminIcon } from "@/components/admin/AdminIcon";
import { classCards } from "@/features/admin/mockData";

export default function ClassesPage() {
  const focusClass = classCards[0];
  const focusTutor =
    focusClass.applicants.find((candidate) => candidate.selected) ??
    focusClass.applicants[0];

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <div>
          <p style={{ margin: 0, color: "#64748b", fontSize: "0.8rem" }}>
            Quản lý lớp học • Ghép gia sư
          </p>
          <h1 className="admin-page-title">Quản lý Lớp học</h1>
          <p className="admin-page-subtitle">
            Theo dõi trạng thái lớp đang mở và ghép gia sư phù hợp theo năng
            lực.
          </p>
        </div>

        <div className="admin-page-actions">
          <button className="admin-btn ghost" type="button">
            <AdminIcon name="add" />
            Tạo ghép mới
          </button>
          <button className="admin-btn tonal" type="button">
            <AdminIcon name="analytics" />
            Thống kê
          </button>
        </div>
      </header>

      <section className="pairing-summary-strip">
        <article className="pairing-summary-card">
          <p className="pairing-summary-label">Lớp cần ghép</p>
          <p className="pairing-summary-value">8</p>
        </article>
        <article className="pairing-summary-card">
          <p className="pairing-summary-label">Ứng viên khả dụng</p>
          <p className="pairing-summary-value">24</p>
        </article>
        <article className="pairing-summary-card">
          <p className="pairing-summary-label">Đang xử lý</p>
          <p className="pairing-summary-value">5</p>
        </article>
        <article className="pairing-summary-card">
          <p className="pairing-summary-label">Đã hoàn tất</p>
          <p className="pairing-summary-value">17</p>
        </article>
      </section>

      <section className="pairing-layout">
        <div className="pairing-stack">
          {classCards.map((card) => (
            <article className="pairing-card" key={card.classId}>
              <div className="pairing-card-body">
                <div className="pairing-card-head">
                  <div className="pairing-class-main">
                    <div className="pairing-class-code">{card.code}</div>
                    <div>
                      <p className="pairing-class-title">{card.title}</p>
                      <p className="pairing-class-meta">{card.classId}</p>
                      <div
                        style={{
                          display: "inline-flex",
                          gap: "0.35rem",
                          marginTop: "0.3rem",
                        }}
                      >
                        <AdminStatusBadge
                          label={card.groupLabel}
                          tone="pending"
                        />
                        <AdminStatusBadge
                          label={card.statusLabel}
                          tone={card.statusTone}
                        />
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <p className="pairing-class-fee">{card.fee}</p>
                    <p className="pairing-class-meta">{card.district}</p>
                  </div>
                </div>

                <div className="pairing-info-strip">
                  <AdminIcon name="calendar_month" style={{ width: "1rem" }} />
                  {card.schedule}
                  <span style={{ color: "#94a3b8" }}>•</span>
                  <AdminIcon name="menu_book" style={{ width: "1rem" }} />
                  {card.target}
                </div>

                <div className="pairing-split">
                  <section className="pairing-subpanel">
                    <h3 className="pairing-subpanel-title">
                      Học viên (
                      {card.students.filter((item) => item.name).length})
                    </h3>
                    <div className="pairing-user-list">
                      {card.students
                        .filter((student) => student.name)
                        .map((student) => (
                          <div
                            className="pairing-user-item"
                            key={`${card.classId}-${student.name}`}
                          >
                            <div className="pairing-user-left">
                              <div className="pairing-user-avatar">
                                {student.initials}
                              </div>
                              <div>
                                <p className="pairing-user-name">
                                  {student.name}
                                </p>
                                <p className="pairing-user-sub">
                                  {student.sub}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </section>

                  <section className="pairing-subpanel">
                    <h3 className="pairing-subpanel-title">
                      Ứng viên ({card.applicants.length})
                    </h3>
                    <div className="pairing-user-list">
                      {card.applicants.map((candidate) => (
                        <div
                          className={`pairing-user-item${candidate.selected ? " pairing-candidate-selected" : ""}`}
                          key={`${card.classId}-${candidate.name}`}
                        >
                          <div className="pairing-user-left">
                            <div className="pairing-user-avatar">
                              {candidate.initials}
                            </div>
                            <div>
                              <p className="pairing-user-name">
                                {candidate.name}
                              </p>
                              <p className="pairing-user-sub">
                                {candidate.sub}
                              </p>
                            </div>
                          </div>

                          <AdminIcon
                            name="chevron_right"
                            style={{ color: "#64748b", width: "1rem" }}
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="pairing-side">
          <article className="pairing-side-card">
            <div className="pairing-side-head">
              <h3 className="pairing-side-title">Ứng viên đề xuất</h3>
              <AdminStatusBadge label="Phù hợp nhất" tone="open" />
            </div>

            <div style={{ marginTop: "1rem", display: "grid", gap: "0.7rem" }}>
              <div
                className="admin-panel soft"
                style={{ padding: "0.9rem", textAlign: "center" }}
              >
                <div
                  style={{
                    width: "4.8rem",
                    height: "4.8rem",
                    borderRadius: "999px",
                    margin: "0 auto",
                    background: "linear-gradient(120deg, #1d4ed8, #60a5fa)",
                  }}
                />
                <h4 style={{ margin: "0.7rem 0 0", fontSize: "1.3rem" }}>
                  {focusTutor.name}
                </h4>
                <p
                  style={{
                    margin: "0.2rem 0 0",
                    color: "#64748b",
                    fontSize: "0.8rem",
                  }}
                >
                  {focusTutor.sub}
                </p>
              </div>

              <div className="admin-panel soft" style={{ padding: "0.8rem" }}>
                <p
                  style={{
                    margin: "0 0 0.35rem",
                    fontSize: "0.7rem",
                    color: "#64748b",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontWeight: 700,
                  }}
                >
                  Đề xuất hệ thống
                </p>
                <p style={{ margin: "0 0 0.25rem", fontSize: "0.82rem" }}>
                  • Phù hợp lịch dạy: 92%
                </p>
                <p style={{ margin: "0 0 0.25rem", fontSize: "0.82rem" }}>
                  • Khu vực di chuyển: 1.8km
                </p>
                <p style={{ margin: 0, fontSize: "0.82rem" }}>
                  • Mức phí tương thích: 100%
                </p>
              </div>

              <button
                className="admin-btn primary"
                style={{ width: "100%" }}
                type="button"
              >
                <AdminIcon name="check_circle" />
                Xác nhận phân lớp
              </button>
            </div>
          </article>

          <article className="pairing-side-card">
            <h3 className="pairing-side-title">Lớp đang chọn</h3>
            <div className="pairing-confirm-line">
              <span>Mã lớp</span>
              <strong>{focusClass.classId}</strong>
            </div>
            <div className="pairing-confirm-line">
              <span>Môn học</span>
              <strong>{focusClass.title}</strong>
            </div>
            <div className="pairing-confirm-line">
              <span>Mức phí</span>
              <strong style={{ color: "#0058be" }}>{focusClass.fee}</strong>
            </div>
            <div className="pairing-confirm-line">
              <span>Địa điểm</span>
              <strong>{focusClass.district}</strong>
            </div>
          </article>
        </aside>
      </section>
    </div>
  );
}
