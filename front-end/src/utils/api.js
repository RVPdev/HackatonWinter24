// Define the base URL for the API, prioritizing the environment variable if it exists, or defaulting to localhost
// const API_BASE_URL =
//   process.env.REACT_APP_API_BASE_URL || "http://localhost:5001";


  const API_BASE_URL = "https://hackathon-services.onrender.com"

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

  console.log(`base url: ${API_BASE_URL}`)
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

  // return {
  //   employeeId: 1,
  // };

  const response = await fetchJson(url, options, {})
  console.log(JSON.stringify(response))
  return response.user_id;
}

export async function submitMore(user_id, moreData) {
  const url = `${API_BASE_URL}/signup/additional_info`;
  const options = {
    method: "PUT", //assuming put since employee record is already created
    headers,
    body: JSON.stringify({ data: {...moreData, user_id }, }),
  };

  return await fetchJson(url, options)
}

export async function submitReminder(user_id, reminderData) {
  const url = `${API_BASE_URL}/signup/additional_info/schedule_reminder`;
  const options = {
    method: "PUT", 
    headers,
    body: JSON.stringify({ data: {...reminderData, user_id} }),
  };

  await fetchJson(url, options);
  //does not need to return anything to front-end
}



export async function loadEmployee(employeeId) {
  const url = `${API_BASE_URL}/employee/${employeeId}`;
  const options = {
    method: "GET",
    headers,
  };

  return {
      user_first_name: "Jane",
      user_last_name: "Doe",
      user_average_mood: 3.5,
      dataset: [
        {
          seriesname: "Activity",
          data: [
            { value: "4" },
            { value: "2" },
            { value: "3" },
            { value: "4" },
            { value: "5" },
            { value: "3" },
            { value: "5" }
          ]
        },
        {
          seriesname: "Sleep",
          data: [
            { value: "4" },
            { value: "3" },
            { value: "1" },
            { value: "2" },
            { value: "3" },
            { value: "5" },
            { value: "1" }
          ]
        },
        {
          seriesname: "Stress",
          data: [
            { value: "3" },
            { value: "2" },
            { value: "4" },
            { value: "1" },
            { value: "5" },
            { value: "2" },
            { value: "4" }
          ]
        }
      ]
  };
  //return await fetchJson(url, options, {})
}

export async function login(loginData) {
  const url = `${API_BASE_URL}/login`

  const options = {
    method: "POST",
    body: JSON.stringify({data: loginData }),
    headers,
  };

  // return {
  //   employeeId: 1,
  //   isAdmin: false
  // }
  const response = await fetchJson(url, options, {})
  console.log(`Response: ${JSON.stringify(response)}`)
  return response;

}

export async function submitHealthData(employeeId, healthData) {

  const url = `${API_BASE_URL}/employee/${employeeId}/health`

  const options = {
    method: "PUT",
    body: JSON.stringify({data: healthData}),
    headers,
  };

 //does not need to return anything

}

/* Fake data */
