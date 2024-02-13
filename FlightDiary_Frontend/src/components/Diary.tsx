import { DiaryEntry } from "../types/types";

interface DiaryProps {
  diary: DiaryEntry;
}

const Diary = ({ diary }: DiaryProps) => {
  return (
    <div>
      <h2>{diary.date}</h2>
      <p>Weather: {diary.weather}</p>
      <p>Visibility: {diary.visibility}</p>
      {diary.comment && <p>Comment: {diary.comment}</p>}
    </div>
  );
};

export default Diary;
