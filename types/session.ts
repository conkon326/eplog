/**
 * TRPGセッション情報
 *
 * eplogではセッションを
 * SNS投稿ではなく、一冊の本として扱う。
 */
export type SessionPlayer = {
  name: string;
  handleName?: string;
};

export type Session = {
  id: string;

  /**
   * この卓をどういう立場で記録したか
   */
  recordedAs?: "KP" | "PL";

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
   * 卓の期間（複数日またがる場合）
   */
  period?: string;

  /**
   * 卓の月（月単位で記録する場合）
   */
  month?: string;

  /**
   * KP / GM
   */
  kp: string;

  /**
   * PL / 同卓者
   */
  players?: SessionPlayer[];

  /**
   * 登場したキャラクター
   */
  characters?: string[];

  /**
   * 思い出や印象的な一文
   */
  memory?: string;
};