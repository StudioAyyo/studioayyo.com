// next.config.ts
import { withCloudflare } from "@cloudflare/next-on-pages";
import type { NextConfig } from "next";

const baseConfig: NextConfig = {
  images: { unoptimized: true },
  // any other Next.js config you need…
};

export default withCloudflare(baseConfig);

