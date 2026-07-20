type LogoProps = {
  /**
   * ロゴの表示サイズ
   *
   * sm : 小さい表示（ヘッダーなど）
   * md : 標準表示（トップページなど）
   * lg : 大きい表示（ランディングページなど）
   */
  size?: "sm" | "md" | "lg";
};

/**
 * eplog ロゴコンポーネント
 *
 * サービスの顔となる部分。
 *
 * eplogはSNSではなく、
 * TRPGで生まれた物語を一冊の本として残すサービス。
 *
 * ロゴ下の「一卓、一ページ。」は、
 * ひとつひとつのセッションを大切な記録として残す
 * ブランドコンセプトを表現している。
 */
export default function Logo({ size = "md" }: LogoProps) {
  const sizes = {
    // 小さい表示：ナビゲーション等で使用
    sm: {
      title: "text-2xl",
      sub: "text-xs",
    },

    // 標準表示：通常ページで使用
    md: {
      title: "text-4xl",
      sub: "text-sm",
    },

    // 大きい表示：トップページ・紹介ページ向け
    lg: {
      title: "text-6xl",
      sub: "text-lg",
    },
  };

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {/* サービス名。本のタイトル（表紙）をイメージ */}
      <span
        className={`${sizes[size].title} font-serif tracking-tight text-[var(--primary)]`}
      >
        eplog
      </span>

      {/* 本の装飾線・ページの区切りを表現 */}
      <span className="h-px w-16 bg-[var(--border)]" />

      {/* ブランドメッセージ */}
      <p className={`${sizes[size].sub} text-[var(--text-light)]`}>
        一卓、一ページ。
      </p>
    </div>
  );
}