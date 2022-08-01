const baseUrl = "http://localhost:3030"

export const request = async (method, url, data) => {

    try {
        let buildRequrest
        if (method == "GET") {
            buildRequrest = fetch(`${baseUrl}${url}`)
        } else {
            buildRequrest = fetch(`${baseUrl}${url}`, {
                method,
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
        }


        const response = await buildRequrest
        const res = await response.json()
        return res

    } catch (error) {
        console.log(error);
    }

}

export const get = request.bind({}, "GET")
export const put = request.bind({}, "PUT")
export const del = request.bind({}, "DELETE")
export const post = request.bind({}, "POST")