type LogoProps = {
  size?: "sm" | "md" | "lg";
};

export default function Logo({ size = "md" }: LogoProps) {
  const sizes = {
    sm: {
      title: "text-2xl",
      sub: "text-xs",
    },
    md: {
      title: "text-4xl",
      sub: "text-sm",
    },
    lg: {
      title: "text-6xl",
      sub: "text-lg",
    },
  };

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <span
        className={`${sizes[size].title} font-serif tracking-tight text-[var(--primary)]`}
      >
        eplog
      </span>

      <span className="h-px w-16 bg-[var(--border)]" />

      <p className={`${sizes[size].sub} text-[var(--text-light)]`}>
        一卓、一ページ。
      </p>
    </div>
  );
}