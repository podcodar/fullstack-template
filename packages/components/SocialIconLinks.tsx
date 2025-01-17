import { GithubIcon, LinkedInIcon } from "@packages/components/icons";
import { links } from "@packages/settings";

interface Props {
  githubUrl?: string;
  linkedinUrl?: string;
}

export default function SocialIconLinks({
  githubUrl = links.social.github,
  linkedinUrl = links.social.linkedin,
}: Props) {
  return (
    <div className="flex flex-row justify-center text-lg">
      <a
        href={githubUrl}
        target="_blank"
        rel="noreferrer"
        className="btn btn-ghost"
      >
        <GithubIcon />
      </a>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noreferrer"
        className="btn btn-ghost"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
}
