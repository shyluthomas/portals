import { getPrivateEnvConfig } from "../envConfig"
import { nextRequest } from "../nextRequest";
interface Dashboard {
    name: string;
    age: number;
}
const mockDataDashbaird: Dashboard[] = [{
    name: "",
    age: 0
}];

const transferDataDtotoData = (dashboard: Dashboard) => ({
    ...dashboard
})
export const getDashboard = () => {
    const resource = getPrivateEnvConfig().service;
    return nextRequest<Dashboard[], Dashboard[]>({
        url: resource,
        service: '/api/mock',
        method: 'GET',
        mockData: mockDataDashbaird,
        transformResponse: (dashboards) => 
            dashboards.map((dashboard) => transferDataDtotoData(dashboard)),
    });
}