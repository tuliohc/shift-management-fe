import axios from 'axios';
import { extractErrorMessage } from '../utils/extractErrorMessage/extractErrorMessage';
import { API_URL } from './api';

export interface ShiftsResponse {
    shift_id: number
    facility_id: number
    shift_date: Date
    start_time: string
    end_time: string
    facility_name: string
}

export interface ShiftsOverlapResponse {
  totalOverlapMinutes: number
  maxOverlapThreshold: number
  exceedsThreshold: boolean
}

export const getShifts = async (): Promise<ShiftsResponse[]> => {
  try {
    const response = await axios.get<ShiftsResponse[]>(`${API_URL}/shifts`);
    return response.data;
  } catch (error) {
    throw extractErrorMessage(error, "An unknown error occurred while fetching shifts.");
  }
};

export const getShiftsOverlap = async (shiftId1: number, shiftId2: number): Promise<ShiftsOverlapResponse> => {
  try {
    const response = await axios.get<ShiftsOverlapResponse>(`${API_URL}/shifts/overlap/${shiftId1}/${shiftId2}`);
    return response.data;
  } catch (error) {
    throw extractErrorMessage(error, "An unknown error occurred while fetching shifts overlap.");
  }
};