import { Response } from './Response';

export function parseResponse<T>(response: any): Response<T> {
    return response as Response<T>;
}

const rawResponse = {
    data: { id: 1, name: "John Doe" },
    status: 200,
    message: "Success"
};

const parsedResponse = parseResponse<{ id: number; name: string }>(rawResponse);
console.log(parsedResponse.data);  // Output: { id: 1, name: "John Doe" }
