import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import DashboardPage from './page'; 

const mockgetDashboardData = {ok: true, data : 'dashboard'};
const mockgetDashboard = jest.fn();

// Mock the service module
jest.mock('@/lib/services/dashboardService', () => {
  return {
    getDashboard: () =>mockgetDashboard(mockgetDashboardData), // Use the mock function
  };
});
const mockDashboard = jest.fn();
jest.mock('@/components/screen/dashboard/Dashboard', () => {
 return () => mockDashboard();
});


describe('DashboardPage', () => {
  it('should call getDashboard when the Dashboard component loads', async () => {

    // Render the component
    render(await DashboardPage());

    // Wait for the component to trigger the mocked function
    await waitFor(() => {
      expect(mockgetDashboard).toHaveBeenLastCalledWith(mockgetDashboardData); // Check if the mock function was called
      expect(mockDashboard).toHaveBeenCalled();
    });
  });
});
