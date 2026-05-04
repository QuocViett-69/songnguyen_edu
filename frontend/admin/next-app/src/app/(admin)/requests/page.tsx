import { AdminStatusBadge } from "@/components/admin/AdminStatusBadge";
import { AdminIcon } from "@/components/admin/AdminIcon";
import { requestCards, requestSummary } from "@/features/admin/mockData";

export default function RequestsPage() {
  const selectedCard = requestCards[0];
  const selectedTutor =
    selectedCard.applicants.find((candidate) => candidate.selected) ??
    selectedCard.applicants[0];

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <div>
          <p style={{ margin: 0, color: "#64748b", fontSize: "0.8rem" }}>
            Lớp học • Phân lớp cho Gia sư
          </p>
          <h1 className="admin-page-title">Phân lớp cho Gia sư</h1>
          <p className="admin-page-subtitle">
            Chọn và xác nhận gia sư phù hợp cho từng lớp đang mở để đảm bảo chất
            lượng giảng dạy.
          </p>
        </div>

        <div className="admin-page-actions">
          <button className="admin-btn tonal" type="button">
            <AdminIcon name="filter_list" />
            Lọc
          </button>
          <button className="admin-btn tonal" type="button">
            <AdminIcon name="sort" />
            Sắp xếp
          </button>
        </div>
      </header>

      <section className="pairing-summary-strip">
        {requestSummary.map((summary) => (
          <article className="pairing-summary-card" key={summary.label}>
            <p className="pairing-summary-label">{summary.label}</p>
            <p className="pairing-summary-value">{summary.value}</p>
          </article>
        ))}
      </section>

      <section className="pairing-layout">
        <div className="pairing-stack">
          {requestCards.map((card) => (
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
                      Thông tin học sinh (
                      {card.students.filter((item) => item.name).length})
                    </h3>
                    <div className="pairing-user-list">
                      {card.students
                        .filter((student) => student.name)
                        .map((student) => (
                          <div className="pairing-user-item" key={student.name}>
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
                          key={candidate.name}
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
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  width: "5rem",
                  height: "5rem",
                  borderRadius: "999px",
                  background: "linear-gradient(120deg, #1d4ed8, #60a5fa)",
                  margin: "0 auto",
                }}
              />
              <h3
                style={{
                  margin: "0.8rem 0 0",
                  fontSize: "1.5rem",
                  fontWeight: 800,
                }}
              >
                {selectedTutor.name}
              </h3>
              <p
                style={{
                  margin: "0.2rem 0 0",
                  color: "#64748b",
                  fontSize: "0.84rem",
                }}
              >
                {selectedTutor.sub}
              </p>
            </div>

            <div style={{ marginTop: "1rem", display: "grid", gap: "0.7rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                  gap: "0.5rem",
                }}
              >
                <div
                  className="admin-panel soft"
                  style={{ padding: "0.7rem", textAlign: "center" }}
                >
                  <p
                    style={{ margin: 0, fontSize: "0.7rem", color: "#64748b" }}
                  >
                    Điểm TB
                  </p>
                  <strong style={{ fontSize: "1rem" }}>3.65</strong>
                </div>
                <div
                  className="admin-panel soft"
                  style={{ padding: "0.7rem", textAlign: "center" }}
                >
                  <p
                    style={{ margin: 0, fontSize: "0.7rem", color: "#64748b" }}
                  >
                    Kinh nghiệm
                  </p>
                  <strong style={{ fontSize: "1rem" }}>2 năm</strong>
                </div>
                <div
                  className="admin-panel soft"
                  style={{ padding: "0.7rem", textAlign: "center" }}
                >
                  <p
                    style={{ margin: 0, fontSize: "0.7rem", color: "#64748b" }}
                  >
                    Lớp đã dạy
                  </p>
                  <strong style={{ fontSize: "1rem" }}>7</strong>
                </div>
              </div>

              <div className="admin-panel soft" style={{ padding: "0.8rem" }}>
                <p
                  style={{
                    margin: "0 0 0.5rem",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    color: "#64748b",
                  }}
                >
                  Hồ sơ năng lực
                </p>
                <p style={{ margin: "0 0 0.35rem", fontSize: "0.82rem" }}>
                  CCCD / CMND • Đã xác minh
                </p>
                <p style={{ margin: 0, fontSize: "0.82rem" }}>
                  Thẻ sinh viên / Bảng điểm • Cập nhật 2 tháng trước
                </p>
              </div>
            </div>
          </article>

          <article className="pairing-side-card">
            <h3 className="pairing-side-title">
              Xác nhận Phân lớp {selectedCard.classId}
            </h3>
            <div className="pairing-confirm-line">
              <span>Gia sư chọn</span>
              <strong>{selectedTutor.name}</strong>
            </div>
            <div className="pairing-confirm-line">
              <span>Mức học phí</span>
              <strong style={{ color: "#0058be" }}>{selectedCard.fee}</strong>
            </div>
            <div className="pairing-confirm-line">
              <span>Ứng viên từ chối</span>
              <strong style={{ color: "#ba1a1a" }}>2 người</strong>
            </div>

            <button
              className="admin-btn primary"
              style={{ width: "100%", marginTop: "0.9rem" }}
              type="button"
            >
              <AdminIcon name="verified" />
              Xác nhận phân lớp ngay
            </button>
          </article>
        </aside>
      </section>
    </div>
  );
}
