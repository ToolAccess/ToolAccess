import { IRental, ITool } from "./interfaces";
import axios, { AxiosError } from "axios";

//const apiUrl = 'https://tool-server.azurewebsites.net';
const apiUrl = 'http://localhost:5246'

export const fetchCategories = async (): Promise<string[]> => {
  try {
    const response = await axios.get(`${apiUrl}/api/tools/categories`);
    const categories = response.data as string[];
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const fetchTools = async (): Promise<ITool[]> => {
  try {
    const response = await axios.get(`${apiUrl}/api/tools`);
    const tools = response.data as ITool[];
    return tools;
  } catch (error) {
    console.error('Error fetching tools:', error);
    throw error;
  }
};

export const fetchTool = async (id: string): Promise<ITool> => {
  try {
    const response = await axios.get(`${apiUrl}/api/tools/${id}`);
    const tool = response.data as ITool;
    return tool;
  } catch (error) {
    console.error('Error fetching tool:', error);
    throw error;
  }
};

export const fetchToolsByQuery = async (query: string): Promise<ITool[]> => {
  try {
    const response = await axios.get(`${apiUrl}/api/tools/search?query=${query}`);
    const tools = response.data as ITool[];
    return tools;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      if (error.response?.status === 404) {
        return []; // Return an empty array when the product is not found
      }
    }

    console.error('Error fetching tools by query:', error);
    throw error;
  }
};

export const postRentalRequest = async (startDate : string , endDate : string, userId : number, toolId : number ): Promise<IRental> => {
  try {
    const response = await axios.post(`${apiUrl}/api/Rentals`, {
      userId,
      toolId,
      startDate,
      endDate
    });
    const rental = response.data as IRental;
    return rental;
  } catch (error) {
    console.error('Error fetching tool:', error);
    throw error;
  }
};

const isAxiosError = (error: unknown): error is AxiosError => {
  return (error as AxiosError).isAxiosError !== undefined;
};

