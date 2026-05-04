import { AdminStatusBadge } from "@/components/admin/AdminStatusBadge";
import { AdminIcon, type AdminIconName } from "@/components/admin/AdminIcon";
import { tutorRecords, tutorStats } from "@/features/admin/mockData";

export default function TutorsPage() {
  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Quản lý Gia sư</h1>
          <p className="admin-page-subtitle">
            Quản lý và theo dõi thông tin chi tiết của tất cả cộng tác viên gia
            sư.
          </p>
        </div>

        <div className="admin-page-actions">
          <button className="admin-btn ghost" type="button">
            <AdminIcon name="download" />
            Xuất báo cáo
          </button>
          <button className="admin-btn primary" type="button">
            <AdminIcon name="add" />
            Thêm gia sư mới
          </button>
        </div>
      </header>

      <section className="tutors-top-grid">
        <div className="tutors-stats-grid">
          {tutorStats.map((item) => (
            <article className="tutors-stat-card" key={item.label}>
              <div
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  borderRadius: "0.7rem",
                  background: "rgba(73, 94, 138, 0.12)",
                  color: "#495e8a",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <AdminIcon name={item.icon as AdminIconName} />
              </div>

              <p className="tutors-stat-value">{item.value}</p>
              <p className="tutors-stat-label">{item.label}</p>
            </article>
          ))}
        </div>

        <div className="tutors-filter-card">
          <div className="tutors-select-grid">
            <label>
              <span className="tutors-select-label">Trạng thái</span>
              <select className="tutors-select" defaultValue="all-status">
                <option value="all-status">Tất cả trạng thái</option>
                <option value="active">Đang hoạt động</option>
                <option value="pending">Chờ duyệt hồ sơ</option>
                <option value="rejected">Đã từ chối</option>
              </select>
            </label>

            <label>
              <span className="tutors-select-label">Môn dạy</span>
              <select className="tutors-select" defaultValue="all-subjects">
                <option value="all-subjects">Tất cả các môn</option>
                <option value="math">Toán học</option>
                <option value="physics">Vật lý</option>
                <option value="language">Ngoại ngữ</option>
              </select>
            </label>

            <label>
              <span className="tutors-select-label">Khu vực</span>
              <select className="tutors-select" defaultValue="all-districts">
                <option value="all-districts">Tất cả khu vực</option>
                <option value="hn">Hà Nội</option>
                <option value="hcm">TP. Hồ Chí Minh</option>
                <option value="dn">Đà Nẵng</option>
              </select>
            </label>

            <label>
              <span className="tutors-select-label">Sắp xếp</span>
              <select className="tutors-select" defaultValue="newest">
                <option value="newest">Mới nhất</option>
                <option value="active-most">Hoạt động nhiều nhất</option>
                <option value="rating">Đánh giá cao nhất</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Họ tên và thư điện tử</th>
              <th>Môn dạy</th>
              <th>Khu vực</th>
              <th>Trạng thái</th>
              <th style={{ textAlign: "right" }}>Thao tác</th>
            </tr>
          </thead>

          <tbody>
            {tutorRecords.map((record) => (
              <tr key={record.email}>
                <td>
                  <div className="table-user">
                    <div className="table-user-avatar">
                      {record.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="table-user-name">{record.name}</p>
                      <p className="table-user-email">{record.email}</p>
                    </div>
                  </div>
                </td>

                <td>
                  <div className="subject-chip-list">
                    {record.subjects.map((subject) => (
                      <span className="subject-chip" key={subject}>
                        {subject}
                      </span>
                    ))}
                  </div>
                </td>

                <td>{record.district}</td>
                <td>
                  <AdminStatusBadge
                    label={record.statusLabel}
                    tone={record.status}
                    dotColor={
                      record.status === "approved"
                        ? "#0058be"
                        : record.status === "pending"
                          ? "#924700"
                          : "#ba1a1a"
                    }
                  />
                </td>

                <td>
                  <div className="table-action-group">
                    <button
                      aria-label={`Xem chi tiết ${record.name}`}
                      className="table-action-btn"
                      type="button"
                    >
                      <AdminIcon name="visibility" />
                    </button>
                    <button
                      aria-label={`Chỉnh sửa ${record.name}`}
                      className="table-action-btn"
                      type="button"
                    >
                      <AdminIcon name="edit" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#64748b",
          fontSize: "0.8rem",
        }}
      >
        <span>Hiển thị 1 - 4 trong tổng số 1,326 gia sư</span>
        <div
          style={{
            display: "inline-flex",
            gap: "0.35rem",
            alignItems: "center",
          }}
        >
          <button className="admin-btn tonal" type="button">
            <AdminIcon name="chevron_left" style={{ width: "1rem" }} />
          </button>
          <button className="admin-btn primary" type="button">
            1
          </button>
          <button className="admin-btn tonal" type="button">
            2
          </button>
          <button className="admin-btn tonal" type="button">
            3
          </button>
          <button className="admin-btn tonal" type="button">
            ...
          </button>
          <button className="admin-btn tonal" type="button">
            <AdminIcon name="chevron_right" style={{ width: "1rem" }} />
          </button>
        </div>
      </div>
    </div>
  );
}
