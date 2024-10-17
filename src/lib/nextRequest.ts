import { ApiResponse } from "@/types/api";
import { Method } from "axios";
import { getPrivateEnvConfig } from "./envConfig";
import { getServerSession } from "next-auth";
import { authOptions } from "./authOptions";

interface NextRequestOptions<Data, Dto> {
    service: string;
    url: string;
    mockData: Data;
    data?: unknown;
    method: Method;
    params?: Record<string, string>;
    transformResponse?: (data: Dto) => Data;
    cache?: boolean;
    tags?: string[];
}
export const nextRequest = async <Data = unknown, Dto = unknown>({
    service,
    url,
    mockData,
    data,
    method,
    params,
    transformResponse,
    cache,
    tags,
}: NextRequestOptions<Data, Dto>): Promise<ApiResponse<Data>> => {

    const envConfig = getPrivateEnvConfig();
    if(envConfig.mockApienabled) {
        return {
            ok: true,
            data: mockData,
        }
    }
    const session = await getServerSession(authOptions);
    console.log('session', session)
    const token = session?.accessToken;
    if(!token) {
        return {
            error: 'You dont have access to this resource.'
        }
    }
    const fetchOptions:Record<string, unknown> = {};
    if(!cache) {
        // Options: 'no-store', 'reload', 'no-cache', 'force-cache', 'only-if-cached'
        fetchOptions.cache = 'no-store'
    }
     // Invalidate cached data for ex: 'posts' tag cache.invalidate(['posts']);
    if(tags) {
        fetchOptions.next = { tags };
    }
    // URL (baseurl, endpoint)
    const fetchUrl = new URL(service, url);
    if(params) {
        Object.entries(params).forEach(([key, value]) => {
            fetchUrl.searchParams.set(key, value);
        })
    }
    let response: Response;
    try {
        response = await fetch(fetchUrl.toString(), {
            method,
            body: data ? JSON.stringify(data): undefined,
            headers: {
                'Content-Type': 'application/json', // Specifies the type of content
                // 'Authorization': `Bearer ${token}`, // Authorization header
              },
            ...fetchOptions,
        });
       
    } catch (error) {
        if(error instanceof Error) {
            response = {
                text: async () => error.message as string,
                ...error
            } as never;
        } else {
            response = {
                text: async () => 'unhandles Error',
            } as never;
        }
    }

    let respondData: Data;
    const textResponse = await response.text();
    try {
        respondData = JSON.parse(textResponse);
    } catch(error) {
        respondData = error as Data;
    }
    if(!response.ok) {
        return {
            ok: false,
            error: respondData as Data,
        }
    }
    return {
        ok: true,
        data: transformResponse ? transformResponse(respondData as never): respondData,
    }

    
}