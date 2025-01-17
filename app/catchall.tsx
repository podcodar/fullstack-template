import Section from "@packages/components/Section";

function PageNotFound() {
  return (
    <Section className="px-0 py-56 h-[100vh]">
      <div className="flex flex-col items-center space-y-2 text-center md:space-y-4">
        <h1 className="font-semibold text-3xl leading-tight sm:text-4xl">
          Oops! Page not found.
        </h1>
        <p className="text-purple-400">(╯°□°)╯︵ ┻━┻</p>
      </div>
    </Section>
  );
}

export default PageNotFound;
