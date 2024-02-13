import Diary from "./components/Diary";
import NewDiaryForm from "./components/NewDiaryForm";
import { useEffect, useState } from "react";
import { getDiaries } from "./services/diaries";
import { DiaryEntry } from "./types/types";
function App() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    const fetchDiaries = async () => {
      const diaries = await getDiaries();
      setDiaries(diaries);
    };
    fetchDiaries();
  }, []);

  return (
    <div>
      <h1>Add new entry</h1>
      <NewDiaryForm diaries={diaries} setDiaries={setDiaries} />
      <h1>Flight Diary</h1>
      {diaries.map((diary) => (
        <Diary key={diary.id} diary={diary} />
      ))}
    </div>
  );
}

export default App;
