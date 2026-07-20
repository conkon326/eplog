/**
 * TRPGセッション情報
 *
 * eplogではセッションを
 * SNS投稿ではなく、一冊の本として扱う。
 */
export type Session = {
  id: string;

  /**
   * 物語のタイトル
   */
  title: string;

  /**
   * 使用したTRPGシステム
   */
  system: string;

  /**
   * 遊んだ日付
   */
  date: string;

  /**
   * KP / GM
   */
  kp: string;

  /**
   * PL / 同卓者
   */
  players?: string[];

  /**
   * 思い出や印象的な一文
   */
  memory?: string;
};