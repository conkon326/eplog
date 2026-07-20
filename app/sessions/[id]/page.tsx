import SessionPage from "@/components/session/SessionPage";

const session = {
  id:"001",
  title:"忘れられた館",
  system:"Call of Cthulhu",
  date:"2026.07.20",
  kp:"こんぽた",
  players:[
    "こんぽた",
    "友人A",
    "友人B"
  ],
  characters:[
    "探偵",
    "医師",
    "大学教授"
  ],
  playTime:"4時間",
  memory:
    "最後の選択を前に、みんなで長い時間話し合った。",
  impression:
    "何気ない会話から生まれた場面が忘れられない思い出になった。",
};


export default function Page(){

 return (
   <SessionPage session={session}/>
 )

}