import type { Metadata } from "next";
import Image from "next/image";
import { Be_Vietnam_Pro } from "next/font/google";

import AboutUsTabs from "./AboutUsTabs";
import styles from "./page.module.css";
import image11 from "@/components/assets/11.jpg";
import image12 from "@/components/assets/12.jpg";
import image13 from "@/components/assets/13.jpg";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "About Us | Nền tảng đặt gia sư uy tín và minh bạch",
  description:
    "Tìm hiểu về chúng tôi: đội ngũ giáo dục tận tâm, quy trình chọn lọc gia sư nghiêm ngặt và hệ sinh thái hỗ trợ phụ huynh học viên tối ưu.",
};

const selectionSteps = [
  {
    title: "Xác thực hồ sơ",
    description:
      "Kiểm tra học vấn, kinh nghiệm, chứng chỉ và đánh giá đạo đức nghề nghiệp.",
    icon: "check",
  },
  {
    title: "Phỏng vấn chuyên môn",
    description:
      "Đánh giá năng lực sư phạm, phương pháp giảng dạy và khả năng truyền đạt.",
    icon: "briefcase",
  },
  {
    title: "Dạy thử & phản hồi",
    description:
      "Tổ chức buổi dạy mẫu, ghi nhận phản hồi để hoàn thiện hồ sơ gia sư.",
    icon: "spark",
  },
  {
    title: "Theo dõi định kỳ",
    description:
      "Giám sát chất lượng theo từng lớp học và cải tiến liên tục.",
    icon: "chart",
  },
];

const commitments = [
  {
    title: "Minh bạch học phí",
    description: "Bảng giá rõ ràng theo cấp lớp và mục tiêu học tập.",
    icon: "shield",
  },
  {
    title: "Báo cáo tiến độ",
    description: "Cập nhật định kỳ để phụ huynh dễ theo dõi và điều chỉnh.",
    icon: "report",
  },
  {
    title: "Đổi gia sư linh hoạt",
    description: "Hỗ trợ điều phối nhanh nếu cần thay đổi phương pháp.",
    icon: "swap",
  },
  {
    title: "An toàn & bảo mật",
    description: "Thông tin phụ huynh và học viên luôn được bảo vệ.",
    icon: "lock",
  },
];

const ecosystemItems = [
  "Đội ngũ điều phối đồng hành xuyên suốt lộ trình học.",
  "Kho tài liệu học tập cập nhật theo từng cấp lớp.",
  "Kênh hỗ trợ nhanh 24/7 cho phụ huynh và học viên.",
  "Hệ thống theo dõi mục tiêu và đánh giá định kỳ.",
];

const reasonStats = [
  { value: "770,000+", label: "Gia đình tin dùng" },
  { value: "5,500+", label: "Lộ trình học cá nhân" },
  { value: "3,250+", label: "Buổi học mỗi tháng" },
  { value: "1,300+", label: "Gia sư hoạt động" },
];

const reasonCards = [
  {
    title: "Dễ dùng - triển khai nhanh",
    description:
      "Quy trình ghép lớp tinh gọn, chỉ cần 3 bước để bắt đầu buổi học đầu tiên.",
    image: image11,
    icon: "rocket",
  },
  {
    title: "Kết nối dữ liệu liền mạch",
    description:
      "Tập trung báo cáo học tập, lịch học và phản hồi vào một nơi duy nhất.",
    image: image12,
    icon: "link",
  },
  {
    title: "Tương tác & theo dõi liên tục",
    description:
      "Hệ thống nhắc lịch, báo cáo tiến độ và đề xuất điều chỉnh theo tuần.",
    image: image13,
    icon: "pulse",
  },
];

