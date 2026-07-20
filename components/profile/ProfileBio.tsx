type ProfileBioProps = {
  children: string;
};

/**
 * プロフィール紹介文
 *
 * 数字や実績ではなく、
 * その人がTRPGで過ごしてきた時間や思い出を残す場所。
 */
export default function ProfileBio({
  children,
}: ProfileBioProps) {
  return (
    <section
      className="
        mt-10
        rounded-xl
        border
        border-[var(--border)]
        bg-[var(--surface)]
        p-8
      "
    >
      <h2
        className="
          font-serif
          text-xl
          text-[var(--primary)]
        "
      >
        この本について
      </h2>

      <p
        className="
          mt-5
          leading-8
          text-[var(--text-light)]
        "
      >
        {children}
      </p>
    </section>
  );
}