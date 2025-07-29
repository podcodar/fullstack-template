import HeroSection from "@packages/components/HeroSection";
import { site } from "@packages/settings";

import type { MetaFunction } from "react-router";

const { title, description } = site;

export const meta: MetaFunction = () => {
  return [{ title }, { name: "description", content: description }];
};

export default function Index() {
  return (
    <>
      <HeroSection />

      <footer>
        <div className="footer footer-center p-10 bg-base-200 text-base-content">
          <div>
            <p>{title}</p>
            <p>{description}</p>
            <p>© {new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
