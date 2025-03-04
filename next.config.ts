import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Thêm domain của ảnh vào đây
  },
};

export default nextConfig;
