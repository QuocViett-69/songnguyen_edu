import { Plus_Jakarta_Sans } from "next/font/google";

import styles from "./page.module.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
});

const classCards = [
  {
    title: "Toán 9 - Ôn thi vào 10",
    level: "Cấp 2",
    mode: "Học tại nhà",
    schedule: "T2/T4/T6 - 19:00",
    desc: "Cần gia sư có kinh nghiệm luyện đề, tập trung kỹ năng giải nhanh.",
    budget: "180k/buổi",
    area: "Quận 3",
  },
  {
    title: "Tiếng Anh giao tiếp",
    level: "Người lớn",
    mode: "Online",
    schedule: "Thứ 7 - 8:30",
    desc: "Cần gia sư có lộ trình tự tin nói, phản xạ và phát âm.",
    budget: "220k/buổi",
    area: "Zoom",
  },
  {
    title: "Hóa 12 - Theo chương trình mới",
    level: "Cấp 3",
    mode: "Học tại nhà",
    schedule: "T3/T5 - 17:30",
    desc: "Học viên cần kế hoạch ôn tập theo chủ đề và bài tập nâng cao.",
    budget: "200k/buổi",
    area: "Bình Thạnh",
  },
  {
    title: "Lập trình Scratch cơ bản",
    level: "Tiểu học",
    mode: "Tại trung tâm",
    schedule: "Chủ nhật - 09:00",
    desc: "Lớp nhỏ, tập trung tư duy và khởi động STEM.",
    budget: "160k/buổi",
    area: "Tân Bình",
  },
];

const matchingSteps = [
  {
    label: "Bước 1",
    title: "Mô tả nhu cầu rõ ràng",
    desc: "Cấp lớp, mục tiêu, thời gian học và học phí mong muốn.",
  },
  {
    label: "Bước 2",
    title: "Lọc gia sư phù hợp",
    desc: "Đề xuất 3 - 5 gia sư theo năng lực và phong cách giảng.",
  },
  {
    label: "Bước 3",
    title: "Chọn và khởi động",
    desc: "Hẹn buổi đầu, cam kết theo dõi và cập nhật tiến độ.",
  },
  {
    label: "Bước 4",
    title: "Báo cáo định kỳ",
    desc: "Nhận nhận xét mỗi 2 tuần để điều chỉnh lộ trình.",
  },
];

export default function LopMoiPage() {
  return (
    <main className={`${styles.page} ${plusJakarta.className}`}>
      <section className={styles.hero}>
        <div className={styles.heroBackdrop} aria-hidden="true" />
        <div className={styles.heroOrb} aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
              <span className={styles.heroTag}>Lớp mới đang cần gia sư</span>
              <h1 className={styles.heroTitle}>
                Tìm lớp phù hợp trong <span>24-48h</span>
              </h1>
              <p className={styles.heroDesc}>
                Tổng hợp lớp mới mỗi ngày, ưu tiên minh bạch học phí và lộ trình.
                Chọn lớp bạn muốn, đội ngũ điều phối sẽ hỗ trợ ngay.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="/dang-nhap-gia-su">
                  Đăng ký nhận lớp
                </a>
                <a className={styles.secondaryButton} href="/hoi-dap-gia-su">
                  Xem quy trình ghép lớp
                </a>
              </div>
            </div>
            <div className={styles.heroCard}>
              <div className={styles.heroCardHeader}>
                <span>Thống kê hôm nay</span>
                <span>Cập nhật 15 phút</span>
              </div>
              <div className={styles.heroStats}>
                <div className={styles.heroStat}>
                  <strong>128</strong>
                  <span>Lớp đang mở</span>
                </div>
                <div className={styles.heroStat}>
                  <strong>86%</strong>
                  <span>Tìm gia sư nhanh</span>
                </div>
                <div className={styles.heroStat}>
                  <strong>4.9/5</strong>
                  <span>Điểm phụ huynh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Lớp mới nổi bật <span>trong tuần</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Lựa chọn nhanh các lớp có nhu cầu cao và thời gian bắt đầu sớm.
          </p>
          <div className={styles.gridCards}>
            {classCards.map((item) => (
              <article className={styles.glassCard} key={item.title}>
                <div className={styles.cardMeta}>
                  <span>{item.level}</span>
                  <span>{item.mode}</span>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                <div className={styles.cardFoot}>
                  <span>{item.schedule}</span>
                  <span>{item.budget} · {item.area}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Quy trình ghép lớp <span>minh bạch</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Tối ưu thời gian, ưu tiên gia sư phù hợp và theo dõi kết quả rõ ràng.
          </p>
          <div className={styles.stepList}>
            {matchingSteps.map((step) => (
              <div className={styles.stepItem} key={step.title}>
                <strong>{step.label}</strong>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.banner}>
            <div>
              <h3>Đồng hành cùng gia sư từ lúc nhận lớp</h3>
              <p>
                Đội ngũ điều phối hỗ trợ lịch học, báo cáo tiến độ và cập nhật
                phản hồi phụ huynh suốt quá trình.
              </p>
            </div>
            <ul className={styles.bannerList}>
              <li>Hỗ trợ chọn lớp phù hợp năng lực</li>
              <li>Gợi nhắc lịch học, thông tin lớp</li>
              <li>Đánh giá định kỳ để cải thiện</li>
              <li>Giải đáp nhanh trong 30 phút</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
