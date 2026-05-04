import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="login-shell">
      <section className="login-card">
        <h1>Đăng nhập quản trị</h1>
        <p>Giao diện mẫu cho luồng đăng nhập quản trị viên.</p>
        <Link href="/dashboard">
          <button type="button">Vào trang quản trị</button>
        </Link>
      </section>
    </main>
  );
}