const iconMap = {
  check: (
    <path d="M5 12l4 4 10-10" />
  ),
  briefcase: (
    <path d="M4 8h16v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8zm4-3h8a1 1 0 0 1 1 1v2H7V6a1 1 0 0 1 1-1z" />
  ),
  spark: (
    <path d="M12 3l2.2 5.2L20 10l-5.8 1.8L12 17l-2.2-5.2L4 10l5.8-1.8L12 3z" />
  ),
  chart: (
    <path d="M4 18h16M7 15v-4M12 15V7M17 15v-6" />
  ),
  shield: (
    <path d="M12 3l7 3v5c0 4.4-3 8.4-7 10-4-1.6-7-5.6-7-10V6l7-3z" />
  ),
  report: (
    <path d="M7 3h7l4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
  ),
  swap: (
    <path d="M7 7h9l-2-2m2 2-2 2M17 17H8l2 2m-2-2 2-2" />
  ),
  lock: (
    <path d="M7 11V8a5 5 0 0 1 10 0v3M6 11h12v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8z" />
  ),
  rocket: (
    <path d="M12 3c3 1 5 3.5 5.5 6.5L14 13l-3.5-3.5C8.5 9 10 5 12 3z" />
  ),
  link: (
    <path d="M9 7h-2a4 4 0 0 0 0 8h2m6-8h2a4 4 0 0 1 0 8h-2M8 12h8" />
  ),
  pulse: (
    <path d="M3 12h4l2-5 4 10 2-5h4" />
  ),
};

