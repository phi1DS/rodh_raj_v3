function fetchFromApiPromise(apiUrl) {
    console.log(apiUrl);

    return fetch(apiUrl).then((response) => {
        if (!response.ok) {
            throw new Error("Error - 404 Not Found");
        }

        return response.json();
    });
}

export const fetchFromApi = (apiUrl, callback) => {
    fetchFromApiPromise(apiUrl).then((fetchedData_api) => {
        callback(fetchedData_api);
    });
};
