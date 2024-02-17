// Define the base URL for the API, prioritizing the environment variable if it exists, or defaulting to localhost
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";

// Initialize a new Headers object to configure HTTP request headers
const headers = new Headers();
// Append a header to indicate that the request body format and expected response format is JSON
headers.append("Content-Type", "application/json");

/**
 * Asynchronously fetches JSON data from a specified URL.
 *
 * @param {string} url - The URL to fetch data from, appended to the base API URL.
 * @param {Object} options - Configuration options for the fetch request, such as method, headers, and body.
 * @param {Function} onCancel - A callback to execute if the fetch operation is aborted.
 * @returns {Promise} - A promise that resolves with the fetched data, or rejects with an error.
 */

async function fetchJson(url, options, onCancel) {
  try {
    // Perform the fetch request with the provided URL and options
    const response = await fetch(url, options);

    // Check if the response status code is 204 (No Content) and return null if so
    if (response.status === 204) {
      return null;
    }

    // Attempt to parse the response body as JSON
    const payload = await response.json();

    // If the parsed JSON contains an 'error' key, reject the promise with the error message
    if (payload.error) {
      return Promise.reject({ message: payload.error });
    }

    // Assuming the JSON contains a 'data' key, return the data part of the payload
    return payload.data;
  } catch (error) {
    // If an error occurs that is not an AbortError (signifying the request was cancelled),
    // log the error stack and rethrow the error
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    // If the error is an AbortError, resolve the promise with the onCancel callback's result
    return Promise.resolve(onCancel);
  }
}

export async function createAccount(newAccountData) {
  const url = `${API_BASE_URL}/signup`;
  const options = {
    method: "POST",
    headers,
    body: JSON.stringify({ data: newAccountData }),
  };

  return {
    employeeId: 1,
  };
  //return await fetchJson(url, options, {})
}

export async function submitMore(employeeId, moreData) {
  const url = `${API_BASE_URL}/employee/${employeeId}`;
  const options = {
    method: "PUT", //assuming put since employee record is already created
    headers,
    body: JSON.stringify({ data: moreData }),
  };

  //await fetchJson(url, options);
  //does not need to return anything to front-end
}

export async function submitReminder(employeeId, reminderData) {
  const url = `${API_BASE_URL}/employee/${employeeId}`;
  const options = {
    method: "PUT", //assuming put since employee record is already created
    headers,
    body: JSON.stringify({ data: reminderData }),
  };

  //await fetchJson(url, options);
  //does not need to return anything to front-end
}



export async function loadEmployee(employeeId) {
  const url = `${API_BASE_URL}/employee/${employeeId}`;
  const options = {
    method: "GET",
    headers,
  };

  return {
      first_name: "Jane",
      last_name: "Doe",
      average_mood: 3.5,
      helpful_tips: ["meditate", "go for a run", "eat healthier"],
      quote: "Believe in yourself",
      summary: [
        {
          date: "2024-02-16",
          activity: 2.5,
          sleep: 2,
          stress: 3,
        },
      ],
  };
  //return await fetchJson(url, options, {})
}

export async function login(loginData) {
  const url = `${API_BASE_URL}/login`

  const options = {
    method: "GET",
    body: JSON.stringify({data: {loginData}}),
    headers,
  };

  return {
    employeeId: 1,
    isAdmin: false
  }
  //return await fetchJson(url, options, {})

}

export async function submitHealthData(employeeId, healthData) {

  const url = `${API_BASE_URL}/employee/${employeeId}/health`

  const options = {
    method: "PUT",
    body: JSON.stringify({data: {healthData}}),
    headers,
  };

 //does not need to return anything

}

/* Fake data */
