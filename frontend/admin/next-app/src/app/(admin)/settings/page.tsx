import { AdminStatusBadge } from "@/components/admin/AdminStatusBadge";
import { AdminIcon, type AdminIconName } from "@/components/admin/AdminIcon";

const tabs = [
  "Thông tin Trung tâm",
  "Tài khoản Ngân hàng",
  "Bảng giá Tham khảo",
  "Nội dung trang giới thiệu",
];

const tabIcons: AdminIconName[] = [
  "domain",
  "account_balance",
  "payments",
  "web",
];

export default function SettingsPage() {
  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <div>
          <p style={{ margin: 0, color: "#64748b", fontSize: "0.8rem" }}>
            Hệ thống • Cài đặt
          </p>
          <h1 className="admin-page-title">Cài đặt Hệ thống</h1>
          <p className="admin-page-subtitle">
            Quản lý thông tin và cấu hình nền tảng SNE.
          </p>
        </div>

        <div className="admin-page-actions">
          <AdminStatusBadge
            label="Lưu lần cuối: 18/04/2026 10:30"
            tone="processing"
            dotColor="#10b981"
          />
        </div>
      </header>

      <section className="settings-save-strip">
        <div className="settings-save-message">
          <AdminIcon name="warning" />
          <span>Bạn có thay đổi chưa lưu.</span>
        </div>

        <div className="admin-page-actions">
          <button className="admin-btn tonal" type="button">
            Hủy
          </button>
          <button className="admin-btn primary" type="button">
            Lưu ngay
          </button>
        </div>
      </section>

      <section className="settings-tabbar">
        {tabs.map((tab, index) => (
          <button
            className={`settings-tab${index === 0 ? " active" : ""}`}
            key={tab}
            type="button"
          >
            <AdminIcon name={tabIcons[index]} style={{ width: "1rem" }} />
            {tab}
          </button>
        ))}
      </section>

      <section className="settings-layout">
        <article className="settings-form-card">
          <div className="settings-card-head">
            <h2 className="settings-card-title">Thông tin Trung tâm</h2>
          </div>

          <div className="settings-card-body">
            <section>
              <h3 className="settings-group-title">Thông tin cơ bản</h3>
              <div
                className="settings-input-grid"
                style={{ marginTop: "0.6rem" }}
              >
                <div className="settings-field">
                  <label htmlFor="center-name">Tên trung tâm</label>
                  <input
                    className="settings-input"
                    defaultValue="Trung tâm Gia sư SNE"
                    id="center-name"
                    type="text"
                  />
                </div>
                <div className="settings-field">
                  <label htmlFor="center-slogan">Khẩu hiệu</label>
                  <input
                    className="settings-input"
                    defaultValue="Khơi nguồn trí thức - Kiến tạo tương lai"
                    id="center-slogan"
                    type="text"
                  />
                </div>
              </div>
            </section>

            <section>
              <h3 className="settings-group-title">Liên hệ</h3>
              <div
                className="settings-input-grid"
                style={{ marginTop: "0.6rem" }}
              >
                <div className="settings-field">
                  <label htmlFor="center-phone">Số điện thoại</label>
                  <input
                    className="settings-input"
                    defaultValue="028 1234 5678"
                    id="center-phone"
                    type="tel"
                  />
                </div>
                <div className="settings-field">
                  <label htmlFor="center-email">Thư điện tử</label>
                  <input
                    className="settings-input"
                    defaultValue="contact@sne.edu.vn"
                    id="center-email"
                    type="email"
                  />
                </div>
                <div className="settings-field full">
                  <label htmlFor="center-address">Địa chỉ</label>
                  <input
                    className="settings-input"
                    defaultValue="123 Nguyễn Văn Linh, Phường Tân Phong, Quận 7, TP.HCM"
                    id="center-address"
                    type="text"
                  />
                </div>
                <div className="settings-field">
                  <label htmlFor="center-facebook">Đường dẫn Facebook</label>
                  <input
                    className="settings-input"
                    defaultValue="https://facebook.com/snetutor"
                    id="center-facebook"
                    type="url"
                  />
                </div>
                <div className="settings-field">
                  <label htmlFor="center-zalo">Đường dẫn Zalo chính thức</label>
                  <input
                    className="settings-input"
                    defaultValue="https://zalo.me/snetutor"
                    id="center-zalo"
                    type="url"
                  />
                </div>
              </div>
            </section>

            <section>
              <h3 className="settings-group-title">Thương hiệu</h3>
              <div
                className="settings-brand-box"
                style={{ marginTop: "0.6rem" }}
              >
                <div className="settings-brand-mark">SNE</div>
                <div>
                  <p
                    style={{ margin: 0, fontSize: "0.82rem", fontWeight: 700 }}
                  >
                    Logo hiện tại
                  </p>
                  <button
                    className="admin-btn ghost"
                    style={{ marginTop: "0.5rem" }}
                    type="button"
                  >
                    <AdminIcon name="upload" />
                    Thay đổi logo
                  </button>
                </div>
                <div style={{ marginLeft: "auto", textAlign: "right" }}>
                  <p
                    style={{ margin: 0, color: "#64748b", fontSize: "0.72rem" }}
                  >
                    Màu chủ đạo
                  </p>
                  <div
                    style={{
                      width: "2.2rem",
                      height: "2.2rem",
                      borderRadius: "999px",
                      background: "#3b82f6",
                      marginLeft: "auto",
                      marginTop: "0.3rem",
                    }}
                  />
                </div>
              </div>
            </section>
          </div>

          <div
            className="settings-card-head"
            style={{ justifyContent: "flex-end" }}
          >
            <button className="admin-btn tonal" type="button">
              Hủy thay đổi
            </button>
            <button className="admin-btn primary" type="button">
              <AdminIcon name="save" />
              Lưu thay đổi
            </button>
          </div>
        </article>

        <aside className="settings-preview-card">
          <div className="settings-card-head">
            <h2 className="settings-card-title">Xem trước thông tin</h2>
            <span
              style={{ color: "#64748b", fontSize: "0.72rem", fontWeight: 700 }}
            >
              Xem trên điện thoại
            </span>
          </div>

          <div className="settings-preview-body">
            <div className="settings-phone">
              <div className="settings-phone-head">
                <div className="settings-phone-logo">SNE</div>
                <p style={{ margin: 0, fontWeight: 800 }}>
                  Trung tâm Gia sư SNE
                </p>
                <p
                  style={{
                    margin: "0.15rem 0 0",
                    fontSize: "0.72rem",
                    opacity: 0.85,
                  }}
                >
                  Khơi nguồn trí thức - Kiến tạo tương lai
                </p>
              </div>

              <div className="settings-phone-body">
                <div className="settings-phone-item">
                  <AdminIcon name="location_on" style={{ width: "1rem" }} />
                  123 Nguyễn Văn Linh, Phường Tân Phong, Quận 7, TP.HCM
                </div>
                <div className="settings-phone-item">
                  <AdminIcon name="call" style={{ width: "1rem" }} />
                  028 1234 5678
                </div>
                <div className="settings-phone-item">
                  <AdminIcon name="mail" style={{ width: "1rem" }} />
                  contact@sne.edu.vn
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
