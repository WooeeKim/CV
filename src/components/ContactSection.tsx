import { profile } from "../data/profile";

export function ContactSection() {
  const { contact } = profile;

  return (
    <section id="contact" className="space-y-4 py-12">
      <h2 className="text-xl font-semibold">Contact</h2>
      <p className="text-sm text-gray-700">
        협업 제안, 강의 문의, 또는 단순히 궁금한 점이 있다면 편하게 연락 주세요.
      </p>
      <div className="flex flex-wrap gap-3">
        <a
          href={`mailto:${contact.email}`}
          className="rounded-full bg-ink px-4 py-2 text-sm text-white"
        >
          {contact.email}
        </a>
        <a
          href={contact.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-800"
        >
          GitHub
        </a>
        {contact.cv ? (
          <a
            href={contact.cv}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-800"
          >
            CV
          </a>
        ) : null}
      </div>
    </section>
  );
}
