import axios from "axios";
import { apiBaseUrl } from "./constants";
import { DiaryEntry, NewDiaryEntry } from "../types/types";

const getDiaries = async () => {
  const { data } = await axios.get<DiaryEntry[]>(`${apiBaseUrl}/diaries`);
  console.log(data);
  return data;
};

const addDiary = async (diary: NewDiaryEntry): Promise<DiaryEntry> => {
  const { data } = await axios.post<DiaryEntry>(`${apiBaseUrl}/diaries`, diary);
  return data;
};
export { getDiaries, addDiary };
