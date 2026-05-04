import { AdminStatusBadge } from "@/components/admin/AdminStatusBadge";
import { AdminIcon } from "@/components/admin/AdminIcon";
import { auditPayload, auditRecords } from "@/features/admin/mockData";

export default function AuditLogsPage() {
  const selectedRow = auditRecords[0];
  const actorLabelMap: Record<string, string> = {
    "Admin User": "Quản trị viên",
    "Support Agent": "Nhân sự hỗ trợ",
    System: "Hệ thống",
  };

  const actionLabelMap: Record<string, string> = {
    PAYMENT_CONFIRMED: "Xác nhận thanh toán",
    TUTOR_APPROVED: "Duyệt hồ sơ gia sư",
    REQUEST_REJECTED: "Từ chối yêu cầu",
    SYNC_WEBHOOK_RETRY: "Đồng bộ lại dữ liệu",
  };

  const targetLabelMap: Record<string, string> = {
    "payment:LH-2041": "Thanh toán lớp LH-2041",
    "tutor:TUT-2041": "Hồ sơ gia sư TUT-2041",
    "request:REQ-981": "Yêu cầu REQ-981",
    "integration:payment_gateway": "Cổng thanh toán",
  };

  const statusLabelMap: Record<string, string> = {
    SUCCESS: "Thành công",
    WARN: "Cảnh báo",
    INFO: "Thông tin",
  };

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Nhật ký hệ thống</h1>
          <p className="admin-page-subtitle">
            Theo dõi toàn bộ thao tác nhạy cảm của quản trị viên và hệ thống
            theo thời gian thực.
          </p>
        </div>

        <div className="admin-page-actions">
          <button className="admin-btn ghost" type="button">
            <AdminIcon name="download" />
            Tải dữ liệu
          </button>
          <button className="admin-btn tonal" type="button">
            <AdminIcon name="autorenew" />
            Tự làm mới
          </button>
        </div>
      </header>

      <section className="admin-panel">
        <div className="audit-filter-row">
          <label>
            <span className="tutors-select-label">Người thao tác</span>
            <select className="tutors-select" defaultValue="all-actors">
              <option value="all-actors">Tất cả người thao tác</option>
              <option value="admin-user">Quản trị viên</option>
              <option value="support-agent">Nhân sự hỗ trợ</option>
              <option value="system">Hệ thống</option>
            </select>
          </label>

          <label>
            <span className="tutors-select-label">Hành động</span>
            <select className="tutors-select" defaultValue="all-actions">
              <option value="all-actions">Tất cả hành động</option>
              <option value="payment-confirmed">Xác nhận thanh toán</option>
              <option value="tutor-approved">Duyệt hồ sơ gia sư</option>
              <option value="request-rejected">Từ chối yêu cầu</option>
            </select>
          </label>

          <label>
            <span className="tutors-select-label">Đối tượng</span>
            <select className="tutors-select" defaultValue="all-targets">
              <option value="all-targets">Tất cả đối tượng</option>
              <option value="payments">Thanh toán</option>
              <option value="tutors">Gia sư</option>
              <option value="requests">Yêu cầu</option>
            </select>
          </label>

          <label>
            <span className="tutors-select-label">Khoảng thời gian</span>
            <select className="tutors-select" defaultValue="today">
              <option value="today">Hôm nay</option>
              <option value="7days">7 ngày gần nhất</option>
              <option value="30days">30 ngày gần nhất</option>
            </select>
          </label>
        </div>
      </section>

      <section className="audit-grid">
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Thời gian</th>
                <th>Người thao tác</th>
                <th>Hành động</th>
                <th>Đối tượng</th>
                <th>Trạng thái</th>
              </tr>
            </thead>

            <tbody>
              {auditRecords.map((record) => (
                <tr key={`${record.time}-${record.action}`}>
                  <td>{record.time}</td>
                  <td>{actorLabelMap[record.actor] ?? record.actor}</td>
                  <td style={{ fontWeight: 700 }}>
                    {actionLabelMap[record.action] ?? record.action}
                  </td>
                  <td>{targetLabelMap[record.target] ?? record.target}</td>
                  <td>
                    <AdminStatusBadge
                      label={statusLabelMap[record.status] ?? record.status}
                      tone={
                        record.status === "SUCCESS"
                          ? "approved"
                          : record.status === "WARN"
                            ? "pending"
                            : "processing"
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <aside className="admin-panel">
          <h3 className="admin-panel-title" style={{ margin: 0 }}>
            Dữ liệu chi tiết
          </h3>
          <p className="admin-panel-subtitle">
            Sự kiện đang chọn:{" "}
            <strong>{actionLabelMap[selectedRow.action]}</strong>
          </p>

          <pre className="audit-json">
            {JSON.stringify(auditPayload, null, 2)}
          </pre>
        </aside>
      </section>
    </div>
  );
}
