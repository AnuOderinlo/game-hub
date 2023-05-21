import Axios from "../services/api-clients";
import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = () => useData<Platform>("/games");

export default useGames;
