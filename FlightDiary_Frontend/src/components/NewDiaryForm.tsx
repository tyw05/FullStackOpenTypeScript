import React from "react";
import { useRef } from "react";
import { addDiary } from "../services/diaries";
import { DiaryEntry, Visibility, Weather } from "../types/types";
import { parseVisibility, parseWeather } from "../utilis/toNewDiary";

interface NewDiaryFormProps {
  diaries: DiaryEntry[];
  setDiaries: (diaries: DiaryEntry[]) => void;
}

const NewDiaryForm = ({ diaries, setDiaries }: NewDiaryFormProps) => {
  const inputRef = useRef<{
    date: HTMLInputElement | null;
    visibility: HTMLInputElement | null;
    weather: HTMLInputElement | null;
    comment: HTMLInputElement | null;
  }>({
    date: null,
    visibility: null,
    weather: null,
    comment: null,
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (
      !inputRef.current.date ||
      !inputRef.current.visibility ||
      !inputRef.current.weather ||
      !inputRef.current.comment
    )
      return console.log("error");
    const newDiary = {
      date: inputRef.current.date.value,
      visibility: parseVisibility(inputRef.current.visibility.value),
      weather: parseWeather(inputRef.current.weather.value),
      comment: inputRef.current.comment.value,
    };
    console.log(newDiary);
    const updateData = await addDiary(newDiary);
    setDiaries(diaries.concat(updateData));
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            ref={(el) => (inputRef.current.date = el)}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <label style={{ marginRight: "12px" }}>Visibility</label>
          {Object.values(Visibility).map((visibility, index) => (
            <div key={index}>
              <label>{visibility}</label>
              <input
                key={visibility}
                type="radio"
                name="visibility"
                value={visibility}
                ref={(el) => (inputRef.current.visibility = el)}
              />
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <label style={{ marginRight: "12px" }}>Weather</label>
          {Object.values(Weather).map((weather, index) => (
            <div key={index}>
              <label>{weather}</label>
              <input
                key={weather}
                type="radio"
                name="visibility"
                value={weather}
                ref={(el) => (inputRef.current.weather = el)}
              />
            </div>
          ))}
        </div>
        <div>
          <label htmlFor="comment">Comment</label>
          <input
            type="text"
            id="comment"
            ref={(el) => (inputRef.current.comment = el)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewDiaryForm;
