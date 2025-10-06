import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Обработка ошибок
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// Workers API
export const workersAPI = {
  getAll: (page = 0, size = 10, sortBy = null, sortDirection = 'ASC') => {
    const params = { page, size };
    if (sortBy) {
      params.sortBy = sortBy;
      params.sortDirection = sortDirection;
    }
    return api.get('/workers', { params });
  },

  getById: (id) => api.get(`/workers/${id}`),

  create: (worker) => api.post('/workers', worker),

  update: (id, worker) => api.put(`/workers/${id}`, worker),

  delete: (id) => api.delete(`/workers/${id}`),

  deleteByRating: (rating) => api.delete(`/workers/by-rating/${rating}`),

  getRatingSum: () => api.get('/workers/rating/sum'),

  searchByName: (prefix) => api.get('/workers/search/by-name', { params: { prefix } }),

  hireToOrganization: (workerId, organizationId) => 
    api.post(`/workers/${workerId}/hire/${organizationId}`),

  indexSalary: (workerId, coefficient) => 
    api.post(`/workers/${workerId}/index-salary`, null, { params: { coefficient } }),
};

// Organizations API
export const organizationsAPI = {
  getAll: () => api.get('/organizations'),

  getById: (id) => api.get(`/organizations/${id}`),

  create: (organization) => api.post('/organizations', organization),

  update: (id, organization) => api.put(`/organizations/${id}`, organization),

  delete: (id) => api.delete(`/organizations/${id}`),
};

export default api;

