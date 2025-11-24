import axios from 'axios';
import type { UploadResponse, ChatResponse } from './types';

const API_BASE_URL = 'http://127.0.0.1:8000';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const chatAPI = {
  uploadDocument: async (file: File): Promise<UploadResponse> => {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await apiClient.post<UploadResponse>('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  sendMessage: async (query: string): Promise<ChatResponse> => {
    const response = await apiClient.post<ChatResponse>('/chat', { query });
    return response.data;
  },
};

export default apiClient;