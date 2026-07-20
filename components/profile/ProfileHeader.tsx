type ProfileHeaderProps = {
  name: string;
  trpgHistory?: string;
};

/**
 * プロフィールの表紙部分
 *
 * eplogではプロフィールはSNSの自己紹介ではなく、
 * その人のTRPG人生をまとめた一冊の表紙として扱う。
 */
export default function ProfileHeader({
  name,
  trpgHistory,
}: ProfileHeaderProps) {
  return (
    <header className="text-center">

      {/* ユーザー名 */}
      <h1
        className="
          font-serif
          text-4xl
          text-[var(--primary)]
        "
      >
        {name}
      </h1>

      {/* TRPG歴 */}
      {trpgHistory && (
        <p
          className="
            mt-4
            text-sm
            text-[var(--text-light)]
          "
        >
          TRPG歴 {trpgHistory}
        </p>
      )}

    </header>
  );
}