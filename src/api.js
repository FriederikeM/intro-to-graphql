import { useEffect, useState } from "react";

/**
 * @typedef {Object} UseQueryReturn
 * @property {boolean} loading - is the query loading?
 * @property {Object} data - the query data
 */

/**
 * @param {string} query - The GraphQL query
 * @param {Object} options - useQuery options
 * @param {string} options.endpoint - The api endpoint to query
 * @param {string} options.query - The GraphQL query
 * @param {Object} options.variables - Variables for the query
 * @returns {UseQueryReturn}
 */
export function useQuery(query, { endpoint, variables = null }) {
  /**
   * State to store the queried data
   */
  const [data, setData] = useState();

  /**
   * State to store the current loading state
   */
  const [loading, setLoading] = useState(false);

  /**
   * Effect executed once endpoint, query or variables change
   */
  useEffect(() => {
    /**
     * Async function to fetch current query,
     * the function captures the current state and props
     */
    async function fetchQuery() {
      // return early if no query or endpoint is present
      if (!query || !endpoint) return;

      // set loading state to true
      setLoading(true);

      // fetch data and convert to json
      const response = await fetch(endpoint, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ query, variables }),
      });
      const responseData = await response.json();

      // set loading state to false
      setLoading(false);

      // set data state to newly fetched data
      setData(responseData?.data);
    }

    // run the function to fetch asynchronously
    fetchQuery();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint, query, JSON.stringify(variables)]);

  return {
    loading,
    data,
  };
}

/**
 * Identity template function to enable syntax highlighting in queries.
 * @param {string[]} strings
 * @returns {string}
 */
export function gql(strings) {
  return strings.join();
}
