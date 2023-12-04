import axios from 'axios';
import { extractErrorMessage } from '../utils/extractErrorMessage/extractErrorMessage';
import { API_URL } from './api';

export interface RemainingSpotsResponse {
  facility_id: number
  nurse_type_needed: string
  remaining_spots: string
}

export interface NurseJobAvailabilityResponse {
  nurse_id: number
  nurse_name: string
  nurse_type: string
  available_jobs: string
}

export interface NurseCoWorkersResponse {
  nurse_name: string
}


export const executeQ4Query = async (): Promise<RemainingSpotsResponse[]> => {
  try {
    const response = await axios.get<RemainingSpotsResponse[]>(`${API_URL}/remaining-spots`);
    return response.data;
  } catch (error) {
    throw extractErrorMessage(error, "An unknown error occurred while fetching remaining spots.");
  }
};

export const executeQ5Query = async (): Promise<NurseJobAvailabilityResponse[]> => {
  try {
    const response = await axios.get<NurseJobAvailabilityResponse[]>(`${API_URL}/nurse-job-availability`);
    return response.data;
  } catch (error) {
    throw extractErrorMessage(error, "An unknown error occurred while fetching nurse job availability.");
  }
};

export const executeQ6Query = async (): Promise<NurseCoWorkersResponse[]> => {
  try {
    const response = await axios.get<NurseCoWorkersResponse[]>(`${API_URL}/nurses/Anne/co-workers`);
    return response.data;
  } catch (error) {
    throw extractErrorMessage(error, "An unknown error occurred while fetching remaining spots.");
  }
};
