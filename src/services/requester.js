const baseUrl = "http://localhost:3030"

export const request = async (method, url, data, accessToken) => {

    try {
        let buildRequrest


        let headers = {
            "content-type": "application/json",
        }
        if (accessToken) {
            headers["X-Authorization"] = accessToken
        }

        if (method == "GET") {
            buildRequrest = fetch(`${baseUrl}${url}`, { headers })
        } else {
            buildRequrest = fetch(`${baseUrl}${url}`, {
                method,
                headers,
                body: JSON.stringify(data)
            })
        }


        const response = await buildRequrest
        let res
        
        if (response.status !== 204) {res = await response.json() }

        return res

    } catch (error) {
        console.log(error);
    }

}

export const get = request.bind({}, "GET")
export const put = request.bind({}, "PUT")
export const del = request.bind({}, "DELETE")
export const post = request.bind({}, "POST")
export const logout = request.bind({}, "GET", "/users/logout", "",)
