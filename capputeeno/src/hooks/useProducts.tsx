import { ProductsFetchResponse } from "@/types/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const fetcher = (): AxiosPromise<ProductsFetchResponse> => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "https://localhost:3333";
  return axios.post(apiUrl, {
    query: `
      query {
        allProducts {
          id
          name
          price_in_cents
        }
      }
    `,
  });
};

export function useProducts() {
  const { data } = useQuery({
    queryFn: fetcher,
    queryKey: ["products"],
  });

  return {
    data: data?.data?.data?.allProducts,
  };
}
