import React, { createContext, useContext, useEffect, useState } from 'react';
import { axiosClient } from '../infra/http/axios-http-client';

export interface ITagProperties {
  id: string;
  tag: string;
  value: number;
  type: string;
  timestamp: number;
}

export type TagContextType = {
  tags: ITagProperties[];
  fetchTags: () => Promise<void>;
};

const TagContext = createContext<TagContextType | null>(null);

const TagProvider = ({ children }: any) => {
  const [tags, setTags] = useState<ITagProperties[]>([]);

  const fetchTags = async () => {
    await axiosClient
      .get('/onboarding')
      .then((res) => {
        setTags(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <TagContext.Provider
      value={{
        tags,
        fetchTags,
      }}
    >
      {children}
    </TagContext.Provider>
  );
};

const useTag = () => {
  const context = useContext(TagContext);

  return context;
};

export { TagProvider, useTag };
