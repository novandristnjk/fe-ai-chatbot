export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  sources?: Array<{
    text: string;
    payload: { page: number };
    score: number;
  }>;
}

export interface Chat {
  id: string;
  title: string;
  messages: Message[];
  timestamp: Date;
  docId?: string;
}

export interface UploadResponse {
  doc_id: string;
  chunks_extracted: number;
  message: string;
}

export interface ChatResponse {
  query: string;
  response: string;
  sources: Array<{
    text: string;
    payload: {
      page: number;
    };
    score: number;
  }>;
}
