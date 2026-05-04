"use client";

import { useMemo, useState } from "react";

import styles from "./page.module.css";

type Solution = {
  key: string;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  stats: Array<{ label: string; value: string }>;
  note: string;
};

export default function AboutUsTabs() {
  const solutions: Solution[] = useMemo(
    () => [
      {
        key: "parents",
        label: "Phụ huynh",
        title: "Theo dõi tiến độ học tập rõ ràng",
        description:
          "Phụ huynh nắm được lộ trình học, báo cáo định kỳ và có quyền điều chỉnh phương án khi cần.",
        bullets: [
          "Báo cáo kết quả học tập theo tuần/tháng.",
          "Minh bạch học phí và lịch học chi tiết.",
          "Đổi gia sư linh hoạt nếu chưa phù hợp.",
        ],
        stats: [
          { label: "Mức hài lòng", value: "98%" },
          { label: "Tỉ lệ cải thiện", value: "+32%" },
          { label: "Thời gian phản hồi", value: "<12h" },
        ],
        note: "Phụ huynh được đồng hành bởi điều phối viên riêng trong suốt khóa học.",
      },
      {
        key: "students",
        label: "Học viên",
        title: "Cá nhân hóa lộ trình học tập",
        description:
          "Học viên được xây dựng kế hoạch học tập dựa trên mục tiêu và năng lực hiện tại.",
        bullets: [
          "Kiểm tra đầu vào và định hướng mục tiêu rõ ràng.",
          "Lộ trình linh hoạt theo từng giai đoạn học.",
          "Học thử để đảm bảo phù hợp phong cách giảng dạy.",
        ],
        stats: [
          { label: "Số buổi học thử", value: "1-2" },
          { label: "Tỉ lệ duy trì", value: "90%" },
          { label: "Lớp đang hoạt động", value: "1.200+" },
        ],
        note: "Tập trung kỹ năng tự học và xây dựng động lực bền vững.",
      },
      {
        key: "tutors",
        label: "Gia sư",
        title: "Quy trình nhận lớp nhanh và minh bạch",
        description:
          "Gia sư được hỗ trợ hồ sơ, tài liệu và hệ thống quản lý lớp học gọn nhẹ.",
        bullets: [
          "Xét duyệt nhanh trong 24-48 giờ.",
          "Hỗ trợ tài liệu và phương pháp giảng dạy.",
          "Điều phối viên hỗ trợ giải quyết phát sinh.",
        ],
        stats: [
          { label: "Tỉ lệ ghép lớp", value: "85%" },
          { label: "Hồ sơ chuyên môn", value: "100%" },
          { label: "Hỗ trợ", value: "24/7" },
        ],
        note: "Gia sư chủ động chọn lớp phù hợp thời gian và chuyên môn.",
      },
      {
        key: "centers",
        label: "Trung tâm",
        title: "Quản lý lớp học và giáo viên tập trung",
        description:
          "Một hệ thống giúp trung tâm theo dõi giáo viên, học viên và hiệu quả vận hành.",
        bullets: [
          "Đồng bộ dữ liệu lớp học và lịch giảng.",
          "Báo cáo KPI và hiệu suất theo bộ phận.",
          "Quản lý học phí và học bạ tập trung.",
        ],
        stats: [
          { label: "Tối ưu vận hành", value: "+40%" },
          { label: "Tiết kiệm thời gian", value: "-30%" },
          { label: "Dữ liệu tập trung", value: "1 nơi" },
        ],
        note: "Tích hợp nhiều cấp quản trị và phân quyền linh hoạt.",
      },
      {
        key: "group",
        label: "Lớp nhóm",
        title: "Tối ưu chi phí cho lớp học nhóm",
        description:
          "Mô hình lớp nhóm giúp học viên tăng tương tác và tiết kiệm ngân sách học tập.",
        bullets: [
          "Lộ trình nhóm theo năng lực đồng đều.",
          "Giảm chi phí mỗi buổi học.",
          "Gia tăng sự tương tác và hợp tác.",
        ],
        stats: [
          { label: "Giảm học phí", value: "-15%" },
          { label: "Tăng tương tác", value: "+28%" },
          { label: "Sĩ số phù hợp", value: "2-4" },
        ],
        note: "Phù hợp với luyện thi nhóm và học kỹ năng mềm.",
      },
    ],
    [],
  );

  const [activeKey, setActiveKey] = useState(solutions[0].key);
  const active = solutions.find((solution) => solution.key === activeKey) ?? solutions[0];

  return (
    <section className={styles.tabSection}>
      <div className={styles.container}>
        <div className={styles.tabHeader}>
          <h2>
            Nền tảng toàn diện <span className={styles.accentText}>đáp ứng mọi nhu cầu học tập</span>
          </h2>
          <p>
            Tùy theo mục tiêu của phụ huynh, học viên hay gia sư, chúng tôi mang đến hành trình học
            tập linh hoạt và tối ưu trải nghiệm.
          </p>
        </div>

        <div className={styles.tabButtons}>
          {solutions.map((solution) => (
            <button
              key={solution.key}
              type="button"
              className={solution.key === activeKey ? styles.tabButtonActive : styles.tabButton}
              onClick={() => setActiveKey(solution.key)}
            >
              {solution.label}
            </button>
          ))}
        </div>

        <div className={styles.tabPanel}>
          <div className={styles.tabPanelContent}>
            <h3>{active.title}</h3>
            <p>{active.description}</p>
            <ul>
              {active.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className={styles.tabStats}>
              {active.stats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
            <button type="button" className={styles.tabCta}>
              Khám phá ngay
            </button>
          </div>
          <div className={styles.tabPanelVisual}>
            <span className={styles.tabBadge}>Kết quả nổi bật</span>
            <p>{active.note}</p>
            <div className={styles.tabFeatureList}>
              <div>
                <h4>Quy trình rõ ràng</h4>
                <p>Đồng bộ lộ trình học và hỗ trợ điều phối chuyên sâu.</p>
              </div>
              <div>
                <h4>Minh bạch dữ liệu</h4>
                <p>Báo cáo và lịch học hiển thị theo thời gian thực.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
