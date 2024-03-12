import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { SaveChatMessagesPayload } from "@/components/helper/interfaces";
import { ChatSecUrl } from "../../config/constants";
import { ApiError, config, handleError } from "../../config/configuration";

//for creating a chat room with the user
export const createNewChatRoom = createAsyncThunk(
  "chat/createChatRoom",
  async (chatRoomData: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${ChatSecUrl}/room/creat-chat-room`,
        chatRoomData,
        config
      );
      return data;
    } catch (err: any) {
      const axiosError = err as AxiosError<ApiError>;
      return handleError(axiosError, rejectWithValue);
    }
  }
);



export const saveChatMessages = createAsyncThunk(
  "chat/saveChatMessages",
  async (chatMessage: SaveChatMessagesPayload, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${ChatSecUrl}/message/save-message`,
        chatMessage,
        config
      );
      return data;
    } catch (err: any) {
      const axiosError = err as AxiosError<ApiError>;
      return handleError(axiosError, rejectWithValue);
    }
  }
  
);

export const fetchChatUsers = createAsyncThunk(
  "chat/fetchChatUsers",
  async (companyId: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${ChatSecUrl}/room/fetch-chat-users/${companyId}`,
        config
      );
      return data;
    } catch (err: any) {
      const axiosError = err as AxiosError<ApiError>;
      return handleError(axiosError, rejectWithValue);
    }
  }
);
export const fetchChatUserChat = createAsyncThunk(
  "chat/fetchChatUserChat",
  async ({senderId , recieverId}:{senderId : string , recieverId : string}, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${ChatSecUrl}/message/fetch-chat-userChat/${senderId}/${recieverId}`,
        config
      );
      return data;
    } catch (err: any) {
      const axiosError = err as AxiosError<ApiError>;
      return handleError(axiosError, rejectWithValue);
    }
  }
);
