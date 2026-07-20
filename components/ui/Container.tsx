import { ReactNode } from "react";

/**
 * ページ共通の横幅制御用コンテナ
 *
 * 各ページで同じ余白・最大幅を保つために使用する。
 *
 * eplogでは本のページをめくるような読みやすさを重視し、
 * コンテンツが広がりすぎないように表示領域を制御する。
 *
 * @param children - コンテナ内に表示するページコンテンツ
 */
type Props = {
  children: ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div
      className="
        mx-auto
        w-full
        max-w-6xl
        px-6
      "
    >
      {children}
    </div>
  );
}