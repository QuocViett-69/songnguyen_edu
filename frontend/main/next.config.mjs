/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/about-us",
				destination: "/gioi-thieu-gia-su-uy-tin",
				permanent: true,
			},
			{
				source: "/faq",
				destination: "/hoi-dap-gia-su",
				permanent: true,
			},
			{
				source: "/login",
				destination: "/dang-nhap-gia-su",
				permanent: true,
			},
			{
				source: "/khu-vuc-gia-su",
				destination: "/tutor",
				permanent: true,
			},
			{
				source: "/khu-vuc-gia-su/:path*",
				destination: "/tutor/:path*",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
