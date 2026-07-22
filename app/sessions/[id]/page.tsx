import SessionDetail from "@/components/session/SessionDetail";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

/**
 * セッション詳細ページ
 *
 * 本棚から開いた一冊の中身。
 *
 * eplogではセッションを
 * 投稿ではなく、人生の記録として残す。
 */
export default async function SessionPage({ params }: Props) {
  const { id } = await params;

  return <SessionDetail id={id} />;
}