import { Be_Vietnam_Pro } from "next/font/google";

import styles from "./page.module.css";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

const values = [
  {
    title: "Minh bạch hồ sơ",
    desc: "Thông tin học tập, kinh nghiệm và đánh giá được xác thực rõ ràng.",
  },
  {
    title: "Lộ trình cá nhân",
    desc: "Tư vấn mục tiêu học tập và đề xuất kế hoạch đồng hành.",
  },
  {
    title: "Đồng hành dài hạn",
    desc: "Theo dõi tiến độ và điều chỉnh để học viên tiến bộ nhanh.",
  },
];

const tutorHighlights = [
  {
    name: "Cô Mai Trần",
    subject: "Toán - Cấp 2",
    level: "Gia sư vàng",
    desc: "Kinh nghiệm 6 năm, chuyên luyện thi vào 10.",
    skills: ["Ôn thi", "Tư duy logic", "Bám sát đề"],
  },
  {
    name: "Thầy Khang Lê",
    subject: "Tiếng Anh",
    level: "Gia sư ưu tú",
    desc: "IELTS 8.0, giỏi giao tiếp và phản xạ.",
    skills: ["Phát âm", "Phản xạ", "Thuyết trình"],
  },
  {
    name: "Cô Yến Nguyễn",
    subject: "Khoa học tự nhiên",
    level: "Gia sư chuyên sâu",
    desc: "Giáo trình STEM, đã đồng hành 120 học viên.",
    skills: ["STEM", "Thực hành", "Kỷ luật"],
  },
];

const flow = [
  {
    label: "Bước 1",
    title: "Đăng ký hồ sơ",
    desc: "Điền thông tin, tải lên bằng cấp và kinh nghiệm.",
  },
  {
    label: "Bước 2",
    title: "Phỏng vấn chuyên môn",
    desc: "Kiểm tra phương pháp dạy và kỹ năng giao tiếp.",
  },
  {
    label: "Bước 3",
    title: "Xếp lớp thử",
    desc: "Thử dạy 1 buổi và nhận phản hồi từ phụ huynh.",
  },
  {
    label: "Bước 4",
    title: "Nhận lớp chính thức",
    desc: "Bắt đầu lộ trình dài hạn và báo cáo định kỳ.",
  },
];

export default function GiaSuPage() {
  return (
    <main className={`${styles.page} ${beVietnamPro.className}`}>
      <section className={styles.hero}>
        <div className={styles.heroBackdrop} aria-hidden="true" />
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
              <span className={styles.heroTag}>Gia sư Song Nguyen EDU</span>
              <h1 className={`${styles.heroTitle} ${beVietnamPro.className}`}>
                Đồng hành để <span>dạy học thực sự hiệu quả</span>
              </h1>
              <p className={styles.heroDesc}>
                Hệ thống gia sư được chọn lọc, luôn có điều phối hỗ trợ. Mỗi
                gia sư là một hướng dẫn viên, đồng hành đến khi học viên đạt
                mục tiêu.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryButton} href="/dang-nhap-gia-su">
                  Đăng ký làm gia sư
                </a>
                <a className={styles.secondaryButton} href="/lop-moi">
                  Xem lớp mới
                </a>
              </div>
            </div>
            <div className={styles.heroPanel}>
              <h3>Thông tin nổi bật</h3>
              <p className={styles.heroDesc}>
                85% gia sư nhận lớp trong 2 tuần đầu, được hỗ trợ kế hoạch dạy.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.heroStat}>
                  <strong>1.300+</strong>
                  <span>Gia sư đang hoạt động</span>
                </div>
                <div className={styles.heroStat}>
                  <strong>4.8/5</strong>
                  <span>Đánh giá từ học viên</span>
                </div>
                <div className={styles.heroStat}>
                  <strong>72%</strong>
                  <span>Gia sư gắn bó lâu dài</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Giá trị dành cho <span>gia sư</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Minh bạch, hỗ trợ và tạo dựng giá trị giảng dạy bền vững.
          </p>
          <div className={styles.valueGrid}>
            {values.map((item) => (
              <article className={styles.valueCard} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Gia sư nổi bật <span>trong tháng</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Điều phối viên gợi ý những gia sư có kỹ năng dạy học tốt.
          </p>
          <div className={styles.tutorList}>
            {tutorHighlights.map((tutor) => (
              <article className={styles.tutorCard} key={tutor.name}>
                <span className={styles.tutorBadge}>{tutor.level}</span>
                <h3>{tutor.name}</h3>
                <p className={styles.tutorMeta}>{tutor.subject}</p>
                <p>{tutor.desc}</p>
                <div className={styles.tutorSkills}>
                  {tutor.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Quy trình trở thành <span>gia sư</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Lộ trình rõ ràng, minh bạch và có đội ngũ đồng hành.
          </p>
          <div className={styles.flow}>
            {flow.map((item) => (
              <div className={styles.flowStep} key={item.title}>
                <strong>{item.label}</strong>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.cta}>
            <div>
              <h2 className={styles.sectionTitle}>Sẵn sàng đồng hành cùng học viên?</h2>
              <p>
                Đăng ký ngay để nhận lớp phù hợp, cùng đội ngũ hỗ trợ
                theo dõi tiến độ và đánh giá chất lượng.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <a className={styles.ctaPrimary} href="/dang-nhap-gia-su">
                Đăng ký gia sư
              </a>
              <a className={styles.ctaSecondary} href="/hoi-dap-gia-su">
                Xem câu hỏi thường gặp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
