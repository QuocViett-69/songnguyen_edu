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

import { redirect } from "next/navigation";

export default function AboutUsPage() {
  redirect("/gioi-thieu-gia-su-uy-tin");
}
    image: image11,
