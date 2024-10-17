import { ApiResponse } from "@/types/api";


type FetchService<Data> = () => Promise<ApiResponse<Data>>;

// The fetchResources function takes an array of fetch service calls
export const fetchResources = async <Data>(...fetchServices:  FetchService<Data>[] ): Promise<Data[]> => {
  try {
    // Wait for all fetch service promises to resolve using Promise.all
    const responses = await Promise.all(fetchServices.map(service => service()));
    const results: Data[]= responses.map((response) => {
        if('ok' in response && response.ok) {
            return response.data;
        } else {
            throw new Error(`Error fetching data:}`);
        }
    });
    return results;
    // Return the array of resolved responses
  } catch (error) {
    console.error("Error fetching resources:", error);
    throw error;
  }
}

