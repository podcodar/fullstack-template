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
    </>
  );
}