export default function AboutUsPage() {
  return (
    <main className={`${styles.page} ${beVietnamPro.className}`}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <p className={styles.heroTag}>Về chúng tôi</p>
            <h1>
              Về chúng tôi: Kết nối <span className={styles.accentText}>gia sư chất lượng</span> và
              <span className={styles.accentText}> học viên phù hợp</span>
            </h1>
            <p>
              Chúng tôi là nền tảng kết nối gia sư và học viên, tập trung vào chất lượng giảng dạy,
              sự minh bạch học phí và hiệu quả tiến bộ. Mỗi gia sư được tuyển chọn kỹ lưỡng và
              theo dõi định kỳ để đảm bảo kết quả ổn định.
            </p>
            <div className={styles.heroHighlights}>
              <div>
                <strong>3 tầng kiểm duyệt</strong>
                <span>Hồ sơ - Chuyên môn - Dạy thử</span>
              </div>
              <div>
                <strong>1 lộ trình cá nhân</strong>
                <span>Theo sát mục tiêu học tập</span>
              </div>
              <div>
                <strong>0 rủi ro gián đoạn</strong>
                <span>Hỗ trợ đổi gia sư nhanh</span>
              </div>
            </div>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="/lop-moi">
                Đặt tư vấn miễn phí
              </a>
              <a className={styles.secondaryButton} href="/hoi-dap-gia-su">
                Xem quy trình chọn lọc
              </a>
            </div>
          </div>
          <div className={styles.heroStats}>
            <div>
              <h3>1.200+</h3>
              <span>Lớp đang hoạt động</span>
            </div>
            <div>
              <h3>98%</h3>
              <span>Phụ huynh hài lòng</span>
            </div>
            <div>
              <h3>24-48h</h3>
              <span>Thời gian ghép gia sư</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.containerGrid}>
          <div>
            <h2>
              Sứ mệnh & <span className={styles.accentText}>tầm nhìn</span>
            </h2>
            <p>
              Sứ mệnh của chúng tôi là mang đến trải nghiệm học tập cá nhân hóa và hiệu quả,
              giúp học viên tự tin tiến bộ theo đúng lộ trình. Tầm nhìn là trở thành nền tảng
              gia sư uy tín nhất cho các gia đình Việt.
            </p>
          </div>
          <div className={styles.highlightCard}>
            <h3>Cam kết đồng hành dài hạn</h3>
            <p>
              Chúng tôi không chỉ ghép lớp, mà còn theo dõi tiến độ để đảm bảo học viên đạt mục tiêu.
              Mọi phản hồi đều được xử lý nhanh và minh bạch.
            </p>
            <div className={styles.highlightStats}>
              <div>
                <strong>72%</strong>
                <span>Gia đình học dài hạn</span>
              </div>
              <div>
                <strong>4.8/5</strong>
                <span>Điểm đánh giá trung bình</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.reasonSection}>
        <div className={styles.container}>
          <div className={styles.reasonHeader}>
            <h2>
              Tại sao nên chọn <span className={styles.accentText}>Song Nguyen EDU</span>?
            </h2>
            <p>
              Nền tảng vận hành xuyên suốt: từ ghép gia sư, theo dõi tiến độ đến tối ưu kết quả học
              tập cho từng học viên.
            </p>
          </div>
          <div className={styles.reasonStats}>
            {reasonStats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className={styles.reasonGrid}>
            {reasonCards.map((card, index) => (
              <article
                key={card.title}
                className={`${styles.reasonCard} ${index === 1 ? styles.reasonCardAlt : ""}`}
              >
                <div className={styles.reasonIcon}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {iconMap[card.icon as keyof typeof iconMap]}
                  </svg>
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className={styles.reasonImage}>
                  <Image src={card.image} alt={card.title} fill sizes="(max-width: 960px) 100vw, 30vw" />
                  <div className={styles.reasonOverlay}>
                    <div className={styles.reasonOverlayContent}>
                      <span>Góc nhìn thực tế</span>
                      <strong>Trải nghiệm học tập mượt mà</strong>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AboutUsTabs />

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>
            Quy trình chọn lọc <span className={styles.accentText}>gia sư</span>
          </h2>
          <div className={styles.stepGrid}>
            {selectionSteps.map((step, index) => (
              <article key={step.title} className={styles.stepCard}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div className={styles.stepIcon}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {iconMap[step.icon as keyof typeof iconMap]}
                  </svg>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2>
            Cam kết <span className={styles.accentText}>chất lượng</span> & an toàn
          </h2>
          <div className={styles.commitmentGrid}>
            {commitments.map((item) => (
              <article key={item.title} className={styles.commitmentCard}>
                <div className={styles.commitmentIcon}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {iconMap[item.icon as keyof typeof iconMap]}
                  </svg>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.containerGrid}>
          <div>
            <h2>
              Hệ sinh thái <span className={styles.accentText}>hỗ trợ</span> phụ huynh & học viên
            </h2>
            <p>
              Hệ thống của chúng tôi giúp phụ huynh dễ theo dõi tiến bộ, đồng thời hỗ trợ gia sư
              tối ưu lộ trình học cho từng học viên.
            </p>
            <ul className={styles.bulletList}>
              {ecosystemItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.quoteCard}>
            <p>
              "Nhờ quy trình rõ ràng và hỗ trợ tận tâm, phụ huynh luôn cảm thấy an tâm về chất lượng
              gia sư và tiến độ học tập."
            </p>
            <span>Chia sẻ từ phụ huynh học viên</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.partnerHeader}>
            <h2>
              Đồng hành cùng <span className={styles.accentText}>cộng đồng giáo dục</span>
            </h2>
            <p>
              Mạng lưới gia sư và trung tâm hợp tác giúp học viên tiếp cận đa dạng môn học, kỹ năng
              và chương trình luyện thi.
            </p>
          </div>
          <div className={styles.partnerGrid}>
            {[
              "Toán - Lý - Hóa",
              "Ngữ văn",
              "Tiếng Anh",
              "IELTS/TOEIC",
              "Kỹ năng học tập",
              "Luyện thi lớp 10",
              "Luyện thi THPT",
              "Kỹ năng mềm",
            ].map((item) => (
              <div key={item} className={styles.partnerChip}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Sẵn sàng bắt đầu hành trình học tập hiệu quả?</h2>
          <p>
            Để lại thông tin để nhận tư vấn miễn phí và lộ trình phù hợp cho con ngay hôm nay.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="/lop-moi">
              Đặt lịch tư vấn
            </a>
            <a className={styles.secondaryButtonLight} href="/hoc-phi">
              Xem học phí
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
