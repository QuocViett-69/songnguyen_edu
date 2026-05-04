import { AdminStatusBadge } from "@/components/admin/AdminStatusBadge";
import { AdminIcon } from "@/components/admin/AdminIcon";
import {
  paymentInfo,
  paymentTabs,
  paymentTimeline,
} from "@/features/admin/mockData";

export default function PaymentsPage() {
  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <div>
          <p style={{ margin: 0, color: "#64748b", fontSize: "0.8rem" }}>
            Thanh toán • Chi tiết biên nhận
          </p>
          <h1 className="admin-page-title">Xác nhận Thanh toán</h1>
          <p className="admin-page-subtitle">
            Đối soát và xác nhận biên nhận nộp phí nhận lớp của gia sư.
          </p>
        </div>

        <div className="admin-page-actions">
          <AdminStatusBadge
            label="Chờ xác nhận"
            tone="pending"
            dotColor="#924700"
          />
        </div>
      </header>

      <div className="payments-tabs">
        {paymentTabs.map((tab) => (
          <button
            className={`payments-tab${tab.active ? " active" : ""}`}
            key={tab.label}
            type="button"
          >
            {tab.label}
            <span
              style={{
                marginLeft: "0.4rem",
                fontSize: "0.72rem",
                opacity: 0.78,
              }}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      <section className="payments-shell">
        <div className="payments-receipt">
          <div className="payments-receipt-screen">
            <div className="payments-receipt-card">
              <p className="payments-receipt-title">VIETCOMBANK</p>
              <p
                style={{
                  margin: "0.2rem 0 0",
                  textAlign: "center",
                  color: "#64748b",
                  fontSize: "0.72rem",
                }}
              >
                Chuyển tiền thành công
              </p>

              <p className="payments-receipt-amount">300,000</p>
              <p className="payments-receipt-caption">đ</p>

              <div className="payments-receipt-grid">
                <div className="payments-receipt-row">
                  <span className="payments-receipt-label">Tới</span>
                  <span className="payments-receipt-value">
                    TRUNG TÂM GIA SƯ FLUID
                  </span>
                </div>
                <div className="payments-receipt-row">
                  <span className="payments-receipt-label">Ngân hàng</span>
                  <span className="payments-receipt-value">MB Bank</span>
                </div>
                <div className="payments-receipt-row">
                  <span className="payments-receipt-label">Nội dung</span>
                  <span className="payments-receipt-value">
                    Nguyen Van An nop phi lop LH-2041
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="payments-side">
          <article className="admin-panel">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.7rem",
              }}
            >
              <h3 className="admin-panel-title" style={{ margin: 0 }}>
                Thông tin Giao dịch
              </h3>
              <AdminStatusBadge label="Lần 2" tone="pending" />
            </div>

            <div className="payments-info-grid" style={{ marginTop: "1rem" }}>
              {paymentInfo.map((item) => (
                <div key={item.label}>
                  <p className="payments-info-label">{item.label}</p>
                  <p className="payments-info-value">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="payments-account-box" style={{ marginTop: "1rem" }}>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.71rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontWeight: 700,
                  color: "#0058be",
                }}
              >
                Tài khoản trung tâm nhận
              </p>
              <p style={{ margin: "0.3rem 0 0", fontWeight: 700 }}>
                MB Bank - 0987654321
              </p>
              <p
                style={{
                  margin: "0.2rem 0 0",
                  fontSize: "0.8rem",
                  color: "#64748b",
                }}
              >
                TRUNG TÂM GIA SƯ FLUID
              </p>
            </div>
          </article>

          <article className="admin-panel">
            <h3 className="admin-panel-title" style={{ margin: 0 }}>
              Xử lý Yêu cầu
            </h3>

            <div
              className="payments-action-stack"
              style={{ marginTop: "1rem" }}
            >
              <button
                className="admin-btn success"
                style={{ width: "100%" }}
                type="button"
              >
                <AdminIcon name="check_circle" />
                Xác nhận Thanh toán
              </button>
              <button
                className="admin-btn danger"
                style={{ width: "100%" }}
                type="button"
              >
                <AdminIcon name="cancel" />
                Từ chối biên nhận
              </button>
            </div>

            <div
              className="payments-reject-note"
              style={{ marginTop: "0.85rem" }}
            >
              <h4>Lý do từ chối (bắt buộc)</h4>
              <p>
                Số tài khoản thụ hưởng không đúng với thông tin trung tâm cung
                cấp. Vui lòng kiểm tra lại và tải biên nhận mới.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="admin-panel payments-history">
        <h3 className="admin-panel-title" style={{ margin: 0 }}>
          Lịch sử nộp biên nhận của lớp #LH-2041
        </h3>

        <div className="payments-timeline">
          {paymentTimeline.map((entry) => (
            <article
              className="payments-timeline-item"
              key={entry.title}
              style={{ color: entry.color }}
            >
              <span className="payments-timeline-dot" />
              <p
                className="payments-timeline-title"
                style={{ color: entry.color }}
              >
                {entry.title}
              </p>
              <p className="payments-timeline-meta">{entry.meta}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
