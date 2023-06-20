import { ITool } from "../modules/tool/interfaces";

export const fetchCategories = async () => {
    try {
    const data: string[] = await fetch('http://localhost:5246/api/tools/categories')
      .then((response)=> response.json())
      .then((data)=> data);
    return data;    
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

export const fetchTools = async () => {
    try {
    const data: ITool[] = await fetch('http://localhost:5246/api/tools')
        .then((response)=> response.json())
        .then((data)=> data);
    return data;    
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};  