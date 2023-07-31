import { countPage, setSearchMovies } from "@/redux/reducers/movies";
import { useState } from "react";
import { useDispatch } from "react-redux";

type MenuFunctions = {
  links: IMenuElements[];
  active: string | undefined;
  setActive: (value: string | undefined) => void;
};

export interface IMenuElements {
  id: string;
  title: string;
  action: (value: string, title: string) => void;
}

export const useMenu = (): MenuFunctions => {
  const dispatch = useDispatch();

  const onChangeOption = (id: string, title: string) => {
    dispatch(setSearchMovies({ id, title }));
    dispatch(countPage(1));
  };

  const links: IMenuElements[] = [
    {
      id: "now_playing",
      title: "Now Playing",
      action: onChangeOption,
    },
    {
      id: "popular",
      title: "Popular",
      action: onChangeOption,
    },
    {
      id: "top_rated",
      title: "Top rated",
      action: onChangeOption,
    },
    {
      id: "upcoming",
      title: "Upcoming",
      action: onChangeOption,
    },
  ];

  const [active, setActive] = useState<string | undefined>(links?.[0]?.id);

  return {
    links,
    active,
    setActive,
  };
};
