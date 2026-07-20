import { ReactNode } from "react";
import Link from "next/link";

type Props = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
};

/**
 * 共通ボタンコンポーネント
 *
 * eplog内の入口となるボタン。
 *
 * hrefがある場合：
 * → 本を開くなどページ移動に使用
 *
 * hrefがない場合：
 * → 保存などの操作に使用
 */
export default function Button({
  children,
  href,
  type = "button",
}: Props) {
  const className = `
    rounded-full
    border
    border-[var(--primary)]
    bg-[var(--surface)]
    px-8
    py-3
    text-sm
    tracking-wide
    text-[var(--primary)]
    transition-all
    duration-500
    hover:-translate-y-1
    hover:bg-[var(--primary)]
    hover:text-white
  `;

  // ページ移動用
  if (href) {
    return (
      <Link
        href={href}
        className={className}
      >
        {children}
      </Link>
    );
  }

  // 操作用
  return (
    <button
      type={type}
      className={className}
    >
      {children}
    </button>
  );
}