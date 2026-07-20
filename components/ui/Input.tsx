import React from "react";

/**
 * 共通入力コンポーネント
 *
 * eplog内のフォームで使用する入力欄。
 *
 * デザインを統一し、
 * 思い出を記録するページ全体の雰囲気を揃える。
 */
export default function Input(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      {...props}
      className="
        w-full
        rounded-lg
        border
        border-[var(--border)]
        bg-transparent
        p-3
        outline-none
        transition
        focus:border-[var(--primary)]
      "
    />
  );
}